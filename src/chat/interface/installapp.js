var elements = require("../../gp2/elements.js");

var installAppDialog = elements.getGPId("installAppDialog");
var installAppIconButton = elements.getGPId("installAppIconButton");
var installAppDialogCloseButton = elements.getGPId("installAppDialogCloseButton");
var installAppDialogCloseButtonNoShow = elements.getGPId("installAppDialogCloseButtonNoShow");


var deferredPrompt = null;
var showDialog = true;
if (localStorage.getItem("dontShowInstallApp")) {
    showDialog = false;
}

// quick + dirty check if user is on ChromeOS
function isChromebook() {
  return navigator.userAgent.includes("CrOS");
}

window.addEventListener("beforeinstallprompt", (e) => {
  // Chrome still thinks it knows better — block auto-popup
  e.preventDefault();
  deferredPrompt = e;

  if (showDialog) {
    // wait a moment before showing, so site feels loaded
    setTimeout(() => {
      installAppDialog.hidden = false;
    }, 1500); // 1.5 seconds feels quick but not jumpy
  }
});

var installText = installAppIconButton.textContent;
var allowClicks = true;
installAppIconButton.addEventListener("click", (e) => {
  if (!allowClicks) {
    return;
  }
  if (!deferredPrompt) {
    // install not supported (probably admin-blocked Chromebook)
    installAppIconButton.textContent = "Blocked by your school. RIP.";
    installAppIconButton.disabled = true;
    return;
  }
  if (isChromebook()) {
    installAppIconButton.textContent = "Look top-right → and smash 'Install'";
  } else {
    installAppIconButton.textContent = "Now hit the *real* install button ↑";
  }
  allowClicks = false;
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      installAppIconButton.textContent = "Boom. Icon secured.";
      setTimeout(() => {
        installAppDialog.hidden = true;
        installAppIconButton.textContent = installText;
        allowClicks = true;
      }, 1200);
    } else {
      installAppIconButton.textContent = "You closed it. Ghosted by your own browser.";
      setTimeout(() => {
        installAppIconButton.textContent = installText;
        allowClicks = true;
      },2000);
    }
    deferredPrompt = null;
  }).catch(() => {
    // covers case where .prompt() is blocked silently
    installAppIconButton.textContent = "Yeah… your device said 'no'.";
    setTimeout(() => {
      installAppIconButton.textContent = installText;
      allowClicks = false;
    }, 2500);
  });
});

installAppDialogCloseButton.addEventListener("click", (e) => {
  installAppDialog.hidden = true;
});
installAppDialogCloseButtonNoShow.addEventListener("click", (e) => {
  installAppDialog.hidden = true;
  showDialog = false;
  localStorage.setItem("dontShowInstallApp",true);
  console.log("Fine. We’ll shut up about the icon forever.");
});
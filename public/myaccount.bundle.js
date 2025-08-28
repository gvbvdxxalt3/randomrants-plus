/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6562:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(3358);
__webpack_require__(8563);
var menuBar = __webpack_require__(6313); //Menu bar.
var elements = __webpack_require__(7255); //Based on gvbvdxx-pack-2's element module.
var accountHelper = __webpack_require__(4592);
var dialog = __webpack_require__(8149);

function compressImage(oldsrc) {
  return new Promise((resolve, reject) => {
    const oldImg = document.createElement("img");
    oldImg.src = oldsrc;
    oldImg.onload = function () {
      try {
        const maxSize = 96;
        const cvs = document.createElement("canvas");
        const ctx = cvs.getContext("2d");

        // Calculate new dimensions preserving aspect ratio
        let newWidth, newHeight;
        const aspectRatio = oldImg.width / oldImg.height;

        if (aspectRatio > 1) {
          // Image is wider than tall
          newWidth = maxSize;
          newHeight = maxSize / aspectRatio;
        } else {
          // Image is taller than wide or square
          newHeight = maxSize;
          newWidth = maxSize * aspectRatio;
        }

        cvs.width = maxSize;
        cvs.height = maxSize;

        // Optional: clear canvas and fill with transparent background
        ctx.clearRect(0, 0, cvs.width, cvs.height);

        // Draw the resized image centered on the canvas
        const xOffset = (maxSize - newWidth) / 2;
        const yOffset = (maxSize - newHeight) / 2;
        ctx.drawImage(oldImg, xOffset, yOffset, newWidth, newHeight);

        // Get compressed image data URL as WebP with 70% quality
        const dataURL = cvs.toDataURL("image/webp", 0.7);

        // Clean up
        cvs.width = 1;
        cvs.height = 1;
        cvs.remove();

        resolve(dataURL);
      } catch (e) {
        reject("Got strange error when trying to resize image: " + e);
      }
    };
    oldImg.onerror = function () {
      reject(
        "Unable to load image format, browser may not support this file format. (Stop trying to break the system, its not helpful.)",
      );
    };
  });
}

(async function () {
  try {
    var session = await accountHelper.checkSessionCookie();

    if (session) {
      var userColor = session.color || "#000000";
      var elementJSON = [
        {
          element: "div",
          className: "centeredDialog",
          children: [
            {
              element: "div",
              style: {
                display: "flex",
              },
              children: [
                {
                  element: "img",
                  style: {
                    outline: "none",
                    borderRadius: "64px",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    borderColor: "#7d7d7d",
                    backgroundColor: "#969696",
                    imageRendering: "pixelated",
                    top: "0px",
                    width: "64px",
                    height: "64px",
                  },
                  gid: "profilePicture_account",
                },
                {
                  element: "div",
                  style: {
                    display: "flex",
                    flexDirection: "column",
                  },
                  children: [
                    {
                      element: "input",
                      style: {
                        alignContent: "center",
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: userColor,
                        border: "none",
                        background: "none",
                      },
                      gid: "displayNameInput",
                      value: session.displayName,
                    },
                    {
                      element: "span",
                      style: {
                        alignContent: "center",
                        fontSize: "16px",
                        color: userColor,
                        padding: "3px 3px",
                      },
                      gid: "usernameSpan",
                      textContent: session.username,
                    },
                  ],
                },
                {
                  element: "div",
                  style: {
                    width: "10px",
                  },
                },
                {
                  element: "div",
                  style: {
                    alignContent: "center",
                  },
                  title:
                    "Click this to change your usernames color, appears in chat as well!",
                  children: [
                    {
                      element: "input",
                      type: "color",
                      value: userColor,
                      gid: "username_color_input",
                    },
                  ],
                },
              ],
            },
            {
              element: "hr",
            },
            {
              element: "span",
              className: "headerText",
              textContent: "Your Random Rants + account",
            },
            { element: "br" },
            {
              element: "div",
              className: "button",
              gid: "changeDisplayNameButton",
              children: [
                {
                  element: "img",
                  src: "images/text.svg",
                  style: {
                    height: "17px",
                  },
                },
                {
                  element: "span",
                  textContent: "Change display name",
                },
              ],
            },
            {
              element: "div",
              style: {
                display: "flex",
              },
              children: [
                {
                  element: "div",
                  className: "button",
                  gid: "uploadPFP",
                  style: {
                    flexGrow: "1",
                  },
                  children: [
                    {
                      element: "img",
                      src: "images/profile.svg",
                      style: {
                        height: "17px",
                      },
                    },
                    {
                      element: "span",
                      textContent: "Upload profile picture",
                    },
                  ],
                },
                {
                  element: "div",
                  className: "button",
                  style: {
                    width: "fit-content",
                  },
                  gid: "resetPFP",
                  children: [
                    {
                      element: "img",
                      src: "images/reload.svg",
                      style: {
                        height: "17px",
                      },
                    },
                    {
                      element: "span",
                      textContent: "Reset",
                    },
                  ],
                },
              ],
            },
            {
              element: "div",
              className: "button",
              eventListeners: [
                {
                  event: "click",
                  func: function () {
                    var usernameColorInput = elements.getGPId(
                      "username_color_input",
                    );
                    usernameColorInput.click();
                  },
                },
              ],
              children: [
                {
                  element: "img",
                  src: "images/brush.svg",
                  style: {
                    height: "17px",
                  },
                },
                {
                  element: "span",
                  textContent: "Change username color",
                },
              ],
            },
            {
              element: "div",
              className: "button",
              gid: "changePasswordButton",
              children: [
                {
                  element: "img",
                  src: "images/key.svg",
                  style: {
                    height: "17px",
                  },
                },
                {
                  element: "span",
                  textContent: "Change password",
                },
              ],
            },
            {
              element: "div",
              className: "button",
              gid: "signOutButton",
              children: [
                {
                  element: "img",
                  src: "images/signout.svg",
                  style: {
                    height: "17px",
                  },
                },
                {
                  element: "span",
                  textContent: "Sign out",
                },
              ],
            },
          ],
        },
      ];

      var pageElements = elements.createElementsFromJSON(elementJSON);
      elements.appendElements(elements.body, pageElements);

      var queryNumber = 0;
      var pfp = elements.getGPId("profilePicture_account");
      var usernameColorInput = elements.getGPId("username_color_input");
      var usernameSpan = elements.getGPId("usernameSpan");
      var changeDisplayNameButton = elements.getGPId("changeDisplayNameButton");
      var displayNameInput = elements.getGPId("displayNameInput");
      var changePasswordButton = elements.getGPId("changePasswordButton");

      async function loadImage(imageFile) {
        var imgurl = accountHelper.getProfilePictureURL(session.username);
        try {
          for (var i = 0; i < 3; i++) {
            await fetch(imgurl, { cache: "reload", mode: "no-cors" });
          }
        } catch (e) {}
        if (imageFile) {
          pfp.src = imageFile;
        } else {
          pfp.src = imgurl;
        }
      }
      loadImage();

      var signOutButton = elements.getGPId("signOutButton");

      signOutButton.onclick = function () {
        accountHelper.logoutOfAccount();
        window.location.href = "/";
      };

      var uploadPFP = elements.getGPId("uploadPFP");
      uploadPFP.onclick = function () {
        var input = document.createElement("input");
        input.accept = ".png, .jpeg, .bmp, .jpg, .ico, .webm";
        input.type = "file";
        input.onchange = function () {
          var file = input.files[0];
          if (file) {
            var reader = new FileReader();
            reader.onload = async function () {
              try {
                try {
                  var newImage = await compressImage(reader.result);
                } catch (e) {
                  dialog.alert(
                    "Image resize hit a snag.\nMaybe try a different file or smaller image?\nTechnical error: " +
                      e,
                  );
                  return;
                }

                await fetch(
                  accountHelper.getServerURL() + "/account/picture/",
                  { method: "POST", body: newImage.split(",").pop() },
                );
                loadImage(newImage);
              } catch (e) {
                dialog.alert(
                  `Uh-oh, couldn’t upload that pic.\nTry again when you’re ready to flex a new look.\nTechnical error: ${e}`,
                );
              }
            };
            reader.readAsDataURL(file);
          }
        };
        input.click();
      };
      var resetPFP = elements.getGPId("resetPFP");
      resetPFP.onclick = async function () {
        resetPFP.disabled = true;

        var accepted = await dialog.confirm(
          "Ready to reset your profile picture?\nIt’s gone for good once you do it — no take-backs!",
        );

        if (!accepted) {
          return;
        }

        try {
          await fetch(accountHelper.getServerURL() + "/account/picture/", {
            method: "POST",
            body: "",
          });
          loadImage();
        } catch (e) {
          dialog.alert("Error deleting profile picture.");
        }

        resetPFP.disabled = false;
      };

      usernameColorInput.onchange = async function () {
        userColor = usernameColorInput.value;
        displayNameInput.style.color = userColor;
        usernameSpan.style.color = userColor;
        await fetch(accountHelper.getServerURL() + "/account/setcolor/", {
          method: "POST",
          body: JSON.stringify({
            color: usernameColorInput.value,
          }),
        });
      };

      changeDisplayNameButton.onclick = async function () {
        displayNameInput.focus();
      };

      displayNameInput.style.cursor = "pointer";
      displayNameInput.onfocus = async function () {
        displayNameInput.style.cursor = "auto";
      };
      displayNameInput.onblur = async function () {
        displayNameInput.style.cursor = "pointer";
      };

      displayNameInput.onchange = async function () {
        displayNameInput.disabled = true;
        var displayName = displayNameInput.value;
        var response = await fetch(
          accountHelper.getServerURL() + "/account/displayname/",
          {
            method: "POST",
            body: JSON.stringify({
              displayName,
            }),
          },
        );
        if (!response.ok) {
          dialog.alert(
            "That name’s a bit too wild or long. Try something shorter or cooler.",
          );
          displayNameInput.disabled = false;
          return;
        }
        displayNameInput.value = displayName;
        displayNameInput.disabled = false;
      };

      var confirmPasswordMessage =
        "Changing your password?\nDon’t forget it — no way back if you lose it!";

      changePasswordButton.onclick = async function () {
        changePasswordButton.disabled = true;
        if (await dialog.confirm(confirmPasswordMessage)) {
          var newPassword = await dialog.passwordPrompt(
            "Drop your new password here.\nMake it something fresh and easy for you to remember.",
          );
          if (newPassword) {
            var response = await fetch(
              accountHelper.getServerURL() + "/account/passwordchange/",
              {
                method: "POST",
                body: JSON.stringify({
                  newPassword,
                }),
              },
            );
            if (!response.ok) {
              dialog.alert(
                "Uh-oh, something went wrong changing your password. Give it another shot?",
              );
              return;
            }
            dialog.alert(
              "Password changed! All other devices got the boot until you sign back in.",
            );
          } else {
            dialog.alert("Password change canceled. No worries!");
          }
        }
        changePasswordButton.disabled = false;
      };
    } else {
      var elementJSON = [
        {
          element: "div",
          className: "centeredDialog",
          children: [
            {
              element: "span",
              className: "headerText",
              textContent: "Error with your account",
            },
            {
              element: "br",
            },
            {
              element: "span",
              textContent:
                "You are not logged in, or you where logged out of your account. If you get this error, someone might have changed your user information. This can also happen if you change your user info on another device.",
            },
          ],
        },
      ];

      var pageElements = elements.createElementsFromJSON(elementJSON);
      elements.appendElements(elements.body, pageElements);
    }
  } catch (e) {
    dialog.alert(e);
  }
})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			930: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrandomrants_plus"] = self["webpackChunkrandomrants_plus"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [804], () => (__webpack_require__(6562)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
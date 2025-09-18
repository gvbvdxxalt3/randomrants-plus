var loader = require("./loadingscreen.js");

var isLoading = false;
var loadingScreen = loader.doLoadingScreen();
loadingScreen.remove(); //Do loading screen will append right to body when called, so just remove it for now.

navigation.addEventListener("navigate", (event) => {
  var destinationUrl = event.destination.url;
  var navigationType = event.navigationType;

  if (!isLoading) {
    isLoading = true;
    document.body.append(loadingScreen); //Now truly show it.
  }
});

navigation.addEventListener("navigatesuccess", (event) => {
  if (isLoading) {
    isLoading = false;
    loadingScreen.remove();
  }
});

navigation.addEventListener("navigateerror", (event) => {
  if (isLoading) {
    isLoading = false;
    loadingScreen.remove();
  }
});

var elements = require("../gp2/elements.js");
var dialog = require("../dialogs.js");

function doLoadingScreen() {
  var div = document.createElement("div");
  var stopAnimating = null;

  var dom = elements.createElementsFromJSON([
    //Background
    {
      element: "div",
      className: "dialogBackground",
    },
    //Dialog box
    {
      element: "div",
      className: "centerMiddle",
      children: [
        {
          element: "div",
          className: "loader",
        },
      ],
    },
  ]);
  elements.appendElements(div, dom);
  document.body.append(div);

  return {
    remove: function () {
      div.remove();
    },
  };
}

module.exports = {
  doLoadingScreen,
};

var elements = require("./gp2/elements.js");
var fontSelectStylesheet = require("./fontselect.css");
var fontList = require("./fontlist.js");

var fontSelector = {
  ask: function () {
    return new Promise((accept, reject) => {
      var dialog = elements.appendElementsFromJSON(document.body, [
        {
          element: "div",
          className: "fontSelectDialog",
          gid: "fontSelectDialog",
          children: [
            {
              element: "style",
              innerHTML: fontSelectStylesheet,
            },
            {
              element: "div",
              className: "fontSelectDialogBackground",
            },
            {
              element: "div",
              className: "fontSelectDialogBox",
              children: [
                {
                  element: "span",
                  className: "fontSelectHeader",
                  textContent: "Choose a font",
                },
                {
                  element: "br",
                },
                {
                  element: "span",
                  style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                  },
                },
                {
                  element: "br",
                },
                {
                  element: "button",
                  className: "fontSelectButton",
                  textContent: "OK",
                  gid: "fontSelectOkButton",
                },
                {
                  element: "button",
                  className: "fontSelectButton",
                  textContent: "Cancel",
                  gid: "fontSelectCancelButton",
                },
              ],
            },
          ],
        },
      ])[0];
    });
  },
};

module.exports = fontSelector;

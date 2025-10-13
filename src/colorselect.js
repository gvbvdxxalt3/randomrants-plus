var elements = require("./gp2/elements.js");
var colorSelectStylesheet = require("./colorselect.css");
var {
  hslToRgb,
  rgbToHsl,
  rgbToHex,
  hexToRgb,
  hexToHsl,
  hslToHex,
  getRainbowHexes,
} = require("./colorutil.js");

elements.appendElementsFromJSON(document.body, [
  {
    element: "style",
    innerHTML: colorSelectStylesheet,
  },
]);

var colorSelector = {
  ask: function () {
    return new Promise((accept, reject) => {
      var setColorDiv = function () {};
      var dialog = elements.appendElementsFromJSON(document.body, [
        {
          element: "div",
          className: "colorSelectDialog",
          gid: "colorSelectDialog",
          children: [
            {
              element: "div",
              className: "colorSelectDialogBackground",
            },
            {
              element: "div",
              className: "colorSelectDialogBox",
              children: [
                {
                  element: "span",
                  className: "colorSelectHeader",
                  textContent: "Choose a color",
                },
                {
                  element: "br",
                },
                {
                  element: "div",
                  style: {
                    display: "flex",
                  },
                  children: [
                    {
                      element: "div",
                      className: "colorSelectPreviewBox",
                      gid: "colorSelectPreview",
                      textContent: "Preview",
                    },
                    {
                      element: "div",
                      style: {
                        display: "block",
                      },
                      children: [
                        {
                          element: "input",
                          type: "color",
                          gid: "colorSelectInput",
                          style: {
                            width: "100%",
                          },
                        },
                        { element: "br" },
                        {
                          element: "span",
                          className: "colorSelectLabel",
                          textContent: "Hue: ",
                        },
                        {
                          element: "input",
                          gid: "colorSelectHueInput",
                          type: "range",
                          min: 0,
                          max: 360,
                          value: 0,
                        },
                        {
                          element: "br",
                        },
                        {
                          element: "span",
                          className: "colorSelectLabel",
                          textContent: "Saturation: ",
                        },
                        {
                          element: "input",
                          gid: "colorSelectSaturationInput",
                          type: "range",
                          min: 0,
                          max: 100,
                          value: 100,
                        },
                        {
                          element: "br",
                        },
                        {
                          element: "span",
                          className: "colorSelectLabel",
                          textContent: "Lightness: ",
                        },
                        {
                          element: "input",
                          gid: "colorSelectLightnessInput",
                          type: "range",
                          min: 0,
                          max: 100,
                          value: 50,
                        },
                        {
                          element: "br",
                        },
                        {
                          element: "span",
                          className: "colorSelectLabel",
                          textContent: "Red: ",
                        },
                        {
                          element: "input",
                          gid: "colorSelectRedInput",
                          type: "range",
                          min: 0,
                          max: 255,
                          value: 0,
                        },
                        {
                          element: "br",
                        },
                        {
                          element: "span",
                          className: "colorSelectLabel",
                          textContent: "Green: ",
                        },
                        {
                          element: "input",
                          gid: "colorSelectGreenInput",
                          type: "range",
                          min: 0,
                          max: 255,
                          value: 0,
                        },
                        {
                          element: "br",
                        },
                        {
                          element: "span",
                          className: "colorSelectLabel",
                          textContent: "Blue: ",
                        },
                        {
                          element: "input",
                          gid: "colorSelectBlueInput",
                          type: "range",
                          min: 0,
                          max: 255,
                          value: 0,
                        },
                        {
                          element: "br",
                        },
                      ],
                    },
                  ],
                },
                {
                  element: "br",
                },
                {
                  element: "div",
                  className: "colorSelectPickRainbowContainer2",
                  children: [
                    {
                      element: "div",
                      className: "colorSelectPickRainbowContainer",
                      children: getRainbowHexes(20).map((hex) => {
                        return {
                          element: "div",
                          className: "colorSelectColorDiv",
                          style: {
                            background: hex,
                          },
                          backgroundHex: hex,
                          eventListeners: [
                            {
                              event: "click",
                              func: function () {
                                setColorDiv(this);
                              },
                            },
                          ],
                        };
                      }),
                    },
                  ],
                },
                {
                  element: "br",
                },
                {
                  element: "button",
                  className: "colorSelectButton",
                  textContent: "OK",
                  gid: "colorSelectOkButton",
                },
                {
                  element: "button",
                  className: "colorSelectButton",
                  textContent: "Cancel",
                  gid: "colorSelectCancelButton",
                },
              ],
            },
          ],
        },
      ])[0];

      var previewDiv = elements.getGPId("colorSelectPreview");

      var hueInput = elements.getGPId("colorSelectHueInput");
      var saturationInput = elements.getGPId("colorSelectSaturationInput");
      var lightnessInput = elements.getGPId("colorSelectLightnessInput");

      var redInput = elements.getGPId("colorSelectRedInput");
      var greenInput = elements.getGPId("colorSelectGreenInput");
      var blueInput = elements.getGPId("colorSelectBlueInput");

      var colorInput = elements.getGPId("colorSelectInput");

      var currentHSL = { h: 0, s: 0, l: 0 };

      function updateHSL() {
        currentHSL = {
          h: +hueInput.value,
          s: +saturationInput.value,
          l: +lightnessInput.value,
        };
        var rgb = hslToRgb(currentHSL.h, currentHSL.s, currentHSL.l);
        var hex = hslToHex(currentHSL.h, currentHSL.s, currentHSL.l);
        previewDiv.style.backgroundColor = hex;
        colorInput.value = hex;
        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;
      }
      function updateHSLRGB() {
        var hsl = rgbToHsl(
          +redInput.value,
          +greenInput.value,
          +blueInput.value
        );
        hueInput.value = hsl.h;
        saturationInput.value = hsl.s;
        lightnessInput.value = hsl.l;
        updateHSL();
      }
      function setHSL(h, s, l) {
        hueInput.value = h;
        saturationInput.value = s;
        lightnessInput.value = l;
        updateHSL();
      }
      function getHex() {
        return hslToHex(currentHSL.h, currentHSL.s, currentHSL.l);
      }

      updateHSL();

      hueInput.addEventListener("input", updateHSL);
      saturationInput.addEventListener("input", updateHSL);
      lightnessInput.addEventListener("input", updateHSL);

      redInput.addEventListener("input", updateHSLRGB);
      greenInput.addEventListener("input", updateHSLRGB);
      blueInput.addEventListener("input", updateHSLRGB);

      colorInput.addEventListener("input", () => {
        var hsl = hexToHsl(colorInput.value);
        setHSL(hsl.h, hsl.s, hsl.l);
      });

      setColorDiv = function (elm) {
        var hsl = hexToHsl(elm.getAttribute("backgroundHex"));
        setHSL(hsl.h, hsl.s, hsl.l);
      };

      var okButton = elements.getGPId("colorSelectOkButton");
      var cancelButton = elements.getGPId("colorSelectCancelButton");
      var colorSelectDialog = elements.getGPId("colorSelectDialog");

      okButton.addEventListener("click", () => {
        colorSelectDialog.remove();
        accept(getHex());
      });

      cancelButton.addEventListener("click", () => {
        colorSelectDialog.remove();
        accept(null);
      });
    });
  },
};

module.exports = colorSelector;

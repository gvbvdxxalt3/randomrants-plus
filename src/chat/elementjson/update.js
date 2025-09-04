module.exports = {
  element: "div",
  style: {
    zIndex: 10,
  },
  gid: "rrUpdateScreen",
  hidden: true,
  children: [
    {
      element: "div",
      className: "dialogBackground",
    },
    {
      element: "div",
      className: "whiteBox centerMiddle popupDialogAnimation",
      children: [
        {
          element: "span",
          style: {
            fontSize: "30px",
            fontWeight: "bold",
          },
          textContent: "Chaos Update Incoming!",
        },
        {
          element: "div",
          className: "sep1",
        },
        {
          element: "div",
          style: {
            display: "flex",
          },
          children: [
            {
              element: "img",
              src: "images/updatebox.svg",
              style: {
                height: "100%",
                padding: "10px 10px",
              },
            },
            {
              element: "div",
              style: {
                padding: "10px 10px",
              },
              children: [
                {
                  element: "span",
                  textContent:
                    "Yo! Fresh Random Rants + updates just dropped. Reload now to catch all the new madness and maybe some sneaky bugs.",
                },
                {
                  element: "br",
                },
                {
                  element: "span",
                  textContent:
                    "If this keeps showing up, we’re probably still syncing stuff or just having too much fun tweaking chaos.",
                },
                {
                  element: "br",
                },
                {
                  element: "div",
                  style: {
                    fontWeight: "bold",
                  },
                  children: [
                    {
                      element: "span",
                      textContent: "This update hit the scene ",
                    },
                    {
                      element: "span",
                      gid: "updateVersionTime", //Inserts text like "1 minute".
                    },
                    {
                      element: "span",
                      textContent: " ago.",
                    },
                  ],
                },
                {
                  element: "br",
                },
                {
                  element: "div",
                  className: "divButton roundborder",
                  textContent: "Reload and vibe",
                  title: "Reload and vibe",
                  eventListeners: [
                    {
                      event: "click",
                      func: function () {
                        this.textContent = "Reloading… 🔃";
                        this.disabled = true;
                        window.location.reload();
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

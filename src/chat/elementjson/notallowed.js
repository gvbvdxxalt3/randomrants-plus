module.exports = {
  element: "div",
  gid: "notAllowedError",
  hidden: true,
  style: {
    zIndex: 10,
  },
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
          textContent: "⛔ You’re not on the allow list",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "This room has its own VIP-only list, and your username isn’t on it.",
        },
        {
          element: "br",
        },
        {
          element: "div",
          className: "divButton roundborder",
          textContent: "Find other rooms 🔍",
          eventListeners: [
            {
              event: "click",
              func: function () {
                window.location.href = "/chat";
              }
            }
          ]
        }
      ],
    },
  ],
};

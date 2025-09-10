module.exports = {
  element: "div",
  gid: "guestErrorScreen",
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
          textContent: "🚪 No Guests Allowed 🚪",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "This room kicked guest mode out of the chat. You’ll need a Random Rants + account to sneak in.",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "Why though? Could be because:",
        },
        {
          element: "ul",
          children: [
            {
              element: "li",
              textContent: "The room owner flipped the big red switch: 🚫 No Guests Mode 🚫"
            },
            {
              element: "li",
              textContent: "The room owner locked it down to their exclusive chaos club 🔒",
            }
          ]
        },
        {
          element: "br",
        },
        {
          element: "div",
          className: "divButton roundborder",
          textContent: "Sign in",
          eventListeners: [
            {
              event: "click",
              func: function () {
                window.location.href =
                "/signin?href=" +
                encodeURIComponent(
                  window.location.pathname + window.location.hash,
                );
              }
            }
          ]
        },
        {
          element: "div",
          className: "divButton roundborder",
          textContent: "Sign up",
          eventListeners: [
            {
              event: "click",
              func: function () {
                window.location.href =
                "/signup?href=" +
                encodeURIComponent(
                  window.location.pathname + window.location.hash,
                );
              }
            }
          ]
        },
      ],
    },
  ],
};

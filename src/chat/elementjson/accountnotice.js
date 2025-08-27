module.exports = {
  element: "div",
  gid: "noAccountNoticeDialog",
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
            fontWeight: "bold",
            fontSize: "30px",
          },
          textContent: "Yo! Wanna unlock the true chaos?"
        },
        {
          element: "div",
          className: "sep1"
        },
        {
          element: "span",
          textContent: "Sign in if you're already part of the crew. New here? Smash sign up (it's free & easy)."
        },
        {
          element: "br"
        },
        {
          element: "span",
          style: {
            fontSize: "13px"
          },
          textContent: "(No email. No phone. No nonsense.)"
        },
        {
          element: "br"
        },
        {
          element: "br"
        },
        {
          element: "span",
          textContent: "What do you get? Straight-up perks:"
        },
        
        {
          element: "ul",
          children: [
            {
              element: "li",
              textContent:
                'Auto-save rooms you join — bounce back anytime, no stress.',
            },
            {
              element: "li",
              textContent:
                'Get private DMs from your homies (or chaos allies).',
            },
            {
              element: "li",
              textContent:
                'Drip out your profile with custom pics, names, and wild name colors.',
            },
            {
              element: "li",
              textContent:
                'Room owners can pass you the AUX (admin powers, baby).',
            },
            {
              element: "li",
              textContent:
                'Build your own chaos rooms. Hand out admin like candy.',
            },
          ]
        },

        {
          element: "div",
          className: "sep1"
        },

        {
          element: "div",
          className: "divButton roundborder",
          textContent: "Nah, let me vibe as guest",
          gid: "continueAsGuestButton"
        },
        {
          element: "div",
          style: {
            display: "flex"
          },
          children: [
            {
              element: "div",
              className: "divButton roundborder",
              textContent: "Sign in",
              eventListeners: [
                {
                  event: "click",
                  func: function () {
                    window.location.href = "/signin";
                  }
                }
              ]
            },
            {element: "div",style: {width: "2px"}},
            {
              element: "div",
              className: "divButton roundborder",
              textContent: "Sign up",
              eventListeners: [
                {
                  event: "click",
                  func: function () {
                    window.location.href = "/signup";
                  }
                }
              ]
            }
          ]
        }
      ],
    },
  ],
};

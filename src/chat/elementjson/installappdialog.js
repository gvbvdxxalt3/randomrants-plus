var isWindows = navigator.userAgent.includes("Windows");

module.exports = {
    element: "div",
    gid: "installAppDialog",
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
            textContent: "Wanna pin RR+ to your life?",
          },
          {
            element: "div",
            className: "sep1",
          },
          {
            element: "p",
            textContent:
              "Install the icon so Random Rants + lives on your home screen like an intrusive roommate. One tap away from chaos, every time.",
          },
          ...(isWindows
            ? [
                {
                  element: "p",
                  style: { fontSize: "12px", opacity: 0.7 },
                  textContent: "Random Rants + may get a Windows app… someday, if the stars align or pigs fly. Translation: don’t hold your breath.",
                },
              ]
            : []),
          {
            element: "button",
            className: "roundborder divButton",
            textContent: "Yes, give me the shiny icon",
            gid: "installAppIconButton"
          },
          {
            element: "div",
            className: "sep1",
          },
          {
            element: "div",
            className: "divButton",
            textContent: "Nah, I’ll keep suffering",
            gid: "installAppDialogCloseButton"
          },
          {
            element: "div",
            className: "divButton",
            textContent: "Never ask me again (seriously)",
            gid: "installAppDialogCloseButtonNoShow"
          },
        ],
      },
    ],
  };
  
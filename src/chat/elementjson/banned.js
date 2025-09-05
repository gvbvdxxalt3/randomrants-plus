module.exports = {
  element: "div",
  gid: "banRoomError",
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
          textContent: "🚫 Blocked from this room 🚫",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "This room’s ban list has your name on it. That means you can’t join—or stay—in here right now.",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "If it’s a mistake, you’ll have to ask the room owner (or whoever holds the ban hammer) to undo it.",
        },
        {
          element: "br",
        },
        {
          element: "div",
          className: "divButton roundborder",
          textContent: "Find another room 🔍",
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

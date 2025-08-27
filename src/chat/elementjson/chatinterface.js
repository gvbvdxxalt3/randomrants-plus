function surroundFlexboxDiv(c) {
  return {
    element: "div",
    style: { display: "flex" },
    children: c,
  };
}

var chatInputPlaceholders = [
  "Type your rant message here...",
  "Write a quick rant to send...",
  "Enter your chaotic chat message...",
  "What’s your random thought? Type here.",
  "Say something loud and proud...",
  "Write your message and hit Enter.",
  "Type your next wild rant here.",
  "Send your random thoughts now.",
  "Write something for the chat...",
  "Type your text and press send.",
  "Write your message — no filters needed.",
  "Tell us what’s on your mind here.",
  "Type your rant and make it spicy.",
  "Write a message everyone will regret reading.",
  "Enter your unfiltered chat message.",
  "Say it loud: type your message here.",
  "Write your next chaotic message.",
  "Type here to add to the madness.",
  "Share your rant in the chat box.",
  "Enter your message and release the chaos.",
  "Type your randomest rant here.",
];

function returnRandomValueFromArray(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

var leftSide = {
  element: "div",
  className: "chatInterfaceLeft",
  gid: "sharedAppInterface",
  children: [
    {
      element: "div",
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
      },
      children: [
        {
          element: "div",
          className: "leftSideCameraContent",
          gid: "camerasVideosDiv",
          children: [],
        },
        {
          element: "div",
          className: "leftSideOtherContent",
          children: [
            {
              element: "div",
              className: "leftSideOtherContentContainer",
              children: [
                {
                  element: "div",
                  className: "middleChatDiv",
                  children: [
                    {
                      element: "div",
                      className: "divButton roundborder",
                      gid: "chooseMediaButton",
                      children: [
                        surroundFlexboxDiv([
                          {
                            element: "img",
                            src: "images/play.svg",
                            style: { height: "25px" },
                          },
                          { element: "span", textContent: "Choose media" },
                        ]),
                      ],
                    },
                  ],
                },
                {
                  element: "div",
                  gid: "mediaContentDiv",
                  hidden: true,
                  className: "mediaContentDiv",
                },
              ],
            },
          ],
        },

        {
          element: "div",
          gid: "microphoneUsageTexts",
          style: {
            fontWeight: "bold",
            position: "absolute",
            bottom: "0px",
            right: "0px",
            display: "flex",
            flexDirection: "column",
          },
        },
      ],
    },
  ],
};
var rightSide = {
  element: "div",
  className: "chatInterfaceRight",
  gid: "chatInterfaceRight",
  children: [
    {
      element: "div",
      className: "chatInterfaceButtonBox",
      gid: "userButtonBox",
      children: [
        {
          element: "div",
          style: {
            display: "flex",
            flexGrow: "1",
            width: "100%"
          },
          children: [
            {
              element: "button",
              className: "roundborder chatInterfaceButton",
              gid: "toggleCameraButton",
              title: "Toggle camera",
            },
            {
              element: "button",
              className: "roundborder chatInterfaceButton",
              gid: "toggleMicrophoneButton",
              title: "Toggle microphone",
            },
          ]
        },
        {
          element: "button",
          className: "roundborder chatInterfaceButton",
          gid: "showSoundboardButton",
          children: [
            {
              element: "img",
              src: "images/audio.svg"
            },
            {
              element: "span",
              textContent: "Soundboard",
            },
          ],
        },
        {
          element: "button",
          className: "roundborder chatInterfaceButton",
          gid: "showRoomSettingsButton",
          hidden: true,
          children: [
            {
              element: "img",
              src: "images/settings.svg",
            },
            {
              element: "span",
              textContent: "Room Settings",
            },
          ],
        },
        {
          element: "button",
          className: "roundborder chatInterfaceButton",
          gid: "toggleMessageAndOnlineView",
        }
      ],
    },
    {
      element: "div",
      className: "chatInterfaceMessagesBox",
      gid: "userMessagesBox",
      children: [
        {
          element: "div",
          children: [
            {
              element: "span",
              style: {
                fontWeight: "bold",
              },
              textContent: "Messages:",
            },
          ],
        },
        { element: "div", gid: "userMessagesContainer" },
      ],
    },
    {
      element: "div",
      children: [
        {
          element: "div",
          gid: "typingNoticeDiv",
          className: "typingNoticeDiv",
          children: [],
        },
      ],
    },
    surroundFlexboxDiv([
      {
        element: "input",
        type: "text",
        className: "textBoxColors chatInterfaceMessageTextBox roundborder",
        gid: "messageInputBox",
        placeholder: returnRandomValueFromArray(chatInputPlaceholders),
        eventListeners: [
          {
            event: "input",
            func: function () {
              this.placeholder = returnRandomValueFromArray(
                chatInputPlaceholders,
              );
            },
          },
        ],
      },
      {
        //Add a bit of spacing between the text box and the send button
        element: "div",
        style: {
          width: "2px",
        },
      },
      {
        element: "div",
        className: "chatInterfaceMessageSendButton roundborder",
        textContent: "Send",
        gid: "messageSendButton",
      },
      {
        //Add a bit of spacing between the text box and the send button
        element: "div",
        style: {
          width: "2px",
        },
      },
      {
        element: "div",
        className: "chatInterfaceMessageSendButton roundborder",
        children: [
          {
            element: "img",
            src: "images/file.svg",
            style: {
              height: "25px",
            },
          },
        ],
        gid: "messageAttachFilesButton",
      },
    ]),
    {
      element: "div",
      className: "chatInterfaceOnlineViewBox",
      hidden: true,
      gid: "userOnlineViewBox",
      children: [
        {
          element: "span",
          style: { fontWeight: "bold", fontSize: "15px" },
          textContent: "Users online in this room:",
        },
        { element: "hr" },
        { element: "div", gid: "usersOnlineContainer" },
        { element: "hr" },
        {
          element: "span",
          style: { fontWeight: "bold", fontSize: "15px" },
          textContent: "Users with admin/ownership:",
        },
        {
          element: "br",
        },
        {
          element: "div",
          style: {
            height: "23px",
          },
          className: "divButton roundborder",
          title: "Click to add ownership via a username.",
          gid: "addOwnershipUsernameButton",
          children: [
            {
              element: "img",
              style: {
                height: "100%",
              },
              src: "images/promote.svg",
            },
            {
              element: "span",
              textContent: "Promote from username",
            },
          ],
        },
        { element: "hr" },
        { element: "div", gid: "ownershipUsersContainer" },
      ],
    },
  ],
};

module.exports = {
  element: "div",
  gid: "chatInterface",
  hidden: true,
  children: [leftSide, rightSide, require("./noaudio.js")],
};

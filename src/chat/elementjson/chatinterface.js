function surroundFlexboxDiv(c) {
  return {
    element: "div",
    style: { display: "flex" },
    children: c,
  };
}

var chatInputPlaceholders = [
  "Enter your random rant here",
  "Type a rant to tell us",
  "Write a random rant here",
  "Tap or click and type your random rant here",
  "Write your random rants here",
  "Be creative, write a rant here",
  "Write random rants here",
  "Write a message here",
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
            width: "100%",
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
          ],
        },
        {
          element: "button",
          className: "roundborder chatInterfaceButton",
          gid: "showSoundboardButton",
          children: [
            {
              element: "img",
              src: "images/audio.svg",
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
          element: "div",
          style: {
            display: "flex",
            flexGrow: "1",
            width: "100%",
          },
          children: [
            {
              element: "button",
              className: "roundborder chatInterfaceButton",
              gid: "toggleMessageAndOnlineView",
            },
          ],
        },
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
                chatInputPlaceholders
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
          element: "button",
          className: "roundborder chatInterfaceButton",
          gid: "showRoomSettingsButton2",
          hidden: true,
          children: [
            {
              element: "img",
              src: "images/settings.svg",
            },
            {
              element: "span",
              textContent: "More permission settings",
            },
          ],
        },
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

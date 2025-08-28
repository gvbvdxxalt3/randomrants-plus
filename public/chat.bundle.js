/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7980:
/***/ ((module) => {

module.exports = ":root {\n  --doNotTouchThisEver: 100%; /* but... of what?? */\n\n  --bg-color: #b8b8b8;\n  --header-color: #b8b8b8;\n\n  --main-font: arial;\n\n  --main-text-color: black;\n\n  --input-bg-color: #363636;\n  --input-text-color: #c9c9c9;\n  --input-border-color: #1f1f1f;\n  --input-border-width: 3px;\n\n  --messages-bg-color: #919191;\n  --messages-text-color: #fcfcfc;\n\n  --profile-background: #969696;\n  --profile-border-color: #7d7d7d;\n\n  --separator-color: #696969;\n\n  --textbox-bg-color: #e0e0e0;\n  --textbox-border-color: #696969;\n\n  --button-bg-color: #e0e0e0;\n  --button-text-color: #696969;\n  --button-hover-bg-color: #f2f2f2;\n  --button-disabled-color: #5e5e5e;\n\n  --loading-spinner-color: #878787;\n\n  --border-radius: 3px;\n  --profile-border-radius: 64px;\n\n  --spinner-rotation-seconds: 1.34s;\n\n  --popup-box-bg-color: white;\n  --popup-box-text-color: black;\n\n  --link-text-color: #4287f5;\n\n  --main-font-size: 15px;\n\n  --selected-emoji-popup-dialog-bg-color: #15e64d;\n  --selected-emoji-popup-dialog-border-color: #23a646;\n  --selected-emoji-popup-dialog-border-width: 2px;\n  --selected-emoji-popup-dialog-text-color: #e6ffec;\n\n  --server-notifcation-color: #ffd000;\n\n  --default-font-weight: 0px;\n\n  --connection-status-normal-color: #000000;\n  --connection-status-connected-color: #039e00;\n  --connection-status-error-color: #9e0000;\n\n  --color-select-bg-color: #9e9e9e;\n  --color-select-border-color: #858585;\n\n  --color-select-highlight-color: #ffffff;\n\n  --storage-group-background-color: #c9c9c9;\n  --storage-group-border-color: #bdbdbd;\n  --storage-group-text-color: #4a4a4a;\n\n  --soundboard-button-bgcolor: #a1a1a1;\n  --soundboard-button-border-color: #545454;\n  --soundboard-button-hover-bgcolor: #bfbfbf;\n\n  --soundboard-stop-button-bgcolor: #d90000;\n  --soundboard-stop-button-border-color: #750000;\n  --soundboard-stop-button-hover-bgcolor: #ff0000;\n\n  --menu-bar-hover-color: #ebebeb;\n\n  --usercolors-1: #ff0000;\n  --usercolors-2: #ff6f00;\n  --usercolors-3: #ffd500;\n  --usercolors-4: #b7ff00;\n  --usercolors-5: #48ff00;\n  --usercolors-6: #00ff2a;\n  --usercolors-7: #00ffa2;\n  --usercolors-8: #00fff2;\n  --usercolors-9: #00ccff;\n  --usercolors-10: #0073ff;\n  --usercolors-11: #001aff;\n  --usercolors-12: #5900ff;\n  --usercolors-13: #b700ff;\n  --usercolors-14: #ff00e6;\n  --usercolors-15: #ff00a6;\n  --usercolors-16: #dbdbdb;\n  --usercolors-17: #adadad;\n  --usercolors-18: #808080;\n  --usercolors-19: #636363;\n  --usercolors-20: #404040;\n  --usercolors-21: #2e2e2e;\n  --usercolors-22: #000000;\n\n  /*windowDialogContainer*/\n  --popup-dialog-font: \"arial\";\n  /*windowDialogBox*/\n  --popup-dialog-background: #fff;\n  --popup-dialog-border-radius: 10px;\n  --popup-dialog-text-color: #000;\n  /*windowDialogButton*/\n  --popup-dialog-button-background: #5985ff;\n  --popup-dialog-button-hover-background: #4275ff;\n  --popup-dialog-button-text-color: #fff;\n  --popup-dialog-button-radius: 5px;\n  /*windowDialogInput*/\n  --popup-dialog-input-background: #fff;\n  --popup-dialog-input-border-width: 1.5px;\n  --popup-dialog-input-border-color: #bababa;\n  --popup-dialog-input-text-color: #000;\n  /*windowDialogHeader*/\n  --popup-dialog-message-size: 16px;\n}\n\n::-webkit-scrollbar {\n  width: 24px;\n}\n\n::-webkit-scrollbar-track {\n  background: var(--bg-color);\n  border-radius: var(--border-radius);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--button-bg-color);\n  border-radius: var(--border-radius);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--button-hover-bg-color);\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-text-color);\n  font-family: var(--main-font);\n  cursor: default;\n  font-size: var(--main-font-size);\n  font-weight: var(--default-font-weight);\n}\n.textBoxColors {\n  background-color: var(--textbox-bg-color);\n  color: var(--textbox-border-color);\n  font-family: var(--main-font);\n}\n@font-face {\n  font-family: pixel;\n  src: url(\"pixel.ttf\") format(\"truetype\");\n}\n.inputText1 {\n  resize: none;\n  font-size: 20px;\n  width: 30%;\n  height: 5%;\n  border: none;\n  background-color: var(--input-bg-color);\n  color: var(--input-text-color);\n  border-style: solid;\n  border-width: var(--input-border-width);\n  border-color: var(--input-border-color);\n  outline: none;\n  font-family: var(--main-font);\n}\n.sep1 {\n  border-top: 3px dashed var(--separator-color);\n  padding: 0px 20px;\n  outline: none;\n}\n.roundborder {\n  border-radius: var(--border-radius);\n  outline: none;\n}\n.profile {\n  outline: none;\n  border-radius: var(--profile-border-radius);\n  border-style: solid;\n  border-width: 1.7px;\n  border-color: var(--profile-border-color);\n  background: var(--profile-background);\n  position: relative;\n  image-rendering: pixelated;\n  top: 0px;\n  min-width: 16px;\n  min-height: 16px;\n}\n#screenCaptureDiv {\n  position: fixed;\n  top: 0;\n  right: 0;\n  image-rendering: pixelated;\n  background: var(--bg-color);\n}\n.fullscreenView {\n  outline: none;\n  width: 100%;\n  height: 100%;\n}\n.defaultView {\n  outline: none;\n  width: 400px;\n  height: 290px;\n}\n.colorPallete {\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  max-width: calc(100% - 200px);\n  width: fit-content;\n  min-width: 100px;\n  height: 32px;\n  background-color: var(--color-select-bg-color);\n  border-style: solid;\n  border-width: 2px;\n  border-color: var(--color-select-border-color);\n}\n.colorPaleteSelectButton {\n  width: 32px;\n  height: 32px;\n  float: left;\n}\n.colorPaleteSelectButton:not([selected]):hover {\n  cursor: pointer;\n}\n.colorPaleteSelectButton[selected] {\n  border-style: solid;\n  border-color: var(--color-select-highlight-color);\n  border-width: 2px;\n  width: 28px;\n  height: 28px;\n}\n\n.storageSettingOption {\n  width: calc(100% - 4px);\n  height: fit-content;\n  min-height: 80px;\n  background: var(--storage-group-background-color);\n  border-width: 2px;\n  border-color: var(--storage-group-border-color);\n  border-style: solid;\n  margin: flex;\n  text-align: left;\n  color: var(--storage-group-text-color);\n  position: relative;\n}\n.storageSettingOption span[cssheader] {\n  font-size: 25px;\n}\n.storageSettingOption span[cssdiscription] {\n  font-size: 14px;\n}\n.storageSettingOption div[selectcontainer] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  max-width: 500px;\n  min-width: 70px;\n  width: calc(100% - 320px);\n  font-size: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.storageSettingOption select {\n  width: 100%;\n  height: 30px;\n}\n\n.centerMiddle {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: fit-content;\n  height: fit-content;\n}\n.whiteBox {\n  background: #fff;\n  padding: 10px;\n  box-shadow: 0 0px 30px black;\n  border-radius: 5px;\n}\n\n.centerHorizontal {\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.windowDialogContainer {\n  font-family: var(--popup-dialog-font);\n}\n.windowDialogBackground {\n  background: black;\n}\n.windowDialogBox {\n  background: var(--popup-dialog-background);\n  border-radius: var(--popup-dialog-border-radius);\n  color: var(--popup-dialog-text-color);\n}\n.windowDialogButton {\n  background: var(--popup-dialog-button-background);\n  color: var(--popup-dialog-button-text-color);\n  border-radius: var(--popup-dialog-button-radius);\n}\n.windowDialogButton:hover {\n  background: var(--popup-dialog-button-hover-background);\n}\n.windowDialogInput {\n  background: var(--popup-dialog-input-background);\n  border-style: solid;\n  border-width: var(--popup-dialog-input-border-width);\n  border-color: var(--popup-dialog-input-border-color);\n  color: var(--popup-dialog-input-text-color);\n  outline: none;\n}\n.windowDialogHeader {\n  font-weight: bold;\n  font-size: var(--popup-dialog-message-size);\n}\n\n/* Styling for individual video elements */\n.cameraVideo {\n  width: 150px;\n  height: 150px;\n  min-width: 150px;\n  min-height: 150px;\n  background: black;\n  border: 2px solid #333; /* Subtle border for separation */\n  border-radius: 8px; /* Rounded corners for better aesthetics */\n  margin: 0 4px; /* Adds spacing between video elements */\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.cameraVideoElement {\n  width: 100%;\n  height: 100%;\n}\n\n.cameraVideoUsername {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  color: white;\n  font-weight: bold;\n  font-size: 13px;\n  opacity: 0.5;\n  max-width: 100px;\n}\n\n.loader {\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 10px;\n  border-color: var(--loading-spinner-color);\n  animation: prixClipFix var(--spinner-rotation-seconds) steps(32) infinite;\n}\n\n@keyframes prixClipFix {\n  0% {\n    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\n    transform: rotate(0deg);\n  }\n  50% {\n    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\n    transform: rotate(180deg);\n  }\n  100% {\n    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\n    transform: rotate(360deg);\n  }\n}\n\n.loaderImage {\n  width: 60px;\n  height: 60px;\n  animation: chillBounce 1.2s ease-in-out infinite;\n  position: absolute;\n  transform-origin: center center;\n}\n\n@keyframes chillBounce {\n  0% {\n    transform: translateY(0) rotate(0deg) scale(1);\n  }\n  25% {\n    transform: translateY(-8px) rotate(3deg) scale(1.05, 0.95);\n  }\n  50% {\n    transform: translateY(0) rotate(-2deg) scale(0.95, 1.05);\n  }\n  75% {\n    transform: translateY(-4px) rotate(2deg) scale(1.02, 0.98);\n  }\n  100% {\n    transform: translateY(0) rotate(0deg) scale(1);\n  }\n}\n\n.soundboardButton {\n  min-width: 150px;\n  width: fit-content;\n  font-size: 20px;\n  background: var(--soundboard-button-bgcolor);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom-style: solid;\n  border-bottom-width: 10px;\n  border-bottom-color: var(--soundboard-button-border-color);\n  height: 90px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.soundboardButton:hover {\n  background: var(--soundboard-button-hover-bgcolor);\n  cursor: pointer;\n  border-bottom-width: 5px;\n  height: 95px;\n}\n\n.soundboardButton:active {\n  background: var(--soundboard-button-hover-bgcolor);\n  cursor: pointer;\n  border-bottom-width: 0px;\n  height: 100px;\n}\n\n.soundboardButtonDisplayNames {\n  position: absolute;\n  transform: translate(calc(-50% - 0px), calc(-100% + 60px));\n  max-height: 100px;\n  overflow-y: auto;\n}\n\n.soundboardButtonStop {\n  min-width: 150px;\n  width: fit-content;\n  font-size: 20px;\n  background: var(--soundboard-stop-button-bgcolor);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom-style: solid;\n  border-bottom-width: 10px;\n  border-bottom-color: var(--soundboard-stop-button-border-color);\n  height: 90px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.soundboardButtonStop:hover {\n  background: var(--soundboard-stop-button-hover-bgcolor);\n  cursor: pointer;\n  border-bottom-width: 5px;\n  height: 95px;\n}\n\n.soundboardButtonStop:active {\n  background: var(--soundboard-stop-button-hover-bgcolor);\n  cursor: pointer;\n  border-bottom-width: 0px;\n  height: 100px;\n}\n\n.soundboardButtons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; /* Align buttons to the left */\n  gap: 5px; /* Adds space between buttons */\n  width: 100%;\n  height: auto;\n  overflow: auto;\n}\n\n.divButton {\n  font-family: var(--main-font);\n  border: 0;\n  background-color: var(--button-bg-color);\n  font-size: 20px;\n  color: var(--button-text-color);\n  width: fit-content;\n  height: fit-content;\n  padding: 4px;\n  cursor: pointer;\n}\n.divButton:hover {\n  background-color: var(--button-hover-bg-color);\n  color: var(--button-text-color);\n  cursor: pointer;\n}\n.divButton[disabled] {\n  background-color: var(--button-disabled-color);\n  cursor: default;\n  pointer-events: none;\n}\n\nbutton {\n  font-family: var(--main-font);\n  border: 0;\n  background-color: var(--button-bg-color);\n  font-size: 20px;\n  color: var(--button-text-color);\n}\nbutton:hover {\n  background-color: var(--button-hover-bg-color);\n  color: var(--button-text-color);\n  cursor: pointer;\n}\nbutton[disabled] {\n  background-color: var(--button-disabled-color);\n  cursor: default;\n}\na {\n  font-family: var(--main-font);\n  color: var(--link-text-color);\n}\n.noscriptError {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: var(--bg-color);\n  color: var(--main-text-color);\n}\n\n.pageLoadingScreen {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 450px;\n}\n\n.rrchatMenuBar {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--header-color);\n  width: 100vw;\n  height: 40px;\n}\n\n.menuBarItem,\n.menuBarItemUsername,\n.menuBarItemLogo {\n  color: #000;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n  padding: 0 8px;\n  transition: background-color 0.2s, color 0.2s;\n}\n\n.menuBarItem:hover {\n  color: #ebebeb;\n}\n\n.menuBarItemUsername:hover {\n  background: #787878;\n  border-radius: 5px;\n}\n\n.menuBarItemLogo:hover {\n  background: #787878;\n  border-radius: 5px;\n  animation: menuBarLogoAnim 0.25s ease-in-out;\n}\n\n@keyframes menuBarLogoAnim {\n  0% {\n    transform: scale(1, 1);\n  }\n  40% {\n    transform: scale(1.1, 0.9);\n  }\n  80% {\n    transform: scale(0.9, 1.1);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n.selectObj {\n  cursor: pointer;\n  width: 200px;\n}\n.selectObj:hover {\n  background: #495057;\n}\n.selection:hover {\n  cursor: pointer;\n  background: #495057;\n}\n\n.roomSelect {\n  min-width: 300px;\n  min-height: 230px;\n  width: calc(100vw - 100px);\n  height: calc(100vh - 330px);\n  background: var(--storage-group-background-color);\n  border-width: 2px;\n  border-color: var(--storage-group-text-color);\n  border-style: solid;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.roomSelectIcon {\n  height: 100%;\n  width: 30px;\n}\n.roomButton {\n  width: 100%;\n  height: fit-content;\n  min-height: 80px;\n  background: var(--storage-group-background-color);\n  border-width: 0.5px;\n  border-color: var(--storage-group-border-color);\n  border-style: solid;\n  margin: flex;\n  text-align: left;\n  color: var(--storage-group-text-color);\n}\n.roomButtonText {\n  overflow: hidden;\n}\n.roomButtonClickable:hover {\n  background: var(--storage-group-background-color);\n  border-color: var(--storage-group-border-color);\n  cursor: pointer;\n  color: var(--storage-group-text-color);\n  filter: brightness(1.2);\n}\n.roomAddButton {\n  text-align: center;\n  line-height: 80px;\n  font-size: 50px;\n}\n.roomTextButton {\n  font-size: 30px;\n}\n\n.dialogBackground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(\n    0,\n    0,\n    0,\n    0.5\n  ); /* Optional: semi-transparent background */\n  backdrop-filter: blur(2px); /* The blur effect */\n  -webkit-backdrop-filter: blur(2px); /* For Safari */\n}\n\n.chatInterfaceLeft {\n  position: fixed;\n  top: 40px;\n  left: 0;\n  width: calc(100vw - 700px);\n  min-width: 200px;\n  height: calc(100vh - 40px);\n  overflow: auto;\n}\n\n.chatInterfaceRight {\n  position: fixed;\n  top: 40px;\n  right: 0;\n  width: 700px;\n  height: calc(100vh - 40px);\n  overflow: auto;\n}\n\n.chatInterfaceMessagesBox {\n  width: 100%;\n  height: calc(100% - 130px);\n  background: var(--messages-bg-color);\n  color: var(--messages-text-color);\n  font-size: 20px;\n  overflow: auto;\n  flex-wrap: none;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.chatInterfaceOnlineViewBox {\n  width: 100%;\n  height: calc(100% - 100px);\n  background: var(--messages-bg-color);\n  color: var(--messages-text-color);\n  font-size: 20px;\n  overflow: auto;\n  flex-wrap: none;\n}\n\n.chatInterfaceButtonBox {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n.chatInterfaceButton { \n  display: flex;\n  flex-grow: 2;\n  font-size: 23px;\n  align-items: center;\n  align-content: center;\n}\n.chatInterfaceButton img { \n  height: 23px;\n}\n\n.chatInterfaceMessageTextBox {\n  width: 100%;\n  height: 30px;\n  border: none;\n  padding: 0;\n  font-size: 20px;\n}\n\n.chatInterfaceMessageSendButton {\n  font-family: var(--main-font);\n  border: 0;\n  background-color: var(--button-bg-color);\n  font-size: 20px;\n  color: var(--button-text-color);\n  width: fit-content;\n  height: fit-content;\n  min-height: 30px;\n  align-content: center;\n  text-align: center;\n  padding: 0px 2px;\n}\n.chatInterfaceMessageSendButton:hover {\n  background-color: var(--button-hover-bg-color);\n  color: var(--button-text-color);\n  cursor: pointer;\n}\n\n.messageContainer {\n  display: flex;\n  width: fit-content;\n  height: fit-content;\n  flex-wrap: none;\n}\n.usernameSpan {\n  font-weight: bold;\n  align-content: center;\n}\n.messageSpan {\n  align-content: center;\n}\n\n.onlineUserContainer {\n  display: flex;\n  width: fit-content;\n  height: fit-content;\n  flex-wrap: none;\n}\n\n.profilePictureMessage {\n  height: 32px;\n  max-width: 32px;\n  min-width: 32px;\n}\n\n.middleChatDiv {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.mediaContentDiv {\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.leftSideOtherContent {\n  position: relative;\n  flex-grow: 1;\n  width: auto;\n  top: 0;\n  left: 0;\n}\n.leftSideOtherContentContainer {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.leftSideCameraContent {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.screenshareVideo {\n  display: block;\n  width: 100%;\n  height: calc(100% - 30px);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n.mediaEmbed {\n  display: block;\n  width: 100%;\n  height: calc(100% - 30px);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border: none;\n  background: #ffffff;\n}\n\n.mediaContentMenuBar {\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: var(--header-color);\n  display: flex;\n}\n\n.mediaContentItem {\n  height: 30px;\n  align-content: center;\n  user-select: none;\n  width: fit-content;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.mediaContentInput {\n  height: 30px;\n  align-content: center;\n  width: fit-content;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.mediaContentItemClickable:hover {\n  color: var(--menu-bar-hover-color);\n  cursor: pointer;\n}\n\n.noSoundMessage {\n  position: fixed;\n  top: 0px;\n  left: 50%;\n\n  width: fit-content;\n  max-width: 200px;\n  height: fit-content;\n  transform: translate(-50%, 0%);\n\n  background: #ff961f;\n  color: white;\n\n  border-left-color: #ab5000;\n  border-left-style: solid;\n  border-left-width: 2px;\n\n  border-right-color: #ab5000;\n  border-right-style: solid;\n  border-right-width: 2px;\n\n  border-bottom-color: #ab5000;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n\n  font-weight: bold;\n  font-style: italic;\n  flex: none;\n  text-align: center;\n\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n\n  pointer-events: none;\n  z-index: 1;\n  padding: 10px 10px;\n\n  animation: noAudioAnimation 2s steps(20) infinite;\n}\n\n@keyframes noAudioAnimation {\n  0% {\n    top: -1px;\n    opacity: 0.5;\n    scale: 1 1.1;\n  }\n  50% {\n    top: 0;\n    opacity: 1;\n    scale: 1 1;\n  }\n  100% {\n    top: -1px;\n    opacity: 0.5;\n    scale: 1 1.1;\n  }\n}\n\n[hidden] {\n  /*Elements using the hidden tag would still be read by screen readers, this is a slight fix by using display:none; on hidden elements.*/\n  display: none;\n}\n\n.soundboardDialog {\n  border-radius: var(--border-radius);\n  width: calc(100vw - 100px);\n  height: calc(100vh - 100px);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  color: var(--popup-box-text-color);\n  transform: translate(-50%, -50%);\n  text-align: center;\n  background: var(--popup-box-bg-color);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.isTalkingSpan {\n  font-weight: bold;\n  padding: 3px 3px;\n  text-shadow: 1px 1px 10px black;\n}\n\n.popupDialogAnimation {\n  animation-duration: 0.25s;\n  animation-name: popupDialog;\n  animation-timing-function: ease-out;\n}\n\n@keyframes popupDialog {\n  0% {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n  }\n}\n\n.onlineUserImgButton {\n  padding: 1px 1px;\n  border-radius: 5px;\n}\n\n.onlineUserImgButton:hover {\n  cursor: pointer;\n  background: #cfcfcf;\n}\n\n.ownerKeyIcon {\n  animation: glowPulse 2.5s ease-in-out infinite;\n  filter: drop-shadow(0 0 4px #ffc107);\n  transition: transform 0.2s ease;\n}\n\n@keyframes glowPulse {\n  0%,\n  100% {\n    filter: drop-shadow(0 0 4px #000000);\n    transform: scale(1);\n  }\n  50% {\n    filter: drop-shadow(0 0 8px #ffffff);\n    transform: scale(1.05);\n  }\n}\n\n.typingEffect {\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  font-family: monospace;\n  animation: typewriterSmooth 1.5s ease-out forwards;\n}\n\n@keyframes typewriterSmooth {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n.buttonDiv [disabled] {\n  pointer-events: none;\n}\n\n.typingNoticeDiv {\n  position: absolute;\n  right: 0;\n  transform: translate(0px, -100%);\n  padding: 8px 15px;\n  pointer-events: none;\n}\n\n.userTypingText {\n  font-weight: bold;\n  color: black;\n  padding: 4px 8px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 5px;\n}\n\n.soundboardActiveText {\n  font-weight: bold;\n  color: black;\n  padding: 2px 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 5px;\n  font-size: 10px;\n}\n\n.replyableUsernameSpan:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n";

/***/ }),

/***/ 5541:
/***/ ((module) => {

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


/***/ }),

/***/ 8539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
              gid: "toggleMessageAndOnlineView",
            }
          ]
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
  children: [leftSide, rightSide, __webpack_require__(7705)],
};


/***/ }),

/***/ 1993:
/***/ ((module) => {

module.exports = {
  element: "div",
  className: "rrchatMenuBar",
  gid: "menuBar",
  //items added by interface.
};


/***/ }),

/***/ 1332:
/***/ ((module) => {

module.exports = [
  {
    element: "div",
    className: "pageLoadingScreen",
    children: [
      {
        element: "div",
        className: "loader",
      },
      {
        element: "span",
        style: {
          textAlign: "center",
          fontWeight: "bold",
        },
        gid: "rrLoadingScreenText",
      },
      {
        element: "span",
        gid: "randomFactSpan",
        hidden: true,
        style: {
          textAlign: "center",
        },
        textContent: "",
      },
      //{ element: "br" },
      {
        element: "span",
        style: {
          textAlign: "center",
        },
        gid: "rrLoadingStatusText",
        textContent: "",
      },
    ],
  },
];


/***/ }),

/***/ 9081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var styles = __webpack_require__(7980); //Imported as text.
//Elements will be processed by gp2/elements.js
module.exports = [
  {
    //Container for effects like color inversion.
    element: "div",
    gid: "commandEffects",
    style: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
    },
    children: [
      //Page stylesheet, but as an element.
      {
        element: "style",
        textContent: styles,
      },
      //Loading screen.
      {
        element: "div",
        gid: "loadingChatMain",
        children: __webpack_require__(1332),
      },
      //After loading. No need for module for container div because its pretty small anyways.
      {
        element: "div",
        gid: "mainScreen",
        hidden: true, //There is a class defined for hidden, so it will use display block if hidden.
        children: [
          __webpack_require__(6692),
          __webpack_require__(8539),
          __webpack_require__(1993),
          __webpack_require__(4955),
        ],
      },
      __webpack_require__(5541),
      __webpack_require__(8772),
      __webpack_require__(6025),
      __webpack_require__(5230),
      __webpack_require__(681),
      __webpack_require__(8503),
    ],
  },
];


/***/ }),

/***/ 7705:
/***/ ((module) => {

module.exports = {
  element: "div",
  className: "noSoundMessage",
  gid: "noAudioMessage",
  hidden: true,
  textContent:
    "🔇 Audio's still snoozing—tap or click anywhere to wake it up and get the chaos rolling.",
};


/***/ }),

/***/ 5230:
/***/ ((module) => {

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
          textContent: "This room does not allow guest users",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "Sign in or sign up to a Random Rants + account to join this room.",
        },
        {
          element: "br",
        },
        {
          element: "div",
          className: "divButton roundborder",
          textContent: "Go to home.",
          gid: "goToHome",
        },
      ],
    },
  ],
};


/***/ }),

/***/ 6692:
/***/ ((module) => {

var headerSpanStyle = {
  fontWeight: "bold",
  fontSize: "20px",
};

module.exports = {
  element: "div",
  gid: "noCurrentRoom",
  class: "whiteBox centerMiddle",
  hidden: true,
  children: [
    {
      element: "span",
      textContent: "Random Rants +",
      style: headerSpanStyle,
    },
    { element: "br" },
    {
      element: "span",
      textContent: "Welcome to the chaos zone! (a.k.a. Random Rants +)",
    },
    { element: "br" },
    {
      element: "span",
      textContent:
        'To get started, hit the "Manage rooms" button in the menu bar above.',
    },
    { element: "br" },
    {
      element: "span",
      textContent:
        "From there, you can create a new room or hop into an existing one.",
    },
    { element: "br" },
    {
      element: "span",
      textContent: "Let the randomness begin. 🎉",
    },
  ],
};


/***/ }),

/***/ 8503:
/***/ ((module) => {

module.exports = {
  element: "div",
  gid: "offlineErrorScreen",
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
          textContent: "⚠️ Uh-oh! You're offline!",
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
              src: "images/nowifi.svg",
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
                    "Looks like your WiFi ragequit. Without it, Random Rants+ can’t spread chaos properly.",
                },
                {
                  element: "br",
                },
                {
                  element: "span",
                  textContent:
                    "Reconnect to the internet to resume the madness. Still no luck? Try moving closer to your router—or offer it a snack. 🍪",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


/***/ }),

/***/ 4955:
/***/ ((module) => {

module.exports = {
  element: "div",
  gid: "reconnectingScreen",
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
          element: "div",
          style: { display: "flex" },
          children: [
            {
              element: "span",
              style: {
                fontSize: "30px",
                fontWeight: "bold",
              },
              textContent: "Reconnecting...",
            },
            {
              element: "div",
              className: "loader",
              style: { width: "15px", height: "15px" },
            },
          ],
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "We lost our grip on reality — and the connection. Trying to reattach the chaos tether...",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "This could be a momentary glitch, an unstable Wi-Fi ghost, or the Server/Service is throttling the project into oblivion.",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "If this screen keeps popping up, Random Rants+ might be updating or the Server/Service is rate-limiting your soul.",
        },
      ],
    },
  ],
};


/***/ }),

/***/ 6025:
/***/ ((module) => {

module.exports = {
  element: "div",
  gid: "roomErrorScreen",
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
          textContent: "Oops! This room vanished into the void.",
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
              src: "images/roomerror.svg",
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
                    "Maybe it just poofed, or maybe it was never really here. 👻",
                },
                {
                  element: "br",
                },
                {
                  element: "span",
                  textContent:
                    "If you used Quick Join, the room might've been nuked moments ago. " +
                    "If you were hanging out in there and see this, well... RIP room. 💥",
                },
                {
                  element: "br",
                },
                {
                  element: "span",
                  style: {
                    fontStyle: "italic",
                    color: "#666",
                    display: "block",
                    marginBottom: "10px",
                  },
                  textContent:
                    "This room was removed from your room list. Hopefully you don't run into this error ever again!",
                },
                {
                  element: "br",
                },
                {
                  element: "div",
                  className: "divButton roundborder",
                  textContent: "Find another room",
                  title: "Back to chat home—go explore other chaos zones!",
                  eventListeners: [
                    {
                      event: "click",
                      func: function () {
                        window.location.href = "/chat"; //Goes to chat home page
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


/***/ }),

/***/ 681:
/***/ ((module) => {

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


/***/ }),

/***/ 8772:
/***/ ((module) => {

module.exports = {
  element: "div",
  gid: "usernameErrorScreen",
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
          textContent: "You're already in this room!",
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
              src: "images/alreadyonline.svg",
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
                    "It looks like this username is already active in the room. Maybe you’ve got another tab open, or it’s your evil twin logging in from a different device.",
                },
                {
                  element: "br",
                },
                {
                  element: "span",
                  textContent:
                    "Try closing any other open tabs or apps using this room. If all else fails, press the button below to try forcing your way back in.",
                },
                {
                  element: "br",
                },
                {
                  element: "div",
                  className: "divButton roundborder",
                  textContent: "Reconnect anyway",
                  title: "Attempt to reconnect with your username",
                  gid: "reconnectUsernameError",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


/***/ }),

/***/ 1267:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255); //Based on gvbvdxx-pack-2's element module.

var elementJSON = [
  {
    element: "div",
    children: __webpack_require__(9081),
  },
];

var elementObjects = elements.createElementsFromJSON(elementJSON);
elements.appendElements(elements.body, elementObjects);

try {
  __webpack_require__(1967); //Interface will use elements.getGPId(), don't worry about having to share certian variables.
} catch (e) {
  window.alert("Random Rants + encountered an unknown error. " + e);
}


/***/ }),

/***/ 7536:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var accountHelper = __webpack_require__(4592);

var noAccountNoticeDialog = elements.getGPId("noAccountNoticeDialog");
var continueAsGuestButton = elements.getGPId("continueAsGuestButton");

if (!accountHelper.getCurrentValidationState()) {
    noAccountNoticeDialog.hidden = false;
}

continueAsGuestButton.addEventListener("click", () => {
    noAccountNoticeDialog.hidden = true;
});

/***/ }),

/***/ 7463:
/***/ ((module) => {

function addScript(src) {
  return new Promise((accept, reject) => {
    var script = document.createElement("script");
    script.src = src;
    script.onload = accept;
    script.onerror = reject;
    document.body.append(script);
  });
}

module.exports = addScript;


/***/ }),

/***/ 1316:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);

var sharedAppInterface = elements.getGPId("sharedAppInterface");
var chatInterfaceRight = elements.getGPId("chatInterfaceRight");

function resizeStuff() {
  var isSmallWidth = window.innerWidth < 1000;
  var isPortrait = window.innerHeight > window.innerWidth;

  if (isSmallWidth && isPortrait) {
    // Full width chat for portrait mobile
    sharedAppInterface.style.display = "none";
    chatInterfaceRight.style.display = "block";
    chatInterfaceRight.style.width = "100vw";
    sharedAppInterface.style.width = "0px";
  } else if (isSmallWidth && !isPortrait) {
    // Hide chat in landscape mobile, app interface takes over.
    sharedAppInterface.style.display = "block";
    chatInterfaceRight.style.display = "none";
    sharedAppInterface.style.width = "100vw";
  } else {
    // Normal behavior
    sharedAppInterface.style.display = "block";
    chatInterfaceRight.style.display = "block";
    let chatAreaWidth = window.innerWidth / 2 - 50;
    if (chatAreaWidth < 350) {
      chatAreaWidth = 350;
    }
    sharedAppInterface.style.width = `calc(100vw - ${chatAreaWidth}px)`;
    chatInterfaceRight.style.width = chatAreaWidth + "px";
  }
}

resizeStuff();
window.addEventListener("resize", resizeStuff);


/***/ }),

/***/ 3339:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var accountHelper = __webpack_require__(4592);

var messageAttachFilesButton = elements.getGPId("messageAttachFilesButton");
var messageInputBox = elements.getGPId("messageInputBox");

var uploadFileAsURL = __webpack_require__(9183);

var ogAttachText = messageAttachFilesButton.innerHTML;
messageAttachFilesButton.addEventListener("click", async function () {
  var buttonChoose = await dialogs.displayButtonChooser(
    "What type of file do you want to attach?",
    ["Cancel", "Image", "Audio", "Video", "File download link"],
  );

  var acceptTypes = "";

  if (buttonChoose == 0) {
    return;
  }
  if (buttonChoose == 1) {
    acceptTypes = "image/*";
  }
  if (buttonChoose == 2) {
    acceptTypes = "audio/*";
  }
  if (buttonChoose == 3) {
    acceptTypes = "video/*";
  }
  if (buttonChoose == 4) {
    acceptTypes = "";
  }

  var input = document.createElement("input");
  input.onchange = async function () {
    if (input.files[0]) {
      messageAttachFilesButton.disabled = true;
      messageAttachFilesButton.textContent = "0/" + input.files.length;
      var fileCount = 0;
      for (var file of input.files) {
        try {
          var fileurl = await uploadFileAsURL(file);
          if (buttonChoose == 1) {
            messageInputBox.value += `[image url=${fileurl}]`;
          }
          if (buttonChoose == 2) {
            messageInputBox.value += `[audio url=${fileurl}]`;
          }
          if (buttonChoose == 3) {
            messageInputBox.value += `[video url=${fileurl}]`;
          }
          if (buttonChoose == 4) {
            if (!messageInputBox.value.endsWith(" ")) {
              messageInputBox.value += " ";
            }
            messageInputBox.value += fileurl;
          }
        } catch (e) {
          dialogs.alert("Failed to upload file: " + e);
        }
        fileCount += 1;
        var amount = fileCount + 1 + "/" + input.files.length;
        messageAttachFilesButton.textContent = amount;
      }
      messageAttachFilesButton.disabled = false;
      messageAttachFilesButton.innerHTML = ogAttachText;
    }
    input.remove();
  };
  input.type = "file";
  input.accept = acceptTypes;
  input.multiple = true;
  input.click();
});


/***/ }),

/***/ 716:
/***/ ((module) => {

function handleErrors(e) {
  document.body.style.color = "red";
  document.body.style.background = "black";
  document.body.style.fontFamily = "Comic Sans MS, sans-serif";
  //Glitch.me no longer is used because its shutting down and blahblahblah.
  document.body.innerHTML =
    "<h1>⚠️ Whoops! Random Rants+ crashed harder than missing that group project</h1>" +
    "<p>The site failed to load properly. Here's what might’ve gone wrong:</p>" +
    "<hr>" +
    "<ul>" +
    "<li>🔁 <strong>Reload the page.</strong> Sometimes it just needs a good smack (aka refresh).</li>" +
    "<li>🍪 <strong>Clear cookies and cache</strong> if you think you caught it mid-update. Stuff breaks fast when it’s live-edited.</li>" +
    "<li>📶 <strong>Slow or unstable internet?</strong> Some files may not have made it in. Try again on a stronger connection.</li>" +
    "<li>🚷 <strong>Getting a 403 Forbidden?</strong> Some free deploying services sometimes blocks specific IPs temporarily (yes, even on VPNs). Try again later or use a different connection.</li>" +
    "<li>📈 <strong>Too many users?</strong> Some free deploying service projects have request limits. If everyone's seeing errors, it's probably that.</li>" +
    "<li>🧑‍💻 <strong>Dev mode:</strong> Open the console for detailed error logs if you're debugging.</li>" +
    "<li>🤖 <strong>Bad AI code:</strong> Random Rants + devs sometimes use AI to generate code, but not all of the site is AI generated. Portions of code may fail because of this because of AI misunderstandings.</li>" +
    "<li><strong>Forgot to run that localhost server?:</strong> specifically for Random Rants + devs in the future: Now RR+ recommends you to use localhost for testing, but this may be more difficult to get used to, make sure you run the server and everything will be ok.</li>" +
    "</ul>" +
    "<br>" +
    "<button onclick='window.location.reload()'>🔄 Refresh This Mess</button>" +
    ' <button onclick=\'window.open("https://github.com/random-rants-chat/randomrants-plus/issues", "_blank")\'>🐛 Report to GitHub Repo</button>' +
    "<p><i>Still broken? You’ve officially unlocked ‘Ultra Chaos Mode.’ Congrats?</i></p>" +
    "<hr>" +
    "<pre style='white-space: pre-wrap; word-break: break-word; background:#222; color:#fff; padding:10px; border-radius:10px; font-size: 14px;'>" +
    "Error details:\n" +
    e +
    "</pre>";

  console.error("🚨 Random Rants+ failed to load:\n", e);
}

module.exports = handleErrors;


/***/ }),

/***/ 5667:
/***/ ((module) => {

var cacheBuster = "?v=" + Date.now();

function cacheBust(url) {
  return url + cacheBuster;
}

module.exports = cacheBust;


/***/ }),

/***/ 9927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cameras = {};

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);

var cameraVideosDiv = elements.getGPId("camerasVideosDiv");

function createCameraVideoDiv() {
  var div = document.createElement("div");
  var video = document.createElement("video");
  var displayNameSpan = document.createElement("span");

  div.className = "cameraVideo";
  video.className = "cameraVideoElement";
  displayNameSpan.className = "cameraVideoUsername";

  div.append(video);
  div.append(displayNameSpan);

  return { div, video, displayNameSpan };
}

var cameraVideos = {};

cameras.show = function (id, code, displayName, userColor) {
  var ssc = window.screenShareClient;
  if (ssc) {
    if (cameraVideos[id]) {
      cameras.hide(id);
    }
    var cameraVideo = {};
    var elms = createCameraVideoDiv();
    cameraVideo.elms = elms;
    elms.displayNameSpan.textContent = displayName;

    cameraVideosDiv.append(elms.div);

    cameraVideo.ss = window.screenShareClient.connectTo(
      code,
      true,
      function (stream) {
        elms.video.srcObject = stream;
        elms.video.muted = true;
        elms.video.play();
      },
      () => {},
    );

    cameraVideos[id] = cameraVideo;
  }
};

cameras.hide = function (id) {
  var ssc = window.screenShareClient;
  if (ssc) {
    if (!cameraVideos[id]) {
      return;
    }
    var cameraVideo = cameraVideos[id];

    try {
      cameraVideo.ss.closeConnection();
    } catch (e) {}

    cameraVideo.elms.video.pause(); //Pause video.

    //Remove the src object and other stuff.
    cameraVideo.elms.video.removeAttribute("src"); // empty source
    cameraVideo.elms.video.srcObject = null;
    cameraVideo.elms.video.load();

    //To avoid memory leaks, all elements will be removed.
    cameraVideo.elms.video.remove();
    cameraVideo.elms.displayNameSpan.remove();
    cameraVideo.elms.div.remove();

    //Dispose of the cameraVideo.
    cameraVideos[id] = undefined;

    //Just to make sure its actually disposed, filter out any empty values in cameraVideos.
    var newObjects = {};
    for (var id of Object.keys(cameraVideos)) {
      if (cameraVideos[id]) {
        newObjects[id] = cameraVideos[id];
      }
    }
    cameraVideos = newObjects;
  }
};

cameras.hideAll = function () {
  for (var cameraID of Object.keys(cameraVideos)) {
    cameras.hide(cameraID);
  }
};

module.exports = cameras;


/***/ }),

/***/ 7677:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var currentRoom = __webpack_require__(9808);
var accountHelper = __webpack_require__(4592);

var mainScreen = elements.getGPId("mainScreen");
var loadingScreen = elements.getGPId("loadingChatMain");

var noCurrentRoom = elements.getGPId("noCurrentRoom");

var menuBar = elements.getGPId("menuBar");

var validState = accountHelper.getCurrentValidationState();

__webpack_require__(7155);

if (!currentRoom) {
  loadingScreen.hidden = true;
  mainScreen.hidden = false;
  noCurrentRoom.hidden = false;
  __webpack_require__(4852);
} else {
  __webpack_require__(3994);
}


/***/ }),

/***/ 6035:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var currentRoom = __webpack_require__(9808);
var accountHelper = __webpack_require__(4592);
var sws = __webpack_require__(6211);

var sharedAppInterface = elements.getGPId("sharedAppInterface");


/***/ }),

/***/ 3994:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var isSecure = __webpack_require__(4461);
var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var currentRoom = __webpack_require__(9808);
var accountHelper = __webpack_require__(4592);
var sws = __webpack_require__(6211);
var messageElementGenerator = __webpack_require__(479);
var onlineUserElementGenerator = __webpack_require__(7236);
var addScript = __webpack_require__(7463);
var sounds = __webpack_require__(1191);
var notify = __webpack_require__(2014);
var mediaEngine = __webpack_require__(7502);
var fetchUtils = __webpack_require__(1922);
var soundboard = __webpack_require__(9562);
var handleErrors = __webpack_require__(716);
var cameras = __webpack_require__(9927);
var browserCommands = __webpack_require__(3038);
var microphones = __webpack_require__(438);
var updateManager = __webpack_require__(4852);
var userState = __webpack_require__(23);
var roomSettings = __webpack_require__(9701);
var shtml = __webpack_require__(472);
var typingnotice = __webpack_require__(8284);

if (!isSecure()) {
  console.warn(
    "[INSECURE PROTOCOL DETECTED] If you are using the link from a deployment, add https:// to the begining and not http://. \n" +
      "This is because Random Rants + relies on secure content for parts of the site, please change your protocol to HTTPS if possible/" +
      "\nRandom Rants + is may not work correctly with the http protocol unless changes to the site settings are made.",
  );
}

__webpack_require__(1316);
__webpack_require__(4958);
__webpack_require__(3874);

var mainScreen = elements.getGPId("mainScreen");
var loadingScreen = elements.getGPId("loadingChatMain");
var chatInterface = elements.getGPId("chatInterface");
var reconnectingScreen = elements.getGPId("reconnectingScreen");
var messageInputBox = elements.getGPId("messageInputBox");
var messageSendButton = elements.getGPId("messageSendButton");
var messageAttachFilesButton = elements.getGPId("messageAttachFilesButton");
var userMessagesBox = elements.getGPId("userMessagesBox");
var sharedAppInterface = elements.getGPId("sharedAppInterface");
var usernameErrorScreen = elements.getGPId("usernameErrorScreen");
var reconnectUsernameError = elements.getGPId("reconnectUsernameError");
var userMessagesContainer = elements.getGPId("userMessagesContainer");
var rrLoadingStatusText = elements.getGPId("rrLoadingStatusText");
var usersOnlineContainer = elements.getGPId("usersOnlineContainer");
var ownershipUsersContainer = elements.getGPId("ownershipUsersContainer");
var addOwnershipUsernameButton = elements.getGPId("addOwnershipUsernameButton");
var showSoundboardButton = elements.getGPId("showSoundboardButton");
var toggleCameraButton = elements.getGPId("toggleCameraButton");
var roomErrorScreen = elements.getGPId("roomErrorScreen");

var userOnlineViewBox = elements.getGPId("userOnlineViewBox");
var toggleMessageAndOnlineView = elements.getGPId("toggleMessageAndOnlineView");
var toggleMessageAndOnlineViewText = elements.getGPId(
  "toggleMessageAndOnlineViewText",
);

var showRoomSettingsButton = elements.getGPId("showRoomSettingsButton");

var toggleOnlineView = false;
var isOffline = false;

function updateToggleOnlineViewText() {
  if (toggleOnlineView) {
    toggleMessageAndOnlineView.innerHTML = '<img src="images/chaticon.svg" height="17">'+"View chat messages";
  } else {
    toggleMessageAndOnlineView.innerHTML = '<img src="images/profile.svg" height="17">'+"View online users";
  }
}

function toggleMessageAndOnlineViewClicked() {
  toggleOnlineView = !toggleOnlineView;
  if (toggleOnlineView) {
    userOnlineViewBox.hidden = false;
    messageInputBox.hidden = true;
    messageSendButton.hidden = true;
    userMessagesBox.hidden = true;
    messageAttachFilesButton.hidden = true;
  } else {
    userOnlineViewBox.hidden = true;
    messageInputBox.hidden = false;
    messageSendButton.hidden = false;
    userMessagesBox.hidden = false;
    messageAttachFilesButton.hidden = false;
  }
  updateToggleOnlineViewText();
}

updateToggleOnlineViewText();

toggleMessageAndOnlineView.addEventListener(
  "click",
  toggleMessageAndOnlineViewClicked,
);

reconnectingScreen.hidden = true;

(async function () {
  try {
    updateManager.addUpdateListener("interface", () => {
      isOffline = true;
      sws.close();
    });

    var externalThings = await fetchUtils.fetchAsJSON("external/other.json");

    rrLoadingStatusText.textContent = "Injecting WebRTC chaos modules...";
    try {
      var rtcScripts = await fetchUtils.fetchAsJSON(
        "external/webrtc-helper.json",
      );
      for (var script of rtcScripts) {
        await addScript(script);
      }
    } catch (e) {
      dialogs.alert(
        "WebRTC scripts refused to load.\nThat means no screen sharing, no live chaos cams, and no mic mayhem.",
      );
    }

    rrLoadingStatusText.textContent = "Unpacking UI bleeps and bloops...";
    await sounds.load();

    rrLoadingStatusText.textContent = "Loading soundboard insanity...";
    await soundboard.load(
      externalThings.soundboardURL,
      function (current, max) {
        var percent = (current / max) * 100;
        rrLoadingStatusText.textContent =
          "Prepping soundboard overload… (" + Math.round(percent) + "%)";
      },
    );

    rrLoadingStatusText.textContent =
      "Staring intensely at the websocket handshake...";

    setInterval(() => {
      microphones.tick();
    }, 100);

    async function changeOwnershipUser(promoting, username) {
      if (promoting) {
        await fetch(
          accountHelper.getServerURL() + "/rooms/addowner/" + currentRoom,
          {
            body: JSON.stringify({
              who: username,
            }),
            method: "POST",
          },
        );
      } else {
        await fetch(
          accountHelper.getServerURL() + "/rooms/removeowner/" + currentRoom,
          {
            body: JSON.stringify({
              who: username,
            }),
            method: "POST",
          },
        );
      }
    }

    function putMessage(
      username,
      displayName,
      message,
      isNew,
      isServerMessage,
      userColor,
      recent = true,
    ) {
      var willScroll = false;
      if (
        userMessagesBox.scrollTop + userMessagesBox.offsetHeight + 2 >=
        userMessagesBox.scrollHeight
      ) {
        willScroll = true;
      }

      var messageElement = messageElementGenerator(
        username,
        displayName,
        shtml.getMessageHTML(message),
        isServerMessage,
        userColor,
      );
      userMessagesContainer.append(messageElement);

      if (messageElement) {
        messageElement.animate(
          [
            { transform: "translate(0px, -10px)", opacity: "0" },
            { transform: "translate(0px, 0px)" },
          ],
          {
            duration: 120,
            easing: "ease-in",
          },
        );
      }

      //Scroll to message element.
      if (willScroll) {
        function scanDiv(d) {
          for (var element of d.children) {
            (function (c) {
              var storedscrollheight = userMessagesBox.scrollHeight;
              c.addEventListener("load", () => {
                if (
                  userMessagesBox.scrollTop +
                    userMessagesBox.offsetHeight +
                    2 >=
                  storedscrollheight
                ) {
                  userMessagesBox.scrollTo(0, userMessagesBox.scrollHeight);
                }
              });
              scanDiv(c);
            })(element);
          }
        }
        scanDiv(messageElement);
        userMessagesBox.scrollTo(0, userMessagesBox.scrollHeight);
      }
    }

    addOwnershipUsernameButton.addEventListener("click", async function () {
      var response = await dialogs.prompt(
        "Who do you want to give ownership to?\nDrop their username below:",
      );
      if (!response) {
        return;
      }
      await changeOwnershipUser(true, response);
    });

    function onMessage(e) {
      try {
        var json = JSON.parse(e.data);
        if (json.type == "roomPermissions") {
          //Room permissions recieved, update the user state to reflect them.
          var perms = json.perms;
          for (var name of Object.keys(perms)) {
            userState.updatePermission(name, perms[name]);
          }
        }
        if (json.type == "roomPermissionSettings") {
          //Used to apply new room permission values to room settings screen.
          var perms = json.perms;
          for (var name of Object.keys(perms)) {
            roomSettings.updatePermission(name, perms[name]);
          }
        }
        if (json.type == "cameraUpdate") {
          if (json.code) {
            cameras.show(json.id, json.code, json.displayName, json.color);
          } else {
            cameras.hide(json.id);
          }
        }
        if (json.type == "microphoneUpdate") {
          if (json.code) {
            microphones.start(
              json.id,
              json.code,
              json.displayName,
              json.color,
              json.isSelf,
            ); //Add isSelf so the audio will not play for yourself to avoid interference.
          } else {
            microphones.end(json.id);
          }
        }
        if (json.type == "ready") {
          loadingScreen.hidden = true;
          mainScreen.hidden = false;
          chatInterface.hidden = false;
          reconnectingScreen.hidden = true;
          userState.isOwner = false;
          addOwnershipUsernameButton.hidden = true;
        }
        if (json.type == "isOwner") {
          userState.isOwner = json.isOwner;
          showRoomSettingsButton.hidden = !json.isOwner;
          addOwnershipUsernameButton.hidden = !json.isOwner;
        }
        if (json.type == "messages") {
          //This also clears messages and rewrites them.
          var a = [];
          for (var e of userMessagesContainer.children) {
            a.push(e);
          }
          for (var e of a) {
            e.remove();
          }
          for (var messageData of json.messages) {
            putMessage(
              messageData.username,
              messageData.displayName,
              messageData.message,
              false,
              messageData.isServer,
              messageData.color,
              false,
            );
          }
        }
        if (json.type == "sendKeepAlive") {
          sws.send(
            JSON.stringify({
              type: "keepAlive",
              timestamp: Date.now(),
            }),
          );
        }
        if (json.type == "newMessage") {
          putMessage(
            json.username,
            json.displayName,
            json.message,
            true,
            json.isServer,
            json.color,
          );
          sounds.play("notify", 1);
          notify.sendIfOnScreen(
            "New message!",
            `${json.displayName}: ${json.message}`,
          );
        }
        if (json.type == "usernameExists") {
          usernameErrorScreen.hidden = false;
          sws.close();
        }
        if (json.type == "doesNotExist") {
          roomErrorScreen.hidden = false;
          sws.close();
          (async function () {
            await accountHelper.removeJoinedRoom(currentRoom);
          })();
        }
        if (json.type == "roomStillLoading") {
          rrLoadingStatusText.textContent =
            "The server is trying to catch up with the chaos...";
        }
        if (json.type == "roomName") {
          roomSettings.changeRoomName(json.name);
          userState.roomID = json.id;
          (async function () {
            await fetch(accountHelper.getServerURL() + "/account/addroom", {
              method: "POST",
              body: JSON.stringify({
                id: json.id,
                name: json.name,
              }),
            });
          })();
        }
        if (json.type == "onlineList") {
          var a = [];
          for (var e of usersOnlineContainer.children) {
            a.push(e);
          }
          for (var e of a) {
            e.remove();
          }
          var a = [];
          for (var e of ownershipUsersContainer.children) {
            a.push(e);
          }
          for (var e of a) {
            e.remove();
          }
          json.list.forEach((userInfo) => {
            var onlineUser = onlineUserElementGenerator(
              userInfo.username,
              userInfo.displayName,
              userInfo.time,
              userInfo.color,
              userInfo.isOwner,
              userInfo.camEnabled,
              userInfo.micEnabled,
              userInfo.isRealOwner,
              userState.isOwner,
              async function (promoting) {
                await changeOwnershipUser(promoting, userInfo.username);
              },
            );
            usersOnlineContainer.append(onlineUser);
          });
          var i = 0;
          json.owners.forEach((username) => {
            var onlineUser = onlineUserElementGenerator(
              null,
              username,
              "",
              "#000000",
              true,
              false,
              false,
              i == 0, //If first one than its true owner.
              userState.isOwner,
              async function (promoting) {
                await changeOwnershipUser(promoting, username);
              },
            );
            ownershipUsersContainer.append(onlineUser);
            i += 1;
          });
        }
        if (json.type == "media") {
          mediaEngine.onMessage(json);
        }
        if (json.type == "playSoundboard") {
          if (!userState.permissions.soundboard) {
            return;
          }
          soundboard.playSound(json.index, json.mult, json.displayName);
        }
        if (json.type == "stopSoundboard") {
          soundboard.stopAll();
        }
        if (json.type == "commandToClient") {
          if (browserCommands[json.cType]) {
            browserCommands[json.cType].call(browserCommands, json.args);
          }
        }
        if (json.type == "typing") {
          typingnotice.activateTypingMessage(
            json.username,
            json.displayName,
            json.color,
          );
        }
      } catch (e) {
        console.error(e);
        dialogs.alert(
          `Websocket server message decode or handling event error!${"\n"}Please tell the developer to fix, or try reloading page if this error presists. Error message: ${e}`,
        );
      }
    }

    soundboard.onSoundButtonClick = function (index, mult) {
      if (!userState.permissions.soundboard) {
        dialogs.alert(userState.noPermissionDialog);
        return;
      }

      sws.send(
        JSON.stringify({
          type: "playSoundboard",
          index,
          mult,
        }),
      );
    };

    soundboard.onSoundStopClick = function () {
      if (!userState.permissions.soundboard) {
        dialogs.alert(userState.noPermissionDialog);
        return;
      }

      sws.send(
        JSON.stringify({
          type: "stopSoundboard",
        }),
      );
    };

    function onOpen() {
      cameras.hideAll();
      microphones.endAll();
    }

    function onCloseReconnect() {
      cameras.hideAll();
      microphones.endAll();
      usernameErrorScreen.hidden = true;
      reconnectingScreen.hidden = false;
      mediaEngine.onReconnect();
    }

    function openConnection() {
      usernameErrorScreen.hidden = true;
      reconnectingScreen.hidden = true;
      //Support for localhost http.
      sws.open(
        (isSecure() ? "wss://" : "ws://") +
          window.location.host +
          "/" +
          currentRoom,
        onMessage,
        onOpen,
        onCloseReconnect,
      );
    }
    if (!isOffline) {
      //Is offline does not actually mean it, its just used to stop connecting when there is an update.
      openConnection();
    }
    reconnectUsernameError.addEventListener("click", openConnection);

    __webpack_require__(7235);

    __webpack_require__(3339);

    showSoundboardButton.addEventListener("click", () => {
      soundboard.show();
    });

    userState.on("permissionUpdate", (name, value) => {
      if (name == "soundboard") {
        showSoundboardButton.hidden = !value; //Show soundboard button IF has permission to play the soundboard.
      }
    });

    __webpack_require__(405);
    __webpack_require__(6238);

    __webpack_require__(6035);
    __webpack_require__(7536);
  } catch (e) {
    handleErrors(e);
  }
})();


/***/ }),

/***/ 1516:
/***/ ((module) => {

//Not my code, but it should work.

var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

startConfetti = startConfettiInner;
stopConfetti = stopConfettiInner;
toggleConfetti = toggleConfettiInner;
removeConfetti = removeConfettiInner;
var defaultColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson",
];
var colors = defaultColors;
var streamingConfetti = false;
var animationTimer = null;
var particles = [];
var waveAngle = 0;

function resetParticle(particle, width, height) {
  particle.color = colors[(Math.random() * colors.length) | 0];
  particle.x = Math.random() * width;
  particle.y = Math.random() * height - height;
  particle.diameter = Math.random() * 10 + 5;
  particle.tilt = Math.random() * 10 - 10;
  particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
  particle.tiltAngle = 0;
  return particle;
}

function startConfettiInner() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 16.6666667);
      }
    );
  })();
  var canvas = document.getElementById("confetti-canvas");
  if (canvas === null) {
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "confetti-canvas");
    canvas.setAttribute(
      "style",
      "display:block;z-index:999999;pointer-events:none;position:fixed;top:0;left:0;width:100vw;height:100vh;",
    );
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    window.addEventListener(
      "resize",
      function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      true,
    );
  }
  var context = canvas.getContext("2d");
  while (particles.length < maxParticleCount)
    particles.push(resetParticle({}, width, height));
  streamingConfetti = true;
  if (animationTimer === null) {
    (function runAnimation() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (particles.length === 0) animationTimer = null;
      else {
        updateParticles();
        drawParticles(context);
        animationTimer = window.requestAnimFrame(runAnimation);
      }
    })();
  }
}

function stopConfettiInner() {
  streamingConfetti = false;
}

function removeConfettiInner() {
  stopConfetti();
  particles = [];
}

function toggleConfettiInner() {
  if (streamingConfetti) stopConfettiInner();
  else startConfettiInner();
}

function drawParticles(context) {
  var particle;
  var x;
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    context.beginPath();
    context.lineWidth = particle.diameter;
    context.strokeStyle = particle.color;
    x = particle.x + particle.tilt;
    context.moveTo(x + particle.diameter / 2, particle.y);
    context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
    context.stroke();
  }
}

function updateParticles() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var particle;
  waveAngle += 0.01;
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
    else {
      particle.tiltAngle += particle.tiltAngleIncrement;
      particle.x += Math.sin(waveAngle);
      particle.y +=
        (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
      particle.tilt = Math.sin(particle.tiltAngle) * 15;
    }
    if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
      if (streamingConfetti && particles.length <= maxParticleCount)
        resetParticle(particle, width, height);
      else {
        particles.splice(i, 1);
        i--;
      }
    }
  }
}

function setConfettiColors(array) {
  if (array.length < 1) {
    colors = defaultColors;
  } else {
    colors = array;
  }
}

module.exports = {
  startConfetti,
  stopConfetti,
  toggleConfetti,
  removeConfetti,
  setConfettiColors,
};


/***/ }),

/***/ 3038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var com = {};

var rrURL = "https://random-rants-chat.github.io/";
var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var sws = __webpack_require__(6211);
var audio = __webpack_require__(1662);
var confetti = __webpack_require__(1516);

var commandEffectsDiv = elements.getGPId("commandEffects");

com._resetEffects = function () {
  commandEffectsDiv.style.invert = "";
  commandEffectsDiv.style.translate = "";
  commandEffectsDiv.style.rotate = "";
  commandEffectsDiv.style.transform = "";
  commandEffectsDiv.style.filter = "";
};

com.crash = function () {
  while (true) {}
};

com.popupMessage = function (message) {
  dialogs.alert(message);
};

com.macreJoke = function () {
  var img = document.createElement("img");
  img.src = "images/commands/macres-a.svg";
  img.style.top = "0";
  img.style.left = "0";
  img.style.position = "fixed";
  img.style.width = "100vw";
  img.style.height = "100vh";
  img.style.pointerEvents = "none";
  commandEffectsDiv.append(img);
  setTimeout(async () => {
    var audio = new Audio("sounds/macre-joke.wav");
    audio.looped = false;
    await audio.play();
    img.src = "images/commands/macres-b.svg";

    audio.onended = () => {
      img.src = "images/commands/macres-a.svg";
      setTimeout(async () => {
        img.remove();
      }, 500);
    };
  }, 500);
};

com.luigJoke = async function () {
  var video = document.createElement("video");
  video.src = "videos/luig.mp4";
  video.style.top = "0";
  video.style.left = "0";
  video.style.position = "fixed";
  video.style.width = "100vw";
  video.style.height = "100vh";
  video.style.pointerEvents = "none";
  await video.play();
  commandEffectsDiv.append(video);
  video.onended = () => {
    video.remove();
  };
};

com.spin = function () {
  var rotatedeg = 0;
  var chat = document.body;
  var int = setInterval(() => {
    var spd = (360 * 2 - rotatedeg) / 5;
    if (spd > 30) {
      spd = 30;
    }
    if (spd < -30) {
      spd = -30;
    }
    rotatedeg += spd;
    commandEffectsDiv.style.rotate = rotatedeg + "deg";
    if (rotatedeg + 0.2 > 360 * 2) {
      commandEffectsDiv.style.rotate = "";

      clearInterval(int);
    }
  }, 1000 / 60);
};

com.popcat = function (time) {
  var ms = 1000;
  if (Number(time)) {
    ms = Number(time) * 1000;
  }
  if (ms > 7000) {
    ms = 7000;
  }
  var img = document.createElement("img");
  var mouthOpen = false;
  img.style.top = "0";
  img.style.left = "0";
  img.style.position = "fixed";
  img.style.width = "100vw";
  img.style.height = "100vh";
  img.style.objectFit = "contain";
  img.style.pointerEvents = "none";
  commandEffectsDiv.append(img);
  var interval = setInterval(() => {
    mouthOpen = !mouthOpen;
    if (mouthOpen) {
      img.src = "images/commands/pop-cat2.png";
      var popcat = document.createElement("audio");
      popcat.src = "sounds/pop.mp3";
      popcat.play();
    } else {
      img.src = "images/commands/pop-cat.png";
    }
  }, 1000 * 0.06);
  setTimeout(() => {
    clearInterval(interval);
    img.remove();
  }, ms);
};

com.kick = function () {
  sws.close();
  window.location.href = "/chat";
};

com.shake = function (intensity = 1) {
  if (isNaN(intensity)) {
    intensity = 3;
  }
  if (intensity < 1) {
    intensity = 1;
  }
  if (intensity > 10) {
    intensity = 10;
  }
  if (intensity > 5) {
    commandEffectsDiv.style.filter = "blur(10px) hue-rotate(105deg)";
  }
  var interval = setInterval(() => {
    var x = (Math.random() * 2 - 1) * (intensity * 3);
    var y = (Math.random() * 2 - 1) * (intensity * 3);
    var rotate = (Math.random() * 2 - 1) * (intensity * 2);
    commandEffectsDiv.style.translate = x + "px " + y + "px";
    commandEffectsDiv.style.rotate = rotate + "deg";
  }, 1000 / 60);
  setTimeout(() => {
    commandEffectsDiv.style.translate = "";
    commandEffectsDiv.style.rotate = "";
    commandEffectsDiv.style.filter = "";
    clearInterval(interval);
  }, 1000);
};

com.crash = function () {
  while (true) {}
};

com.redirect = function (url) {
  var a = document.createElement("a");
  a.href = url;
  a.click();
};

com.flash = function () {
  document.body.style.transition = "background 0.2s";
  document.body.style.background = "white";
  setTimeout(() => {
    document.body.style.background = "";
    document.body.style.transition = "background 0.2s";
  }, 200);
};

com.freeze = function () {
  document.body.style.pointerEvents = "none";
  setTimeout(() => {
    document.body.style.pointerEvents = "auto";
  }, 5000);
};

com.confetti = function () {
  confetti.startConfetti();
  setTimeout(() => {
    confetti.stopConfetti();
  }, 2000);
};

com.funni = async function () {
  var img = document.createElement("img");
  img.src = "https://jasonglenevans.github.io/GvbvdxxChatEmojis/MSG_5.png";
  img.style.top = "0";
  img.style.left = "0";
  img.style.position = "fixed";
  img.style.width = "100vw";
  img.style.height = "100vh";
  img.style.pointerEvents = "none";
  var audio = new Audio("sounds/laughing-chihuahua.mp3");
  await audio.play();
  document.body.append(img);
  audio.onended = () => {
    audio.remove();
    img.remove();
  };
};
module.exports = com;


/***/ }),

/***/ 1922:
/***/ ((module) => {

async function fetchAsJSON(url, options) {
  var a = await fetch(url, options);
  var b = await a.json();

  return b;
}

async function fetchAsText(url, options) {
  var a = await fetch(url, options);
  var b = await a.text();

  return b;
}

async function fetchAsBlob(url, options) {
  var a = await fetch(url, options);
  var b = await a.blob();

  return b;
}

async function fetchAsArrayBuffer(url, options) {
  var a = await fetch(url, options);
  var b = await a.arrayBuffer();

  return b;
}

module.exports = {
  fetchAsJSON,
  fetchAsText,
  fetchAsBlob,
  fetchAsArrayBuffer,
  fetch,
};


/***/ }),

/***/ 9808:
/***/ ((module) => {

var hash = window.location.hash;
var curRoom = null;
if (hash) {
  curRoom = hash.slice(1, hash.length);
  if (curRoom.length < 1) {
    curRoom = null;
  }
}
window.addEventListener("hashchange", () => {
  window.location.reload();
});

module.exports = curRoom;


/***/ }),

/***/ 1967:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var accountHelper = __webpack_require__(4592);
__webpack_require__(2547);

(async function () {
  var validated = await accountHelper.checkSessionCookie();
  __webpack_require__(7677);
})();


/***/ }),

/***/ 4461:
/***/ ((module) => {

module.exports = function isSecure() {
  var urlinfo = new URL(window.location.href);
  if (urlinfo.protocol == "https:") {
    return true;
  }
  return false;
};


/***/ }),

/***/ 2547:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var currentRoom = __webpack_require__(9808);
var accountHelper = __webpack_require__(4592);

var rrLoadingScreenText = elements.getGPId("rrLoadingScreenText"); //Gets the loading screen text element.
var randomFactSpan = elements.getGPId("randomFactSpan");

var loadingScreenTextScroll = __webpack_require__(9655);

function returnRandomValueFromArray(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

function loopAnimation() {
  var anim = rrLoadingScreenText.animate(
    [{ opacity: "1" }, { opacity: "0", transform: "translateY(-10px)" }],
    {
      duration: 350,
      iterations: 1,
      easing: "ease-out",
    },
  );

  anim.addEventListener("finish", () => {
    rrLoadingScreenText.textContent = returnRandomValueFromArray(
      loadingScreenTextScroll,
    );
    var anim2 = rrLoadingScreenText.animate(
      [{ opacity: "0", transform: "translateY(10px)" }, { opacity: "1" }],
      {
        duration: 350,
        iterations: 1,
        easing: "ease-out",
      },
    );

    anim2.addEventListener("finish", () => {
      setTimeout(loopAnimation, 2500);
    });
  });
}

loopAnimation();


/***/ }),

/***/ 9655:
/***/ ((module) => {

module.exports = [
  //Not putting them in TXT files just because lazy.
  "Random Rants+ is summoning chaos. Please stand by.",
  "Loading mayhem... please wait responsibly.",
  "Bringing the nonsense online. Hold tight.",
  "Please wait while Random Rants+ bootlegs itself into existence.",
  "Loading: This might take a moment—or an eternity.",
  "Booting up the nonsense core...",
  "Starting the digital hallway fight...",
  "Summoning Jason Touch… cross your fingers.",
  "Randomizing the room names and chaos seed…",
  "We're still pretending this is productive. Hang on.",
  "Synchronizing with school Wi-Fi chaos matrix...",
  "Deploying noise. Brace yourself.",
  "Converting focus time into distraction fuel...",
  "Injecting memes into the HTML...",
  "Starting background chaos...",
  "Loading jokes that might get you detention...",
  "Loading... because instant chaos is too powerful.",
  "Loading mysterious glitch energy...",
  "Loading voice chat mayhem...",
  "Loading soundboard spam...",
  "Loading volume over 9000...",
  "Injecting Random into the Rants... almost there.",
  "Loading highly unstable soundboard physics...",
  "Injecting unfiltered hallway drama into RAM...",
  "Enabling turbo-mic mode... scream responsibly.",
  "Generating ‘totally normal’ AI characters...",
  "Stabilizing your friend's laggy potato Chromebook...",
  "Connecting to school Wi-Fi... success? (somehow)",
  "Buffering... because someone opened 9 tabs of YouTube and RR+.",
  "Calibrating chaos engine... please wear headphones.",
  "Unleashing forbidden bracket codes...",
  "Reanimating crashed tabs from the void...",
  "Running on caffeine, memes, and spaghetti code...",
  "Summoning a room full of people who forgot headphones.",
  "Loading chat history with 237 unhinged arguments...",
  "Uploading all known ways to break ;crashTab...",
  "Installing updates for a Chromebook from 2012...",
  "Detecting a teacher. Activating stealth mode.",
  "Fusing school fights with low-res video feeds...",
  "Loading 47 people all trying to spam ;shake at once...",
  "Enabling background chaos even with the lid closed...",
  "Fetching the most cursed camera feeds known to man...",
  "Merging duplicate usernames into one chaotic being...",
  "Reviving crashed logs just to crash again...",
  "Converting keyboard rage into network packets...",
  "Finding the exact moment the mic peaked the loudest...",
  "Aligning the vibe satellites for maximum absurdity...",
  "Downloading memes with questionable educational value...",
  "Launching RR+ on a printer. Why not?",
  "Compiling 800 sound effects into one audio spike...",
  "Holding onto your sanity… failed.",
  "Making Random Rants + even more unhinged...",
  "Trying not to stream your homework folder...",
  "Deploying screen-sharing goblins 👾",
  "Loading code created with school glue...",
  "Making sure your Chromebook is not ready for this...",
  "Loading a 480p video file for no reason...",
  "Talking to ChatGPT about what is going on here...",
  "Getting ready to fry your Chromebooks speakers...",
  "Spawning chaos gremlins into your audio channel...",
  "Buffering sarcasm. Please maintain eye rolls.",
  "Temporarily disabling logic for optimal nonsense...",
  "Converting hallway echoes into stereo lag...",
  "Assembling the digital lunch table gossip...",
  "Ping-ponging your mic input through 5 servers...",
  "Stuck in a boot loop of pure randomness...",
  "Loading glitchy bracket codes from the void...",
  "Rebooting the chaos capacitor… please wait.",
  "Synchronizing chat delay with real-time drama...",
  "Injecting cursed memes into the data stream...",
  "Translating hallway energy into voice distortion...",
  "Preloading 10,000 soundboard taps. Sorry in advance.",
  "Simulating productive learning... failed.",
  "Connecting your signal through 17 VPN tunnels...",
  "Scrambling usernames for maximum confusion...",
  "Activating advanced drama rendering system...",
  "Decoding lag into a new language...",
  "Waiting for your Chromebook to remember how to Wi-Fi...",
  "Detecting unauthorized vibes… ignoring them.",
  "Mapping the emotional range of ;uh...",
  "Preloading arguments from last period...",
  "Overheating the nonsense engine… cooling down...",
  "Detecting loudest possible soundboard combo...",
  "Attempting to render chaos in 144p...",
  "Disabling common sense module...",
  "Summoning ‘that one kid’ who never mutes...",
  "Connecting voice lag to your camera for extra spice...",
  "Training AI to argue with itself...",
  "Embedding chaos into the browser cache...",
  "Casting screen-sharing spells... backfired.",
  "Launching in debug mode: chaos only.",
  "Assigning vibe roles based on profile pics...",
  "Installing the ‘make everything weird’ plugin...",
  "Preparing your ears for sonic destruction...",
  "Compiling chat energy into glitch packets...",
  "Activating hallway simulator in surround sound...",
  "Slicing chaos into streamable packets...",
  "Resetting user logic... loading nonsense instead...",
  "Installing invisible lag traps...",
  "Setting max decibels to ‘someone sneezed into the mic’...",
  "Converting spilled juice on the keyboard into bugs...",
  "Unmuting everyone at once... oh no.",
  "Resurrecting old group chats for chaos nostalgia...",
  "Preparing a surprise popcat ambush...",
  "Replacing silence with awkward digital stares...",
  "Injecting extra milliseconds of voice delay...",
  "Analyzing keyboard rage patterns...",
  "Connecting chaos to the nearest available speaker...",
  "Installing meme drivers… please don’t unplug.",
  "Downloading update: adds more glitches than it fixes...",
  "Installing virtual desks... upside down.",
  "Scanning for chaos updates... found too many.",
  "Preloading accidental mic moments...",
  "Patching a bug that made everyone too normal...",
  "Disabling firewall against fun...",
  "Retuning chaos to match your mood swings...",
  "Adding 2% logic. System rejected it.",
  "Rewiring the vibe frequency...",
  "Preparing to overload your notifications...",
  "Unlocking new levels of classroom drama...",
  "Reconfiguring chaos levels to 'lunchtime mode'...",
  "Linking you to the closest chaotic neutral peer...",
  "Desyncing messages for comedic effect...",
  "Polishing randomizer with existential dread...",
  "Auto-generating homework excuses...",
  "Attempting to stabilize the meme flux capacitor...",
  "Alert: Someone just triggered ;popcat 300 times.",
  "Activating anti-focus field...",
  "Catching up to 74 missed messages from 2 minutes ago...",
  "Simulating a group project where no one contributes...",
  "Loading... but with extra reverb.",
  "Generating random usernames like 'xX_Rants420_Xx'...",
  "Applying duct tape to your digital classroom...",
  "Your Chromebook might melt. We’re not sorry.",
  "Adding 300ms lag to simulate real classroom chaos...",
  "Replacing your toolbar with chaos buttons...",
  "Tracking how fast the teacher says 'mute yourself'...",
  "Importing classroom gossip from adjacent servers...",
  "Spinning up virtual chaos hamsters...",
  "Executing random command: ;spin ;shake ;crashTab ;uh...",
  "Generating a new vibe… it’s unstable.",
  "Compiling everyone's mic static into white noise...",
  "Uploading all known cat noises to the soundboard...",
  "Turning up the gain... too late.",
  "Analyzing pixelated video feed for chaos signals...",
  "Loading an update that just adds more confusion...",
  "Channeling chaotic energy from nearby Chromebooks...",
  "Injecting just enough lag to ruin the timing...",
  "Applying glitch filter to the chat history...",
  "Slapping the server until it obeys...",
  "Encoding the entire session in 'vibe-only' mode...",
  "Encrypting your sarcasm... decrypted instantly.",
  "Bridging the gap between logic and whatever this is...",
  "Connecting your brain to the chaos cloud...",
  "Adding extra chaos to your clipboard...",
  "Compiling code made entirely of inside jokes...",
  "Trying to make sense of the soundboard... failed.",
  "Pouring energy drink into the server ports...",
  "Spawning a second version of you with a louder mic...",
  "Replaying the most cursed sound from memory...",
  "Starting cursed screen-share session...",
  "Sharing screen... and all your tabs accidentally.",
  "Projecting chaos to the entire room...",
  "Enabling 144p resolution for maximum confusion...",
  "Streaming your desktop... including your weird folder names.",
  "Starting screen-share: viewer discretion advised.",
  "Buffering cursed images… please enjoy responsibly.",
  "Sharing your screen and your secrets...",
  "Broadcasting your lag in real time...",
  "Activating screen-share... now everyone sees the chaos.",
  "Transmitting pixels cursed beyond repair...",
  "Streaming chaos in slideshow mode...",
  "Warning: your screen-share is now everyone's business.",
  "Converting your screen into a chaos beacon...",
  "Sharing your screen... accidentally showing 27 tabs.",
  "Opening screen-share… and unleashing visual noise.",
  "Sharing cursed spreadsheets and forbidden tabs...",
  "Starting screen-share: all typos now public.",
  "Screen-share initiated: hope you closed your memes folder.",
  "Launching screen-share… forgot to mute? Too late.",
  "Screen-share live! Immediately regrets everything.",
  "Transmitting forbidden vibes through your screen...",
  "Screen-sharing lag: now in HD!",
  "Showing everyone how scuffed your desktop really is...",
  "Summoning the ancient artifact known as 'My Screen'...",
  "Starting screen-share… sorry in advance.",
  "Casting cursed Chrome tabs into the void...",
  "Warning: screen-share may cause emotional damage.",
  "Streaming your screen at 1 frame per minute...",
  "Sharing screen… now everyone sees your math mistakes.",
  "Opening GVBPaint... someone's already drawing a Shrek with laser eyes.",
  "Loading cursed masterpieces from 7 different mice...",
  "Summoning shared canvas chaos...",
  "Drawing tools enabled... please use irresponsibly.",
  "GVBPaint is live — now featuring 98% chaos, 2% art.",
  "Collaborative doodling has entered the chat.",
  "Someone just filled the entire canvas with red. Again.",
  "Loading GVBPaint... eraser wars in progress.",
  "Preparing canvas for the next unholy scribble...",
  "Warning: collaborative art may cause regret.",
  "Initializing MS Paint energy with multiplayer mayhem...",
  "Synchronizing chaotic brushstrokes...",
  "Drawing live with 12 people and zero artistic restraint...",
  "GVBPaint canvas found: it's already cursed.",
  "Loading shared drawing... who drew the Among Us again?",
  "Unleashing synchronized scribbles...",
  "Fetching all known inappropriate doodles...",
  "Initializing: one canvas, infinite chaos.",
  "Someone just drew something so cursed, we’re buffering.",
  "Drawing tools syncing... get ready to overwrite each other.",
  "Turning on the lunch room conversation mode...",
  "Getting the cute cat pictures ready...",
  "Lag found. Reason: Too many people smashing the soundboard.",
  'Joining the room called "Goofy car horn sounds"...',
  "Loading 99999MB of nothing but unused code for no reason...",
  "Uploading files to server... Connection unstable.",
  "Filling the site with Jason Touch...",
  "Embedding the randomest site with the randomest rant...",
  "Oops! ChatGPT can't find the meaning of this site.",
  "Initializing the distractionator.",
  "Trying to find the start button… it ran away.",
  "Rendering chaos shaders… GPU crying softly.",
  "Downloading energy from the school vending machine…",
  "Packing your RAM full of unfiltered drama.",
  "Loading… but it's mostly just vibes and static.",
  "Reconstructing the digital cafeteria fight in 3D.",
  "Injecting caffeine into the servers… please hold.",
  "Reactivating everyone's muted mic. Accidentally.",
  "Charging the chaos batteries with hallway energy.",
  "Slipping on digital banana peels... rebooting.",
  "Initiating vibe check... system failed.",
  "Installing bug that makes everything louder.",
  "Rewriting code using pure impulse and zero logic.",
  "Trying to unmute you. Mic disagrees.",
  "Encrypting inside jokes from last semester...",
  "Trying to teach AI sarcasm. Results pending.",
  "Replaying every awkward pause at full volume.",
  "Simulating lag spikes for nostalgic effect.",
  "Turning your Chromebook into a chaos emulator.",
  "Summoning digital goblins to fix your Wi-Fi.",
  "Connecting to the nearest questionable hotspot...",
  "Routing data through a toaster... for science.",
  "Ping too high? Just call it a vibe delay.",
  "Your internet provider just rage-quit.",
  "Wi-Fi signal weaker than your math grade.",
  "Detecting 3 Chromebooks running RR+ on one desk.",
  "Sending packets of chaos to the void.",
  "Lagging on purpose for dramatic timing.",
  "Stealing Wi-Fi from the teacher’s smartboard.",
  "Server decided to go outside. We respect that.",
  "Compiling every sound you shouldn’t play in class.",
  "Mic check... it’s screaming back.",
  "Echo enabled. Now with more regret.",
  "Recording the silence between drama.",
  "Soundboard limit removed. May God help us.",
  "Reverb set to ‘haunted hallway’.",
  "Voice channel full of chaotic energy. Proceed anyway.",
  "Loading forbidden sound effects… why did we allow this?",
  "Calibrating mic to peak at all the wrong times.",
  "Auto-tuning your voice into hallway gossip.",
  "Drawing tools are live. Therapy may be required.",
  "Eraser war initiated. There will be casualties.",
  "Canvas cursed in 3... 2... now.",
  "Rendering art that would confuse your art teacher.",
  "Spray paint tool engaged. Rip your sanity.",
  "Importing doodles from the darkest timeline…",
  "Loading canvas... someone’s already written ‘Ligma’.",
  "Canvas syncing with 12 chaotic brushstrokes at once.",
  "Streaming chaos in slideshow mode...",
  "Warning: your screen-share is now everyone's business.",
  "Sharing cursed spreadsheets and forbidden tabs...",
  "Transmitting pixels cursed beyond repair...",
  "Broadcasting your lag in real time...",
];


/***/ }),

/***/ 7502:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialog = __webpack_require__(8149);
var sws = __webpack_require__(6211);
var userState = __webpack_require__(23);
var uploadFileAsURL = __webpack_require__(9183);

var movingMediaTexts = [
  "Broadcasting at 144p, just kidding... or are we?",
  "Your tabs are now everyone's business",
  "Don’t alt-tab into your search history!",
  "Lag is temporary, screenshots are forever",
  "Pixel-perfect judgment is happening now",
  "Trying not to stream your homework folder...",
  "Your screen is loud and proud",
  "Hope you closed that other tab",
  "Stream stabilized... for now",
  "Initializing RantVision™ tech",
  "Zooming in on your chaos",
  "Deploying screen-sharing goblins",
  "Everyone is judging your cursor speed",
  "Virtual popcorn ready",
  "Screencast engaged. Panic level: 2",
  "Loading pixel juice...",
  "Building lag-resistant warp tunnel",
  "Beaming your gameplay to the universe",
  "Calibrating chaos stream",
  "Tapping into the multi-screenverse",
];

var noInstantPlayNotice =
  "This media is not instant play, you need to manually create an room/server and join it. \nDo you still want to continue?";

async function fetchAsJSON(url, otherStuff) {
  var f = await fetch(url, otherStuff);
  var text = await f.text();
  var json = JSON.parse(text);

  return json;
}
async function fetchAsText(url, otherStuff) {
  var f = await fetch(url, otherStuff);
  var text = await f.text();

  return text;
}

var chooseMediaButton = elements.getGPId("chooseMediaButton");
var mediaContentDiv = elements.getGPId("mediaContentDiv");
var screenshareClientObject = null;
var screenshareCode = null;
var screenshareStream = null;
var mediaVideo = null;
mediaContentDiv.hidden = true;
function waitForCam() {
  return navigator.mediaDevices.getUserMedia({
    video: true,
  });
}
function stopScreenshareStream() {
  screenshareRunning = false;
  if (!screenshareStream) {
    return;
  }
  try {
    screenshareStream.getTracks().forEach((track) => {
      if (track) {
        track.stop();
      }
    });
  } catch (e) {
    console.warn(
      `Failed to stop screenshare stream, screenshare stream must be closed manually.`,
    );
  }
  screenshareStream = null;
}
function hideMediaContent() {
  var a = [];
  for (var c of mediaContentDiv.children) {
    a.push(c);
  }
  for (var c of a) {
    c.remove();
  }
  mediaContentDiv.hidden = true;
}
function removeMediaDivContent() {
  var a = [];
  for (var c of mediaContentDiv.children) {
    a.push(c);
  }
  for (var c of a) {
    c.remove();
  }
}

function getMediaPlayingMenuBar() {
  return {
    element: "div",
    className: "mediaContentMenuBar",
    children: [
      {
        element: "div",
        className: "mediaContentItem mediaContentItemClickable",
        textContent: "Stop",
        title: "Stop the currently playing media",
        eventListeners: [
          {
            event: "click",
            func: function () {
              sws.send(
                JSON.stringify({
                  type: "media",
                  command: "mediaResetRequest",
                }),
              );
              stopScreenshareStream();
            },
          },
        ],
      },
      {
        element: "div",
        className: "mediaContentItem mediaContentItemClickable",
        title: "This will try to mute or unmute the media, if supported.",
        GPWhenCreated: function (elm) {
          if (mediaVideo) {
            if (mediaVideo.muted) {
              elm.textContent = "Unmute";
            } else {
              elm.textContent = "Mute";
            }
          } else {
            elm.hidden = true;
          }
        },
        eventListeners: [
          {
            event: "click",
            func: function () {
              if (mediaVideo) {
                mediaVideo.muted = !mediaVideo.muted;
                if (mediaVideo.muted) {
                  this.textContent = "Unmute";
                } else {
                  this.textContent = "Mute";
                }
              } else {
                dialog.alert("Option unavailible for this type of media.");
              }
            },
          },
        ],
      },
    ],
  };
}

function createMediaScreenshareVideo(code) {
  if (code !== screenshareCode) {
    if (screenshare) {
      try {
        screenshare.closeConnection();
        stopScreenshareStream();
      } catch (e) {
        console.warn(`Error stopping screenshare`, e);
      }
    }
  }

  if (screenshareClientObject) {
    try {
      screenshareClientObject.closeConnection();
    } catch (e) {
      console.warn(`Error stopping screenshareClientObject`, e);
    }
  }

  removeMediaDivContent();
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100%";

  var dom = elements.createElementsFromJSON([
    {
      element: "video",
      className: "screenshareVideo",
      gid: "ssVideo",
      muted: true,
      GPWhenCreated: function (elm) {
        //this function is used to get the element as soon as its values and everything else is applied.
        mediaVideo = elm;
      },
    },
    getMediaPlayingMenuBar(),
  ]);

  var videoElement = elements.getGPId("ssVideo");

  screenshareClientObject = window.screenShareClient.connectTo(
    code,
    true,
    function (stream) {
      videoElement.srcObject = stream;
      videoElement.play();
    },
    () => {
      videoElement.pause();
      videoElement.remove();
      mediaVideo = null;
    },
  );

  elements.appendElements(div, dom);

  mediaContentDiv.append(div);
}

var embedMediaElement = null;

function createEmbedURLMedia(url) {
  removeMediaDivContent();
  if (embedMediaElement) {
    embedMediaElement.src = "about:blank";
    embedMediaElement.remove();
  }
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100%";

  var dom = elements.createElementsFromJSON([
    {
      element: "embed",
      className: "mediaEmbed",
      gid: "mEmbed",
      src: url,
      GPWhenCreated: function (elm) {
        //this function is used to get the element as soon as its values and everything else is applied.
        embedMediaElement = elm;
      },
    },
    getMediaPlayingMenuBar(),
  ]);

  elements.appendElements(div, dom);

  mediaContentDiv.append(div);
}

function surroundFlexboxDiv(c) {
  return {
    element: "div",
    style: { display: "flex" },
    children: c,
  };
}

var screenshareRunning = false;
var screenshare = null;

function screenshareStopFunction() {
  screenshareRunning = false;
  if (screenshareClientObject) {
    try {
      screenshareClientObject.closeConnection();
    } catch (e) {
      console.warn(`Error stopping screenshareClientObject`, e);
    }
  }
  if (screenshare) {
    try {
      screenshare.closeConnection();
    } catch (e) {
      console.warn(`Error stopping screenshare`, e);
    }
  }
  screenshareCode = null;
}

async function startScreenshareButton(stream) {
  if (window.screenShareClient) {
    try {
      stopScreenshareStream();
      screenshareStream = stream;
      var loadingMediaDiv = doLoadingMediaScreen();

      async function loadScreenshare(force) {
        try {
          if (!force) {
            if (!screenshareRunning) {
              return;
            }
          }
          screenshare = await window.screenShareClient.newHost(
            screenshareStream,
            true,
            function () {
              screenshareCode = null;
              setTimeout(() => {
                loadScreenshare();
              }, 500);
            },
          );
          await (function () {
            return new Promise((accept) => {
              setTimeout(accept, 500);
            });
          })();
          if (loadingMediaDiv) {
            loadingMediaDiv.remove();
            loadingMediaDiv = null;
          }
          if (screenshareStream) {
            screenshareStream.getTracks().forEach((track) => {
              track.addEventListener("ended", () => {
                sws.send(
                  JSON.stringify({
                    type: "media",
                    command: "mediaResetRequest",
                  }),
                );
              });
            });
          }
          screenshareCode = screenshare.host.key;
          sws.send(
            JSON.stringify({
              type: "media",
              command: "screenshareRunning",
              code: screenshare.host.key,
            }),
          );
          if (force) {
            screenshareRunning = true;
          }
        } catch (e) {
          if (loadingMediaDiv) {
            loadingMediaDiv.remove();
            loadingMediaDiv = null;
          }
          dialog.alert(e);
        }
      }
      sws.send(
        JSON.stringify({
          type: "media",
          command: "mediaResetRequest",
        }),
      );
      loadScreenshare(true);
      screenshareCode = null;
    } catch (e) {
      dialog.alert(
        "Screenshare failed, does your current web browser support screen sharing?",
      );
    }
  } else {
    dialog.alert(
      "The external screenshare runtime script is currently unavailible, please refresh your page to fix this error.",
    );
  }
}

function mediaStopScreenshare() {
  stopScreenshareStream();
  screenshareStopFunction();
}

function messageHandler(json) {
  if (json.command == "screenshareRun") {
    hideMediaContent();
    mediaContentDiv.hidden = false;
    if (window.screenShareClient) {
      createMediaScreenshareVideo(json.code);
    }
  }
  if (json.command == "mediaEmbedRun") {
    hideMediaContent();
    mediaContentDiv.hidden = false;
    createEmbedURLMedia(json.url);
  }
  if (json.command == "reset") {
    hideMediaContent();
    mediaContentDiv.hidden = true;
    mediaVideo = null;
    if (embedMediaElement) {
      embedMediaElement.src = "about:blank";
      embedMediaElement.remove();
      embedMediaElement = null;
    }
  }
}

function returnRandomValueFromArray(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

function doLoadingMediaScreen() {
  var div = document.createElement("div");
  var stopAnimating = null;

  var dom = elements.createElementsFromJSON([
    //Background
    {
      element: "div",
      className: "dialogBackground",
    },
    //Dialog box
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
          textContent: "Hold up 🎬",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent: "Media’s spinning up... grab some Fanta 🍊",
        },
        {
          element: "br",
        },
        {
          element: "span",
          style: {
            fontWeight: "bold",
          },
          GPWhenCreated: function (elm) {
            var anim = null;
            var stopped = false;
            stopAnimating = function () {
              anim.cancel();
              stopped = true;
            };
            function loopAnimation() {
              anim = elm.animate(
                [
                  { opacity: "1" },
                  { opacity: "0", transform: "translateY(-6px)" },
                ],
                {
                  duration: 200,
                  iterations: 1,
                  easing: "ease-out",
                },
              );

              anim.addEventListener("finish", () => {
                elm.textContent = returnRandomValueFromArray(movingMediaTexts);
                anim = elm.animate(
                  [
                    { opacity: "0", transform: "translateY(6px)" },
                    { opacity: "1" },
                  ],
                  {
                    duration: 200,
                    iterations: 1,
                    easing: "ease-out",
                  },
                );

                anim.addEventListener("finish", () => {
                  if (!stopped) {
                    setTimeout(loopAnimation, 2500);
                  }
                });
              });
            }

            loopAnimation();
          },
        },
      ],
    },
  ]);
  elements.appendElements(div, dom);
  document.body.append(div);

  return {
    remove: function () {
      div.remove();
      stopAnimating();
    },
  };
}

async function doMediaSelect() {
  if (!userState.permissions.media) {
    dialog.alert(userState.noPermissionDialog);
    return;
  }
  try {
    var div = document.createElement("div");

    var dom = elements.createElementsFromJSON([
      //Background
      {
        element: "div",
        className: "dialogBackground",
      },
      //Dialog box

      {
        element: "div",
        className: "whiteBox centerMiddle popupDialogAnimation",
        style: {
          overflow: "auto",
        },
        children: [
          {
            element: "span",
            style: {
              fontSize: "30px",
              fontWeight: "bold",
            },
            textContent: "Start media",
          },
          {
            element: "div",
            style: {
              margin: "8px 0",
              padding: "10px",
              backgroundColor: "#fff8d1",
              border: "1px solid #ffd700",
              borderRadius: "6px",
              fontSize: "14px",
              color: "#444",
              lineHeight: "1.4",
            },
            textContent:
              "💡 Tip: Only one media option can be active at a time in a room.\n" +
              "Choose a method that fits what you want to share.",
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
                element: "div",
                style: {
                  padding: "10px 10px",
                },
                children: [
                  {
                    element: "div",
                    className: "divButton roundborder",
                    eventListeners: [
                      {
                        event: "click",
                        func: async function (e) {
                          e.preventDefault();
                          div.remove();
                          div = null;
                          try {
                            var stream = await waitForCam();
                            startScreenshareButton(stream);
                          } catch (e) {
                            dialog.alert(
                              "Camera request failed, does your current browser support camera?\nCheck and see if your camera is blocked.",
                            );
                          }
                        },
                      },
                    ],
                    children: [
                      surroundFlexboxDiv([
                        {
                          element: "img",
                          src: "images/screenshare.svg",
                          style: { height: "25px" },
                        },
                        {
                          element: "span",
                          textContent: "Show & tell Camera (WebRTC)",
                        },
                      ]),
                    ],
                  },
                  {
                    element: "div",
                    className: "divButton roundborder",
                    eventListeners: [
                      {
                        event: "click",
                        func: async function (e) {
                          e.preventDefault();
                          div.remove();
                          div = null;
                          try {
                            var stream =
                              await navigator.mediaDevices.getDisplayMedia({
                                video: {
                                  displaySurface: "browser",
                                  cursor: "always",
                                },
                                audio: {
                                  suppressLocalAudioPlayback: false,
                                  echoCancellation: false,
                                  noiseSuppression: false,
                                  sampleRate: 44100,
                                },
                                preferCurrentTab: false,
                                selfBrowserSurface: "include",
                                systemAudio: "include",
                                surfaceSwitching: "include",
                                monitorTypeSurfaces: "include",
                              });
                            startScreenshareButton(stream);
                          } catch (e) {
                            dialog.alert(
                              "Screenshare failed, does your current web browser support screen sharing?",
                            );
                          }
                        },
                      },
                    ],
                    children: [
                      surroundFlexboxDiv([
                        {
                          element: "img",
                          src: "images/screenshare.svg",
                          style: { height: "25px" },
                        },
                        {
                          element: "span",
                          textContent: "Screenshare (WebRTC)",
                        },
                      ]),
                    ],
                  },
                  //No more NES, cause the glitch me servers going down and also the nintendo may get on me for piracy if it still exists. (im just 14 years old at this time, please nintendo don't sue me)
                  /*{
                    element: "div",
                    className: "divButton roundborder",
                    eventListeners: [
                      {
                        event: "click",
                        func: async function (e) {
                          e.preventDefault();
                          div.remove();
                          div = null;

                          var loadingMediaDiv = doLoadingMediaScreen();
                          var nesid =
                            "randomrants" +
                            Math.round(Math.random() * 100000000);
                          try {
                            var json = {
                              owner: "unused",
                              public: false,
                              info: "Used for random rants +",
                              name: nesid,
                              chatEnabled: false,
                            };

                            var status = await fetchAsText(
                              `https://gvbneslive-api.glitch.me/rooms/create`,
                              {
                                method: "POST",
                                body: JSON.stringify(json),
                              }
                            );

                            if (status.startsWith("Error")) {
                              throw new Error(status);
                            }

                            loadingMediaDiv.remove();
                          } catch (e) {
                            loadingMediaDiv.remove();
                            dialog.alert(
                              `Unknown error happened when trying to start NES Media: ` +
                                e
                            );
                            return;
                          }

                          sws.send(
                            JSON.stringify({
                              type: "media",
                              command: "mediaResetRequest",
                            })
                          );
                          sws.send(
                            JSON.stringify({
                              type: "media",
                              command: "mediaEmbedRunning",
                              url:
                                "https://gvb-nes-live.glitch.me/?room=" +
                                encodeURIComponent(nesid),
                            })
                          );
                        },
                      },
                    ],
                    children: [
                      surroundFlexboxDiv([
                        {
                          element: "img",
                          src: "images/nes.png",
                          style: { height: "25px" },
                        },userState.on("permissionUpdate", (name,value) => {
      if (name == "soundboard") {
        showSoundboardButton.hidden = !value; //Show soundboard button IF has permission to play the soundboard.
      }
    });
                        {
                          element: "span",
                          textContent:
                            "Nintendo Entertainment System (Emulator)",
                        },
                      ]),
                    ],
                  },*/
                  {
                    element: "div",
                    className: "divButton roundborder",
                    eventListeners: [
                      {
                        event: "click",
                        func: async function (e) {
                          e.preventDefault();
                          div.remove();
                          div = null;
                          var embedURL = await dialog.prompt(
                            "Type a link to embed to.\nCertian websites may block embedding for security purposes.\nClick cancel or type nothing to cancel.",
                          );
                          if (embedURL) {
                            sws.send(
                              JSON.stringify({
                                type: "media",
                                command: "mediaResetRequest",
                              }),
                            );
                            sws.send(
                              JSON.stringify({
                                type: "media",
                                command: "mediaEmbedRunning",
                                url: embedURL,
                              }),
                            );
                          }
                        },
                      },
                    ],
                    children: [
                      surroundFlexboxDiv([
                        {
                          element: "img",
                          src: "images/link.svg",
                          style: { height: "25px" },
                        },
                        {
                          element: "span",
                          textContent: "Embed",
                        },
                      ]),
                    ],
                  },

                  {
                    element: "div",
                    className: "divButton roundborder",
                    eventListeners: [
                      {
                        event: "click",
                        func: async function (e) {
                          e.preventDefault();
                          div.remove();
                          div = null;
                          var input = document.createElement("input");
                          input.onchange = async function () {
                            if (input.files[0]) {
                              var file = input.files[0];
                              var loadingMediaDiv = doLoadingMediaScreen();
                              var url = await uploadFileAsURL(file);
                              loadingMediaDiv.remove();
                              if (url) {
                                sws.send(
                                  JSON.stringify({
                                    type: "media",
                                    command: "mediaResetRequest",
                                  }),
                                );
                                sws.send(
                                  JSON.stringify({
                                    type: "media",
                                    command: "mediaEmbedRunning",
                                    url: url,
                                  }),
                                );
                              }
                            }
                          };
                          input.type = "file";
                          input.accept = "video/*, audio/*";
                          input.click();
                        },
                      },
                    ],
                    children: [
                      surroundFlexboxDiv([
                        {
                          element: "img",
                          src: "images/file.svg",
                          style: { height: "25px" },
                        },
                        {
                          element: "span",
                          textContent:
                            "Play video/audio (Short files recommended)",
                        },
                      ]),
                    ],
                  },

                  //This is not going to die (i hope), i'm just working on making it work with render.com

                  /*
                  {
                    element: "div",
                    className: "divButton roundborder",
                    eventListeners: [
                      {
                        event: "click",
                        func: async function (e) {
                          e.preventDefault();
                          div.remove();
                          div = null;

                          var loadingMediaDiv = doLoadingMediaScreen();

                          try {
                            const response = await fetch(
                              "https://gvbpaint-realtime-ws.glitch.me/room/create"
                            );
                            const { roomId } = await response.json();

                            loadingMediaDiv.remove();

                            const embedURL = `https://gvbpaint-realtime.glitch.me/?server=${encodeURIComponent(
                              "wss://gvbpaint-realtime-ws.glitch.me/" + roomId
                            )}`;

                            sws.send(
                              JSON.stringify({
                                type: "media",
                                command: "mediaResetRequest",
                              })
                            );
                            sws.send(
                              JSON.stringify({
                                type: "media",
                                command: "mediaEmbedRunning",
                                url: embedURL,
                              })
                            );
                          } catch (err) {
                            loadingMediaDiv.remove();
                            dialog.alert(
                              "Error creating collaborative canvas room:\n" +
                                err
                            );
                          }
                        },
                      },
                    ],
                    children: [
                      surroundFlexboxDiv([
                        {
                          element: "img",
                          src: "images/brush.svg",
                          style: { height: "25px" },
                        },
                        {
                          element: "span",
                          textContent: "Collaborative canvas (Modified gvbpaint)",
                        },
                      ]),
                    ],
                  }, */
                  {
                    element: "br",
                  },
                  {
                    element: "div",
                    className: "divButton roundborder",
                    textContent: "Close",
                    eventListeners: [
                      {
                        event: "click",
                        func: function () {
                          div.remove();
                          div = null;
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
    ]);
    elements.appendElements(div, dom);
    document.body.append(div);
  } catch (e) {
    window.alert(e);
  }
}

var mediaHelper = {
  onMessage: messageHandler,
  onReconnect: function () {
    stopScreenshareStream();
  },
};

chooseMediaButton.addEventListener("click", (e) => {
  e.preventDefault();
  doMediaSelect();
});

userState.on("permissionUpdate", (name, value) => {
  if (name == "media") {
    chooseMediaButton.hidden = !value; //Show button IF has permission to do so.
  }
});

module.exports = mediaHelper;


/***/ }),

/***/ 7155:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var accountHelper = __webpack_require__(4592);

var roomSelect = __webpack_require__(7572);

var menuBar = elements.getGPId("menuBar");

var menuItems = [
  {
    element: "div",
    className: "menuBarItemLogo",
    children: [
      {
        element: "img",
        src: "images/randomrants-plus.svg",
        style: {
          height: "100%",
        },
      },
    ],
    eventListeners: [
      {
        event: "click",
        func: function () {
          window.location.href = "/";
        },
      },
    ],
  },
  {
    element: "div",
    className: "menuBarItem",
    textContent: "Manage rooms",
    eventListeners: [
      {
        event: "click",
        func: function () {
          roomSelect.show();
        },
      },
    ],
  },
  {
    element: "div",
    className: "menuBarItem",
    textContent: "Quick join",
    eventListeners: [
      {
        event: "click",
        func: function () {
          window.location.href = "/join";
        },
      },
    ],
  },
];

var menuDOM = elements.createElementsFromJSON(menuItems);
elements.appendElements(menuBar, menuDOM);


/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);

var sws = __webpack_require__(6211);

var messageSendButton = elements.getGPId("messageSendButton");
var messageInputBox = elements.getGPId("messageInputBox");

var myChatHistory = [];
var chatHistoryNumber = 0;

function sendMessageFromTextBox() {
  var message = messageInputBox.value;
  var messageTrimmed = message.trim();
  if (messageTrimmed.length < 1) {
    return;
  }
  if (messageTrimmed.startsWith("@")) {
    var splitMessage = messageTrimmed.split(" ");
    var targetUsername = splitMessage[0].slice(1); //Remove the @ symbol.
    var privateMessage = splitMessage.slice(1).join(" ");

    if (!targetUsername) {
      dialogs.alert("You need to type a username, example: @someone hello!");
      return;
    }
    if (!privateMessage) {
      dialogs.alert("The private message was empty");
      return;
    }
    if (privateMessage.trim().length < 1) {
      dialogs.alert("The private message was empty");
      return;
    }

    sws.send(
      JSON.stringify({
        type: "postMessagePrivate",
        message: privateMessage,
        targetUser: targetUsername,
      }),
    );

    return;
  }

  sws.send(
    JSON.stringify({
      type: "postMessage",
      message,
    }),
  );
  myChatHistory.push(message); // Add to chat history.
  myChatHistory = myChatHistory.slice(-100); // Keep only the last 100 messages to try to avoid memory overflow.
  chatHistoryNumber = myChatHistory.length; // Reset to latest message position.
}

messageSendButton.addEventListener("click", function () {
  sendMessageFromTextBox();
  messageInputBox.value = "";
});

messageInputBox.addEventListener("input", function () {
  sws.send(
    JSON.stringify({
      type: "typing",
    }),
  );
});

messageInputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessageFromTextBox();
    messageInputBox.value = "";
    e.preventDefault();
    return;
  }

  if (e.key === "ArrowUp") {
    if (chatHistoryNumber > 0) {
      chatHistoryNumber--;
      messageInputBox.value = myChatHistory[chatHistoryNumber];
    }
    e.preventDefault();
    return;
  }

  if (e.key === "ArrowDown") {
    if (chatHistoryNumber < myChatHistory.length) {
      chatHistoryNumber++;
      messageInputBox.value = myChatHistory[chatHistoryNumber] || "";
    }
    e.preventDefault();
    return;
  }
});


/***/ }),

/***/ 479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var accountHelper = __webpack_require__(4592);
var shtml = __webpack_require__(472);
var cacheBust = __webpack_require__(5667);

function generateMessageDiv(
  username,
  displayName,
  messageHTML,
  isServerMessage,
  userColor,
) {
  var pfp = accountHelper.getProfilePictureURL(username);
  var color = userColor;
  if (isServerMessage) {
    color = "var(--server-notifcation-color)";
    pfp = "images/warningsign.svg";
  }
  var noUndefinedUsername = displayName;
  if (username) {
    noUndefinedUsername = "Click here to reply to this user";
  }
  var realUserStyles = " ";
  if (username) {
    realUserStyles += "replyableUsernameSpan";
  }
  var dom = elements.createElementsFromJSON([
    {
      element: "div",
      children: [
        {
          element: "div",
          className: "messageContainer",
          children: [
            {
              element: "div",
              children: [
                {
                  element: "img",
                  className: "profile profilePictureMessage",
                  src: cacheBust(pfp),
                },
              ],
            },
            {
              element: "span",
              className: "usernameSpan" + realUserStyles,
              textContent: displayName + ":",
              title: noUndefinedUsername,
              style: {
                color: color,
              },
              eventListeners: [
                {
                  event: "click",
                  func: function () {
                    if (!username) {
                      return;
                    }
                    var messageInputBox = elements.getGPId("messageInputBox");
                    var message = messageInputBox.value;
                    var messageTrimmed = message.trim();
                    if (messageTrimmed.startsWith("@")) {
                      var splitMessage = messageTrimmed.split(" ");
                      var targetUsername = splitMessage[0].slice(1); //Remove the @ symbol.
                      var privateMessage = splitMessage.slice(1).join(" ");

                      messageInputBox.value =
                        "@" + username + " " + privateMessage;
                    } else {
                      messageInputBox.value =
                        "@" + username + " " + messageInputBox.value;
                    }
                  },
                },
              ],
            },
            {
              element: "span", //I don't know how else to add a whitespace.
              className: "usernameSpan",
              innerHTML: "&nbsp;",
            },
            {
              element: "span",
              className: "messageSpan",
              innerHTML: messageHTML,
            },
          ],
        },
      ],
    },
  ]);

  return dom[0]; //Since there is only one element in the array (message container), just return the first of it.
}

module.exports = generateMessageDiv;


/***/ }),

/***/ 438:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var microphones = {};

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);

var microphoneUsageTexts = elements.getGPId("microphoneUsageTexts");

function createAudioElement() {
  var audio = document.createElement("audio");
  return audio;
}

var userMicrophones = {};

microphones.start = function (id, code, displayName, userColor, isSelf) {
  var ssc = window.screenShareClient;
  if (ssc) {
    if (userMicrophones[id]) {
      microphones.end(id);
    }
    var userMicrophone = {};
    var audioElement = createAudioElement();
    userMicrophone.audioElement = audioElement;
    userMicrophone.isSelf = isSelf;

    var span = document.createElement("span");
    span.className = "isTalkingSpan";
    span.style.color = userColor;
    span.textContent = `${displayName} is talking.`;
    span.style.pointerEvents = "none";

    userMicrophone.span = span;
    microphoneUsageTexts.append(span);

    userMicrophone.ss = window.screenShareClient.connectTo(
      code,
      true,
      function (stream) {
        if (!isSelf) {
          audioElement.srcObject = stream;
          try {
            audioElement.play();
          } catch (e) {}
        }
      },
      () => {},
    );

    userMicrophones[id] = userMicrophone;
  }
};

microphones.end = function (id) {
  var ssc = window.screenShareClient;
  if (ssc) {
    if (!userMicrophones[id]) {
      return;
    }
    var userMicrophone = userMicrophones[id];
    try {
      userMicrophone.ss.closeConnection();
    } catch (e) {}

    userMicrophone.audioElement.pause(); //Pause audio.

    //Remove the src object and other stuff.
    userMicrophone.audioElement.removeAttribute("src"); // empty source
    userMicrophone.audioElement.srcObject = null;
    userMicrophone.audioElement.load();

    //To avoid memory leaks, all elements will be removed.
    userMicrophone.audioElement.remove();
    userMicrophone.span.remove();

    //Dispose of the userMicrophone.
    userMicrophones[id] = undefined;

    //Just to make sure its actually disposed, filter out any empty values in userMicrophones.
    var newObjects = {};
    for (var id of Object.keys(userMicrophones)) {
      if (userMicrophones[id]) {
        newObjects[id] = userMicrophones[id];
      }
    }
    userMicrophones = newObjects;
  }
};

microphones.endAll = function () {
  for (var id of Object.keys(userMicrophones)) {
    microphones.end(id);
  }
};

microphones.tick = function () {
  for (var id of Object.keys(userMicrophones)) {
    if (userMicrophones[id]) {
      var userMicrophone = userMicrophones[id];

      if (!userMicrophone.isSelf) {
        try {
          userMicrophone.audioElement.play();
        } catch (e) {}
      }
    }
  }
};

module.exports = microphones;


/***/ }),

/***/ 405:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var sws = __webpack_require__(6211);

var toggleButton = elements.getGPId("toggleCameraButton");

function startRunningStream() {
  return navigator.mediaDevices.getUserMedia({
    video: true,
  });
}

var contentRunning = false;
var contentSS = null;
var contentStream = null;

function setButtonText(t) {
  var buttonTexts = {
    starting: '<img src="images/cam.svg" height="17">'+"Enabling camera...",
    stop: '<img src="images/cam.svg" height="17">'+"Disable camera",
    start: '<img src="images/cam.svg" height="17">'+"Enable camera",
  };
  toggleButton.innerHTML = buttonTexts[t];
}

setButtonText("start");
toggleButton.addEventListener("click", async () => {
  if (toggleButton.disabled) {
    return;
  }
  if (contentStream) {
    contentStream.getTracks().forEach((track) => {
      if (track) {
        track.stop();
      }
    });
  }
  if (!contentRunning) {
    setButtonText("starting");
    try {
      toggleButton.disabled = true;
      var stream = await startRunningStream();
    } catch (e) {
      toggleButton.disabled = false;
      dialogs.alert(`Unable to start camera because ${e}.`);
      setButtonText("start");
      return;
    }

    contentRunning = true;

    async function doCamera() {
      if (!contentRunning) {
        return;
      }

      contentSS = await window.screenShareClient.newHost(
        contentStream,
        true,
        function () {
          contentSS = null;
          doCamera();
        },
      );
    }
    contentStream = stream;
    try {
      toggleButton.disabled = true;
      await doCamera();
      setButtonText("stop");
      toggleButton.disabled = false;
    } catch (e) {
      toggleButton.disabled = false;
      contentStream.getTracks().forEach((track) => {
        if (track) {
          track.stop();
        }
      });
      contentStream = null;
      dialogs.alert("Camera internal server error: " + e);
      setButtonText("start");
    }
  } else {
    contentRunning = false;
    contentSS.closeConnection();
    sws.send(
      JSON.stringify({
        type: "setCameraCode",
        code: null,
      }),
    );

    contentStream.getTracks().forEach((track) => {
      if (track) {
        track.stop();
      }
    });
    contentStream = null;
    setButtonText("start");
  }
});

setInterval(() => {
  if (contentRunning) {
    if (!contentSS) {
      return;
    }
    sws.send(
      JSON.stringify({
        type: "setCameraCode",
        code: contentSS.host.key,
      }),
    );
  }
}, 1000 / 20);


/***/ }),

/***/ 6238:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var sws = __webpack_require__(6211);

var toggleButton = elements.getGPId("toggleMicrophoneButton");

var contentRunning = false;
var contentSS = null;
var contentStream = null;

function startRunningStream() {
  return navigator.mediaDevices.getUserMedia({
    audio: true,
  });
}

function setButtonText(t) {
  var buttonTexts = {
    starting: '<img src="images/mic.svg" height="17">'+"Enabling microphone...",
    stop: '<img src="images/mic.svg" height="17">'+"Disable microphone",
    start: '<img src="images/mic.svg" height="17">'+"Enable microphone",
  };
  toggleButton.innerHTML = buttonTexts[t];
}

setButtonText("start");
toggleButton.addEventListener("click", async () => {
  if (toggleButton.disabled) {
    return;
  }
  if (contentStream) {
    contentStream.getTracks().forEach((track) => {
      if (track) {
        track.stop();
      }
    });
  }
  if (!contentRunning) {
    setButtonText("starting");
    try {
      toggleButton.disabled = true;
      var stream = await startRunningStream();
    } catch (e) {
      toggleButton.disabled = false;
      dialogs.alert(`Unable to start camera because ${e}.`);
      setButtonText("start");
      return;
    }

    contentRunning = true;

    async function doCamera() {
      if (!contentRunning) {
        return;
      }

      contentSS = await window.screenShareClient.newHost(
        contentStream,
        true,
        function () {
          contentSS = null;
          doCamera();
        },
      );
    }
    contentStream = stream;
    try {
      toggleButton.disabled = true;
      await doCamera();
      setButtonText("stop");
      toggleButton.disabled = false;
    } catch (e) {
      toggleButton.disabled = false;
      contentStream.getTracks().forEach((track) => {
        if (track) {
          track.stop();
        }
      });
      contentStream = null;
      dialogs.alert("Camera internal server error: " + e);
      setButtonText("start");
    }
  } else {
    contentRunning = false;
    contentSS.closeConnection();
    sws.send(
      JSON.stringify({
        type: "setMicrophoneCode",
        code: null,
      }),
    );

    contentStream.getTracks().forEach((track) => {
      if (track) {
        track.stop();
      }
    });
    contentStream = null;
    setButtonText("start");
  }
});

setInterval(() => {
  if (contentRunning) {
    if (!contentSS) {
      return;
    }
    sws.send(
      JSON.stringify({
        type: "setMicrophoneCode",
        code: contentSS.host.key,
      }),
    );
  }
}, 1000 / 20);


/***/ }),

/***/ 3874:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var sounds = __webpack_require__(1191);

const clickableClasses = ["divButton"]; //Handling for div button styles.

document.addEventListener("click", (e) => {
  let el = e.target;

  while (el && el !== document.body) {
    const style = getComputedStyle(el);
    const isClickable =
      typeof el.onclick === "function" ||
      el.getAttribute("onclick") !== null ||
      style.cursor === "pointer" ||
      el.getAttribute("role") === "button" ||
      clickableClasses.some((cls) => el.classList.contains(cls)) ||
      el.tabIndex >= 0;

    if (isClickable) {
      sounds.play("select", 1);
      return;
    }

    el = el.parentElement;
  }
});

// Global input listener for typing sound
document.addEventListener("input", (e) => {
  const el = e.target;

  // Check if typing is happening in editable fields
  const isTypingTarget =
    el.matches("input[type='text'], textarea, input[type='search']") ||
    el.isContentEditable;

  if (isTypingTarget) {
    sounds.play("type", 1);
  }
});


/***/ }),

/***/ 2014:
/***/ ((module) => {

var notify = {};

(async function () {
  notify.permission = await Notification.requestPermission();
})();

var lastNotifcation = null;

notify.sendIfOnScreen = function (tag, message) {
  if (document.visibilityState !== "visible") {
    if (lastNotifcation) {
      lastNotifcation.close();
    }
    lastNotifcation = new Notification("Random Rants +", {
      icon: "favicon.png",
      vibrate: [150, 60, 150],
      tag: tag,
      body: message,
    });
  }
};

module.exports = notify;


/***/ }),

/***/ 7236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var accountHelper = __webpack_require__(4592);
var shtml = __webpack_require__(472);
var cacheBust = __webpack_require__(5667);

function generateDiv(
  username,
  displayName,
  time,
  userColor,
  isOwner,
  camEnabled,
  micEnabled,
  isRealOwner,
  isAbleToChangeOwnership,
  changeOwnershipFunction,
) {
  var pfp = accountHelper.getProfilePictureURL(username);
  if (!username) {
    pfp = accountHelper.getProfilePictureURL(displayName);
  }
  var ownerNoteThing = {
    element: "div",
  };

  var icons = [];

  if (camEnabled) {
    icons.push({
      element: "img",
      src: "images/cam.svg",
      style: {
        height: "23px",
      },
      title: "This person is sharing their camera.",
    });
  }

  if (micEnabled) {
    icons.push({
      element: "img",
      src: "images/mic.svg",
      style: {
        height: "23px",
      },
      title: "This person is sharing their microphone.",
    });
  }

  if (isRealOwner) {
    icons.push({
      element: "img",
      src: "images/key.svg",
      className: "ownerKeyIcon",
      style: {
        height: "23px",
      },
      title: "This person is the real owner of this room.",
    });
  } else {
    if (isAbleToChangeOwnership && username) {
      if (isOwner) {
        icons.push({
          element: "div",
          style: {
            height: "23px",
          },
          className: "divButton roundborder",
          title: "Click to remove ownership to this user.",
          children: [
            {
              element: "img",
              style: {
                height: "100%",
              },
              src: "images/demote.svg",
            },
            {
              element: "span",
              textContent: "Demote",
            },
          ],
          eventListeners: [
            {
              event: "click",
              func: function () {
                changeOwnershipFunction(false);
                this.disabled = true;
                this.innerHTML = "";
                this.className = "loader";
                this.src = "";
                this.style.width = "23px";
              },
            },
          ],
        });
      } else {
        icons.push({
          element: "div",
          style: {
            height: "23px",
          },
          className: "divButton roundborder",
          title: "Click to add ownership to this user.",
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
              textContent: "Promote",
            },
          ],
          eventListeners: [
            {
              event: "click",
              func: function () {
                changeOwnershipFunction(true);
                this.disabled = true;
                this.innerHTML = "";
                this.className = "loader";
                this.src = "";
                this.style.width = "23px";
              },
            },
          ],
        });
      }
    } else {
      if (isOwner) {
        icons.push({
          element: "img",
          src: "images/key.svg",
          style: {
            height: "23px",
          },
          title: "This person has ownership of this room.",
        });
      }
    }
  }

  var dom = elements.createElementsFromJSON([
    {
      element: "div",
      children: [
        {
          element: "div",
          className: "onlineUserContainer",
          style: {
            alignItems: "center",
          },
          children: [
            {
              element: "img",
              className: "profile profilePictureMessage",
              src: cacheBust(pfp),
            },
            {
              element: "div",
              style: {
                display: "flex",
                flexDirection: "column",
              },
              children: [
                {
                  element: "span",
                  className: "usernameSpan",
                  style: {
                    color: userColor,
                  },
                  textContent: displayName,
                },
                {
                  element: "span",
                  style: {
                    color: userColor,
                    fontSize: "10px",
                  },
                  textContent: username,
                },
              ],
            },
            {
              element: "div",
              style: {
                display: "flex",
              },
              children: [
                {
                  element: "div",
                  style: {
                    marginLeft: "auto",
                    display: "flex",
                  },
                  children: icons,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return dom[0];
}

module.exports = generateDiv;


/***/ }),

/***/ 7572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var accountHelper = __webpack_require__(4592);
var dialog = __webpack_require__(8149);
var currentRoom = __webpack_require__(9808);
var rs = {};

var validState = accountHelper.getCurrentValidationState();

async function getRooms() {
  var rooms = [];
  if (validState) {
    var realRooms = await accountHelper.getJoinedRooms();
    for (var room of realRooms) {
      rooms.push(room);
    }
  }
  return rooms;
}

function doJoinCodeScreen(code) {
  var div = document.createElement("div");
  var joinHref =
    window.location.protocol + "//" + window.location.host + "/join";

  var dom = elements.createElementsFromJSON([
    //Background
    {
      element: "div",
      className: "dialogBackground",
    },
    //Dialog box
    {
      element: "div",
      className: "whiteBox centerMiddle popupDialogAnimation",
      children: [
        {
          element: "span",
          style: {
            fontSize: "50px",
            fontWeight: "bold",
          },
          className: "typingEffect",
          textContent: code,
        },
        {
          element: "br",
        },
        {
          element: "span",
          style: {
            fontSize: "30px",
            fontWeight: "bold",
          },
          textContent: "⚡ ZOOM into the room!",
        },
        {
          element: "br",
        },
        {
          element: "a",
          href: joinHref,
          textContent: joinHref,
          style: {
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "Someone just dropped a fresh join code into the multiverse. Hit that link to blast into their chaos zone!",
        },
        {
          element: "br",
        },
        {
          element: "span",
          textContent:
            "⏳ This code self-destructs in 10 minutes. Use it or lose it.",
        },
        {
          element: "br",
        },
        {
          element: "div",
          className: "divButton roundborder",
          textContent: "Nah I'm out",
          eventListeners: [
            {
              event: "click",
              func: function () {
                div.remove();
              },
            },
          ],
        },
      ],
    },
  ]);
  elements.appendElements(div, dom);
  document.body.append(div);

  return {
    remove: function () {
      div.remove();
    },
  };
}

async function doRoomSelect() {
  try {
    var div = document.createElement("div");

    var addButtonJSON = { element: "div" };

    var roomSelectChildren = [];

    if (validState) {
      roomSelectChildren.push(addButtonJSON);
    } else {
      roomSelectChildren.push({
        element: "div",
        className: "roomButton",
        style: {
          fontSize: "23px"
        },
        children: [
          {
            element: "span",
            textContent:
              "⚠️ You’re not logged in, so room controls are locked.",
          },
          {
            element: "br"
          },
          {
            element: "span",
            textContent: "Just logged in? Try refreshing the page to unlock everything."
          }
        ],
      });
    }

    var dialogBG = document.createElement("div");
    var loadingSpinnerDiv = document.createElement("div");
    var loadingSpinnerCDiv = document.createElement("div");
    dialogBG.className = "dialogBackground";
    loadingSpinnerDiv.className = "loader";
    loadingSpinnerCDiv.append(loadingSpinnerDiv);
    loadingSpinnerCDiv.className = "centerMiddle";
    dialogBG.append(loadingSpinnerCDiv);
    document.body.append(dialogBG);
    try {
      var rooms = await getRooms();
      dialogBG.remove();
      if (!rooms) {
        dialog.alert("Failed to retrieve rooms.");
        return;
      }
    } catch (e) {
      dialogBG.remove();
      dialog.alert("Failed to retrieve rooms.");
      return;
    }
    rooms.forEach((room) => {
      var removeButton = {
        element: "div",
        className: "divButton",
        textContent: "Remove from list",
        eventListeners: [
          {
            event: "click",
            func: async function (e) {
              e.preventDefault();
              var accepted = await dialog.confirm(
                "Remove this room?\nThis room will NOT be deleted from the site.",
              );
              if (accepted) {
                try {
                  await accountHelper.removeJoinedRoom(room.id);
                  div.remove();
                  doRoomSelect();
                } catch (err) {
                  dialog.alert("Error removing this room ${err}");
                }
              }
            },
          },
        ],
      };
      var roomExtraStuff = [];
      if (room.invited) {
        roomExtraStuff.push({
          element: "span",
          className: "roomTextButton",
          style: {
            fontSize: "30px",
            color: "yellow",
            fontWeight: "bold",
          },
          textContent: "(Invited)",
        });
      }
      if (room.id == currentRoom) {
        roomExtraStuff.push({
          element: "span",
          className: "roomTextButton",
          style: {
            fontSize: "30px",
            color: "green",
            fontWeight: "bold",
          },
          textContent: "*",
        });
      }
      var usersOnline = "(Unknown)";
      var userPFPs = [];
      if (!room.isDefault) {
        usersOnline = room.users;
        for (var userInList of room.userList) {
          if (userInList.username) {
            userPFPs.push({
              element: "div",
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px 4px",
              },
              children: [
                {
                  element: "img",
                  className: "profile",
                  style: {
                    height: "32px",
                    maxWidth: "32px",
                  },
                  src: accountHelper.getProfilePictureURL(userInList.username),
                },
                {
                  element: "span",
                  style: {
                    fontWeight: "bold",
                    color: userInList.color,
                  },
                  textContent: userInList.display,
                },
              ],
            });
          }
        }
      }
      var obj = {
        element: "div",
        className: "roomButton",
        children: roomExtraStuff.concat([
          {
            element: "span",
            className: "roomTextButton",
            style: {
              fontSize: "30px",
            },
            textContent: room.name,
          },
          { element: "br" },
          {
            element: "span",
            className: "roomTextButton",
            style: {
              fontSize: "20px",
            },
            textContent: "Room ID: " + room.id,
          },
          {
            element: "br",
          },
          {
            element: "span",
            className: "roomTextButton",
            style: {
              fontSize: "20px",
            },
            textContent: "Users online: " + usersOnline,
          },
          {
            element: "br",
          },
          {
            element: "div",
            style: {
              display: "flex",
              width: "100%",
              height: "fit-content",
            },
            children: userPFPs,
          },
          {
            element: "div",
            className: "divButton roundborder",
            textContent: "Join room",
            eventListeners: [
              {
                event: "click",
                func: function (e) {
                  e.preventDefault();

                  if (room.id == currentRoom) {
                    div.remove();
                    return;
                  }
                  window.location.hash = "#" + encodeURIComponent(room.id);
                  window.location.reload();
                },
              },
            ],
          },
          {
            element: "div",
            className: "divButton roundborder",
            textContent: "Invite someone to this room",
            eventListeners: [
              {
                event: "click",
                func: async function (e) {
                  e.preventDefault();
                  try {
                    var inviteTarget = await dialog.prompt(
                      "👥 Who do you want to invite to this room?\nType their username and bring them in!",
                    );
                    if (!inviteTarget) {
                      return;
                    }
                    var response = await fetch(
                      accountHelper.getServerURL() + "/account/inviteroom",
                      {
                        method: "POST",
                        body: JSON.stringify({
                          id: room.id,
                          name: room.name,
                          username: inviteTarget,
                        }),
                      },
                    );
                    if (!response.ok) {
                      dialog.alert(
                        "❌ Invite flop. That username doesn’t exist... or maybe it escaped through a portal. Check it and try again!",
                      );
                    }
                  } catch (e) {
                    dialog.alert(
                      "Failed to invite a user to room. Error Message: ${e}",
                    );
                  }
                },
              },
            ],
          },
          {
            element: "div",
            className: "divButton roundborder",
            textContent: "Create join code",
            eventListeners: [
              {
                event: "click",
                func: async function (e) {
                  e.preventDefault();
                  try {
                    var response = await fetch(
                      accountHelper.getServerURL() + "/quickjoin/code",
                      {
                        method: "POST",
                        body: JSON.stringify({
                          id: room.id,
                        }),
                      },
                    );
                    if (!response.ok) {
                      dialog.alert(
                        "Got error " +
                          response.status +
                          ". Unable to create join code, maybe the room was just deleted?",
                      );
                      return;
                    }
                    var json = await response.json();
                    doJoinCodeScreen(json.code);
                  } catch (e) {
                    dialog.alert(
                      "Failed to create join code. Error Message: ${e}",
                    );
                  }
                },
              },
            ],
          },
        ]),
      };
      if (!room.isDefault) {
        obj.children.push(removeButton);
      }
      roomSelectChildren.push(obj);
    });

    var dom = elements.createElementsFromJSON([
      //Background
      {
        element: "div",
        className: "dialogBackground",
      },
      //Dialog box
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
            textContent: "Manage rooms",
          },
          {
            element: "br",
          },
          {
            element: "span",
            textContent: "Tips:",
            style: {
              fontWeight: "bold",
            },
          },
          {
            element: "ul",
            children: [
              {
                element: "li",
                textContent:
                  'Click "🚪 Summon a room" to create your own room.',
              },
              {
                element: "li",
                textContent: "Click Join room to hop into a chat.",
              },
              {
                element: "li",
                textContent: "Use Invite someone to bring a friend in.",
              },
              {
                element: "li",
                textContent:
                  "Hit Remove from list if a room’s no longer your vibe.",
              },
              {
                element: "li",
                textContent:
                  'Want to invite without typing your friends username? Click "Create join code".',
              },
            ],
          },
          {
            element: "div",
            className: "divButton roundborder",
            textContent: "🚪 Summon a room",
            eventListeners: [
              {
                event: "click",
                func: async function () {
                  try {
                    var a = await fetch(
                      accountHelper.getServerURL() + "/rooms/create",
                      { method: "POST" },
                    );
                    if (a.ok) {
                      var json = await a.json();
                      window.location.hash = "#" + encodeURIComponent(json.id);
                      window.location.reload();
                    } else {
                      dialog.alert(
                        "❗ Couldn’t create the room.\nYou might need to log in or sign up first.",
                      );
                    }
                  } catch (e) {
                    dialog.alert(
                      `💥 Room launch explosion! Something went wrong: ${e}`,
                    );
                    console.error(e);
                  }
                },
              },
            ],
          },
          {
            element: "div",
            className: "roomSelect",
            children: roomSelectChildren,
          },
          {
            element: "div",
            className: "divButton roundborder",
            textContent: "Close",
            eventListeners: [
              {
                event: "click",
                func: function () {
                  div.remove();
                },
              },
            ],
          },
        ],
      },
    ]);
    elements.appendElements(div, dom);
    document.body.append(div);
  } catch (e) {
    window.alert(e);
  }
}

rs.show = doRoomSelect;

module.exports = rs;


/***/ }),

/***/ 9701:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var accountHelper = __webpack_require__(4592);
var userState = __webpack_require__(23);

var rs = {};

var roomPermissionOptions = [
  {
    element: "option",
    textContent: "Everyone",
    value: "everyone",
  },
  {
    element: "option",
    textContent: "Owner & ownership",
    value: "owner",
  },
  {
    element: "option",
    textContent: "Nobody (Off completley)",
    value: "none",
  },
];

async function updatePermissionSetting(name, level) {
  var response = await fetch(accountHelper.getServerURL() + "/rooms/perms", {
    method: "POST",
    body: JSON.stringify({
      id: userState.roomID,
      type: name,
      level: level,
    }),
  });
}

var dialogDiv = document.createElement("div");
var dom = elements.createElementsFromJSON([
  //Background
  {
    element: "div",
    className: "dialogBackground",
  },
  //Dialog box
  {
    element: "div",
    className: "whiteBox centerMiddle popupDialogAnimation",
    style: {
      overflowY: "auto",
      maxHeight: "calc(100vh - 100px)",
      maxWidth: "calc(100vw - 300px)",
      minWidth: "360px",
      minHeight: "360px",
    },
    children: [
      {
        element: "span",
        style: {
          fontSize: "30px",
          fontWeight: "bold",
        },
        textContent: "Room settings",
      },
      {
        element: "div",
        style: {
          margin: "8px 0",
          padding: "8px",
          backgroundColor: "#fffae6",
          border: "1px solid #f0e68c",
          borderRadius: "6px",
          fontSize: "14px",
          color: "#665500",
          width: "fit-content",
          height: "fit-content",
        },
        textContent:
          "💡 Tips: Rename your room to something cool and easy to remember. " +
          "Destroying the room nukes everything inside, so use it wisely!",
      },
      {
        element: "div",
        className: "sep1",
      },

      {
        element: "span",
        textContent: "Room info",
        style: {
          fontWeight: "bold",
          fontSize: "20px",
        },
      },
      {
        element: "br",
      },
      {
        element: "span",
        textContent: "Name:",
      },
      {
        element: "span",
        innerHTML: "&nbsp;",
      },
      {
        element: "input",
        type: "text",
        className: "inputText1 roundborder",
        gid: "roomSettingsName",
        style: {
          width: "200px",
          height: "25px",
        },
        eventListeners: [
          {
            event: "change",
            func: async function () {
              var response = await fetch(
                accountHelper.getServerURL() + "/rooms/rename",
                {
                  method: "POST",
                  body: JSON.stringify({
                    name: this.value,
                    id: userState.roomID,
                  }),
                },
              );
            },
          },
        ],
      },

      {
        element: "br",
      },
      {
        element: "br",
      },

      {
        element: "div",
        className: "sep1",
      },

      {
        element: "span",
        textContent: "Room permissions",
        style: {
          fontWeight: "bold",
          fontSize: "20px",
        },
      },

      {
        element: "br",
      },

      //Soundboard permission

      {
        element: "span",
        textContent: "Soundboard:",
      },

      {
        element: "select",
        className: "inputText1 roundborder",
        gid: "roomPerms_soundboard",
        style: {
          width: "200px",
          height: "30px",
        },
        children: roomPermissionOptions,
        eventListeners: [
          {
            event: "change",
            func: async function () {
              this.disabled = true;
              await updatePermissionSetting("soundboard", this.value);
              this.disabled = false;
            },
          },
        ],
      },
      {
        element: "br",
      },

      //Media permission

      {
        element: "span",
        textContent: "Starting media:",
      },

      {
        element: "select",
        className: "inputText1 roundborder",
        gid: "roomPerms_media",
        style: {
          width: "200px",
          height: "30px",
        },
        children: roomPermissionOptions,
        eventListeners: [
          {
            event: "change",
            func: async function () {
              this.disabled = true;
              await updatePermissionSetting("media", this.value);
              this.disabled = false;
            },
          },
        ],
      },
      {
        element: "br",
      },
      {
        element: "br",
      },

      {
        element: "div",
        className: "sep1",
      },

      {
        element: "span",
        textContent: "Dangerous",
        style: {
          fontWeight: "bold",
          fontSize: "20px",
        },
      },

      {
        element: "br",
      },

      {
        element: "div",
        style: {
          color: "#cc0606", //Dark red-ish color.
        },
        children: [
          {
            element: "span",
            textContent: "Don't mess with these unless you ",
          },
          {
            element: "span",
            style: {
              fontWeight: "bold",
            },
            textContent: "really", //REALLY tell the user this is actually dangerous! (for the room, and may cause emotional damage)
          },
          {
            element: "span",
            textContent: " know what you're doing!",
          },
        ],
      },

      {
        element: "br",
      },

      {
        element: "div",
        className: "divButton roundborder",
        textContent: "💥 Destroy Room",
        eventListeners: [
          {
            event: "click",
            func: async function () {
              const dialogResponse = await dialogs.confirm(
                "⚠️ You're about to nuke the room. This *will* make everyone vanish. Are you really sure?\n\nClick OK to unleash chaos, or Cancel if your conscience kicks in.",
              );

              if (dialogResponse) {
                try {
                  const response = await fetch(
                    accountHelper.getServerURL() + "/rooms/destroy",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        id: userState.roomID,
                      }),
                    },
                  );

                  if (!response.ok) {
                    dialogs.alert(
                      `🚫 Room self-destruct failed! Server said: ${response.status}.\n` +
                        "Maybe someone demoted you behind your back, or your session poofed.",
                    );
                    return;
                  }
                  dialogDiv.hidden = true;
                } catch (e) {
                  console.error("Room destroy error:", e);
                  dialogs.alert(
                    "💥 The room failed to explode due to an unknown error:\n" +
                      e,
                  );
                }
              }
            },
          },
        ],
      },
      {
        element: "br",
      },

      {
        element: "div",
        className: "sep1",
      },
      {
        element: "br",
      },

      {
        element: "div",
        className: "divButton roundborder",
        textContent: "Close",
        eventListeners: [
          {
            event: "click",
            func: function () {
              dialogDiv.hidden = true;
            },
          },
        ],
      },
    ],
  },
]);
dialogDiv.hidden = true;
elements.appendElements(dialogDiv, dom);
document.body.append(dialogDiv);

var showRoomSettingsButton = elements.getGPId("showRoomSettingsButton");

showRoomSettingsButton.addEventListener("click", function () {
  dialogDiv.hidden = false;
});

var roomSettingsNameInput = elements.getGPId("roomSettingsName");

rs.changeRoomName = function (name) {
  roomSettingsNameInput.value = name;
};

rs.updatePermission = function (name, value) {
  elements.getGPId("roomPerms_" + name).value = value;
};

module.exports = rs;


/***/ }),

/***/ 6211:
/***/ ((module) => {

var websocket = null;
var reconnectTimeout = null;
var sws = {
  isOpen: false,
  CANCEL_RECONNECT: "CANCEL_RECONNECT",
};

function openWebsocket(url, onmessage, onopen, onclose) {
  if (websocket) {
    websocket.onclose = function () {};
    websocket.onmessage = function () {};
    websocket.onopen = function () {};
    websocket.close();
  }
  clearTimeout(reconnectTimeout);
  sws.isOpen = false;
  websocket = new WebSocket(url);
  websocket.onclose = async function () {
    sws.isOpen = false;
    var result = null;
    if (onclose) {
      result = await onclose();
    }
    if (result !== sws.CANCEL_RECONNECT) {
      reconnectTimeout = setTimeout(() => {
        openWebsocket(url, onmessage, onopen, onclose);
      },500);
    }
  };
  websocket.onopen = function (e) {
    sws.isOpen = true;
    if (onopen) {
      onopen(e);
    }
  };
  websocket.onmessage = onmessage;
}

function closeWebsocket() {
  if (websocket) {
    websocket.onclose = function () {};
    websocket.onmessage = function () {};
    websocket.onopen = function () {};
    websocket.close();
  }
  sws.isOpen = false;
  clearTimeout(reconnectTimeout);
}

function sendWebsocket(d) {
  if (sws.isOpen) {
    websocket.send(d);
  }
}

sws.open = openWebsocket;
sws.close = closeWebsocket;
sws.send = sendWebsocket;

module.exports = sws;


/***/ }),

/***/ 9562:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var accountHelper = __webpack_require__(4592);
var dialog = __webpack_require__(8149);
var currentRoom = __webpack_require__(9808);
var fetchUtils = __webpack_require__(1922);
var sb = {};
var audioEngine = __webpack_require__(1662);

var loadedSounds = [];
sb.loadedSounds = loadedSounds;

var validState = accountHelper.getCurrentValidationState();

var soundboardVolume = 100;
var soundboardMutliplier = 0;
var soundboardMultipliers = [
  {
    label: "1x",
    mult: 1,
  },
  {
    label: "2x",
    mult: 2,
  },
  {
    label: "5x",
    mult: 5,
  },
  {
    label: "10x",
    mult: 10,
  },
  {
    label: "15x",
    mult: 15,
  },
  {
    label: "20x",
    mult: 20,
  },
  {
    label: "50x",
    mult: 50,
  },
  {
    label: "100x",
    mult: 100,
  },
];
var playingSounds = [];

if (localStorage.getItem("soundboardVolume")) {
  soundboardVolume = Number(localStorage.getItem("soundboardVolume"));
}

var dialogDiv = document.createElement("div");
var dom = elements.createElementsFromJSON([
  //Background
  {
    element: "div",
    className: "dialogBackground",
  },
  //Dialog box
  {
    element: "div",
    className: "soundboardDialog popupDialogAnimation",
    children: [
      {
        element: "div",
        style: {
          width: "100%",
          height: "100%",
        },
        className: "centerHorizontal",
        children: [
          {
            element: "br",
          },
          {
            element: "span",
            style: {
              fontWeight: "bold",
              fontSize: "30px",
            },
            textContent: "🔊 Chaos Soundboard 🔥",
          },
          {
            element: "br",
          },
          {
            element: "span",
            textContent:
              "Play sounds for the whole room. No regrets. No refunds.",
          },
          {
            element: "br",
          },
          {
            element: "button",
            gid: "soundboardMuteButton",
            GPWhenCreated: function (elm) {
              //Load soundboard volume state.
              if (localStorage.getItem("soundboardUnmuteState") == "N") {
                //Use off (The value N) so that if no value is set then it defaults to on.
                soundboardVolume = 0;
              } else {
                soundboardVolume = 100;
              }

              //Update text.
              if (soundboardVolume == 0) {
                elm.textContent = "Unmute";
              } else {
                elm.textContent = "Mute";
              }
            },
            eventListeners: [
              {
                event: "click",
                func: function () {
                  //Unmute or mute.
                  if (soundboardVolume == 100) {
                    soundboardVolume = 0;
                    localStorage.setItem("soundboardUnmuteState", "N");
                  } else {
                    soundboardVolume = 100;
                    localStorage.setItem("soundboardUnmuteState", "Y");
                  }

                  //Update text
                  if (soundboardVolume == 0) {
                    this.textContent = "Unmute";
                  } else {
                    this.textContent = "Mute";
                  }
                },
              },
            ],
          },
          {
            element: "br",
          },
          {
            element: "span",
            textContent: "Soundboard Boost:",
          },
          {
            element: "button",
            className: "roundborder",
            title: "Click to make it louder (and probably regret it)",
            textContent: soundboardMultipliers[soundboardMutliplier].label,
            eventListeners: [
              {
                event: "click",
                func: function () {
                  soundboardMutliplier += 1;
                  if (soundboardMutliplier > soundboardMultipliers.length - 1) {
                    soundboardMutliplier = 0;
                  }
                  this.textContent =
                    soundboardMultipliers[soundboardMutliplier].label;
                },
              },
            ],
          },
          { element: "br" },
          {
            element: "button",
            className: "roundborder",
            eventListeners: [
              {
                event: "click",
                func: function () {
                  dialogDiv.hidden = true;
                },
              },
            ],
            textContent: "Close",
          },
          { element: "hr" },
          {
            element: "div",
            className: "soundboardButtons",
            gid: "soundboardButtonsContainer",
            children: [
              {
                element: "div",
                className: "soundboardButtonStop",
                children: [
                  {
                    element: "span",
                    textContent: "🛑 Stop the chaos",
                  },
                ],
                eventListeners: [
                  {
                    event: "click",
                    func: function () {
                      sb.onSoundStopClick();
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
]);
dialogDiv.hidden = true;
elements.appendElements(dialogDiv, dom);
document.body.append(dialogDiv);

sb.onSoundButtonClick = function () {};
sb.onSoundStopClick = function () {};

function createSoundboardButtonDiv(sound, index) {
  var dom = elements.createElementsFromJSON([
    {
      element: "div",
      className: "soundboardButton",
      children: [
        {
          element: "div",
          style: {
            display: "flex",
          },
          children: [
            {
              element: "div",
              className: "soundboardButtonDisplayNames",
              gid: "sbButtonDisplayNames_" + index,
              children: [],
            },
          ],
        },
        {
          element: "span",
          textContent: sound.name,
        },
      ],
      gid: "sbButton_" + index,
      eventListeners: [
        {
          event: "click",
          func: function () {
            sb.onSoundButtonClick(
              index,
              soundboardMultipliers[soundboardMutliplier].mult,
            );
          },
        },
      ],
    },
  ]);
  return dom[0];
}

var soundboardButtonsContainer = elements.getGPId("soundboardButtonsContainer");

async function showSoundboardDialog() {
  try {
    dialogDiv.hidden = false;
  } catch (e) {
    dialog.alert(e);
  }
}

sb.show = showSoundboardDialog;

sb.load = function (soundboardURL, onProgress) {
  if (!onProgress) {
    onProgress = () => {};
  }

  const MAX_CONCURRENT_LOADS = 5;

  return new Promise((accept, reject) => {
    fetchUtils
      .fetchAsJSON(soundboardURL)
      .then((sounds) => {
        let soundsLoaded = 0;
        let currentIndex = 0;
        let activeLoads = 0;
        const loadedPromises = [];

        const tryLoadNext = () => {
          if (currentIndex >= sounds.length) {
            if (activeLoads === 0) {
              // All sounds are done loading
              Promise.all(loadedPromises)
                .then(() => accept())
                .catch(reject);
            }
            return;
          }

          while (
            activeLoads < MAX_CONCURRENT_LOADS &&
            currentIndex < sounds.length
          ) {
            const sound = sounds[currentIndex];
            const index = currentIndex;
            currentIndex++;
            activeLoads++;

            const soundPromise = audioEngine
              .loadSoundFromURL(sound.url)
              .then((soundData) => {
                soundsLoaded++;
                onProgress(soundsLoaded, sounds.length);
                sound.data = soundData;
              })
              .catch(reject)
              .finally(() => {
                activeLoads--;
                tryLoadNext();
              });

            loadedPromises.push(soundPromise);

            const button = createSoundboardButtonDiv(sound, index);
            soundboardButtonsContainer.append(button);
          }
        };

        tryLoadNext();

        loadedSounds = sounds;
        sb.loadedSounds = sounds;
      })
      .catch(reject);
  });
};

var soundIdCounter = 0;

sb.playSound = function (index, mult = 1, displayName) {
  var sound = loadedSounds[index];

  if (sound) {
    var player = new audioEngine.Player(sound.data);
    player.volume = (soundboardVolume / 100) * mult;
    soundIdCounter += 1;
    player._id = soundIdCounter;
    player._mult = mult;
    player._fromDisplayName = displayName;
    player._index = index;

    if (displayName) {
      for (var otherPlayer of playingSounds) {
        if (
          otherPlayer._fromDisplayName == displayName &&
          otherPlayer._index == index
        ) {
          player._element = otherPlayer._element;
          break;
        }
      }
      if (!player._element) {
        var displayNamesDiv = elements.getGPId("sbButtonDisplayNames_" + index);
        var displayNameDiv = document.createElement("div");
        displayNameDiv.className = "soundboardActiveText";
        displayNameDiv.textContent = displayName;
        displayNamesDiv.append(displayNameDiv);
        player._element = displayNameDiv;

        displayNameDiv.animate(
          [
            {
              opacity: 0,
            },
            {},
          ],
          {
            easing: "ease-in",
            duration: 50,
          },
        );
      }
    }

    player.onended = function () {
      var newPlayingSounds = [];
      for (var otherPlayer of playingSounds) {
        if (otherPlayer._id !== player._id) {
          newPlayingSounds.push(otherPlayer);
        }
      }
      playingSounds = newPlayingSounds;
      if (player._element) {
        var isLast = true;
        for (var otherPlayer of playingSounds) {
          if (
            otherPlayer._fromDisplayName == displayName &&
            otherPlayer._index == index
          ) {
            isLast = false;
            break;
          }
        }
        if (isLast) {
          var animation = player._element.animate(
            [
              {},
              {
                opacity: 0,
              },
            ],
            {
              easing: "ease-in",
              duration: 50,
            },
          );
          animation.addEventListener("finish", () => {
            player._element.remove();
          });
        }
      }
    };
    player.play();

    playingSounds.push(player);
  }
};

sb.stopAll = function () {
  for (var player of playingSounds) {
    player.pause();
  }
};

setInterval(() => {
  for (var player of playingSounds) {
    player.volume = (soundboardVolume / 100) * player._mult;
  }
}, 1000 / 30);

module.exports = sb;


/***/ }),

/***/ 1191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var audio = __webpack_require__(1662);
var elements = __webpack_require__(7255);
var sounds = {};
var soundManager = {};
var noAudioMessage = elements.getGPId("noAudioMessage");

soundManager.engine = audio;

setInterval(() => {
  try {
    if (audio.running) {
      noAudioMessage.hidden = true;
    } else {
      noAudioMessage.hidden = false;
    }
  } catch (e) {
    window.alert(e);
  }
}, 1000 / 30);

soundManager.sounds = sounds;

soundManager.load = async function () {
  var a = await fetch("external/uisound.json");
  var soundURLS = await a.json();

  sounds.error = await audio.loadSoundFromURL(soundURLS.error);
  sounds.notify = await audio.loadSoundFromURL(soundURLS.notify);
  sounds.type = await audio.loadSoundFromURL(soundURLS.type);
  sounds.select = await audio.loadSoundFromURL(soundURLS.select);
};

soundManager.playingSounds = {};

soundManager.play = async function (sound, volume) {
  if (soundManager.playingSounds[sound]) {
    soundManager.playingSounds[sound].pause();
    soundManager.playingSounds[sound].destroy();
  }
  var aud = new audio.Player(soundManager.sounds[sound]);
  aud.play();
  if (typeof volume == "number") {
    aud.volume = volume;
  }
};

module.exports = soundManager;


/***/ }),

/***/ 8284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);

var sws = __webpack_require__(6211);

var typingNoticeDiv = elements.getGPId("typingNoticeDiv");

var typingMessages = {};

var typingnote = {
  activateTypingMessage: function (username, displayName, color) {
    if (typingMessages[username]) {
      var typingMessage = typingMessages[username];
      typingMessage.resetTimeout();
      return;
    }
    var typingMessageText = elements.createElementsFromJSON([
      {
        element: "div",
        className: "userTypingText",
        style: {
          color,
        },
        children: [
          {
            element: "span",
            textContent: displayName + " is typing...",
          },
          {
            element: "div",
          },
        ],
      },
    ])[0];

    var typingMessage = {
      remove: function () {
        if (typeof typingMessage.timeout !== "undefined") {
          clearTimeout(typingMessage.timeout);
        }
        typingMessageText.remove();
        typingMessages[username] = undefined;
      },
      resetTimeout: function () {
        if (typeof typingMessage.timeout !== "undefined") {
          clearTimeout(typingMessage.timeout);
        }
        typingMessage.timeout = setTimeout(() => {
          typingMessage.timeout = null;
          typingMessage.remove();
        }, 1500);
        typingMessageText.animate(
          [
            { transform: "translate(-4.5px, 0px)" },
            { transform: "translate(0px, 0px)" },
          ],
          {
            duration: 70,
            easing: "ease-out",
          },
        );
      },
    };
    typingNoticeDiv.append(typingMessageText);

    typingMessage.resetTimeout();

    typingMessages[username] = typingMessage;
  },
};

module.exports = typingnote;


/***/ }),

/***/ 4852:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var fetchUtils = __webpack_require__(1922);

var jitter = Math.random() * 3000;

var updateChecker = {
  currentVersion: "0",
  needsUpdate: false,
  updateListeners: {},
  addUpdateListener: function (id, funct) {
    this.updateListeners[id] = funct;
  },
  removeUpdateListener: function (id) {
    delete this.updateListeners[id];
  },
};

var updateScreenDiv = elements.getGPId("rrUpdateScreen");
var updateVersionTime = elements.getGPId("updateVersionTime");

function formatTimeDifference(oldTimestamp, newTimestamp) {
  let diffMs = Math.abs(newTimestamp - oldTimestamp);

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years > 0) return years + " year" + (years > 1 ? "s" : "");
  if (days > 0) return days + " day" + (days > 1 ? "s" : "");
  if (hours > 0) return hours + " hour" + (hours > 1 ? "s" : "");
  if (minutes > 0) return minutes + " minute" + (minutes > 1 ? "s" : "");
  return seconds + " second" + (seconds !== 1 ? "s" : "");
}

async function getVersion() {
  try {
    var versionInfo = await fetchUtils.fetchAsJSON("/client/version");
    return versionInfo.timestamp;
  } catch (e) {
    return null;
  }
}
async function getServerTime() {
  try {
    var versionInfo = await fetchUtils.fetchAsJSON("/client/time");
    return versionInfo.serverTime;
  } catch (e) {
    return null;
  }
}

(async function () {
  updateChecker.currentVersion = await getVersion();

  async function checkUpdate() {
    const newVersion = await getVersion();
    const serverTime = await getServerTime();
    if (!newVersion) {
      return;
    }
    if (!serverTime) {
      return;
    }
    if (newVersion !== updateChecker.currentVersion) {
      updateChecker.needsUpdate = true;
      updateScreenDiv.hidden = false;
      updateVersionTime.textContent = formatTimeDifference(
        Number(newVersion),
        Number(serverTime),
      );

      for (const key in updateChecker.updateListeners) {
        const listener = updateChecker.updateListeners[key];
        if (typeof listener === "function") {
          listener();
        }
      }

      clearInterval(updateChecker.updateInterval);
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      if (!updateChecker.needsUpdate) {
        checkUpdate(); //Double check just to make sure.
      }
    }
  });

  updateChecker.updateInterval = setInterval(checkUpdate, jitter + 15000);
})();

module.exports = updateChecker;


/***/ }),

/***/ 9183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var accountHelper = __webpack_require__(4592);

async function uploadFileAsURL(blob) {
  try {
    const formData = new FormData();
    formData.append("file", blob, blob.name); // Append the file as "file" field
    var fileurl = accountHelper.getServerURL() + "/uploads/" + "file";
    var a = await fetch(fileurl, { method: "POST", body: formData });
    var b = await a.json();
    return `${fileurl}/${b.id}/${encodeURIComponent(blob.name)}`;
  } catch (e) {
    return "";
  }
}

module.exports = uploadFileAsURL;


/***/ }),

/***/ 23:
/***/ ((module) => {

class RRUserState {
  constructor() {
    this.isOwner = false;
    this.roomID = null;
    this.noPermissionDialog =
      "Sorry bro, but this feature is off limits for you!\nPlease ask the owner (or someone with ownership) to fix this in the room settings.";
    this.permissions = {
      soundboard: true, //Allow playing sounds on soundboard.
      media: true, //Allow starting media via the media play button.
    };

    var thisObj = this;

    this.events = {
      emit: function (name, ...values) {
        thisObj.events[name].forEach((f) => {
          f.apply(thisObj, values);
        });
      },
      emitAsync: async function (name, ...values) {
        for (var f of thisObj.events[name]) {
          await f.apply(thisObj, values);
        }
      },
      //Events
      permissionUpdate: [],
    };
  }

  updatePermission(name, value) {
    this.permissions[name] = value;
    this.emitEvent("permissionUpdate", name, value);
  }

  hasPermission(name) {
    return this.permissions[name];
  }

  emitEvent(name, ...values) {
    return this.events.emit(name, ...values);
  }

  async emitEventAsync(name, ...values) {
    return await this.events.emitAsync(name, ...values);
  }

  on(eventName, func) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(func);
  }

  removeEvent(eventName, func) {
    if (this.events[eventName]) {
      var newEventArray = [];

      var removed = false;

      for (var event of this.events[eventName]) {
        if (removed) {
          newEventArray.push(event);
        } else {
          if (event !== func) {
            newEventArray.push(event);
            removed = true;
          }
        }
      }

      this.events[eventName] = newEventArray;
    }
  }
}

module.exports = new RRUserState();


/***/ }),

/***/ 4958:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var dialogs = __webpack_require__(8149);
var currentRoom = __webpack_require__(9808);
var accountHelper = __webpack_require__(4592);
var sws = __webpack_require__(6211);

var noWifiScreen = elements.getGPId("offlineErrorScreen");

setInterval(() => {
  noWifiScreen.hidden = navigator.onLine;
}, 100);


/***/ }),

/***/ 9549:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(3358);
__webpack_require__(1267);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			377: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrandomrants_plus"] = self["webpackChunkrandomrants_plus"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [804], () => (__webpack_require__(9549)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
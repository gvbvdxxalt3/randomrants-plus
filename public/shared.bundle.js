(self["webpackChunkrandomrants_plus"] = self["webpackChunkrandomrants_plus"] || []).push([[804],{

/***/ 472:
/***/ ((module) => {

function getSafeHTML(unsafeText) {
  var safeText = "";
  var i = 0;
  while (i < unsafeText.length) {
    switch (unsafeText[i]) {
      case "\n":
        safeText += "<br>";
        break;
      case " ":
        safeText += "&nbsp;";
        break;
      case "\t":
        if (unsafeText[i - 1] != "\t") safeText += " ";
        break;
      case "&":
        safeText += "&amp;";
        break;
      case '"':
        safeText += "&quot;";
        break;
      case ">":
        safeText += "&gt;";
        break;
      case "<":
        safeText += "&lt;";
        break;
      default:
        safeText = unsafeText[i]; //Part of text seems safe to just put plain.
    }
    i += 1;
  }
  return safeText;
}

function getMessageHTML(inputstr, noBracketCode, otherBracketCodes = {}) {
  //This is pretty much the one from the original random rants, here because i don't feel like having to rewrite the whole thing.
  var input_str; //store input
  var text_input; //store input after beging trim()med
  var output_html = ""; //store output
  var counter;

  var linkfixes = inputstr.split(" ");
  var newinputstr = [];
  for (var word of linkfixes) {
    if (
      word.startsWith("data:") ||
      word.startsWith("http://") ||
      word.startsWith("https://") ||
      word.startsWith("file://") ||
      word.startsWith("ws://") ||
      word.startsWith("wss://") ||
      word.startsWith("www.")
    ) {
      if (word.startsWith("www.")) {
        newinputstr.push(`[link url=https://${word}]${word}[/link]`);
      } else {
        if (word.startsWith("data:")) {
          newinputstr.push(`[download url=${word}]Data: URL[/download]`);
        } else {
          newinputstr.push(`[link url=${word}]${word}[/link]`);
        }
      }
    } else {
      newinputstr.push(word);
    }
  }

  input_str = newinputstr.join(" "); //get input and store it in input_str
  text_input = input_str;

  var endText = "";
  var colorsText = false;
  var colorCount = 0;
  var colors = [
    "#ff0000",
    "#ff6600",
    "#ffb300",
    "#ffe600",
    "#d9ff00",
    "#9dff00",
    "#55ff00",
    "#0dff00",
    "#00ff40",
    "#00ff88",
    "#00ffcc",
    "#00eeff",
    "#00aaff",
    "#0066ff",
    "#0026ff",
    "#3700ff",
    "#8800ff",
    "#dd00ff",
    "#ff00e1",
    "#ff00a6",
    "#ff006a",
    "#ff0033",
    "#ff0000",
  ];
  if (text_input.length > 0) {
    output_html += ""; //begin by creating paragraph
    for (counter = 0; counter < text_input.length; counter++) {
      switch (text_input[counter]) {
        case "\n":
          if (text_input[counter + 1] === "\n") {
            output_html += "\n";
            counter++;
          } else output_html += "";
          break;

        case "[":
          var index = 0;
          var data = text_input.slice(counter, text_input.length);
          var type = "";
          var valname = "";
          var value = "";
          var counterOffset = 0;
          var valid = false;
          var addHTML = true;
          var nextCheck = true;
          index += 1;
          counterOffset += 1;
          while (index < data.length && data[index] !== " ") {
            if (index == data.length) {
              addHTML = false;
              nextCheck = false;
              break;
            }
            if (data[index] == "]") {
              nextCheck = false;
              break;
            }
            counterOffset += 1;
            type += data[index];
            index += 1;
          }
          if (nextCheck) {
            counterOffset += 1;
            index += 1;
            while (index < data.length && data[index] !== "=") {
              if (index == data.length) {
                addHTML = false;
                nextCheck = false;
                break;
              }
              if (data[index] == "]") {
                nextCheck = false;
                break;
              }
              counterOffset += 1;
              valname += data[index];
              index += 1;
            }
            if (nextCheck) {
              counterOffset += 1;
              index += 1;
              while (index < data.length && data[index] !== "]") {
                if (index == data.length) {
                  addHTML = false;
                  nextCheck = false;
                  break;
                }
                counterOffset += 1;
                value += data[index];
                index += 1;
              }
            }
          }

          if (addHTML) {
            if (!noBracketCode) {
              if (otherBracketCodes[type]) {
                valid = true;
                output_html += otherBracketCodes(type, valname, value);
              }
              if (type == "search") {
                valid = true;
                output_html += `<a href="https://google.com/search?q=${encodeURIComponent(
                  value,
                )}" style="color: var(--link-text-color);" target="_blank">Google Search "${value}"</a>`;
              }
              if (type == "emoji") {
                valid = true;
                output_html += `<img src="${value}" imageisemoji="true" ondragstart="return false;" style="image-rendering:pixelated;object-fit:contain;height:26px;" ondragend="return false;">`;
              }
              if (type == "image") {
                valid = true;
                output_html += `<img src="${value}" style="image-rendering:pixelated;">`;
              }
              if (type == "audio") {
                valid = true;
                output_html += `<audio src="${value}" controls></audio>`;
              }
              if (type == "video") {
                valid = true;
                output_html += `<video src="${value}" controls></video>`;
              }
              if (type == "bold") {
                valid = true;
                output_html += `<b>`;
                endText += "</b>";
              }
              if (type == "/bold") {
                valid = true;
                output_html += `</b>`;
              }
              if (type == "color") {
                valid = true;
                output_html += `<span style="color:${value};">`;
              }
              if (type == "/color") {
                valid = true;
                output_html += `</span>`;
              }
              if (type == "font") {
                valid = true;
                output_html += `<span style="font-family:${value};">`;
              }
              if (type == "/font") {
                valid = true;
                output_html += `</span>`;
              }
              if (type == "link") {
                valid = true;
                output_html += `<a href="${value}" style="color: var(--link-text-color);" target="_blank">`;
              }
              if (type == "/link") {
                valid = true;
                output_html += `</a>`;
              }
              if (type == "button") {
                valid = true;
                output_html += `<button onclick="var a = document.createElement('a'); a.href='${value}'; a.target = '_blank'; a.click();">`;
              }
              if (type == "/button") {
                valid = true;
                output_html += `</button>`;
              }
              /*if (type == "buttonJavascript") {
                        valid = true;
                        output_html += `<button onclick="${value}">`;
                      }
                      if (type == "/buttonJavascript") {
                        valid = true;
                        output_html += `</button>`;
                      }*/
              if (type == "embed") {
                valid = true;
                output_html += `<iframe src="${value}" style="image-rendering:pixelated;border:none;resize:both;"></iframe>`;
              }
              if (type == "skull") {
                valid = true;
                output_html += "💀";
              }
              if (type == "sus" || type == "eyebrow") {
                valid = true;
                output_html += "🤨";
              }
              if (type == "br") {
                valid = true;
                output_html += "<br>";
              }
              if (type == "nerd") {
                valid = true;
                output_html += "🤓";
              }
              if (type == "moai") {
                valid = true;
                output_html += "🗿";
              }
              if (type == "cat") {
                valid = true;
                output_html += "😺";
              }
              if (type == "cool" || type == "sunglasses") {
                valid = true;
                output_html += "😎";
              }

              if (type == "blur") {
                valid = true;
                output_html += `<span style="filter: blur(5px);cursor:pointer;" onclick="this.style.filter = '';this.style.cursor = '';">`;
              }
              if (type == "/blur") {
                valid = true;
                output_html += `</span>`;
              }

              if (type == "colors") {
                valid = true;
                colorsText = true;
                output_html += `<span>`;
              }
              if (type == "/colors") {
                valid = true;
                colorsText = false;
                output_html += `</span>`;
              }
              if (type == "i") {
                valid = true;
                output_html += `<i>`;
              }
              if (type == "/i") {
                valid = true;
                output_html += `</i>`;
              }
            }

            if (valid) {
              counter += counterOffset;
              //window.alert(`DEBUG: type:${type} value name:${valname} value:${value}`);
              type = type.toLowerCase();
            } else {
              if (colorsText) {
                colorCount += 1;
                if (colorCount >= colors.length - 1) {
                  colorCount = 0;
                }
                output_html += `<span style="color:${colors[colorCount]};">${text_input[counter]}</span>`;
              } else {
                output_html += text_input[counter];
              }
            }
          }
          break;

        case " ":
          output_html += "&nbsp;";
          break;

        case "\t":
          if (text_input[counter - 1] != "\t") output_html += " ";
          break;

        case "&":
          output_html += "&amp;";
          break;

        case '"':
          output_html += "&quot;";
          break;

        case ">":
          output_html += "&gt;";
          break;

        case "<":
          output_html += "&lt;";
          break;
        default:
          if (colorsText) {
            colorCount += 1;
            if (colorCount >= colors.length - 1) {
              colorCount = 0;
            }
            output_html += `<span style="color:${colors[colorCount]};">${text_input[counter]}</span>`;
          } else {
            output_html += text_input[counter];
          }
      }
    }
    output_html += ""; //finally close paragraph
  }
  output_html += endText;
  return output_html; // display output html
}

module.exports = {
  getSafeHTML,
  getMessageHTML,
};


/***/ }),

/***/ 1662:
/***/ ((module) => {

var audioEngine = {};

var AudioContext = window.AudioContext || window.webkitAudioContext; //If running under safari, uses webkitAudioContext.

var audioCTX = new AudioContext();
audioEngine.context = audioCTX;
audioEngine.running = false;

setInterval(() => {
  if (audioCTX.state !== "running") {
    if (audioCTX) {
      audioCTX.close().catch(() => {});
    }
    audioCTX = new AudioContext();
    audioEngine.context = audioCTX;
    audioEngine.running = false;
  } else {
    audioEngine.running = true;
  }
}, 100);

function cloneAudioBuffer(fromAudioBuffer) {
  const audioBuffer = new AudioBuffer({
    length: fromAudioBuffer.length,
    numberOfChannels: fromAudioBuffer.numberOfChannels,
    sampleRate: fromAudioBuffer.sampleRate,
  });
  for (let channelI = 0; channelI < audioBuffer.numberOfChannels; ++channelI) {
    const samples = fromAudioBuffer.getChannelData(channelI);
    audioBuffer.copyToChannel(samples, channelI);
  }
  return audioBuffer;
}
audioEngine.cloneAudioBuffer = cloneAudioBuffer;

function decodeAsync(data) {
  return new Promise((resolve, reject) => {
    try {
      audioCTX.decodeAudioData(data, resolve, reject);
    } catch (e) {
      resolve(null);
    }
  });
}
audioEngine.decodeAsync = decodeAsync;
audioEngine.loadSoundFromURL = async function loadSoundURL(url) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return await decodeAsync(buffer);
  } catch (e) {
    console.warn(e);
    return null;
  }
};

class AudioBufferPlayer {
  constructor(data) {
    this.data = data;
    this.source = null;
    this._playbackRate = 1;
    this.playbackRate = 1;
    this.looped = false;
    this.loopStart = 0;
    this.loopEnd = 0;
    this.detune = 0;
    this.startVol = 1;
    this.gainNode = null;
    this.filters = [];
  }

  setData(data) {
    this.data = data;
  }

  set looped(v) {
    if (this.source) {
      this.source.loop = v;
    }
    this._looped = v;
  }

  get looped() {
    return this._looped;
  }

  set loopStart(v) {
    if (this.source) {
      this.source.loopStart = v;
    }
    this._loopStart = v;
  }

  get loopStart() {
    return this._loopStart;
  }

  set loopEnd(v) {
    if (this.source) {
      this.source.loopEnd = v;
    }
    this._loopEnd = v;
  }

  get loopEnd() {
    return this._loopEnd;
  }

  set detune(v) {
    if (this.source) {
      this.source.detune.value = v;
    }
    this._detune = v;
  }

  get detune() {
    return this._detune;
  }

  loopAt(start, end) {
    this.loopStart = start;
    this.loopEnd = end;
  }

  stop() {
    this.pause();
  }

  play(time) {
    if (this.data) {
      if (!this.source) {
        const source = audioCTX.createBufferSource();
        this.gainNode = audioCTX.createGain();
        source.buffer = this.data;
        source.playbackRate.value = this._playbackRate;
        source.loop = this._looped;
        source.loopStart = this._loopStart;
        source.loopEnd = this._loopEnd;
        source.detune.value = this._detune;

        // Apply filters
        let currentNode = this.gainNode;
        for (const filter of this.filters) {
          currentNode.connect(filter);
          currentNode = filter;
        }
        currentNode.connect(audioCTX.destination);

        this.gainNode.gain.value = this.startVol;
        source.connect(this.gainNode);
        source.start(time);

        this.source = source;
        source.onended = () => {
          this.onended();
          this.source = null;
        };
      }
    }
  }

  pause() {
    if (this.source) {
      this.source.stop();
      this.source = null;
      this.gainNode = null;
    }
  }

  remove() {
    this.pause();
    this.filters = [];
  }

  setVolume(value) {
    if (this.gainNode) {
      this.gainNode.gain.value = value;
    }
    this.startVol = value;
  }

  get volume() {
    return this.startVol;
  }

  set volume(v) {
    if (this.gainNode) {
      this.gainNode.gain.value = v;
    }
    this.startVol = v;
  }

  getVolume() {
    return this.gainNode ? this.gainNode.gain.value : this.startVol;
  }

  setPlaybackRate(value) {
    this.playbackRate = value;
  }

  set playbackRate(v) {
    this._playbackRate = v;
    if (this.source) {
      this.source.playbackRate.value = v;
    }
  }

  get playbackRate() {
    return this._playbackRate;
  }

  addFilter(filter) {
    if (filter instanceof BiquadFilterNode || filter instanceof GainNode) {
      this.filters.push(filter);
    }
  }

  clearFilters() {
    this.filters = [];
  }

  fadeIn(duration) {
    if (this.gainNode) {
      this.gainNode.gain.setValueAtTime(0, audioCTX.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(
        this.startVol,
        audioCTX.currentTime + duration,
      );
    }
  }

  fadeOut(duration) {
    if (this.gainNode) {
      this.gainNode.gain.setValueAtTime(this.getVolume(), audioCTX.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(
        0,
        audioCTX.currentTime + duration,
      );
    }
  }

  applyEqualizer(lowGain = 0, midGain = 0, highGain = 0) {
    const lowFilter = audioCTX.createBiquadFilter();
    lowFilter.type = "lowshelf";
    lowFilter.frequency.value = 250;
    lowFilter.gain.value = lowGain;

    const midFilter = audioCTX.createBiquadFilter();
    midFilter.type = "peaking";
    midFilter.frequency.value = 1000;
    midFilter.Q.value = 1;
    midFilter.gain.value = midGain;

    const highFilter = audioCTX.createBiquadFilter();
    highFilter.type = "highshelf";
    highFilter.frequency.value = 4000;
    highFilter.gain.value = highGain;

    this.filters = [lowFilter, midFilter, highFilter];
  }

  destroy() {
    // Stop playback
    this.pause();

    // Disconnect all filters and gain node
    if (this.gainNode) {
      this.gainNode.disconnect();
      this.gainNode = null;
    }
    for (const filter of this.filters) {
      filter.disconnect();
    }
    this.filters = [];

    // Clear audio buffer reference
    this.data = null;

    // Clear event handlers
    this.onended = null;
  }

  onended() {
    // Gets overwritten by the user script
  }
}

audioEngine.Player = AudioBufferPlayer;
audioEngine.AudioBufferPlayer = AudioBufferPlayer;

module.exports = audioEngine;


/***/ }),

/***/ 3358:
/***/ (() => {

console.log(
  "%cWARNING: %cPotential Security Risk!\n" +
    "The panel you just opened may expose your Random Rants + account to hackers. If you're logged in, avoid sharing any sensitive information like browser cookies or pasting unknown code here. Stay safe!",
  "font-size: 32px; font-weight: bold; font-family: Arial, sans-serif; color: red;",
  "font-size: 20px; font-family: Arial, sans-serif; color: black;",
);


/***/ }),

/***/ 4592:
/***/ ((module) => {

var lastValidationState = null;
var cookieManager = {
  getAccountCookie() {
    return this.getCookie("account");
  },
  signoutAccountCookie() {
    return this.setCookie("account", "");
  },
  setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
};

function getServerURL() {
  return new URL(window.location.href).origin;
}

async function checkSessionCookie() {
  try {
    var request = await fetch(getServerURL() + "/account/session", {
      method: "GET",
    });
    var json = await request.json();
    if (json.valid) {
      lastValidationState = json;
      return json;
    }
    lastValidationState = null;
    return false;
  } catch (e) {
    lastValidationState = null;
    return false;
  }
}

async function loginToAccount(username, password) {
  var sendJSON = {
    username: username,
    password: password,
  };
  var request = await fetch(getServerURL() + "/account/login", {
    method: "POST",
    body: JSON.stringify(sendJSON),
  });
  var json = await request.json();
  if (!json.valid) {
    throw new Error(json.message);
  }
}

async function signupAccount(username, password) {
  var sendJSON = {
    username: username,
    password: password,
  };
  var request = await fetch(getServerURL() + "/account/signup", {
    method: "POST",
    body: JSON.stringify(sendJSON),
  });
  var json = await request.json();
  if (!json.valid) {
    throw new Error(json.message);
  }
}

async function logoutOfAccount() {
  var request = await fetch(getServerURL() + "/account/logout", {
    method: "POST",
  });
}

function getProfilePictureURL(username) {
  return getServerURL() + "/account/picture/" + username;
}

function loginToAdmin() {
  var pr = window.prompt("Admin key:");
  cookieManager.setCookie("admin", pr);
}

function openLink(href, newTab) {
  var a = document.createElement("a");
  a.href = href;
  if (newTab) {
    a.target = "_blank";
  }
  a.click();
}

async function getJoinedRooms() {
  var a = await fetch(getServerURL() + "/account/myrooms");
  if (a.ok) {
    var b = await a.json();
    return b.rooms;
  } else {
    return [];
  }
}

async function removeJoinedRoom(id) {
  var a = await fetch(getServerURL() + "/account/removeroom", {
    method: "POST",
    body: JSON.stringify({ id }),
  });
  return;
}

async function hasNewMail() {
  try {
    var a = await fetch(getServerURL() + "/account/mail");
    if (a.ok) {
      var json = await a.json();
      if (json.mail) {
        for (var message of json.mail) {
          if (message.new) {
            return true;
          }
        }
      }
      return false;
    }
    return false;
  } catch (e) {
    return false;
  }
}
function getCurrentValidationState() {
  return lastValidationState;
}

module.exports = {
  cookieManager,
  getServerURL,
  checkSessionCookie,
  loginToAccount,
  signupAccount,
  logoutOfAccount,
  getProfilePictureURL,
  loginToAdmin,
  openLink,
  hasNewMail,
  getCurrentValidationState,
  getJoinedRooms,
  removeJoinedRoom,
};


/***/ }),

/***/ 6049:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);
var accountHelper = __webpack_require__(4592);

var elementJSON = [
  {
    element: "div",
    className: "userMenuBar",
    gid: "userMenuBar",
    children: [],
  },
];

elements.appendElements(
  elements.getGPId("menu_bar"),
  elements.createElementsFromJSON(elementJSON),
);

var signInButton = {
  element: "div",
  className: "menuBarItem",
  textContent: "Sign in",
  gid: "menu_signIn",
};
var signUpButton = {
  element: "div",
  className: "menuBarItem",
  textContent: "Sign up",
  gid: "menu_signUp",
};

var myAccountButton = {
  element: "div",
  className: "menuBarItem",
  gid: "menu_myAccount",
};

function handleSignedOutAccountButtons() {
  var signInButton = elements.getGPId("menu_signIn");

  signInButton.addEventListener("click", () => {
    window.location.href = "/signin";
  });

  var signUpButton = elements.getGPId("menu_signUp");

  signUpButton.addEventListener("click", () => {
    window.location.href = "/signup";
  });
}

function handleUserAccountButtons() {
  var myAccountButton = elements.getGPId("menu_myAccount");

  myAccountButton.addEventListener("click", () => {
    window.location.href = "/myaccount";
  });
}

(async function () {
  var validated = await accountHelper.checkSessionCookie();
  if (validated) {
    myAccountButton = {
      element: "div",
      gid: "menu_myAccount",
      className: "menuBarItemUsername",
      style: {
        display: "flex",
      },
      children: [
        {
          element: "img",
          style: {
            outline: "none",
            borderRadius: "40px",
            backgroundColor: "#969696",
            imageRendering: "pixelated",
            top: "0px",
            width: "40px",
            height: "40px",
          },
          src: accountHelper.getProfilePictureURL(validated.username),
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
              style: {
                alignContent: "center",
                fontWeight: "bold",
                color: validated.color || "#000000",
              },
              textContent: validated.displayName,
            },
            {
              element: "span",
              style: {
                alignContent: "center",
                color: validated.color || "#000000",
                fontSize: "10px",
              },
              textContent: validated.username,
            },
          ],
        },
        {
          element: "div",
          style: {
            width: "10px",
          },
        },
      ],
    };
    elements.appendElements(
      elements.getGPId("menu_bar"),
      elements.createElementsFromJSON([myAccountButton]),
    );
    handleUserAccountButtons();
  } else {
    elements.appendElements(
      elements.getGPId("menu_bar"),
      elements.createElementsFromJSON([signInButton, signUpButton]),
    );
    handleSignedOutAccountButtons();
  }
})();


/***/ }),

/***/ 6313:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var elements = __webpack_require__(7255);

var elementJSON = [
  {
    element: "div",
    className: "menuBar",
    gid: "menu_bar",
    children: [
      //Home button
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
      //Chat button.
      {
        element: "div",
        className: "menuBarItem",
        textContent: "Chat",
        eventListeners: [
          {
            event: "click",
            func: function () {
              window.location.href = "/chat";
            },
          },
        ],
      },
      //Quick join button.
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
      //About button.
      {
        element: "div",
        className: "menuBarItem",
        textContent: "About",
        eventListeners: [
          {
            event: "click",
            func: function () {
              window.location.href = "/about";
            },
          },
        ],
      },
    ],
  },
  {
    //Since using position:fixed removes spacing, manually just add it by using a invisible div element.
    element: "div",
    style: {
      width: "100%",
      height: "40px",
    },
  },
];

elements.appendElements(
  elements.body,
  elements.createElementsFromJSON(elementJSON),
);

__webpack_require__(6049);


/***/ }),

/***/ 7255:
/***/ ((module) => {

//Webpack compatible version of elements module from gvbvdxx-pack-2
//With some new updates as well.
var __GP_elements = {};
function isDOM(Obj) {
  return Obj instanceof Element;
}
var elements = {
  appendElements: function (elm, appendArray) {
    for (var appendElm of appendArray) {
      elm.append(appendElm);
    }
  },
  createElementsFromJSON: function (jsonelmArray) {
    //converts an array of json's with element properties to a element list.
    function runElements(arry) {
      var myRealElms = [];
      for (var elm of arry) {
        if (!isDOM(elm)) {
          if (typeof elm == "object") {
            var realElm = document.createElement(elm.element);
            for (var attriName of Object.keys(elm)) {
              if (!(attriName == "element" || attriName == "children")) {
                var attributeValue = elm[attriName];
                var setattri = true;
                if (attriName == "gid") {
                  __GP_elements[attributeValue] = realElm;
                  setattri = false;
                }
                if (attriName == "style") {
                  for (var styleName of Object.keys(attributeValue)) {
                    var styleValue = attributeValue[styleName];
                    realElm.style[styleName] = styleValue;
                  }
                  setattri = false;
                }
                if (attriName == "innerHTML") {
                  realElm.innerHTML = attributeValue;
                  setattri = false;
                }
                if (attriName == "textContent") {
                  realElm.textContent = attributeValue;
                  setattri = false;
                }
                if (attriName == "src") {
                  realElm.src = attributeValue;
                  setattri = false;
                }
                if (attriName == "srcObject") {
                  realElm.srcObject = attributeValue;
                  setattri = false;
                }
                if (attriName == "value") {
                  realElm.value = attributeValue;
                  setattri = false;
                }
                if (attriName == "min") {
                  realElm.min = attributeValue;
                  setattri = false;
                }
                if (attriName == "max") {
                  realElm.max = attributeValue;
                  setattri = false;
                }
                if (attriName == "width") {
                  realElm.width = attributeValue;
                  setattri = false;
                }
                if (attriName == "height") {
                  realElm.height = attributeValue;
                  setattri = false;
                }
                if (attriName == "className") {
                  realElm.className = attributeValue;
                  setattri = false;
                }
                if (attriName == "hidden") {
                  if (attributeValue) {
                    realElm.hidden = true;
                  }
                  setattri = false;
                }
                if (attriName == "selected") {
                  if (attributeValue) {
                    realElm.selected = true;
                  }
                  setattri = false;
                }
                if (attriName == "eventListeners") {
                  if (Array.isArray(attributeValue)) {
                    for (var event of attributeValue) {
                      realElm.addEventListener(event.event, event.func);
                    }
                  }
                  setattri = false;
                }
                if (attriName == "GPWhenCreated") {
                  attributeValue.bind(realElm)(realElm); //This seems weird, but first realElm is the "this" value refrence, then the second realElm is for the function value, as well as calling the new binded function.
                  setattri = false;
                }
                if (setattri) {
                  if (typeof realElm[attriName] !== "undefined") {
                    realElm[attriName] = attributeValue;
                    setattri = false;
                  }
                }
                if (setattri) {
                  realElm.setAttribute(attriName, attributeValue);
                }
              }
            }

            if (elm.children) {
              var elmsToAppend = runElements(elm.children);
              for (var elmAppend of elmsToAppend) {
                realElm.append(elmAppend);
              }
            }
            myRealElms.push(realElm);
          } else {
            myRealElms.push(elm);
          }
        } else {
          if (elm) {
            myRealElms.push(elm);
          }
        }
      }
      return myRealElms;
    }
    return runElements(jsonelmArray);
  },
  getById: function (id) {
    return document.getElementById(id);
  },
  setGPId: function (el, id) {
    __GP_elements[id] = el;
    return el;
  },
  disposeGPId: function (id) {
    __GP_elements[id] = undefined;
  },
  getGPId: function (id) {
    if (__GP_elements[id]) {
      return __GP_elements[id];
    }
    return null;
  },
  body: document.body,
  __GP_elements: __GP_elements,
};
module.exports = elements;


/***/ }),

/***/ 8149:
/***/ ((module) => {

var dialog = {
  styles: {
    //Container (Holds both background and dialog box)
    containerClassName: "windowDialogContainer",
    //Background
    backgroundClassName: "windowDialogBackground",
    //Dialog
    dialogClassName: "windowDialogBox",
    //Button
    buttonClassName: "windowDialogButton",
    //Header
    headerClassName: "windowDialogHeader",
    //Input (Where you type text)
    inputClassName: "windowDialogInput",
  },
  texts: {
    ok: "OK",
    cancel: "Cancel",
  },
  _createDialogBase() {
    var background = document.createElement("div");
    background.style.position = "fixed";
    background.style.top = "0";
    background.style.left = "0";
    background.style.width = "100vw";
    background.style.height = "100vh";
    background.style.opacity = "0.5";
    background.className = this.styles.backgroundClassName;

    var dialogBox = document.createElement("div");
    dialogBox.style.position = "fixed";
    dialogBox.style.top = "50%";
    dialogBox.style.left = "50%";
    dialogBox.style.transform = "translate(-50%, -50%)";
    dialogBox.style.width = "fit-content";
    dialogBox.style.height = "fit-content";
    dialogBox.style.padding = "20px";
    dialogBox.style.maxWidth = "500px";
    dialogBox.style.maxHeight = "300px";
    dialogBox.style.minWidth = "100px";
    dialogBox.style.minHeight = "100px";
    dialogBox.style.overflow = "auto";
    dialogBox.className = this.styles.dialogClassName;

    var dialogContainer = document.createElement("div");
    dialogContainer.style.zIndex = "100";
    dialogContainer.className = this.styles.containerClassName;
    dialogContainer.append(background);
    dialogContainer.append(dialogBox);

    return { background, dialogBox, dialogContainer };
  },
  _createButtonBase() {
    var button = document.createElement("div");
    button.className = this.styles.buttonClassName;
    button.style.width = "fit-content";
    button.style.height = "fit-content";
    button.style.minWidth = "30px";
    button.style.minHeight = "20px";
    button.style.padding = "3px";
    button.style.cursor = "pointer";
    button.style.display = "inline-block";

    return button;
  },
  _createHeaderBase() {
    var span = document.createElement("span");
    span.className = this.styles.headerClassName;

    return span;
  },
  _createColorInputBase() {
    var input = document.createElement("input");
    input.type = "color";

    return input;
  },
  _createBreakBase() {
    var br = document.createElement("br");
    return br;
  },
  _createTextInputBase() {
    var input = document.createElement("input");
    input.type = "text";
    input.className = this.styles.inputClassName;

    return input;
  },
  _appendHeaders(message, dialogBox) {
    var m = message.toString();
    for (var m of m.split("\n")) {
      var header = this._createHeaderBase();
      header.textContent = m;
      dialogBox.append(header);
      dialogBox.append(this._createBreakBase());
    }
  },
  displayButtonChooser: function (message, buttonTexts) {
    var { dialogBox, background, dialogContainer } = this._createDialogBase();

    dialogBox.focus();

    this._appendHeaders(message, dialogBox);

    document.body.append(dialogContainer);

    return new Promise((accept) => {
      buttonTexts.forEach((buttonText, index) => {
        var button = this._createButtonBase();
        button.textContent = buttonText;
        button.onclick = function () {
          dialogContainer.remove();
          accept(index);
        };
        dialogBox.append(button);
      });
    });
  },
  alert: function (message) {
    var { dialogBox, background, dialogContainer } = this._createDialogBase();

    dialogBox.focus();

    document.body.append(dialogContainer);

    this._appendHeaders(message, dialogBox);

    var acceptButton = this._createButtonBase();
    acceptButton.textContent = this.texts.ok;
    dialogBox.append(acceptButton);

    return new Promise((accept) => {
      acceptButton.onclick = function () {
        accept();
        dialogContainer.remove();
      };
    });
  },
  prompt: function (message) {
    var { dialogBox, background, dialogContainer } = this._createDialogBase();

    dialogBox.focus();

    document.body.append(dialogContainer);

    this._appendHeaders(message, dialogBox);

    var input = this._createTextInputBase();
    dialogBox.append(input);

    dialogBox.append(this._createBreakBase());

    var acceptButton = this._createButtonBase();
    acceptButton.textContent = this.texts.ok;
    dialogBox.append(acceptButton);

    var cancelButton = this._createButtonBase();
    cancelButton.textContent = this.texts.cancel;
    dialogBox.append(cancelButton);

    return new Promise((accept) => {
      input.onkeydown = function (e) {
        if (e.key == "Enter") {
          e.preventDefault();
          acceptButton.click();
        }
      };
      acceptButton.onclick = function () {
        if (input.value.length < 1) {
          accept(undefined);
        } else {
          accept(input.value);
        }
        dialogContainer.remove();
      };
      cancelButton.onclick = function () {
        accept();
        dialogContainer.remove();
      };
    });
  },
  confirm: function (message) {
    var { dialogBox, background, dialogContainer } = this._createDialogBase();

    dialogBox.focus();

    document.body.append(dialogContainer);

    this._appendHeaders(message, dialogBox);

    var acceptButton = this._createButtonBase();
    acceptButton.textContent = this.texts.ok;
    dialogBox.append(acceptButton);

    var cancelButton = this._createButtonBase();
    cancelButton.textContent = this.texts.cancel;
    dialogBox.append(cancelButton);

    return new Promise((accept) => {
      acceptButton.onclick = function () {
        accept(true);
        dialogContainer.remove();
      };
      cancelButton.onclick = function () {
        accept(false);
        dialogContainer.remove();
      };
    });
  },
  colorPrompt: function (message) {
    var { dialogBox, background, dialogContainer } = this._createDialogBase();

    dialogBox.focus();

    document.body.append(dialogContainer);

    this._appendHeaders(message, dialogBox);

    var colorInput = this._createColorInputBase();
    dialogBox.append(colorInput);

    dialogBox.append(this._createBreakBase());

    var acceptButton = this._createButtonBase();
    acceptButton.textContent = this.texts.ok;
    dialogBox.append(acceptButton);

    var cancelButton = this._createButtonBase();
    cancelButton.textContent = this.texts.cancel;
    dialogBox.append(cancelButton);

    return new Promise((accept) => {
      acceptButton.onclick = function () {
        accept(colorInput.value);
        dialogContainer.remove();
      };
      cancelButton.onclick = function () {
        accept();
        dialogContainer.remove();
      };
    });
  },
  passwordPrompt: function (message) {
    var { dialogBox, background, dialogContainer } = this._createDialogBase();

    dialogBox.focus();

    document.body.append(dialogContainer);

    this._appendHeaders(message, dialogBox);

    var input = this._createTextInputBase();
    input.type = "password";
    dialogBox.append(input);

    dialogBox.append(this._createBreakBase());

    var acceptButton = this._createButtonBase();
    acceptButton.textContent = this.texts.ok;
    dialogBox.append(acceptButton);

    var cancelButton = this._createButtonBase();
    cancelButton.textContent = this.texts.cancel;
    dialogBox.append(cancelButton);

    return new Promise((accept) => {
      input.onkeydown = function (e) {
        if (e.key == "Enter") {
          e.preventDefault();
          acceptButton.click();
        }
      };
      acceptButton.onclick = function () {
        if (input.value.length < 1) {
          accept(undefined);
        } else {
          accept(input.value);
        }
        dialogContainer.remove();
      };
      cancelButton.onclick = function () {
        accept();
        dialogContainer.remove();
      };
    });
  },
};

module.exports = dialog;


/***/ }),

/***/ 8563:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var styles = __webpack_require__(8567);
var elements = __webpack_require__(7255);

var pageElements = elements.createElementsFromJSON([
  {
    element: "style",
    textContent: styles,
  },
]);
elements.appendElements(elements.body, pageElements);


/***/ }),

/***/ 8567:
/***/ ((module) => {

module.exports = "body {\n  background: #b8b8b8;\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\n\n[hidden] {\n  display: none;\n}\n\n/* Menu Bar */\n.menuBar {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 40px;\n  background: #b8b8b8;\n  z-index: 10;\n}\n\n.userMenuBar {\n  margin-left: auto;\n}\n\n.menuBarItem,\n.menuBarItemUsername,\n.menuBarItemLogo {\n  color: #000;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n  padding: 0 8px;\n  transition: background-color 0.2s, color 0.2s;\n}\n\n.menuBarItem:hover {\n  color: #ebebeb;\n}\n\n.menuBarItemUsername:hover {\n  background: #787878;\n  border-radius: 5px;\n}\n\n.menuBarItemLogo:hover {\n  background: #787878;\n  border-radius: 5px;\n  animation: menuBarLogoAnim 0.25s ease-in-out;\n}\n\n@keyframes menuBarLogoAnim {\n  0% {\n    transform: scale(1, 1);\n  }\n  40% {\n    transform: scale(1.1, 0.9);\n  }\n  80% {\n    transform: scale(0.9, 1.1);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n/* Main Center Content */\n.centerHorizontal {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1;\n}\n\n.headerText {\n  font-weight: bold;\n  font-size: 32px;\n}\n\n/* Buttons */\n.button {\n  background: #dbdbdb;\n  color: #555;\n  border-radius: 4px;\n  padding: 6px 12px;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  transition: background 0.05s;\n}\n\n.button:hover {\n  background: #d1d1d1;\n}\n\n.button2 {\n  background: #dbdbdb;\n  color: #555;\n  border-radius: 4px;\n  padding: 6px 12px;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  transition: background 0.05s;\n  width: fit-content;\n  height: fit-content;\n}\n\n.button2:hover {\n  background: #d1d1d1;\n}\n\n/* Input Boxes */\n.inputText1 {\n  resize: none;\n  border: 1px solid #1f1f1f;\n  background-color: #fff;\n  color: #000;\n  outline: none;\n  font-family: Arial, sans-serif;\n  border-radius: 3px;\n  padding: 4px;\n}\n\n/* Dialogs */\n.centeredDialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n:root {\n  --popup-dialog-font: Arial, sans-serif;\n  --popup-dialog-background: #fff;\n  --popup-dialog-border-radius: 10px;\n  --popup-dialog-text-color: #000;\n  --popup-dialog-button-background: #5985ff;\n  --popup-dialog-button-hover-background: #4275ff;\n  --popup-dialog-button-text-color: #fff;\n  --popup-dialog-button-radius: 5px;\n  --popup-dialog-input-background: #fff;\n  --popup-dialog-input-border-width: 1.5px;\n  --popup-dialog-input-border-color: #bababa;\n  --popup-dialog-input-text-color: #000;\n  --popup-dialog-message-size: 16px;\n}\n\n.windowDialogContainer {\n  font-family: var(--popup-dialog-font);\n}\n\n.windowDialogBackground {\n  background-color: black;\n  backdrop-filter: blur(2px);\n}\n\n.windowDialogBox {\n  background: var(--popup-dialog-background);\n  border-radius: var(--popup-dialog-border-radius);\n  color: var(--popup-dialog-text-color);\n}\n\n.windowDialogButton {\n  background: var(--popup-dialog-button-background);\n  color: var(--popup-dialog-button-text-color);\n  border-radius: var(--popup-dialog-button-radius);\n  padding: 4px 8px;\n  border: none;\n  cursor: pointer;\n}\n\n.windowDialogButton:hover {\n  background: var(--popup-dialog-button-hover-background);\n}\n\n.windowDialogInput {\n  background: var(--popup-dialog-input-background);\n  border: var(--popup-dialog-input-border-width) solid\n    var(--popup-dialog-input-border-color);\n  color: var(--popup-dialog-input-text-color);\n  outline: none;\n  border-radius: 4px;\n  padding: 4px;\n}\n\n.windowDialogHeader {\n  font-weight: bold;\n  font-size: var(--popup-dialog-message-size);\n}\n\nimg {\n  image-rendering: pixelated;\n}\n\na {\n  color: #4287f5;\n}\na:hover {\n  color: #3267ba;\n  cursor: pointer;\n}\n\n.aboutDivCenter {\n  width: calc(100vw - 400px);\n  height: fit-content;\n  padding: 10px 10px;\n\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0px);\n\n  background: white;\n  border-radius: 5px;\n}\n\n.yellowBoxedText {\n  margin: 8px 0;\n  padding: 10px;\n  background-color: #fff8d1;\n  border: 1px solid #ffd700;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #444;\n  line-height: 1.4;\n}\n\n.button [disabled] {\n  pointer-events: none;\n}\n.button2 [disabled] {\n  pointer-events: none;\n}\n";

/***/ })

}]);
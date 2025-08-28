/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3337:
/***/ ((module) => {

module.exports = "[font css=Arial][color css=crimson][i]\"Press play, then brace for chaos.\"[/i][/color][/font][br]\n[font css=Verdana][colors][i]\"No hall pass needed for this kind of noise.\"[/i][/colors][/font][br]\n[font css=Courier New][color css=darkgoldenrod][i]\"Built with more energy than your last group project.\"[/i][/color][/font][br]\n[font css=Tahoma][color css=seagreen][i]\"Unmuted. Unfiltered. Unapologetic.\"[/i][/color][/font][br]\n[font css=Georgia][colors][i]\"Warning: May cause spontaneous laughter.\"[/i][/colors][/font][br]\n[font css=Cursive][color css=orangered][i]\"When school gets boring, we get louder.\"[/i][/color][/font][br]\n[font css=sans-serif][color css=indigo][i]\"Like a fire drill, but with memes.\"[/i][/color][/font][br]\n[font css=Monaco][colors][i]\"Zero educational value. Maximum volume.\"[/i][/colors][/font][br]\n[font css=Arial][color css=teal][i]\"The louder you laugh, the stronger the connection.\"[/i][/color][/font][br]\n[font css=Tahoma][color css=hotpink][i]\"A place where 'Shhh' goes to die.\"[/i][/color][/font][br]\n[font css=Georgia][colors][i]\"Technically school-safe. Emotionally chaotic.\"[/i][/colors][/font][br]\n[font css=Verdana][color css=slateblue][i]\"It's not just sound. It's personality overload.\"[/i][/color][/font][br]\n[font css=\"Lucida Console\"][colors][i]\"This is why headphones were invented.\"[/i][/colors][/font][br]\n[font css=Courier][color css=chocolate][i]\"For when class gets too quiet to tolerate.\"[/i][/color][/font][br]\n[font css=Arial][color css=midnightblue][i]\"This is what happens when students have too much creativity.\"[/i][/color][/font][br]\n[font css=Tahoma][color css=darkslategray][i]\"If your Chromebook had a spirit animal, this would be it.\"[/i][/color][/font][br]\n[font css=Cursive][colors][i]\"Turn it up. Someone might actually smile today.\"[/i][/colors][/font][br]\n[font css=Georgia][color css=deeppink][i]\"Made in chaos. Tuned for fun.\"[/i][/color][/font][br]\n[font css=Verdana][color css=royalblue][i]\"Think before you press play. Or don't.\"[/i][/color][/font][br]\n[font css=Courier New][colors][i]\"Because laughter is louder than detention.\"[/i][/colors][/font][br]\n[font css=Arial][color css=tomato][i]\"Your volume knob is not ready for this.\"[/i][/color][/font][br]\n[font css=Tahoma][color css=mediumseagreen][i]\"When the teacher says 'group work', we hear 'group noise'.\"[/i][/color][/font][br]\n[font css=\"Lucida Sans\"][colors][i]\"Be the sound you want to hear in class.\"[/i][/colors][/font][br]\n[font css=Courier][color css=slategray][i]\"A moment of silence? Never heard of it.\"[/i][/color][/font][br]\n[font css=Georgia][color css=darkmagenta][i]\"Good decisions rarely start with a soundboard.\"[/i][/color][/font][br]\n[font css=Cursive][colors][i]\"Class participation, now with reverb.\"[/i][/colors][/font][br]\n[font css=Verdana][color css=darkolivegreen][i]\"Approved by absolutely no teachers.\"[/i][/color][/font][br]\n[font css=Arial][color css=sienna][i]\"Social studies? No. Social volume? Yes.\"[/i][/color][/font][br]\n[font css=Tahoma][color css=firebrick][i]\"Where chaos is a feature, not a bug.\"[/i][/color][/font][br]\n[font css=sans-serif][colors][i]\"We came for the chat. We stayed for the madness.\"[/i][/colors][/font][br]";

/***/ }),

/***/ 6031:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(3358);
__webpack_require__(8563);
var menuBar = __webpack_require__(6313);
var elements = __webpack_require__(7255);
var shtml = __webpack_require__(472);
var audioEngine = __webpack_require__(1662);
var accountHelper = __webpack_require__(4592);
var dialogs = __webpack_require__(8149);

var randomDialogText = __webpack_require__(3337);
var randomQuotes = randomDialogText.split("\n");

async function fetchAsJSON(url, options) {
  var a = await fetch(url, options);
  var b = await a.json();

  return b;
}

function returnRandomValueFromArray(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

var elementJSON = [
  {
    element: "div",
    className: "scrolling-container",
    gid: "scrollingContainer",
    children: [
      {
        element: "div",
        className: "scrolling-content",
        gid: "scrollingContent",
      },
    ],
  },
  {
    element: "div",
    gid: "emojiContainer",
    style: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: "0px",
      left: "0px",
      overflow: "hidden",
    },
  },
  {
    element: "img",
    gid: "person1",
    src: "images/person-dialog.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      left: "0px",
      pointerEvents: "none",
    },
  },
  {
    element: "img",
    gid: "person2",
    src: "images/person-dialog.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      right: "0px",
      transform: "scale(-1, 1)",
      pointerEvents: "none",
    },
  },
  {
    element: "img",
    GPWhenCreated: function (elm) {
      var anim = elm.animate(
        [
          { transform: "translateY(300px)" },
          { transform: "translateY(-10px)" },
          { transform: "translateY(0px)" },
        ],
        {
          duration: 700,
          iterations: 1,
          easing: "ease-out",
        },
      );
      anim.addEventListener("finish", () => {
        elm.animate(
          [
            { transform: "rotate(0deg)" },
            { transform: "rotate(3deg)" },
            { transform: "rotate(-3deg)" },
            { transform: "rotate(0deg)" },
          ],
          {
            duration: 600,
            iterations: Infinity,
            easing: "ease-out",
          },
        );
      });
    },
    src: "images/person1.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      left: "0px",
      pointerEvents: "none",
    },
  },
  {
    element: "img",
    GPWhenCreated: function (elm) {
      var anim = elm.animate(
        [
          { transform: "translateY(300px) scale(-1, 1)" },
          { transform: "translateY(-10px) scale(-1, 1)" },
          { transform: "translateY(0px) scale(-1, 1)" },
        ],
        {
          duration: 800,
          iterations: 1,
          easing: "ease-out",
        },
      );
      anim.addEventListener("finish", () => {
        elm.animate(
          [
            { transform: "rotate(0deg) scale(-1, 1)" },
            { transform: "rotate(3deg) scale(-1, 1)" },
            { transform: "rotate(-3deg) scale(-1, 1)" },
            { transform: "rotate(0deg) scale(-1, 1)" },
          ],
          {
            duration: 800,
            iterations: Infinity,
            easing: "ease-out",
          },
        );
      });
    },
    src: "images/person2.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      right: "0px",
      transform: "scale(-1, 1)",
      pointerEvents: "none",
    },
  },
  {
    element: "div",
    style: {
      transform: "translate(-50%, -50%)",
      position: "fixed",
      top: "50%",
      left: "50%",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      boxShadow: "0 0px 30px black",
    },
    children: [
      {
        element: "div",
        className: "fadeIn",
        gid: "mainCenter",
        style: {
          width: "calc(100vw - 200px)",
          minWidth: "300px",
          textWrap: "balance", // Only works in Chromium browsers
          textAlign: "center",
          overflowWrap: "break-word",
          wordBreak: "break-word",
          hyphens: "auto",
          padding: "1rem", // Optional: gives breathing room
          boxSizing: "border-box",
        },
        children: [
          {
            element: "span",
            className: "fadeIn delay-3",
            style: {
              fontSize: "40px",
              color: "black",
            },
            innerHTML: shtml.getMessageHTML(
              returnRandomValueFromArray(randomQuotes).trim(),
            ),
          },
          {
            element: "br",
          },
          {
            element: "span",
            className: "headerText bounceIn",
            gid: "mainHeader",
            textContent: "Welcome to Random Rants +",
          },
          { element: "br" },
          //For people that always look at the center of the site for stuff, here is some "useful" links that you may need.

          {
            element: "div",
            style: {
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            },
            children: [
              {
                element: "div",
                className: "button2",
                textContent: "Chat now!!",
                eventListeners: [
                  {
                    event: "click",
                    func: async function () {
                      if (!accountHelper.getCurrentValidationState()) {
                        if (
                          await dialogs.confirm(
                            "Are you sure you want to join without an Random Rants + account?\nYou won't be able to:\nsave rooms in your room manager\ncreate rooms\ncustomize you're display name and display color\nbecome an room ownership member",
                          )
                        ) {
                          window.location.href = "/chat";
                        }
                      } else {
                        window.location.href = "/chat";
                      }
                    },
                  },
                ],
              },
              {
                element: "div",
                className: "button2",
                textContent: "Join a code",
                eventListeners: [
                  {
                    event: "click",
                    func: async function () {
                      if (!accountHelper.getCurrentValidationState()) {
                        if (
                          await dialogs.confirm(
                            "Are you sure you want to join someones room without an Random Rants + account?\nYou won't be able to:\nsave rooms in your room manager\ncreate rooms\ncustomize you're display name and display color\nbecome an room ownership member",
                          )
                        ) {
                          window.location.href = "/join";
                        }
                      } else {
                        window.location.href = "/join";
                      }
                    },
                  },
                ],
              },
            ],
          },
          { element: "br" },
          {
            element: "div",
            gid: "userAccountStuffA",
            hidden: true,
            children: [
              {
                element: "div",
                style: {
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                },
                children: [
                  {
                    element: "div",
                    className: "button2",
                    textContent: "Sign In",
                    eventListeners: [
                      {
                        event: "click",
                        func: function () {
                          window.location.href = "/signin";
                        },
                      },
                    ],
                  },
                  {
                    element: "div",
                    className: "button2",
                    textContent: "Sign Up",
                    eventListeners: [
                      {
                        event: "click",
                        func: function () {
                          window.location.href = "/signup";
                        },
                      },
                    ],
                  },
                ],
              },
              { element: "br" },
            ],
          },
          {
            element: "span",
            className: "fadeIn delay-1",
            gid: "description1",
            textContent:
              "Random Rants + is your hideout from homework — chat, meme, and vibe while the teacher thinks you're researching a project.",
          },
          { element: "br" },
          {
            element: "span",
            className: "fadeIn delay-2",
            gid: "description2",
            textContent:
              "Talk loud, spam harder. With memes and sounds that could crash a school network, this is Chromebook rebellion at its finest.",
          },
          { element: "br" },
          {
            element: "div",
            hidden: true,
            gid: "userAccountStuffB",
            children: [
              {
                element: "span",
                className: "fadeIn delay-3",
                gid: "description3",
                children: [
                  {
                    element: "a",
                    textContent: "Sign in",
                    href: "/signin",
                  },
                  " or ",
                  {
                    element: "a",
                    textContent: "Sign up",
                    href: "/signup",
                  },
                  ", jump into a room, and start the chaos.",
                  " Whether it’s behind the teacher’s back or during silent reading, Random Rants + is *your* zone.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

elements.appendElements(
  elements.body,
  elements.createElementsFromJSON(elementJSON),
);

var style = document.createElement("style");
style.textContent = `
  
  @font-face {
    font-family: ComicSansMS;
    src: url(COMIC.TTF);
  }
  
  .fadeIn {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s forwards;
  }
  .bounceIn {
    animation: bounceIn 1.2s;
  }
  .delay-1 {
    animation-delay: 0.5s;
  }
  .delay-2 {
    animation-delay: 1s;
  }
  .delay-3 {
    animation-delay: 1.5s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeIn {
    from {
      transform: translate(0px, 100px) scale(2, 2);
      opacity: 0;
    }
    to {
      transform: translate(0px, 80px) scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes fadeIn2 {
    from {
      transform: translate(0px, 100px) scale(-2, 2);
      opacity: 0;
    }
    to {
      transform: translate(0px, 80px) scale(-1, 1);
      opacity: 1;
    }
  }
  
  @keyframes rotating {
    0% {
      transform: translate(0px, 100px) scale(1, 1) rotate(-0.1deg);
    }
    50% {
      transform: translate(0px, 100px) scale(1showSignStuff, 1) rotate(0.1deg);
    }
    100% {
      transform: translate(0px, 100px) scale(1, 1) rotate(-0.1deg);
    }
  }
  
  @keyframes rotating2 {
    0% {
      transform: translate(0px, 100px) scale(-1, 1) rotate(-0.1deg);
    }
    50% {
      transform: translate(0px, 100px) scale(-1, 1) rotate(0.1deg);
    }
    100% {
      transform: translate(0px, 100px) scale(-1, 1) rotate(-0.1deg);
    }
  }
  
  @keyframes bounceIn {
    0%, 20%, 40%, 60%, 80%, 100% {
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`;
document.head.appendChild(style);

//Animate persons.

var person1 = elements.getGPId("person1");

var p1Animation = person1.animate(
  [
    { transform: "translateY(300px)" },
    { transform: "translateY(-10px)" },
    { transform: "translateY(0px)" },
  ],
  {
    duration: 700,
    iterations: 1,
    easing: "ease-out",
  },
);
p1Animation.addEventListener("finish", () => {
  person1.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)  scale(1.2, 0.8) rotate(-2deg)" },
      { transform: "translateY(10px) scale(1.5, 0.6) rotate(2deg)" },
      { transform: "translateY(0px)" },
    ],
    {
      duration: 700,
      iterations: Infinity,
      easing: "ease-out",
    },
  );
});

var person2 = elements.getGPId("person2");

var p2Animation = person2.animate(
  [
    { transform: "translateY(300px) scale(-1, 1)" },
    { transform: "translateY(-10px) scale(-1, 1)" },
    { transform: "translateY(0px) scale(-1, 1)" },
  ],
  {
    duration: 900,
    iterations: 1,
    easing: "ease-out",
  },
);

p2Animation.addEventListener("finish", () => {
  person2.animate(
    [
      { transform: "translateY(0px) scale(-1, 1)" },
      { transform: "translateY(-10px) scale(-1.2, 0.8) rotate(-2deg)" },
      { transform: "translateY(10px) scale(-1.5, 0.6) rotate(2deg)" },
      { transform: "translateY(0px) scale(-1, 1)" },
    ],
    {
      duration: 800,
      iterations: Infinity,
      easing: "ease-out",
    },
  );
});

//Floating emojis and behaivor

const emojiContainer = elements.getGPId("emojiContainer");

const EMOJIS = ["😂", "🤣", "💀", "🤨", "😎"];
var EMOJISound = null;

(async function () {
  var soundURLS = await fetchAsJSON("external/uisound.json");
  EMOJISound = await audioEngine.loadSoundFromURL(soundURLS.select);
})();

const MAX_EMOJIS = 100;
const INITIAL_EMOJIS = 70;

function createFloatingEmoji(spawnAnywhere = false, spawnAt) {
  const emoji = document.createElement("div");
  emoji.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  emoji.style.position = "absolute";
  emoji.style.fontSize = `${180 + Math.random() * 40}%`;
  emoji.style.textShadow = "#000000 2px 3px 5px";

  const startX = Math.random() * window.innerWidth;
  const offsetX = (Math.random() - 0.5) * 100;

  const startY = spawnAnywhere
    ? Math.random() * window.innerHeight
    : window.innerHeight + 30 + Math.random() * 50;
  if (spawnAt) {
    startX = spawnAt.x;
    startY = spawnAt.y;
  }
  const endY = -50;

  emoji.style.left = `${startX}px`;
  emoji.style.top = `${startY}px`;
  emoji.style.opacity = `${0.6 + Math.random() * 0.4}`;
  emoji.style.transformOrigin = "center";
  emoji.style.cursor = "pointer";
  emoji.style.userSelect = "none";
  emoji.style.outline = "none";
  var animationRunning = true;
  if (spawnAnywhere) {
    var anim = emoji.animate([
      { transform: "scale(0)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 350,
      iterations: 1,
      easing: "ease-out",
    });
  }

  emoji.onclick = function () {
    animationRunning = false;
    if (audioEngine.running) {
      var sound = new audioEngine.Player(EMOJISound);
      sound.play();
    }
    emoji.onclick = null;
    emoji.style.pointerEvents = "none";
    var animation = emoji.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(3.5)", opacity: "0", filter: "brightness(5)" },
      ],
      {
        duration: 350,
        iterations: 1,
        easing: "ease-out",
      },
    );
    animation.addEventListener("finish", () => {
      emoji.remove();
    });
  };

  emojiContainer.appendChild(emoji);

  let startTime = performance.now();
  let lastTimestamp = startTime;
  const duration = 3000 + Math.random() * 1000;
  const SPEED = 100;
  var offset = Math.random() * 5;

  function animate() {
    if (!animationRunning) {
      return;
    }
    if (document.visibilityState !== "visible") {
      // pause and wait until visible again
      requestAnimationFrame(animate);
      return;
    }

    const now = performance.now();
    const elapsed = now - startTime;
    const distanceMoved = (elapsed / 1000) * SPEED;
    const currentY = startY - distanceMoved;
    const currentX = startX + offsetX * (elapsed / duration);
    emoji.style.transform = `rotate(${Math.sin(elapsed / 400 + offset) * 10}deg)`;

    emoji.style.left = `${currentX}px`;
    emoji.style.top = `${currentY}px`;

    if (currentY < endY) {
      emoji.remove();
    } else {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Spawn a bunch initially across the screen
for (let i = 0; i < INITIAL_EMOJIS; i++) {
  createFloatingEmoji(true);
}

// New emojis rise from the bottom after
setInterval(() => {
  if (
    document.visibilityState === "visible" &&
    emojiContainer.children.length < MAX_EMOJIS
  ) {
    createFloatingEmoji();
  }
}, 300);

//Sign in and sign up stuff shows when not logged in.

var userAccountStuffA = elements.getGPId("userAccountStuffA");
var userAccountStuffB = elements.getGPId("userAccountStuffB");

function showSignStuff() {
  userAccountStuffA.hidden = false;
  userAccountStuffB.hidden = false;
}

(async function () {
  var validated = await accountHelper.checkSessionCookie();
  if (!validated) {
    showSignStuff();
  }
})();


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
/******/ 			57: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [804], () => (__webpack_require__(6031)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
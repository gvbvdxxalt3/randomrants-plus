var elements = require("../../gp2/elements.js");
var fetchUtils = require("./fetchutils.js");

var messageInputBox = elements.getGPId("messageInputBox");
var messageAddEmojiButton = elements.getGPId("messageAddEmojiButton");
var addEmojiDiv = elements.getGPId("addEmojiDiv");
var emojiDialogCloseButton = elements.getGPId("emojiDialogCloseButton");
var emojiDialogContainer = elements.getGPId("emojiDialogContainer");
var emojiDialogCategories = elements.getGPId("emojiDialogCategory");

var emojiJSONURL = "emojis/data-by-group.json";

var randomRantsEmojiURL = "/emojis/rantemojis.json";
var timestamp = Math.round(Date.now());
var prefixURLS = {
  rr: "https://cdn.jsdelivr.net/gh/Random-Rants-Chat/randomrants-emojis/",
  rrp: "https://cdn.jsdelivr.net/gh/gvbvdxxalt3/randomrants-plus-emojis/",
  gc: "https://cdn.jsdelivr.net/gh/jasonglenevans/GvbvdxxChatEmojis/",
};

var searchSlug = "SEARCHEMOJIS";

addEmojiDiv.hidden = true;

messageAddEmojiButton.addEventListener("click", () => {
  addEmojiDiv.hidden = !addEmojiDiv.hidden;
});
emojiDialogCloseButton.addEventListener("click", () => {
  addEmojiDiv.hidden = true;
});

function insertEmoji(inputElement, emoji) {
  const start = inputElement.selectionStart;
  const end = inputElement.selectionEnd;
  const currentValue = inputElement.value;

  // Insert the emoji at the end of the selection
  inputElement.value =
    currentValue.substring(0, end) + emoji + currentValue.substring(end);

  // Set the new caret position immediately after the inserted emoji
  inputElement.selectionStart = inputElement.selectionEnd = end + emoji.length;

  // Focus the input element
  inputElement.focus();
}

var emojiJSON = [];
var selectedCategory = null;

function mapToButtons(emojiArray) {
  return emojiArray.map((emojiInfo) => {
    return {
      element: "div",
      className: "divButton roundborder emojiDialogButton",
      children: emojiInfo.src
        ? [
            {
              element: "img",
              height: 40,
              src: emojiInfo.src,
              style: {
                imageRendering: "pixelated",
              },
            },
          ]
        : [{ element: "span", textContent: emojiInfo.emoji }],
      emojiContent: emojiInfo.src
        ? `[emoji src=${emojiInfo.src}]`
        : emojiInfo.emoji,
      title: emojiInfo.name,
      eventListeners: [
        {
          event: "click",
          func: function () {
            insertEmoji(messageInputBox, this.getAttribute("emojiContent"));
          },
        },
      ],
    };
  });
}

function reloadEmojis() {
  elements.removeAllChildren(emojiDialogContainer);

  if (selectedCategory == searchSlug) {
    var emojiDialogTextInput = elements.getGPId("emojiDialogTextInput");
    var emojis = [];
    emojiJSON.forEach((group) => {
      if (group.emojis) {
        emojis = emojis.concat(group.emojis);
      }
    });
    if (emojiDialogTextInput.value.length > -1) {
      var foundEmojis = emojis.filter(
        (emoji) =>
          emoji.name
            .toLowerCase()
            .indexOf(emojiDialogTextInput.value.toLowerCase()) > -1
      );
      if (foundEmojis) {
        elements.appendElementsFromJSON(
          emojiDialogContainer,
          mapToButtons(foundEmojis)
        );
      }
    }
    return;
  }

  var currentGroup = emojiJSON.find((group) => group.slug == selectedCategory);
  if (currentGroup) {
    elements.appendElementsFromJSON(
      emojiDialogContainer,
      mapToButtons(currentGroup.emojis)
    );
  }
}
function updateSelectedCategory() {
  for (var button of emojiDialogCategories.children) {
    button.removeAttribute("selected");
  }
  elements
    .getGPId("emojisGroupButton_" + selectedCategory)
    .setAttribute("selected", "");

  reloadEmojis();
}

function debounce(func, delay = 60) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function emojisLoaded(preferedCategory) {
  var categories = emojiJSON.map((group) => {
    if (group.slug == searchSlug) {
      return {
        element: "div",
        gid: "emojisGroupButton_" + searchSlug,
        children: [
          {
            element: "span",
            textContent: "Search:",
          },
          {
            element: "input",
            placeholder: "Search for emojis here",
            className: "emojiDialogTextInput",
            gid: "emojiDialogTextInput",
          },
        ],
        className: "emojiDialogCategoryButton",
        eventListeners: [
          {
            event: "click",
            func: function () {
              selectedCategory = searchSlug;
              updateSelectedCategory();
              elements.getGPId("emojiDialogTextInput").focus();
            },
          },
          {
            event: "input",
            func: debounce(function () {
              selectedCategory = searchSlug;
              updateSelectedCategory();
            }, 100),
          },
        ],
      };
    }
    return {
      element: "div",
      gid: "emojisGroupButton_" + group.slug,
      textContent: group.name,
      className: "emojiDialogCategoryButton",
      eventListeners: [
        {
          event: "click",
          func: function () {
            selectedCategory = group.slug;
            updateSelectedCategory();
          },
        },
      ],
    };
  });

  elements.appendElementsFromJSON(emojiDialogCategories, categories);

  selectedCategory = emojiJSON[preferedCategory].slug;
  updateSelectedCategory();
}

(async function () {
  try {
    emojiJSON = [];

    var rantEmojis = await fetchUtils.fetchAsJSON(randomRantsEmojiURL);
    emojiJSON.push({ slug: searchSlug });
    rantEmojis.forEach((emojiGroup) => {
      emojiGroup.emojis = emojiGroup.emojis.map((emoji) => {
        if (emoji.emojiURL) {
          emoji.src =
            prefixURLS[emoji.emojiURL] + emoji.src + "?v=" + timestamp;
        }
        return emoji;
      });
    });

    emojiJSON = emojiJSON.concat(rantEmojis);
    emojiJSON = emojiJSON.concat(await fetchUtils.fetchAsJSON(emojiJSONURL));
    emojisLoaded(1); //Second category cause first is search.
  } catch (e) {
    emojiJSON = [];
    console.error("Emojis failed to load: " + e);
  }
})();

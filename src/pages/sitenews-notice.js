var enabled = false;

if (enabled) {
  module.exports = {
    element: "div",
    className: "noticeDiv",
    eventListeners: [
      {
        event: "click",
        func: function () {
          window.location.href = "/sitenews";
        },
      },
    ],
    title:
      "Important news about RR+ development (Short story + long story inside)",
    children: [
      {
        element: "span",
        textContent: "⚡ RR+ Dev News — Click to Read",
      },
    ],
  };
} else {
  module.exports = { element: "div" };
}

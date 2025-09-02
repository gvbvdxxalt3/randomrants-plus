var enabled = true;

if (enabled) {
	module.exports = {
		element: "div",
		className: "noticeDiv",
		eventListeners: [
			{
				event: "click",
				func: function () {
					window.location.href = "/sitenews";
				}
			}
		],
		children: [
			{
				element: "span",
				textContent: "Important news about Random Rants + site development"
			}
		]
	};
} else {
	module.exports = {element: "div"};
}
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

// bottom >>>> top

export const expand = {
	initial: {
		bottom: 0, // Initial position at the bottom
	},
	enter: (i) => ({
		bottom: "100vh", // 
		transition: {
			duration: 0.4,
			delay: 0.05 * i,
			ease: [0.215, 0.61, 0.355, 1],
		},
		transitionEnd: { height: "0vh", top: "0vh" }, // End with height 0 and position back at bottom
	}),
	exit: (i) => ({
		height: "100vh",
		bottom: "100vh", // Start from bottom
		transition: {
			duration: 0.4,
			delay: 0.05 * i,
			ease: [0.215, 0.61, 0.355, 1],
		},
	}),
};

export const opacity = {
	initial: {
		opacity: 0.5,
	},
	enter: {
		opacity: 0,
	},
	exit: {
		opacity: 0.5,
	},
};


// top >>>> bottom

// export const expand = {
// 	initial: {
// 		top: 0, // Initial position at the top
// 	},
// 	enter: (i) => ({
// 		top: "100vh", // Move downwards
// 		transition: {
// 			duration: 0.4,
// 			delay: 0.05 * i,
// 			ease: [0.215, 0.61, 0.355, 1],
// 		},
// 		transitionEnd: { height: "0", top: "0" }, // End with height 0 and position back at top
// 	}),
// 	exit: (i) => ({
// 		height: "100vh",
// 		top: 0, // Start from top
// 		transition: {
// 			duration: 0.4,
// 			delay: 0.05 * i,
// 			ease: [0.215, 0.61, 0.355, 1],
// 		},
// 	}),
// };

// export const opacity = {
// 	initial: {
// 		opacity: 0.5,
// 	},
// 	enter: {
// 		opacity: 0,
// 	},
// 	exit: {
// 		opacity: 0.5,
// 	},
// };

/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	printWidth: 100,
	trailingComma: "es5",
	plugins: [require("prettier-plugin-tailwindcss")],
};

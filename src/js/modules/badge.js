export default function badge() {
	const attr = "[js-badge]";
	const badges = document.querySelectorAll(`.badge${attr}`);

	if (!badges.length) return;

	badges.forEach((badge) => {
		const color = getComputedStyle(badge).getPropertyValue("--color");
		if (!color) return;

		badge.style.color = color;
		badge.style.background = GLOBAL.addAlpha(color, 0.1);
	});
}

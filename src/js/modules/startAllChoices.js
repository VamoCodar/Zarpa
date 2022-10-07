export default function startAllChoices() {
	const allSelects = [
		...document.querySelectorAll("select[js-choices]"),
	]?.filter((select) => !select.hasAttribute("js-no-choices"));

	if (!allSelects) return;

	const listOfChoices = [...allSelects].map((i) => {
		const hasAttr = i.getAttribute("js-choices-props");
		const props = hasAttr ? JSON.parse(hasAttr) : {};

		return GLOBAL.initChoices(i, {
			searchEnabled: false,
			searchChoices: false,
			itemSelectText: "Selecionar",
			noResultsText: "Nada Encontrado...",
			noResultsText: "...",
			noChoicesText: "...",

			...props,
		});
	});

	window.listOfChoices = listOfChoices;
}

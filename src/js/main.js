// import showToast from "./modules/showToast";
// import addFilterURLAndReload from "./modules/addFilterURLAndReload.js";
import accordion from "./modules/accordion";
import dropdown from "./modules/dropdown";
import inputToogleActive from "./modules/inputToogleActive";
import startAllChoices from "./modules/startAllChoices";
import tabs from "./modules/tabs";
import mostraSenha from "./modules/mostraSenha";
import badge from "./modules/badge.js";
import getElemetAndAppend from "./modules/getElementAndappend";

function Myscript() {

	const pageHome = document.querySelector(".page-home");

	async function appendElements() {

		if (pageHome) {
			await getElemetAndAppend(".svgs-hidden", "../../templates/svgs.html");
		}


	}



	function setup() {
		accordion();
		dropdown();
		inputToogleActive(); // muda class ativa nos inputs
		startAllChoices(); //inicia bibiloteca Choices.js
		tabs();
		badge();
		mostraSenha();
		window.tabs = tabs;
		console.log("setup Finalizado  🎈");
		return this;
	}

	async function init() {
		await appendElements();
		setup();
	}

	return {
		init,
	};
}

Myscript().init();

document.addEventListener("DOMContentLoaded", () =>
	document.body.classList.add("DOMContentLoaded")
);

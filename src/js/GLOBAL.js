const GLOBAL = {
  url: new URL(window.location),
  /////////////////////////////////////////

  isMobile: window.matchMedia("(max-width: 767px)").matches,
  isTablet: window.matchMedia("(max-width: 1180px)").matches,

  /////////////////////////////////////////

  toastDefault: {
    duration: 3000,
    position: "center",
  },

  /////////////////////////////////////////
  showToastify(message, obj) {
    Toastify({
      ...this.toastDefault,
      text: message,
      position: "left",
      ...obj,
    }).showToast();
  },

  errorDefault(e, text = "❌ Ocorreu um erro") {
    console.log(e);
    GLOBAL.showToastify(text);
  },
  /////////////////////////////////////////

  getOnlyNumbersOfString: (string) => {
    return string.replace(/\D/g, "");
  },

  /////////////////////////////////////////
  verifyHaveError: ({ error }) => {
    if (error) {
      throw new Error(error);
    }
  },

  /////////////////////////////////////////
  wrap_single: (el, wrapper, classe) => {
    /*
		Exemplo de uso:
		document.querySelectorAll('textarea')
			.forEach(i => wrap_single(i, "div", ["textarea--field"]))
		*/

    const wrap = document.createElement(wrapper);
    classe.forEach((c) => wrap.classList.add(c));
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);
  },

  /////////////////////////////////////////
  initChoices: (el, opts) => {
    return new Choices(el, {
      silent: true,
      placeholder: true,
      searchResultLimit: 10,
      placeholderValue: 0,
      renderChoiceLimit: -1,
      itemSelectText: "Selecionar",
      noResultsText: "Nada Encontrado...",
      shouldSort: false,
      searchEnabled: true,
      searchChoices: true,
      // searchEnabled: false,
      // searchChoices: false,
      ...opts,
    });
  },

  /////////////////////////////////////////
  debounceFunction: (fn, wait = 1000, timing) => {
    return (...args) => {
      clearTimeout(timing);
      timing = setTimeout(() => fn(...args), wait);
    };
  },

  /////////////////////////////////////////

  setSelectedOptionInChoices: (choice, value) => {
    function pegaResponsavel(choice) {
      if (choice.value == value) {
        choice.selected = true;
      } else {
        choice.selected = false;
      }
      return choice;
    }
    const arrayOptionSelected =
      choice._currentState.choices.map(pegaResponsavel);
    choice.setChoices([...arrayOptionSelected], "value", "label", true);
  },

  getChoicesActive(selectID, choicesList) {
    const list = choicesList.filter((i) =>
      i._baseId.replace("choices--", "") == selectID ? i : false
    );

    return list.length > 0 ? list.reduce((acc, item) => (acc = item)) : null;
  },

  translatefilepond: {
    labelIdle:
      'Arraste e solte o arquivo <br>ou <span class="filepond--label-action">selecione um arquivo</span>',
    labelInvalidField: "O Tipo de arquivo é invalido",
    labelButtonRemoveItem: "Remover",
    labelButtonAbortItemLoad: "Abortar",
    labelButtonAbortItemLoad: "Tente Novamente",
    labelButtonAbortItemProcessing: "Cancelar",
    labelButtonUndoItemProcessing: "Desfazer",
    labelButtonRetryItemProcessing: "Tente Novamente",
    labelButtonProcessItem: "Processar",
    labelTapToCancel: "Cancelar",
  },

  addAlpha: (color, opacity) => {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
  },

  /////////////////////////////////////////

  checkIsObject: (obj) => typeof obj === "object" && obj !== null,

  /////////////////////////////////////////

  functionComposition: (...fns) => {
    return function (valor) {
      return fns.reduce((acc, fn) => fn(acc), valor);
    };
  },

  addClassForTime(el, classe, time) {
    el.classList.add(classe);
    setTimeout(() => {
      el.classList.remove(classe);
    }, time);
  },

  setValueInChoices(seletor, valor) {
    const choices = GLOBAL.getChoicesActive(seletor, listOfChoices);
    choices.setChoiceByValue(valor);
  },

};

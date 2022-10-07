export default function tabs() {
	const attr = "[js-tab]"

	const tabs = document.querySelectorAll(`.tabs${attr}`)

	if (!tabs.length) return

	tabs.forEach(t => initTab(t))



	function initTab(tab) {
		const collapses = tab.querySelectorAll(".tab-collapse")

		const tabItens = tab.querySelectorAll(".tabs-wrapper .tab-item")

		tabItens.forEach(t => {
			t.addEventListener("click", (e) => {

				collapses.forEach(c => c.classList.remove("active"))
				tabItens.forEach(c => c.classList.remove("active"))
				t.classList.add("active")
				const att = e.currentTarget.dataset.tab
				collapses.forEach(c => {
					const attCollapse = c.getAttribute("data-tab")

					if (attCollapse == att) {
						c.classList.add("active")
					}
				})



			})
		})

	}


}
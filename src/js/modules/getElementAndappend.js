export default async function getElemetAndAppend(cont, arquivo, isHead) {
	const container = document.querySelector(cont);


	try {
		const resposta = await fetch(arquivo)
		
		if (resposta.status !== 200) throw new Error

		const html = await resposta.text()

		if(isHead){
			document.head.innerHTML += html
			return
		}
		
		container.innerHTML = html

	}

	catch {
		console.log(`Erro ao carregar o ${arquivo}`)
	}

}
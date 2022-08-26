import React from 'react'
import { useState } from 'react'
import api from './api'
import { useNavigate} from 'react-router-dom';



export default function CepLocation() {


	const [input, setInput] = useState('')
	const [cep, setCep] = useState({})
	const navegar = useNavigate();

	async function handleSearch() {
		if (input === '' || setCep.cep === '') {
			alert('Preencha algum cep!')
			alert(cep.cep)
			return
		}

		try {
			const response = await api.get(`${input}/json/`)
			setCep(response.data)
			setInput('')
		} catch (error) {
			alert('Ops, erro na app')
			setInput('')
			return
		}
	}
	function exit(){
		navegar("/")
	      }

	return (
		<div className="container">
			<br></br>
			<br></br>
			<div className="containerInput">
				
				<h1 className="title">Buscador CEP</h1>
				<br></br>
				<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
					id="inline-full-name"
					type="text"
					placeholder="Digite seu CEP"
					value={input}
					onChange={e => setInput(e.target.value)}
					maxlength="8"
				></input>
                                 <br></br>
				 <p className="avisoNumeros">Apenas Números</p>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSearch}>
					Pesquisar
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
                                 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                 onClick={exit}>
	                         Voltar
                                </button>
			</div>
			

			{Object.keys(cep).length > 0 && (
				<main className="main">
					<br></br>
					<p></p>
					<h2>CEP: {cep.cep}</h2>

					<span>{cep.logradouro}</span>
					<p></p>
					<span>Bairro: {cep.bairro}</span>
					<p></p>
					<span>Cidade: {cep.localidade}</span>
					<p></p>
					<span>Estado: {cep.uf}</span>
				</main>
			)}
		</div>
	)




}
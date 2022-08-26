import { useState } from "react";
import { useNavigate} from 'react-router-dom';




export default function Climate() {

	const [city, setCity] = useState("Contagem");
	const [weatherForecast, setWeatherForecast] = useState(null);
        const navegar = useNavigate();


	const handleCnhage = (event) => {
		setCity(event.target.value)
	}

	const handleSearch = () => {
		fetch(`http://api.weatherapi.com/v1/current.json?key=809d3efe07934d508d1134431222508&q=${city}&lang=pt`)
			.then((response) => {
				if (response.status == 200) {
					return response.json()
				}
			})
			.then((data) => {
				console.log(data)
				setWeatherForecast(data)
			});
	}

	function exit(){
		navegar("/")
	      }



	return (
		<main className="container">
			<div class="grid grid-cols-1 gap-8">
                                 <br></br>
				 <br></br>
				<p>
					digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
				</p>
				
				<div>
					<div>
						<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
							onChange={handleCnhage}
							value={city} />
					</div>
				</div>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					onClick={handleSearch}>
					Pesquisar
				</button>

				{
					weatherForecast ? (
						<><div>
							<img src={weatherForecast.current.condition.icon} />
						</div>
						<div>
                                                   <h3>Hoje o dia esta:{weatherForecast.current.condition.text} </h3> 
						   <p>Temp: {weatherForecast.current.temp_c}   </p>
						   <p>Regiao: {weatherForecast.location.region}   </p>
						   <p>Local: {weatherForecast.location.name}   </p>
						</div>
						</>

					) : null
				}
                         <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
			 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			  onClick={exit}>
				Voltar
			 </button>
			</div>


		</main>
	)
}
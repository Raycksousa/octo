import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Principal from './pages/pg-principal';
import Climate from './pages/pg-clima';
import CepLocation from './pages/pg-cep';
import Formulario from './pages/pg-form'



export default function MyRoutes() {
	return (
		<BrowserRouter>
		      <Routes>
			<Route path="/"   element={<Principal/>} />
			<Route path="/pg-clima"   element={<Climate/>} />
			<Route path="/pg-cep"   element={<CepLocation/>} />
			<Route path="/pg-form"   element={<Formulario/>} />
			
			
			
		      </Routes>
		</BrowserRouter>
	
	);
}
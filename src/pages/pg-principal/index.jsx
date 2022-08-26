import React from "react";
import { useState } from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route, useNavigate, createPath } from 'react-router-dom';


export default function Principal() {

  const navegar = useNavigate();

  function clima() {
    navegar("/pg-clima");
  }
  function cep(){
    navegar("/pg-cep")
  }
  function form(){
     navegar("/pg-form")
  }


  return (
    <div class="container">
      <br></br>
      <br></br>
      <br></br>
      <h1>Octo Teste</h1>
      <div class="flex sm:inline-flex md:block lg:hidden xl:flex ...">

        <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <h1>Clima</h1>
          <img class="rounded-t-lg" onClick={clima} src="https://img.freepik.com/vetores-gratis/gradientes-de-icones-de-clima-para-aplicativos_79603-1767.jpg?w=900&t=st=1661367445~exp=1661368045~hmac=23d883b47f6c1dcf484b5b578135a2b00235ea87a8b74446b9f8bf0263c60dee" />
        </div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <h1>Cep</h1>
          <img class="rounded-t-lg" onClick={cep} src="https://img.freepik.com/vetores-gratis/conceito-de-ilustracao-de-endereco_114360-301.jpg?w=740&t=st=1661367640~exp=1661368240~hmac=2c1d31bb548dba91783de287c735f97a3811ed78c0a868bf32f3df9a7b4be7b0" />
        </div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <h1>Formulario</h1>
          <img class="rounded-t-lg" onClick={form} src="https://img.freepik.com/fotos-gratis/mao-segurando-e-escrevendo-o-documento-do-formulario-de-inscricao-da-lista-de-verificacao-na-area-de-transferencia-na-ilustracao-3d-de-fundo-branco_56104-1551.jpg?w=740&t=st=1661367681~exp=1661368281~hmac=95fce394e910d7eede6e30228cb1459944f60fd7bdc39472e58a2f718fdb2c95" />
        </div>
      </div>
    </div>



  )
}



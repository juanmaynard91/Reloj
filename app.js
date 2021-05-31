"use strict"

const time = document.getElementById("time");
const date = document.getElementById("date");

const nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const interval = setInterval(() => {
    const local = new Date();
    let dia = local.getDate(), mes = local.getMonth(), año = local.getFullYear();

    // toLocaleTimeString() Devuelve una representación de la hora 
    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${dia} ${nombreMeses[mes]} ${año}`;

}, 1000);
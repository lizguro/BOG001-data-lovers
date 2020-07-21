import { orderNames, filterStatus, filterSpecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const root = document.getElementById("root");
let sortByAlpha = document.querySelector(".sortByName");
let allCharacters = document.getElementById("allCharacters");
let filterByStatus = document.querySelector(".subMenuStatus");
let filterBySpecies = document.querySelector(".subMenuSpecies");

const RickMortyDB = data.results;

//Función que imprime los personajes principales
const printMainCharacters = (arrayparameter) => {

    let templateCharacters = " ";

    for (let i = 0; i < 5; i++) {

        const print = `
            <article class="main-item">
                <a href="#/${arrayparameter[i].id}/" class="main-conteiner">
                    <img src="${arrayparameter[i].image}" alt="${arrayparameter[i].name}">
                     <p>${arrayparameter[i].name}</p>
                </a>
            </article>`

        templateCharacters = templateCharacters + print;
    }
    root.innerHTML = templateCharacters;
};

//Función que imprime todos sin orden especifico
const printAllCharacters = (RickMortyDB) => {
   
    let templateAllCharacters = "";

    RickMortyDB.forEach( card => {

        const printAll = `
         <ol class="All-item">
            <li>
            <a href="#/${card.id}/" class="All-conteiner">
             <img src="${card.image}" alt="${card.name}">
              <p>${card.name}</p><br>
              <p>${card.status}</p>
         </a>     
         </li>
        </ol>   
        `
    
       templateAllCharacters = templateAllCharacters + printAll;
    })    
    allCharacters.innerHTML = templateAllCharacters;   
};

//Función que llama a las funcion de ordenar en data.js
const getOrderNames = (e) => {
    const BtnSort = e.target.textContent;
    printAllCharacters(orderNames(RickMortyDB, BtnSort))
};

//Función que llama a la funcion de filtrado por estatus en data.js
const getFilter = (e) =>{
    const btnStatus = e.target.textContent;    
    printAllCharacters(filterStatus(RickMortyDB, btnStatus));
}

//Función que llama a la funcion de filtrado por especies en data.js
const getSpecies = (e) =>{
    const btnSpecies = e.target.textContent;    
    printAllCharacters(filterSpecies(RickMortyDB, btnSpecies));
}

sortByAlpha.addEventListener("click", getOrderNames);
filterByStatus.addEventListener("click", getFilter);
filterBySpecies.addEventListener("click", getSpecies);

printMainCharacters(RickMortyDB);
printAllCharacters(RickMortyDB);

/* Función para el gráfico */
/*
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//printChart(data, arrayfilter);//

*/

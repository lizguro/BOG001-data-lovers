import { orderNames, filterStatus } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const root = document.getElementById("root");
let sortByAlpha = document.querySelector(".sortByName");
let allCharacters = document.getElementById("allCharacters");
let filterByStatus = document.querySelector(".subMenuChar");

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

sortByAlpha.addEventListener("click", getOrderNames);
filterByStatus.addEventListener("click", getFilter);

printMainCharacters(RickMortyDB);
printAllCharacters(RickMortyDB);

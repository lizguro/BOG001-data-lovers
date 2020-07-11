import { orderNames } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const root = document.getElementById("root");
let sortByAlpha = document.querySelector(".sortByName");
const allCharacters = document.getElementById("allCharacters")
const RickMortyDB = data.results;


const printMainCharacters = (arrayparameter) => {

    let templateCharacters = "";

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

const printAllCharacters = (char) => {

    let templateAllCharacters = "";

    for (let i = 0; i < RickMortyDB.length; i++) {

        const printAll = `
            <article class="All-item">
             <a href="#/${char[i].id}/" class="All-conteiner">
                 <img src="${char[i].image}" alt="${char[i].name}">
                  <p>${char[i].name}</p>
             </a>
            </article>`

        templateAllCharacters = templateAllCharacters + printAll;
    }
    allCharacters.innerHTML = templateAllCharacters;
};

const getOrderNames = (e) => {
    const BtnSort = e.target.textContent;
    printAllCharacters(orderNames(RickMortyDB, BtnSort))
};

sortByAlpha.addEventListener("click", getOrderNames)

printMainCharacters(RickMortyDB);
printAllCharacters(RickMortyDB);

//import { mainCharacter } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const root = document.getElementById("root");
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
printMainCharacters(RickMortyDB);


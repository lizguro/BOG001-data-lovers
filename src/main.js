import { orderNames, filterStatus, filterSpecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const root = document.getElementById("root");
let sortByAlpha = document.querySelector(".sortByName");
let allCharacters = document.getElementById("allCharacters");
let filterByStatus = document.querySelector(".subMenuStatus");
let filterBySpecies = document.querySelector(".subMenuSpecies");
let stats = document.querySelector(".submenu-info");

document.querySelector(".mainChacarters").style.display="block";
document.querySelector(".alphaCharacters").style.display="block";
document.querySelector(".statsCharts").style.display="none";

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

    RickMortyDB.forEach(card => {

        if(RickMortyDB.type === ""){
            RickMortyDB.type = 'I do not have Type'
        }

        const printAll = `
         <ol class="All-item">
            <li>
                <a href="#/${card.id}/" class="All-conteiner" onclick="modal(${card.id})" >
                    <img src="${card.image}" alt="${card.name}">
                    <p>${card.name}</p>
                </a> 
              
             </li>
        </ol>   

        <div class="overlay" id="overlay${card.id}" style="display:none">
            <div class="popup" id="modal${card.id}" style="display:none">
                <a href="#" id="btn-close-popup" class="btn-close-popup" onclick="closeModal(${card.id})">
                    <i class="fas fa-times-circle"></i>
                </a>
                <div class="detailed">
                    <div class="detailed-name">
                        <img src="${card.image}" alt="RM_card_popup">
                        <h2 class="name_popup">${card.name}</h2>
                    </div>            
                     <div class="detailed2">
                         <p class="rm_info"> <strong> Status: </strong>  ${card.status} </p>
                         <p class="rm_info"> <strong> Species: </strong>  ${card.species}</p>
                         <p class="rm_info"><strong> Gender: </strong> ${card.gender}</p>
                         <p class="rm_info"><strong>Origin: </strong>${card.origin.name}</p>
                         <p class="rm_info"><strong>Locations:</strong> ${card.location.name}</p>
                    
                    </div>
                </div>
            </div>
        </div>
        
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
const getFilter = (e) => {
    const btnStatus = e.target.textContent;
    printAllCharacters(filterStatus(RickMortyDB, btnStatus));
}

const getSpecies = (e) => {
    const btnSpecies = e.target.textContent;
    printAllCharacters(filterSpecies(RickMortyDB, btnSpecies));
    console.log(filterSpecies)
}

const moreInfo = (e) =>{
    const btnStats = e.target.textContent;
    if(btnStats==='STATS'){
        document.querySelector(".mainChacarters").style.display="none";
        document.querySelector(".alphaCharacters").style.display="none";
        document.querySelector(".statsCharts").style.display="block";
    }
}

sortByAlpha.addEventListener("click", getOrderNames);
filterByStatus.addEventListener("click", getFilter);
filterBySpecies.addEventListener("click", getSpecies);
stats.addEventListener("click", moreInfo);


printMainCharacters(RickMortyDB);
printAllCharacters(RickMortyDB);

window.modal = modal;

function modal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
  modalPopup.style.display = 'block';
  overlay.style.display = 'flex';
}
      
window.closeModal = closeModal;

function closeModal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
    modalPopup.style.display = 'none';
    overlay.style.display = 'none';
}


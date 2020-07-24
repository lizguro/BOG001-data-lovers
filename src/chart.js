

import data from './data/rickandmorty/rickandmorty.js';

const RickMortyDB = data.results;
const labels = [{species:"Alien"},{species:"Animal"},{species:"Cronenberg"},{species:"Disease"},{species:"Human"},{species:"Humanoid"},{species:"Mytholog"},{species:"Parasite"},{species:"Poopybutthole"},{species:"Robot"},{species:"Vampire"},{species:"unknown"}];
const Status = [{status:"Alive"},{status:"Dead"},{status:"unknown"}];
const myCanvas = document.getElementById("myChart").getContext("2d");
const canvaStatus = document.getElementById("charStatus").getContext("2d");
const totalData = RickMortyDB.length;

let count={};
let cont={};
const getPercentSpecies = RickMortyDB.forEach((item) => {
    
    if(count[item.species]){ 
        count[item.species] += 1;
    } else{
        count[item.species] =1;
    }
    
});

const getPercentStatus = RickMortyDB.forEach((item) => {
    
    if(cont[item.status]){ 
        cont[item.status] += 1;
    } else{
        cont[item.status] =1;
    }
    
});

const chartSpecies = new Chart (myCanvas,{
    type: "horizontalBar",
    data:{
        labels:labels.map(s => s.species),
        datasets:[
            {
                label: "Species",
                data:[(count.Alien/totalData)*100,
                    (count.Animal/totalData)*100,
                    (count.Cronenberg/totalData)*100,
                    (count.Disease/totalData)*100,
                    (count.Human/totalData)*100,
                    (count.Humanoid/totalData)*100,
                    (count.Mytholog/totalData)*100,
                    (count.Parasite/totalData)*100,
                    (count.Poopybutthole/totalData)*100,
                    (count.Robot/totalData)*100,
                    (count.Vampire/totalData)*100,
                    (count.unknown/totalData)*100,
                ],
                backgroundColor: [
                    '#D98880',
                    '#C39BD3',
                    '#F1948A',
                    '#7FB3D5',
                    '#76D7C4',
                    '#7DCEA0',
                    '#F7DC6F',
                    '#F0B27A',
                    '#AED6F1',
                    '#76448A',
                    '#B9770E',
                    '#E74C3C',
                ]
            }
        ]
    },
    options: {
        responsive: true,
        responsiveAnimationDuration: 0,
          legend: {          
              data: {
                  width: 100,
                  height: 300,
                  fontSize: 30,
                  padding: 5,
                  boxWidth: 30,
                  fontFamily: 'Audiowide',
                  fontColor: 'black',       
              }
          },
           title:{
               display:true,
               text: "% Rick and Morty Species",
               fontSize: 40,
               fontFamily: 'Audiowide',
           },     
       },
});

const chartStatus = new Chart (canvaStatus,{
    type: "doughnut",
    data:{
        labels:Status.map(s => s.status),
        datasets:[
            {
                label: "",
                data:[(cont.Alive/totalData)*100,
                      (cont.Dead/totalData)*100,
                      (cont.unknown/totalData)*100,
                ],
                backgroundColor: [
                    '#76D7C4',
                    '#C39BD3',
                    '#F1948A',
                ]
            }
        ]
    },
    options: {
        responsive: true,
        responsiveAnimationDuration: 0,
          legend: {          
              labels: {
                  width: 100,
                  height: 300,
                  fontSize: 30,
                  padding: 5,
                  boxWidth: 30,
                  fontFamily: 'Audiowide',
                  fontColor: 'black',       
              }
          },
           title:{
               display:true,
               text: "% Rick and Morty Status",
               fontSize: 40,
               fontFamily: 'Audiowide',
           },     
       },
});
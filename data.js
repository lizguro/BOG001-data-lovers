// estas funciones son de ejemplo

export const orderNames = (data, option) => {
  const orderAZ = data.sort(function (prev, next) {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
  })

  if (option == 'A-Z') {
    return orderAZ;
  }
  if (option == 'Z-A') {
    return orderAZ.reverse();
  }

};

export const filterStatus = (data, option) => {
  const newFilter = data.filter((obj) => obj.status.includes(option));
  return newFilter;
};

export const filterSpecies = (data, option) => {
  const newFilterSpecies = data.filter((obj) => obj.species===option);
  return newFilterSpecies;
};

/*Imported from Lenis&Toro to do some statistics

export const filterName = (data, pokemon) => {
  const newArrayname = data.filter((object) => object.name.toLowerCase().startsWith(pokemon.toLowerCase()));
  return newArrayname;
  
  }


  export const avgHeightPokemon =(allData,) => {
  const avgHeight = allData.reduce((acc, pokemon) => (acc + (parseFloat(pokemon.height))/allData.length), 0);
  
  return avgHeight.toFixed(2);

  }


  
   export const tallestPokemon =(allData,) => {
   const  tallPokemon = allData.reduce((tallest, pokemon) => {
     let heightPokemon = (tallest.height || 0) > pokemon.height  ? tallest : pokemon;
     return heightPokemon;
  }, {});
  
  return tallPokemon
  
}


export const shortestPokemon =(allData,) => {
  const shortPokemon = allData.reduce((sweet, pokemon) => {
     let shortHeight = (sweet.height || 0) < pokemon.height ? sweet : pokemon;
    return shortHeight;
 }, {});
 
 return shortPokemon
}



  export const percentPokemon = (arrType) => {
    let result = Math.round((arrType.length/151)*100)
   return result; 

}

*/

export const reduceSpecies = (data, option) => {
  const newReduceSpecies = data.reduce((obj) => obj.species===option);
  return newFilterSpecies;
};



    






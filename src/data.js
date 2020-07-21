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

    






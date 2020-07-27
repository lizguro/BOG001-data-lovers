import { orderNames, filterStatus, filterSpecies, filterName } from '../src/data.js';

describe('orderNames', () => {
  it('is it a function', () => {
    expect(typeof orderNames).toBe('function');
  });
  it('sorts data alphabetically decreasing', () => {
    const chars = [
      { name: "Rick Sanchez" },
      { name: "Morty Smith" },
      { name: "Summer Smith" },
    ];
    const chosenOption = "Z-A";
    const sortedChars = [
      { name: "Summer Smith" },
      { name: "Rick Sanchez" },
      { name: "Morty Smith" },
    ];
    expect(orderNames(chars, chosenOption)).toStrictEqual(sortedChars);
  });
  it('sorts data alphabetically upward', () => {
    const chars = [
      { name: "Rick Sanchez" },
      { name: "Morty Smith" },
      { name: "Summer Smith" },
    ];
    const chosenOption = "A-Z";
    const sortedChars = [
      { name: "Morty Smith" },
      { name: "Rick Sanchez" },
      { name: "Summer Smith" },
    ];
    expect(orderNames(chars, chosenOption)).toStrictEqual(sortedChars);
  });
  describe('filterStatus', () => {
    it('is a function', () => {
      expect(typeof filterStatus).toBe('function');
    });
    it('filters data by Status', () => {
      const stateOfLiving = [
        { char: "Tuberculosis", status: "Dead" },
        { char: "Rick", status: "Alive" },
        { char: "Summer", status: "unknown" },
        { char: "Jerry", status: "Alive" },
        { char: "Morty", status: "Alive" },
      ];
      const givenOption = "Alive";
      const filteredStatuses = [
        { char: "Rick", status: "Alive" },
        { char: "Jerry", status: "Alive" },
        { char: "Morty", status: "Alive" },
      ];
      expect(filterStatus(stateOfLiving, givenOption)).toStrictEqual(filteredStatuses);
    });
  });
  describe('filterSpecies', () => {
    it('is a function', () => {
      expect(typeof filterSpecies).toBe('function');
    });
    it('filters data by Species', () => {
      const speciesOfChars = [
        { char: "Tuberculosis", species: "Disease" },
        { char: "Rick", species: "Human" },
        { char: "Morty", species: "Human" },
        { char: "Coachferatu", species: "Vampire" },
        { char: "Duck With Muscles", species: "Parasite" },
      ];
      const userOption = "Human";
      const filteredSpecies = [
        { char: "Rick", species: "Human" },
        { char: "Morty", species: "Human" },
      ];
      expect(filterSpecies(speciesOfChars, userOption)).toStrictEqual(filteredSpecies);
    });
  });
});

describe('filterName', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });
  it('Search data by Names', () => {
    const input = [
      { char: 'Eli' },
      { char: 'Ethan' },
      { char: 'Alexander'},
      { char: 'Annie'},
    ];
    const input2 = 'e';
    const output = [
      { char: 'Eli' },
      { char: 'Ethan' },
    ];
    expect(filterName(input, input2)).toEqual(output);
  });
});

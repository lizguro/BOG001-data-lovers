import { orderNames } from '../src/data.js';



describe('orderNames', () => {
  it('Es una función', () => {
    expect(typeof orderNames).toBe('function');
  });

  it('returns `orderNames`', () => {
    expect(orderNames([],'A-Z')).toBe(1);
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

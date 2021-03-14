import Undead from '../Undead';

describe('Undead:', () => {
  test('should return object', () => {
    expect(new Undead('Ann')).toMatchObject({
      name: 'Ann',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});

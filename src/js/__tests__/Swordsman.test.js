import Swordsman from '../Swordsman';

describe('Swordsman:', () => {
  test('should return object', () => {
    expect(new Swordsman('Ann')).toMatchObject({
      name: 'Ann',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});

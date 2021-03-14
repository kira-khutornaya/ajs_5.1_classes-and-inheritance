import Zombie from '../Zombie';

describe('Zombie:', () => {
  test('should return object', () => {
    expect(new Zombie('Ann')).toMatchObject({
      name: 'Ann',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});

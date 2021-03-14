import Daemon from '../Daemon';

describe('Daemon:', () => {
  test('should return object', () => {
    expect(new Daemon('Ann')).toMatchObject({
      name: 'Ann',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});

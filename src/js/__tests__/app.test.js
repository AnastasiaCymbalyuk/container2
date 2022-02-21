import ErrorRepository from '../app';

it('Error true', () => {
  const err = new ErrorRepository();
  err.add(505, 'error1');
  expect(err.translate(505)).toBe('error1');
});

it('Error false', () => {
  const err = new ErrorRepository();
  err.add(505, 'error1');
  expect(err.translate(404)).toBe('Unknown error');
});

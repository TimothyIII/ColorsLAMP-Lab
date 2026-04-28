const validateColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

test('validates correct hex format', () => {
  expect(validateColor('#AABBCC')).toBe(true);
  expect(validateColor('not-a-color')).toBe(false);
});
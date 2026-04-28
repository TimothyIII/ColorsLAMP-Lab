const axios = require('axios');

test('PHP API returns valid color JSON', async () => {
  // Use localhost:8000 (we will set this up in GitHub Actions)
  const response = await axios.get('http://localhost:8000/api/colors.php');
  expect(response.status).toBe(200);
  expect(typeof response.data).toBe('object');
});
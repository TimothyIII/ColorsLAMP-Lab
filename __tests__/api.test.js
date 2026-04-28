const axios = require('axios');

test('PHP API returns valid color JSON', async () => {
  const response = await axios.get('http://localhost:8000/API/status.php');
  expect(response.status).toBe(200);
  expect(typeof response.data).toBe('object');
});
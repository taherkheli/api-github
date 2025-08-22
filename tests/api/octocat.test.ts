import { createHttpClient } from '../utils/httpClient';

describe('GitHub API', () => {
  const client = createHttpClient();
  it('should fetch octocat', async () => {
    const response = await client.get('/octocat');
    expect(response.status).toBe(200);
    console.log(response.data);
  });
});

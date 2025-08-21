import { createHttpClient } from '../utils/httpClient';

describe('GitHub API', () => {
  const adventOfCodeAttempts: string[] = ['aoc2015', 'aoc2020', 'aoc2021', 'aoc2022', 'aoc2023', 'aoc2024'];
  const client = createHttpClient();

  it('should fetch version', async () => {
    const response = (await client.get('/versions'));
    expect(response.status).toBe(200);
    expect(response.data).toContain('2022-11-28');
  });

  it('should fetch \'Advent Of Code\' repositories', async () => {
    const response = (await client.get('/user/repos', {
      params: { visibility: 'public' }
    }));

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);

    const repoNames: string[] = response.data.map((repo: any) => repo.name);
    repoNames.forEach((name: string) => {
      //console.log(name); // Uncomment to log all repo names
    });
    
    expect(repoNames).containSubset(adventOfCodeAttempts);
    expect(response.data[0]).toMatchObject({   // Verify structure
      name: expect.any(String),
      owner: expect.objectContaining({
        login: expect.any(String),
      }),
      private: expect.any(Boolean),
    });
  });

});
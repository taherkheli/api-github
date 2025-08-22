import axios, { AxiosInstance, RawAxiosRequestHeaders } from 'axios';

export function createHttpClient(customConfig?: {
  headers?: RawAxiosRequestHeaders;
  timeout?: number;
  baseURL?: string;
}): AxiosInstance {
  const baseConfig = {
    baseURL: process.env.API_BASE_URL!,
    timeout: 10000,
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${process.env.API_TOKEN!}`,
      'User-Agent': 'axios/1.11.0',
    },
  };

  return axios.create({
    ...baseConfig,
    ...customConfig, // Custom config overrides base
    headers: {
      ...baseConfig.headers,
      ...customConfig?.headers, // Merge headers
    },
  });
}

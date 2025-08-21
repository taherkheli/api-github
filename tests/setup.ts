import { config } from 'dotenv';
import { resolve } from 'path';

// this is global setup that runs once before all tests
// it loads environment variables from .env file if it exists (local development)
// and validates that required variables are set
try {
  const envPath = resolve(process.cwd(), '.env');
  config({ path: envPath });
} catch (error) {
  // .env file doesn't exist or cant be loaded - that's fine
}

// Validate required environment variables
const requiredEnvVars = ['API_BASE_URL', 'API_TOKEN'];
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(
      `Missing required environment variable: '${envVar}'. ` +
      `Set it in .env file for local development or as a GitHub Secret for CI/CD.`
    );
  }
});

console.log('Environment variables loaded successfully!');
console.log('API_BASE_URL:', process.env.API_BASE_URL);
console.log('API_TOKEN:', process.env.API_TOKEN?.substring(0, 8) + '...'); // Mask token

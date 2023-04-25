import axios from 'axios';

const API_URL = 'http://spanish-lab-server.vercel.app/'; // Replace with your server URL in production

const api = axios.create({
  baseURL: API_URL,
});

export const generateImage = async (prompt) => {
  try {
    const response = await api.post('/openai/generate-image', {
      prompt: prompt,
    });
    console.log(prompt);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

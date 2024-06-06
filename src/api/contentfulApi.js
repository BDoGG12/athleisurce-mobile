import axios from 'axios';
import { SPACE_ID, ACCESS_TOKEN } from "@env";

const contentfulClient = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const getProducts = async () => {
  try {
    const response = await contentfulClient.get('/entries', {
      params: {
        content_type: 'product',
      },
    });
    return response.data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

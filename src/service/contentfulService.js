// contentfulService.js

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchFeaturedProducts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'clothes', // Replace with your content type ID
    });

    if (response.items) {
      return response.items.map(item => ({
        id: item.sys.id,
        title: item.fields.name,
        description: item.fields.description,
        price: item.fields.price,
        imageUrl: item.fields.images[0].fields.file.url, // Adjust as per your content model
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
};

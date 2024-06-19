import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {fetchFeaturedProducts} from '../../service/contentfulService';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchFeaturedProducts();
      setFeaturedProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={featuredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            {/* Add more details or actions here */}
          </View>
        )}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default FeaturedProducts;
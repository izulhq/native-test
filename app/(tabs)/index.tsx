import React from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SafeAreaWrapper from "@/components/SafeAreaWrapper";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width } = Dimensions.get("window");

const promo = [
  {
    id: "1",
    image: require("@/assets/images/promo-2.png"),
  },
  {
    id: "2",
    image: require("@/assets/images/promo-2.png"),
  },
  {
    id: "3",
    image: require("@/assets/images/promo-2.png"),
  },
];

const products = [
  {
    id: "1",
    name: "Paket 1",
    price: "Rp 100.000",
    image: require("@/assets/images/product-1.png"),
  },
  {
    id: "2",
    name: "Paket 2",
    price: "Rp 200.000",
    image: require("@/assets/images/product-1.png"),
  },
  {
    id: "3",
    name: "Paket 3",
    price: "Rp 300.000",
    image: require("@/assets/images/product-1.png"),
  },
  {
    id: "4",
    name: "Paket 4",
    price: "Rp 450.000",
    image: require("@/assets/images/product-1.png"),
  },
  {
    id: "5",
    name: "Paket 5",
    price: "Rp 500.000",
    image: require("@/assets/images/product-1.png"),
  },
];

export default function HomeScreen() {
  interface Product {
    id: string;
    name: string;
    price: string;
    image: any;
  }

  const renderPromo = ({ item }: { item: (typeof promo)[0] }) => (
    <View style={styles.promoCard}>
      <Image source={item.image} style={styles.promoImage} />
    </View>
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaWrapper style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search products..."
          placeholderTextColor="#6b7280"
        />
        {/* Wishlist Icon */}
        <TouchableOpacity style={styles.wishlistButton}>
          <AntDesign name="hearto" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Promo Slider */}
      <View style={{ backgroundColor: "#3b82f6" }}>
        <FlatList
          data={promo}
          renderItem={renderPromo}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          indicatorStyle="white"
          pagingEnabled
          contentContainerStyle={styles.promoSlider}
        />
      </View>

      <Text style={styles.featuredText}>Featured Products</Text>

      {/* Product Grid */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b82f6",
    padding: 14,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    color: "#000000",
    fontFamily: "Inter-Regular", // Apply Inter font to the search bar
  },
  wishlistButton: {
    marginLeft: 12,
  },
  promoSlider: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  promoCard: {
    width: width * 0.92, // 90% of screen width
    height: 120,
    marginHorizontal: width * 0.04, // Center the card
    borderRadius: 8,
    overflow: "hidden",
  },
  promoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontFamily: "Inter-Bold", // Apply Inter font to the featured text
  },
  productGrid: {
    padding: 8,
  },
  productCard: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
    margin: 8,
    marginTop: 0,
    width: "45%",
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  productName: {
    color: "#000000",
    fontWeight: "bold",
    marginTop: 8,
    fontFamily: "Inter-Regular", // Apply Inter font to product names
  },
  productPrice: {
    color: "#6b7280",
    fontFamily: "Inter-Regular", // Apply Inter font to product prices
  },
  text: {
    fontFamily: "Inter-Regular", // Apply Inter font to all text
  },
});

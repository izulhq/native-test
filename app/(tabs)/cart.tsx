import SafeAreaWrapper from "@/components/SafeAreaWrapper";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const cartItems = [
  {
    id: "1",
    name: "Product 1",
    price: 100000,
    quantity: 1,
    image: require("@/assets/images/product-1.png"),
  },
  {
    id: "2",
    name: "Product 2",
    price: 200000,
    quantity: 2,
    image: require("@/assets/images/product-1.png"),
  },
  {
    id: "3",
    name: "Product 3",
    price: 300000,
    quantity: 1,
    image: require("@/assets/images/product-1.png"),
  },
];

export default function CartScreen() {
  const [cart, setCart] = useState(cartItems);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderCartItem = ({ item }: { item: (typeof cartItems)[0] }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>
          Rp {item.price.toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 8,
          borderRadius: 8,
        }}
        onPress={() => {
          const updatedCart = cart.filter(
            (cartItem) => cartItem.id !== item.id
          );
          setCart(updatedCart);
        }}
      >
        <Feather name="trash" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaWrapper style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome5 name="shopping-cart" size={22} color="white" />
        <Text style={styles.textHeader}>Keranjang</Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 14,
            alignSelf: "center",
          }}
        >
          <Feather name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 16,
          marginTop: 16,
          textAlign: "center",
          color: "#99a1af",
        }}
      >
        Pastikan untuk memeriksa pesanan Anda{"\n"}sebelum melanjutkan ke
        pembayaran
      </Text>

      {/* Cart Items */}
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cartList}
      />

      {/* Total Section */}
      <View style={styles.totalContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Text style={styles.totalText}>Total :</Text>
          <Text style={styles.totalPrice}>
            Rp {calculateTotal().toLocaleString()}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#3b82f6",
            padding: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
          }}
          onPress={() => {
            // Handle checkout action
          }}
        >
          <Text style={{ color: "white" }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#3b82f6",
    padding: 14,
    alignItems: "center",
    width: "100%",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 8,
  },
  cartList: {
    padding: 16,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  cartItemImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 12,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "Inter-Regular",
  },
  cartItemPrice: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 4,
    fontFamily: "Inter-Regular",
  },
  cartItemQuantity: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Inter-Regular",
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    gap: 12,
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3b82f6",
    fontFamily: "Inter-Bold",
  },
});

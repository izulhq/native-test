import SafeAreaWrapper from "@/components/SafeAreaWrapper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const orders = [
  {
    id: "1",
    name: "Product 1",
    price: 100000,
    image: require("@/assets/images/product-1.png"),
    paid: true,
    confirmed: true,
    process: "Shipped",
  },
  {
    id: "2",
    name: "Product 2",
    price: 200000,
    image: require("@/assets/images/product-1.png"),
    paid: false,
    confirmed: false,
    process: "Pending",
  },
  {
    id: "3",
    name: "Product 3",
    price: 300000,
    image: require("@/assets/images/product-1.png"),
    paid: true,
    confirmed: true,
    process: "Delivered",
  },
];

export default function OrderScreen() {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleCollapse = (id: string) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  const renderOrderItem = ({ item }: { item: (typeof orders)[0] }) => (
    <View style={styles.orderItem}>
      {/* Top Section */}
      <View style={styles.orderTopSection}>
        <Image source={item.image} style={styles.orderImage} />
        <View style={styles.orderDetails}>
          <Text style={styles.orderName}>{item.name}</Text>
          <Text style={styles.orderPrice}>
            Rp {item.price.toLocaleString()}
          </Text>
        </View>
        <TouchableOpacity>
          <Feather name="message-circle" size={24} color="#3b82f6" />
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.orderBottomSection}>
        <Text style={styles.orderProcess}>Process: {item.process}</Text>
        <TouchableOpacity
          style={styles.collapseButton}
          onPress={() => toggleCollapse(item.id)}
        >
          <Feather
            name={expandedOrderId === item.id ? "chevron-up" : "chevron-down"}
            size={20}
            color="#3b82f6"
          />
        </TouchableOpacity>
      </View>
      {expandedOrderId === item.id && (
        <View style={styles.collapseContent}>
          <Text style={styles.orderStatus}>
            Paid: {item.paid ? "Yes" : "No"}
          </Text>
          <Text style={styles.orderStatus}>
            Confirmed: {item.confirmed ? "Yes" : "No"}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaWrapper style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome5 name="clipboard-list" size={24} color="white" />
        <Text style={styles.textHeader}>Pesanan</Text>
      </View>

      {/* Order List */}
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.orderList}
      />
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
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 8,
  },
  orderList: {
    padding: 16,
  },
  orderItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  orderTopSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  orderImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 12,
  },
  orderDetails: {
    flex: 1,
  },
  orderName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "Inter-Regular",
  },
  orderPrice: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Inter-Regular",
  },
  orderBottomSection: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between", // Align Process and Button on the same line
    alignItems: "center", // Vertically center items
  },
  orderProcess: {
    fontSize: 14,
    color: "#3b82f6",
    fontWeight: "bold",
    fontFamily: "Inter-Regular",
    marginBottom: 8,
  },
  collapseButton: {
    padding: 4, // Add padding for better touch area
  },
  collapseButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Inter-Regular",
  },
  collapseContent: {
    marginTop: 8,
  },
  orderStatus: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Inter-Regular",
    marginBottom: 4,
  },
});

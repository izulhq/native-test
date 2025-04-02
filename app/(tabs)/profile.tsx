import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import SafeAreaWrapper from "@/components/SafeAreaWrapper";

const profileMenus = [
  {
    id: "1",
    title: "Email",
    icon: "mail",
    color: "#3b82f6",
    desc: "email@email.com",
  },
  {
    id: "2",
    title: "Phone",
    icon: "phone",
    color: "#3b82f6",
    desc: "08123456789",
  },
  {
    id: "3",
    title: "Address",
    icon: "map-pin",
    color: "#3b82f6",
    desc: "Jl. Raya No. 123",
  },
  {
    id: "4",
    title: "Password",
    icon: "lock",
    color: "#3b82f6",
    desc: "Last Edited: 01/01/2025",
  },
  { id: "5", title: "Edit Info", icon: "edit", color: "#6b7280" },
  { id: "6", title: "Give Rating", icon: "star", color: "#6b7280" },
  { id: "7", title: "Logout", icon: "log-out", color: "#6b7280" },
];

export default function ProfileScreen() {
  const renderMenuItem = ({ item }: { item: (typeof profileMenus)[0] }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Feather name={item.icon} size={28} color={item.color} />
      <View>
        <Text style={styles.menuText}>{item.title}</Text>
        {item.desc && <Text style={styles.menuDesc}>{item.desc}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaWrapper style={styles.container}>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/react-logo.png")} // Replace with your profile image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Nama Pengguna</Text>
        </View>

        {/* Menu Section */}
        <FlatList
          data={profileMenus}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.menuList}
        />
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#3b82f6",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
    color: "#fff",
  },
  menuList: {
    padding: 16,
    paddingTop: 0,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    gap: 12,
  },
  menuText: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
    color: "#000",
  },
  menuDesc: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#6b7280",
  },
});

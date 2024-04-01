import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* <Link style={{ padding: 20 }} href={"../(modals)/login"}>
        Login
      </Link> */}
      <Link style={{ padding: 20 }} href={"../(modals)/login"}></Link>

      <Link style={{ padding: 20 }} href={"../(modals)/tags"}>
        Tags(booking)
      </Link>
      <Link style={{ padding: 20 }} href={"../listing/1337"}>
        Listing Details
      </Link>
      <Link style={{ padding: 20 }} href={"../(modals)/product"}>
        Product
      </Link>
      <Link style={{ padding: 20 }} href={"../(modals)/capital"}>
        Capital
      </Link>
      <Link style={{ padding: 20 }} href={"../(modals)/news"}>
        News
      </Link>
    </View>
  );
};

export default Page;

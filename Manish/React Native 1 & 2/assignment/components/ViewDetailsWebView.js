import React from "react";
import WebView from "react-native-webview";

export default function ViewDetailsWebView(props) {
  return <WebView source={{ uri: "https://www.accolite.com/" }} />;
}

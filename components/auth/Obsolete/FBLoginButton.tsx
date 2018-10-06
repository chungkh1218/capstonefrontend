import React from "react";
import { View } from "react-native";
import { LoginButton } from "react-native-fbsdk";

const FBLoginButton = () => {
  <View>
    <LoginButton
      publishPermissions={["email"]}
      onLoginFinished={(error, result) => {
        if (error) {
          alert("Login failed with error: " + error);
        } else if (result.isCancelled) {
          alert("Login was cancelled");
        } else {
          alert(
            "Login was successful with permissions: " +
              result.grantedPermissions
          );
        }
      }}
      onLogoutFinished={() => alert("User logged out")}
    />
  </View>;
};

export default FBLoginButton;

import { StatusBar } from "react-native";
import React, { Fragment } from "react";
import Routes from "./src/routes";
import colors from "./src/components/constants/colors";

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
      <Routes />
    </Fragment>
  );
};

export default App;

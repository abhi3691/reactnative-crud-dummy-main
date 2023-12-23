import { FC } from "react";
import styles from "./styles";
import colors from "../../../../components/constants/colors";
import React from "react";
import { View } from "react-native";
import Buttons from "../../../../components/molecules/Buttons";
interface props {
  deleteStudent: () => void;
  updateStudent: () => void;
}

const RenderLeftActions: FC<props> = ({ deleteStudent, updateStudent }) => {
  return (
    <View style={[styles.container]}>
      <Buttons
        type="vector Icon"
        fontFamily="FontAwesome5"
        iconName="trash"
        iconSize={14}
        iconcolor={colors.white}
        containerStyles={styles.buttonContainer}
        onPress={deleteStudent}
      />
      <Buttons
        type="vector Icon"
        fontFamily="FontAwesome5"
        iconName="edit"
        iconcolor={colors.white}
        containerStyles={styles.buttonContainer}
        onPress={updateStudent}
        iconSize={14}
      />
    </View>
  );
};

export default RenderLeftActions;

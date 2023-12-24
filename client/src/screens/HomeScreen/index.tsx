import { SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import styles from "./styles";
import StudentsList from "./template/students_list";
import CreateButton from "./orgninzation/CreateButton";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* crreate and update students buttons */}
      <CreateButton />
      {/* students List */}
      <StudentsList />
    </SafeAreaView>
  );
};

export default HomeScreen;

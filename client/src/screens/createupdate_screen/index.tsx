import { Text, SafeAreaView, View } from "react-native";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles";
import Input, { InputRefProps } from "./orgnization/input";
import Buttons from "../../components/molecules/Buttons";
import { RadioButton } from "react-native-paper";
import colors from "../../components/constants/colors";
import createStudent from "../HomeScreen/api_hooks/create_student/createStudent";
import Toast from "react-native-simple-toast";
import {
  NavigationProp,
  ParamListBase,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import updateStudent from "../HomeScreen/api_hooks/update_student/updateStudent";

interface props {
  route: any;
}

type gender = "male" | "female";

const CreateUpdateScreen: FC<props> = ({ route }) => {
  const data = route?.params;
  const isFocused = useIsFocused();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [gender, setGender] = useState<gender>("male");
  const nameRef = useRef<string>();
  const ageRef = useRef<number>();
  const nameInputRef = useRef<InputRefProps>(null);
  const ageInputRef = useRef<InputRefProps>(null);
  const [loading, setLoading] = useState(false);

  const loadData = useCallback(() => {
    nameRef.current = data?.item.name;
    ageRef.current = data.item?.age;
    setGender(data.item.gender);
    nameInputRef.current?.setValue(data?.item.name);
    ageInputRef.current?.setValue(data?.item.age.toString());
  }, [data.item?.age, data.item?.gender, data.item?.name]);

  useEffect(() => {
    if (isFocused && data.type === "Update") {
      loadData();
    }
  }, [data.type, isFocused, loadData]);

  const changeGender = (value: gender) => {
    setGender(value);
  };

  const changeName = useCallback((e: string) => {
    nameRef.current = e;
  }, []);

  const changeAge = useCallback((e: string) => {
    ageRef.current = parseInt(e, 10);
  }, []);

  const validate = () => {
    let status = true;
    if (!nameRef.current) {
      status = false;
      nameInputRef.current?.showError("Name is Empty");
    } else {
      nameInputRef.current?.hideError();
      status = true;
    }
    if (!ageRef.current) {
      status = false;
      ageInputRef.current?.showError("Age is Empty");
    } else {
      ageInputRef.current?.hideError();
      status = true;
    }
    return status;
  };

  const addStudents = async () => {
    let status = validate();
    if (status) {
      setLoading(true);
      let student: studentprops = {
        age: ageRef.current,
        name: nameRef.current,
        gender: gender,
      };
      let response = await createStudent(student);
      if (response) {
        setLoading(false);
        Toast.show("Created Sucessfully", Toast.LONG);
        navigation.goBack();
      } else {
        Toast.show("Create Failed", 1);
        setLoading(false);
      }
    }
  };

  const updateStudents = async () => {
    setLoading(true);
    let status = validate();
    if (status) {
      let student: studentprops = {
        age: ageRef.current,
        name: nameRef.current,
        gender: gender,
      };
      let response = await updateStudent(data?.item?.id, student);
      if (response) {
        setLoading(false);
        Toast.show("Updated Sucessfully", Toast.LONG);
        navigation.goBack();
      } else {
        Toast.show("Update Failed", 1);
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.inputText}>{data?.type} Students</Text>
      <View style={styles.inputContaienr}>
        <Input
          placeholder="Name"
          onChangeText={changeName}
          ref={nameInputRef}
          onFocus={() => nameInputRef.current?.hideError()}
        />
        <Input
          placeholder="Age"
          onChangeText={changeAge}
          onFocus={() => nameInputRef.current?.hideError()}
          ref={ageInputRef}
          keyboardType="number-pad"
        />
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.buttonTitle}>Male</Text>
            <RadioButton.Android
              value="male"
              status={gender === "male" ? "checked" : "unchecked"}
              onPress={() => changeGender("male")}
              uncheckedColor={colors.gray}
              color={colors.black}
            />
          </View>
          <View style={styles.row}>
            <Text style={[styles.buttonTitle, styles.leftMargin]}>Female</Text>
            <RadioButton.Android
              value="second"
              status={gender === "female" ? "checked" : "unchecked"}
              onPress={() => changeGender("female")}
              uncheckedColor={colors.gray}
              color={colors.black}
            />
          </View>
        </View>

        <Buttons
          type="Text"
          title={data?.type}
          containerStyles={styles.buttonContainer}
          textStyle={styles.title}
          onPress={() =>
            data?.type === "Create" ? addStudents() : updateStudents()
          }
          isLoading={loading}
          loadercolor={colors.white}
          loaderSize={"large"}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateUpdateScreen;

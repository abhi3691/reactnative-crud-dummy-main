import {Text, View} from 'react-native';
import React, {FC, useCallback, useEffect, useRef} from 'react';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import RenderLeftActions from '../renderLeftActions';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface itemProps extends dataProps {
  open: boolean;
}

interface props {
  item: itemProps;
  index: number;
  deleteStudent: (id: number, index: number) => void;
}

const SingleStudent: FC<props> = ({item, index, deleteStudent}) => {
  const SwipeableRef = useRef<Swipeable>(null);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  useEffect(() => {
    if (item.open === false) {
      SwipeableRef.current?.close();
    }
  }, [item.open]);

  const updateStudent = useCallback(
    (selectedItem: dataProps) => {
      navigation.navigate('CreateUpdateScreen', {
        type: 'Update',
        item: selectedItem,
      });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.sl, styles.rightLineBox]}>
          <Text style={styles.title}>{index + 1}</Text>
        </View>
        <View style={[styles.name, styles.rightLineBox]}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={[[styles.age, styles.rightLineBox]]}>
          <Text style={styles.title}>{item.age}</Text>
        </View>
        <View style={[styles.flex]}>
          <Text style={styles.title}>{item.gender}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <RenderLeftActions
          deleteStudent={() => deleteStudent(item.id, index)}
          updateStudent={() => updateStudent(item)}
        />
      </View>
    </View>
  );
};

export default SingleStudent;

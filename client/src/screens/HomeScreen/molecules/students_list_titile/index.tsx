import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const StudentsListHeader = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.sl, styles.rightLineBox]}>
        <Text style={styles.title}>SL</Text>
      </View>
      <View style={[styles.name, styles.rightLineBox]}>
        <Text style={styles.title}>Name</Text>
      </View>
      <View style={[[styles.age, styles.rightLineBox]]}>
        <Text style={styles.title}>Age</Text>
      </View>
      <View style={[styles.flex]}>
        <Text style={styles.title}>Gender</Text>
      </View>
    </View>
  );
};

export default StudentsListHeader;

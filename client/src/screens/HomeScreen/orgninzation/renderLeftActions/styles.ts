import {StyleSheet} from 'react-native';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '25%',
  },
  buttonContainer: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: colors.black,
    marginRight: 20,
  },
});

export default styles;

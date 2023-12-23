import {StyleSheet} from 'react-native';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: '99%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.black,
    margin: 10,
  },
});
export default styles;

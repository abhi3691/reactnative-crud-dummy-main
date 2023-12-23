import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 1.1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  errorText: {
    fontSize: RFValue(12),
    color: colors.red,
  },
  input: {
    color: colors.black,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../../components/constants/colors';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.black,
    height: ScreenRatio.height / 20,
    borderRadius: 8,
    width: ScreenRatio.width / 1.1,
  },
  rightLineBox: {
    height: ScreenRatio.height / 20,
    borderRightWidth: 1,
    borderRightColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sl: {
    flex: 0.5,
  },
  age: {
    flex: 1,
  },
  name: {
    flex: 2,
  },
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: RFValue(10),
    color: colors.white,
  },
});

export default styles;

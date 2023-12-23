import {View, TextInputProps, TextInput, Text} from 'react-native';
import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './styles';
import colors from '../../../../components/constants/colors';

export interface InputRefProps {
  showError: (value: string) => void;
  hideError: () => void;
  setValue: (value: string) => void;
}

const Input = forwardRef<InputRefProps, TextInputProps>((props, ref) => {
  const [error, setError] = useState<string | boolean>(false);
  const textRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    showError(value) {
      setError(value);
      console.log('error', value);
    },
    hideError() {
      setError(false);
    },
    setValue(value) {
      textRef.current?.setNativeProps({text: value});
    },
  }));

  return (
    <Fragment>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={colors.gray}
          style={styles.input}
          {...props}
          ref={textRef}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </Fragment>
  );
});

export default Input;

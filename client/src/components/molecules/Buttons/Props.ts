import type { ReactNode } from "react";
import type { ColorValue, TextStyle, ViewStyle } from "react-native";

type Props = {
  onPress(): void;
  containerStyles?: ViewStyle;
} & (iconProps | textProps | svgProps) &
  loadingProps;

type iconProps = {
  type: "vector Icon";
  fontFamily:
    | "AntDesign"
    | "Entypo"
    | "EvilIcons"
    | "Feather"
    | "FontAwesome"
    | "FontAwesome5"
    | "FontAwesome5Pro"
    | "Fontisto"
    | "Foundation"
    | "Ionicons"
    | "MaterialCommunityIcons"
    | "MaterialIcons"
    | "Octicons";
  iconSize?: number;
  iconName: string;
  iconcolor: ColorValue | number | ColorValue | undefined;
};

type textProps = {
  type?: "Text";
  title?: string;
  textStyle?: TextStyle;
};

type svgProps = {
  type?: "SVG";
  children?: ReactNode;
};

type loadingProps = {
  isLoading?: boolean;
  loadercolor?: ColorValue;
  loaderSize?: number | "small" | "large" | undefined;
};

export default Props;

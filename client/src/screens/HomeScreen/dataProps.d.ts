interface studentprops {
  name?: string;
  age?: number;
  gender?: string;
}

interface dataProps extends studentprops {
  id: number;
}

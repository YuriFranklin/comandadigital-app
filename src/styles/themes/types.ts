export default interface ITheme {
  readonly title: 'light' | 'dark';

  readonly colors: {
    white: string;

    primary: string;
    primarylight: string;
    primarydark: string;

    secondary: string;
    secondarylight: string;
    secondarydark: string;

    background: string;
    backgroundlight: string;
    backgrounddark: string;

    text: string;
    textnohighlight: string;
  };
}

export interface NavButton {
  type: IconsType;
  url: string | undefined;
  visible: boolean;
}

interface Link {
  url: string;
  label: string;
}
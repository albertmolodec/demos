import s from "./ClosableElement.module.css";

type Props = {
  text: string;
};

export const ClosableElement = ({ text }: Props) => {
  return <div className={s.box}>{text}</div>;
};

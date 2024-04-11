import s from "./ClosableElement.module.css";
import { CloseButton } from "./CloseButton";

type Props = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ClosableElement = ({ text, onClick }: Props) => {
  return (
    <div className={s.box}>
      <span>{text}</span>
      <div className={s.control}>
        <div className={s.separator} />
        <CloseButton onClick={onClick} />
      </div>
    </div>
  );
};

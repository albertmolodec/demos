import s from "./ActionButton.module.css";

type Props = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "green" | "red";
};

export const ActionButton = ({ text, onClick, variant }: Props) => {
  return (
    <button
      type="button"
      className={`${s.button} ${variant === "green" ? s.green : s.red}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

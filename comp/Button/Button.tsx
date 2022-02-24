import styles from "../Button/Button.module.sass";

export default function Button({
  children,
  outlined = false,
  className,
}: ButtonProps) {
  return (
    <button
      className={
        styles.button +
        " " +
        (outlined ? styles.outlined : "") +
        " " +
        (className || "")
      }
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  outlined?: boolean;
  className?: string;
}

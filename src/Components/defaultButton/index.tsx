import styles from "./styles.module.css";

type DefaultButtonProps = {
  icons: React.ReactNode;
  color: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  icons,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icons}
      </button>
    </>
  );
}

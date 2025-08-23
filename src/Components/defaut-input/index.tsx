type DefaultInputProps = {
  id: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor="meuInput">task</label>
      <input id="meuInput" type={type} />
    </>
  );
}

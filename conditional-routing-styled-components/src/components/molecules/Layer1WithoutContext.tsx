import { Layer2WithoutContext } from "./LayerwithoutContext2";

interface Layer1WithoutContextProps {
  title: string;
}
//esempio di prop drilling
export const Layer1WithoutContext = ({ title }: Layer1WithoutContextProps) => {
  return (
    <>
      <Layer2WithoutContext title={title} />
    </>
  );
};

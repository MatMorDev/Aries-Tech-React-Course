interface Layer2WithoutContextProps {
  title: string;
}

export const Layer2WithoutContext = ({ title }: Layer2WithoutContextProps) => {
  return <h2>{title}</h2>;
};

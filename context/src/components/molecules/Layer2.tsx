import { AppGeneralContext } from "components/organisms/ContextText";
import { useContext } from "react";

interface Layer2Props {
  title: string;
}

export const Layer2 = () => {
  const { title } = useContext(AppGeneralContext);

  return <h2>{title}</h2>;
};

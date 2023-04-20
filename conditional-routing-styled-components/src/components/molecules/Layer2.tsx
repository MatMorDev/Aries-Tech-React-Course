import { AppGeneralContext } from "components/organisms/ContextText";
import { useContext } from "react";

export const Layer2 = () => {
  const { title } = useContext(AppGeneralContext);

  return <h2>2: {title}</h2>;
};

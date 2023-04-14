import { AppGeneralContext } from "components/organisms/ContextText";
import { useContext } from "react";

export const LayerB = () => {
  const { title } = useContext(AppGeneralContext);

  return <h2>B: {title}</h2>;
};

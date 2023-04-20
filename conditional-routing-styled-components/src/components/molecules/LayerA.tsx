import { AppGeneralContext } from "components/organisms/ContextText";
import { useContext } from "react";
import { LayerB } from "./LayerB";

export const LayerA = () => {
  const { setTitle } = useContext(AppGeneralContext);
  return (
    <>
      <LayerB />
      <h3 onClick={() => setTitle("Clicked Layer A")}>Layer A!</h3>
    </>
  );
};

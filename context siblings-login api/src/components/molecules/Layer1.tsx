import { AppGeneralContext } from "components/organisms/ContextText";
import { useContext } from "react";
import { Layer2 } from "./Layer2";

export const Layer1 = () => {
  const { setTitle } = useContext(AppGeneralContext);
  return (
    <>
      <Layer2 />
      <h3 onClick={() => setTitle("Clicked Layer 1")}>Layer 1!</h3>
    </>
  );
};

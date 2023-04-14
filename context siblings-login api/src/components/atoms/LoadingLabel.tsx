import { useContext } from "react";
import { LoadingContext } from "_shared/contexts/LoadingContext";

export const LoadingLabel = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    <>
      <span>{isLoading ? "Loading..." : ""}</span>
    </>
  );
};

import { LoadingLabel } from "components/atoms/LoadingLabel";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { LoadingContext } from "_shared/contexts/LoadingContext";

export const MainBody = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadingContextInitialValue = {
    isLoading,
    setIsLoading,
  };
  return (
    <LoadingContext.Provider value={loadingContextInitialValue}>
      <div>
        <p>
          THIS IS THE SHARED BODY
          <LoadingLabel />
        </p>
        <hr></hr>
        <Outlet />
      </div>
    </LoadingContext.Provider>
  );
};

import { useEffect, useState } from "react";
import { CheckItem } from "../atoms";

interface CheckRowProps {
  value: string;
  callback: (value: string, isChecked: boolean) => void;
}

export const CheckRow = ({ value, callback }: CheckRowProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    callback(value, checked);
  }, [checked]);

  const myRow = (
    <div onClick={() => setChecked((x) => !x)}>
      {checked && <span>Checked </span>}
      <span>{checked ? "X" : ""}</span>
      <CheckItem value={value} />
    </div>
  );
  return <>{checked ? <></> : myRow}</>;
};

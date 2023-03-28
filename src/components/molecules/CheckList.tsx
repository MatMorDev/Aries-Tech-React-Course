import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckRow } from "./CheckRow";

interface CheckListProps {
  list: string[];
  setCheckRow: (valueString: string[]) => void;
}

interface CheckedElement {
  value: string;
  isChecked: boolean;
}

export const CheckList = ({ list, setCheckRow }: CheckListProps) => {
  const [count, setCount] = useState<number>(0);

  const initialCheckedArray = list.map((x) => {
    return { value: x, isChecked: false } as CheckedElement;
  });

  const [checkedArray, setCheckedArray] =
    useState<CheckedElement[]>(initialCheckedArray);

  const bigCalcFunction = useCallback(
    (factor: number) => {
      return <p>Multiplied Count: {count * factor}</p>;
    },
    [count]
  );

  const bigCalculation = useMemo(() => {
    return (
      <p>
        Count: {count} / {list.length}
      </p>
    );
  }, [count]);

  useEffect(() => {
    console.log("Stato attuale", count);
    return () => console.log("Stato precedente", count);
  }, [count]);

  useEffect(() => {
    const trueElements = checkedArray.filter((x) => x.isChecked);
    setCount(trueElements.length);
  }, [checkedArray]);

  const checkedCallback = (value: string, isChecked: boolean) => {
    console.log(value);
    const newCheckedArray = checkedArray.map((x) => {
      if (x.value === value) {
        return { ...x, isChecked: isChecked };
      }
      return x;
    });
    setCheckedArray(newCheckedArray);
    //solo se viene cliccato modifico l'array di base
    if (isChecked) {
      setCheckRow(list.filter((x) => x !== value));
    }
  };

  return (
    <div>
      {bigCalcFunction(2)}
      {bigCalculation}
      {checkedArray.map((el, i) => (
        <CheckRow callback={checkedCallback} key={i} value={el.value} />
      ))}
    </div>
  );
};

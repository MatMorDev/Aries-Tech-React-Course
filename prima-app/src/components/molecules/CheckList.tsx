import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckRow } from "./CheckRow";

interface CheckListProps {
  list: string[];
}
interface CheckedElement {
  value: string;
  isChecked: boolean;
}

export const CheckList = ({ list }: CheckListProps) => {
  //credo un useState nel componente padre per tenere
  //traccia di quante volte un componente è stato cliccato
  const [count, setCount] = useState<number>(0);
  //tengo traccia coppie valore e booleano, con valori non spuntati
  const initialCheckedArray = list.map((x) => {
    //con as gli dico di trattarlo come l'interfaccia
    return { value: x, isChecked: false } as CheckedElement;
  });
  //inizializzo con initialCheckedArray, e TS riconosce che è il tipo CheckedElement grazie ad AS
  //metto il GENERICS per best practise
  const [checkedArray, setCheckedArray] =
    useState<CheckedElement[]>(initialCheckedArray);

  // aggiorno useMemo solo quando la dipendenza cambia
  const bigCalculation = useMemo(() => {
    return (
      <p>
        Count: {count} / {list.length}
      </p>
    );
  }, [count]);

  //dipendenza vuota per impostare ad esempio chiamata API iniziale
  /* useEffect(() => {
    console.log("componente costruito");
    //con la return fornisco al componente qualcosa da fare quando viene distrutto
    return () => console.log("componente distrutto");
  }, []);*/
  useEffect(() => {
    console.log("stato attuale " + count);
    return () => console.log("stato precedente " + count);
  }, [count]);

  //Hook: useCallback
  //
  const bigCalcFunction = useCallback(
    (factor: number) => {
      return (
        <p>
          Multiplied Count: {count * factor} / {list.length}
        </p>
      );
    },
    [count]
  );

  useEffect(() => {
    //usa{}con una variabile per vedere il console.log con il tipo
    // tolgo - console.log({ checkedArray });
    // utilizzo .filter per creare un nuovo array filtrato per isChecked === true
    const trueElements = checkedArray.filter((x) => x.isChecked);
    // debug finale - console.log(trueElements);
    // il contatore è pari al numero degli array (con true)
    setCount(trueElements.length);
  }, [checkedArray]);

  // callback, che prevede un valore ed un boolean
  const checkedCallBack = (value: string, isChecked: boolean) => {
    const newCheckedArray = checkedArray.map((x) => {
      //se corrisponde il valore di x allora cambia altrimenti ritorna singolo checks
      // spread operator {copia tutto x tranne isChecked con isChecked}
      if (x.value === value) return { ...x, isChecked: isChecked };
      return x;
    });
    setCheckedArray(newCheckedArray);

    ////////////////////////
    //se true toAdd = 1
    //const toAdd = isChecked ? 1 : -1;
    //somma 1 o -1
    //setCount((x) => x + toAdd);
    ///////////////////////
  };

  return (
    <div>
      {bigCalcFunction(2)}
      {bigCalcFunction(5)}
      {bigCalcFunction(1)}
      {bigCalcFunction(0)}
      {bigCalculation}
      {list.map((el, i) => {
        return <CheckRow callback={checkedCallBack} key={i} value={el} />;
      })}
    </div>
  );
};

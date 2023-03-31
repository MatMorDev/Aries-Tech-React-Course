import { useEffect, useState } from "react";
import { CheckItem } from "../atoms";
interface CheckRowProps {
  value: string;
  //definisco la callback con la lambda
  //metto void perché così non torna nulla
  //voglio che in ingresso ci sia un boolean, il nome può essere diverso
  //alla callback voglio via un boolean che una stringa
  callback: (value: string, isChecked: boolean) => void;
}

export const CheckRow = ({ value, callback }: CheckRowProps) => {
  //Hook: useState con TypeScript, va specificato anche il tipo di dato di ingresso e lo stato iniziale
  //la funzione restituisce un array, che in prima posizione contiene il dato che persiste, la seconda è la funzione per settarlo
  const [checked, setChecked] = useState<boolean>(false);

  //scatenata ad al cambio di valore
  //stato iniziale inizializzato, fa scatenare almeno 1 volta quando viene costrutio il componente
  //si accorge del cambio della variabile ed ha sempre il valore più recente
  //ed il valore più aggiornato lo passo alla callback
  useEffect(() => {
    callback(value, checked);
  }, [checked]);

  /*return (
    // <div onClick={() => setChecked(!checked)}> singolo cambiamento
    // metodo 1:{setChecked((x) => !x);callback(checked);}
    // in setchecked sto delegando il comportamento nella ostante
    // e poi subito chiamo la callbakc chiamando di nuovo la callback, la delega del cambiamento di stato non è ancora avvenuto
    // il console.log mi restituisce los tato precedente
    // NOTA: escamotage 1 credo un nuovo lavore per fargli capire a react la differenza
    // <div
    //  onClick={() => {
     //   const newChecked = !checked;
    //    console.log("inner1", newChecked);
    //    setChecked(newChecked);
    //    console.log("inner2", newChecked);
    //    callback(newChecked);
    //  }}
    //> 



    <div
      onClick={() => {
        setChecked((x) => !x);
      }}
    >
      {checked && <span>X</span>}
      <span>{checked ? "X" : ""}</span>
      <CheckItem value={value} />
    </div>
  );*/

  return (
    // <div onClick={() => setChecked(!checked)}>
    <>
      {checked ? (
        <div></div>
      ) : (
        <div onClick={() => setChecked((x) => !x)}>
          {checked && <span>X</span>}
          <span>{checked ? "X" : ""}</span>
          <CheckItem value={value} />
        </div>
      )}
    </>
  );
};

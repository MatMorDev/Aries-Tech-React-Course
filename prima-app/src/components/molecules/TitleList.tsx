import { TitleInterface } from "../../types";
import { Title } from "../atoms";

interface TitleListProps {
  list: TitleInterface[];
  //la funzione callback riceve una stringa e restituisce nulla
  //è la signature della funzione
  callback: (value: string) => void;
}

interface TitleListExtendedProps extends TitleListProps {
  listTitle: string;
}

//nella definizione del componente sfrutto la funzione callback
export const TitleList = ({
  list,
  callback,
  listTitle,
}: TitleListExtendedProps) => {
  const listMapped = list.map((el, index, array) => {
    const isLast = index === array.length - 1;

    //quando si click sul titolo viene richiamata la funzione callback
    //!isLast && <hr /> -- utilizzo i booleani in modo logico, se !isLast è falso non va oltre(comportamento di valutazione)
    //se invece è true ovvero in tutte le situazioni dove non sei alla fine dell'indice
    return (
      <div key={el.id} onClick={() => callback(el.value)}>
        <Title mainTitle={el.id.toString()}></Title>
        {!isLast && <hr />}
      </div>
    );
  });

  return (
    <div>
      <h1>{listTitle}</h1>
      {listMapped}
    </div>
  );
};

//funzione per salvare nel local storage un qualcosa dandogli una key ed un valore
export const SaveToLocalStorage = (
  key: string,
  value: Object | number | string | number[] | string[]
) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
};

//con "T" vado a dirgli qualunque cosa che devo definire quando richiamo la funzione e mi aspetto di trovare un tipo
export const GetFromLocalStorage = <T>(key: string) => {
  const stringifiedValue = window.localStorage.getItem(key);
  //ifguard per gestire il .parse che non vuole null, in questo modo se dovesse essere null la funzione termina con null
  //altrimenti procede con il pase
  if (stringifiedValue === null) {
    return undefined;
  }
  return JSON.parse(stringifiedValue) as T;
};

export const RemoveFromLocalStorage = (key: string) => {
  console.log(key);
  window.localStorage.removeItem(key);
};

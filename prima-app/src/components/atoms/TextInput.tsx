//ricordati che .tsx sono solo i componenti

//creo interfaccia da passare alla funzione del componente
//interfaccia per il tipo di dato in ingresso, anche solo per un attributo INTERFACCIA
export interface TextInputProps {
  inputName: string;
}

export const TextInput = ({ inputName }: TextInputProps) => {
  return <input type={"text"} name={inputName}></input>;
};

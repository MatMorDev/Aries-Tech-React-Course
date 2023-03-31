import { Label, LabelProps, TextInputProps, TextInput } from "../atoms";

//esteso: tutte le proprietà di questa interfaccia vengono aggiuente alla nuova interfaccia creata
//la nuova inter è la fusione da LabelProps e da quello scritto in LabelWithInputProps
interface LabelWithInputProps extends LabelProps, TextInputProps {
  inputName: string;
}

//nota: labelValue è dentro a LabelProps per EREDITARIETA'
export const LabelWithInput = ({
  labelValue,
  inputName,
}: LabelWithInputProps) => {
  return (
    <>
      <Label labelValue={labelValue}></Label>
      <TextInput inputName={inputName}></TextInput>
    </>
  );
};

import styled from "styled-components";
import { FC } from "react";

interface StyledButtonProps {
  text: string;
  callback: () => void;
  disabled?: boolean;
  borderSize: number;
}

//gli attribuisco un generics al button per prevedere anche prop esterne
const InternalStyledButton = styled.button<Partial<StyledButtonProps>>`
  border: ${(props) => (props.disabled ? "red" : "green")}
    ${(props) => props.borderSize}px solid;
`;

//disabled boolean sia per lo stato del button che per il colore

//FC functional component, modo alternativo di definire una funzione con lambda
export const StyledButton: FC<StyledButtonProps> = ({
  text,
  callback,
  disabled = false,
  borderSize,
}: StyledButtonProps) => {
  return (
    <InternalStyledButton
      borderSize={borderSize}
      disabled={disabled}
      onClick={() => callback()}
    >
      {text}
    </InternalStyledButton>
  );
};

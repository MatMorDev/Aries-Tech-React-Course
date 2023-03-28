import {
    Label, LabelProps,
    TextInput, TextInputProps
} from "../atoms"

interface LabelWithInputProps extends LabelProps, TextInputProps {

}

export const LabelWithInput = ({
    labelValue,
    inputName
}: LabelWithInputProps) => {

    return (
        <>
            <Label
                labelValue={labelValue}
            ></Label>
            <TextInput
                inputName={inputName}
            ></TextInput>
        </>
    )
}
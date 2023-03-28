export interface TextInputProps {
    inputName: string
}

export const TextInput = (
    { inputName }: TextInputProps
) => {

    return (
        <input type={'text'} name={inputName}></input>
    )
}
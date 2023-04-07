export interface LabelProps {
    labelValue: string
}

export const Label = ({labelValue}:LabelProps) => {
    return <label>{labelValue}</label>
}
interface CheckItemProps {
    value: string
}

export const CheckItem = (
    { value }: CheckItemProps
) => {
    return (
        <span>{value}</span>
    )
}
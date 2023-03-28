import { TitleInterface } from "../../types"
import { Title } from "../atoms"

interface TitleListProps {
    list: TitleInterface[],
    callback: (value: string) => void
}

interface TitleListExtendedProps extends TitleListProps {
    listTitle: string
}

export const TitleList = ({
    list,
    callback,
    listTitle
}: TitleListExtendedProps) => {
    const listMapped =
        list.map(
            (el, index, array) => {
                const isLast = index === (array.length - 1)

                return (
                    <div
                        key={el.id}
                        onClick={
                            () => callback(el.value)
                        }>
                        <Title
                            mainTitle={el.id.toString()}
                        ></Title>
                        {!isLast && <hr></hr>}
                    </div>
                )
            }
        )

    return (
        <div >
            <h1>
                {listTitle}
            </h1>
            {listMapped}
        </div>
    )
}
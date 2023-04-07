import { useCallback, useEffect, useMemo, useState } from "react"
import { CheckRow } from "./CheckRow"

interface CheckListProps {
    list: string[]
}

interface CheckedElement {
    value: string;
    isChecked: boolean;
}

export const CheckList = (
    { list }: CheckListProps
) => {
    const [count, setCount] = useState<number>(0)

    const initialCheckedArray = list.map((x) => {
        return { value: x, isChecked: false } as CheckedElement
    })

    const [checkedArray, setCheckedArray] = useState<CheckedElement[]>(initialCheckedArray);

    const [checkedItem, setCheckedItem]=useState<CheckedElement>({value:'',isChecked:false});

    useEffect(
        () => {
            console.log('Componente costruito');

            return () => {
                console.log('Componente distrutto')
            }
        },
        []
    )

    const bigCalcFunction = useCallback(
        (factor: number) => {
            return <p>Multiplied Count: {count * factor}</p>
        },
        [count]
    )

    const bigCalculation = useMemo(
        () => {
            return <p>Count: {count} / {list.length}</p>
        },
        [count]
    )

    useEffect(
        () => {
            console.log('Stato attuale', count);
            return () => console.log('Stato precedente', count)
        },
        [count]
    )

    useEffect(
        () => {
            const trueElements = checkedArray.filter((x) => x.isChecked)
            setCount(trueElements.length)
        },
        [checkedArray]
    )

    useEffect(()=>{
 

        console.log('checkedItem',checkedItem)  
        checkedCallback(checkedItem.value,checkedItem.isChecked);


    },[checkedItem]);



    const showlist = useMemo(()=>{
        return checkedArray.map((el, i) =>{
            console.log('MAP',el)
                           return <CheckRow
                                callback={(value,isChecked)=>setCheckedItem({value,isChecked})}
                                key={Math.random()}
                                value={el.value}
                                />})
    },[checkedArray]);



    const checkedCallback = (value: string, isChecked: boolean) => {

        console.log('chiamatacheckedCallback',value)
        const newCheckedArray = checkedArray.filter((x) => x.value !== value)  ;
        setCheckedArray(newCheckedArray)
        console.log('newCheckedArray',newCheckedArray)
       


    /*     const newCheckedArray = checkedArray.map((x) => {
            if (x.value === value) {
                return { ...x, isChecked: isChecked }
            }
            return x
        })

     

        setCheckedArray(newCheckedArray) */
    }

    return (
        <div>
            {bigCalcFunction(2)}
            {bigCalculation}
            {bigCalculation}
            {
                showlist
            }
                
        </div>

    )
}
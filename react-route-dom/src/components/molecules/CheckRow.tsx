import { useEffect, useState, useMemo } from "react"
import { CheckItem } from "../atoms"

interface CheckRowProps {
    value: string,
    callback: (value:string, isChecked: boolean) => void,

}

export const CheckRow = (
    {
        value,
   
        callback
    }: CheckRowProps
) => {
    const [checked, setChecked] = useState<boolean|undefined>(undefined);

    useEffect(
     
        () => {
      
            if(checked === undefined) return;
          
        
            callback(value, checked)
        },
        [checked]
    )

const showX = useMemo(()=>{

    console.log('checkedMEMO ' + value, checked);
return <span>{checked ? "X" : ""}</span>},[checked]);


    return (
        // <div onClick={() => setChecked(!checked)}>
        <div onClick={() => setChecked(x => !x)}>
          {showX}
            <CheckItem value={value} />
        </div>
    )
}
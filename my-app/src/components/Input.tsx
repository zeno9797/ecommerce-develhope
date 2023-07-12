import { useState } from "react"
import storeItem from "../data/items.json"

export function Input() {
    const [input, setInput] = useState<string>("")
    const [data, setData] = useState(storeItem)
    const [filter, setFilter] = useState(data)
    

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setInput(value)
    }

    function handleClick() {
        const filteredData = data.filter((item) => item.name.includes(input))
        setFilter(filteredData)
    }

    return (
        <>
            <input type="text" onChange={handleInput} value={input} />
            <button onClick={handleClick}>Cerca</button>
            {filter.map((item) => (
                <div key={item.id}>
                    
                </div>
            ))}
        </>
    )
}
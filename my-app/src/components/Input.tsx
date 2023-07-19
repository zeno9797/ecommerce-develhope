import { useState } from "react";
import storeItem from "../data/items.json";
import { Button } from "react-bootstrap";
import "./navbar.css";

type PropsType = {
    updateSearch: (param1: string) => void

  }

export function Input({updateSearch}: PropsType) {
    const [input, setInput] = useState<string>("");
    const [data, setData] = useState(storeItem);
    const [filter, setFilter] = useState(data);

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInput(value);

        const filteredData = data.filter((item) => item.name.includes(value));
        setFilter(filteredData);
        updateSearch(value)
        console.log(filteredData)
    }

    

    return (
        <div
            style={{
                marginLeft: "-50px",
                
            }}
            className="d-flex g-5"
        >
            <input 
                
                className="input-up"
                type="text"
                onChange={handleInput}
                value={input}
                
            />
            <Button
                
                variant="outline-white bg-white"
                style={{ marginLeft: "3px", position: "relative", right: "54px", top: "2px", borderRadius: "30px", border: "0px", height: "37px", width:"50px", paddingLeft:"12px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
                    <path
                        d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                </svg>
            </Button>
            {filter.map((item) => (
                <div key={item.id}></div>
            ))}
        </div>
    );
}
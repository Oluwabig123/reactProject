import { useState } from "react"
let threshold = 100



function Counter(){
    //declare a count value for the counter
    const [count, setCount] = useState(0)

   

    return(
        //The Counter header and the button function
        <div className="parented">
            {count<=threshold? <h1>  Counter: {count}</h1>: <h1>You have exceeded the limit</h1>}
            <button onClick={() =>setCount(count +1)}>Increase</button>
            <button onClick={() =>setCount(count -1)}>Decrease</button>
            <button onClick={() =>setCount(0)}>Reset</button>
        </div>
    )
}


export default Counter
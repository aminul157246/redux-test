import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/features/counter/counterSlice";

const Counter = () => {

    const count = useSelector((state) => state.counter.value) // khabo 
    const dispatch = useDispatch()  // update

    console.log(count);

    return (
        <div className="ml-24">
            <div>
                 <button onClick={() => dispatch(increment())}>+ by 1</button>  {/* must to call the function */}
            </div>

            <div>
                 <button onClick={() => dispatch(incrementByAmount(5))}>+ by 5</button>  {/* must to call the function */}
            </div>
            <h2> Count : {count}</h2>
            <div>
                <button onClick={() => dispatch(decrement())}>- by 1 </button>
            </div>
            <div>
                <button onClick={() => dispatch(decrementByAmount(5))}>- by 5</button>
            </div>
        </div>
    );
};

export default Counter;
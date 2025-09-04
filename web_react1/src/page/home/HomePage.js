import { use, useState } from "react";
const HomePage = () => {
    const [value1, setValue1] = useState(0); // declare state variable
    const [value2, setValue2] = useState('Hello World'); // declare state variable
    const [state, setState] = useState({
        name: 'John',
        age: 30,
        loading: true,
        step: 1,
    }); // Object State

    const onClickAdd = () => {
        setValue1(value1 + state.step);
    };

    const onClickMinus = () => {
        if (value1 > 0) {
            setValue1(value1 - state.step);
        }
        else {
            alert("Value1 cannot be less than 0");
        }

    };
    const onReset = () => {
        setValue1(0);

    };

    const onClickChangeName = () => {
        setState({
            ...state, //រក្សា state ចាស់
            name: 'Jane'
        }); // Object State
    };
    return (
        <div style={{ marginTop: 100, textAlign: "center" }}>
            <h1>{value1}</h1>

            <span>Step:</span>
            <input
                value={state.step}
                onChange={(e) => setState({ ...state, step: Number(e.target.value) })}  // Object State
            />
            <br />
            <button style={{ margin: 10 }} onClick={onClickMinus}>-</button>
            <button style={{ margin: 10 }} onClick={onClickAdd}>+</button>
            <button style={{ margin: 10 }} onClick={onReset}>Reset</button>
            <hr />

            <h1>{value2}</h1>

            <h1>{state.loading ? 'Loading...' : ""}</h1>
            <h1>Name:{state.name},  Age:{state.age}</h1>

            <button onClick={onClickChangeName}>Change Name</button>
            <button onClick={() => setState({ ...state, loading: !state.loading })}>Toggle Loading</button>

        </div>
    )

}


export default HomePage;    
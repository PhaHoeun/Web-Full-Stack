import { useState } from "react";
import ProductCart from "../../component/cart/ProductCart";

const dataProduct = [
    {
        id: 1,
        product_name: 'Woomen Jean',
        des: "Des ...",
        price: 10,
        stock: 1,
        image: require('../../assets/images/Im-Yoon-Ah.jpg'),
    },
    {
        id: 2,
        product_name: 'Woomen Shoe',
        des: "Des ...",
        price: 5,
        stock: 22,
        image: require('../../assets/images/nith.jpg'),
    },
    {
        id: 3,
        product_name: 'Woomen Skirt',
        des: "Des ...",
        price: 3,
        stock: 12,
        image: require('../../assets/images/B-Hany.jpg'),
    }
]

const HomePage = () => {

    // const [value1, setValue1] = useState(0); // declare state variable
    // const [value2, setValue2] = useState('Hello World'); // declare state variable
    // const [state, setState] = useState({
    //     name: 'John',
    //     age: 30,
    //     loading: true,
    //     step: 1,
    // }); // Object State
    // const onClickAdd = () => {
    //     setValue1(value1 + state.step);
    // };
    // const onClickMinus = () => {
    //     if (value1 > 0) {
    //         setValue1(value1 - state.step);
    //     }
    //     else {
    //         alert("Value1 cannot be less than 0");
    //     }
    // };
    // const onReset = () => {
    //     setValue1(0);
    // };
    // const onClickChangeName = () => {
    //     setState({
    //         ...state, //រក្សា state ចាស់
    //         name: 'Jane'
    //     }); // Object State
    // };
    const [list, setList] = useState(dataProduct);
    return (
        <>

            {/* <h1>{value1}</h1>
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
            <button onClick={() => setState({ ...state, loading: !state.loading })}>Toggle Loading</button> */}


            {/* list and component */}

            <div style={{ marginTop: 100, display: "flex", flexDirection: "row" }} >
                {list.map((item, _) =>
                    <ProductCart
                        id={item.id}
                        image={item.image}
                        productName={item.product_name}
                        description={item.des}
                        price={item.price}
                        stock={item.stock}
                        onAddToCart = {(value)=> alert(value)}
                    />
                )}
            </div>



        </>
    )

}


export default HomePage;    
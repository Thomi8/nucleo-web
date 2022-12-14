import { useContext, useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import CartContext from "./CartContext";

export default function ItemCountDetail({item}) {

const [countDetail, setCountDetail] = useState(1);
const [compra, setCompra] = useState(false)
const cartContext = useContext(CartContext)

useEffect(() => {
    setCountDetail(item.min)
    }, [item.min])

function decrement() {
    if (countDetail !== item.min) {
        setCountDetail(countDetail - 1)
    } else {
        swal(`¡No puedes agregar menos de ${item.min} unidad!`);
    }
}

function increment() {
    if (countDetail !== item.stock) {
        setCountDetail(countDetail + 1)
    } else {
        swal(`¡No puedes agregar más de ${item.stock} unidades!`);
    }
}

function addToCart() {
    swal(`¡Se agregaron al carrito ${countDetail} unidades!`);
    item.quantity = countDetail
    cartContext.addItem(item);
    setCompra(true);
}

    return (
        compra === false ?
            <div className="flex items-center gap-8 w-full">
                <div
                    className="flex justify-between items-center px-4 py-1 border-indigo-600 border-2 rounded-md w-1/3 hover:bg-gray-50">
                    <button className="mr-1 px-4 py-1.5 text-black hover:bg-indigo-100" onClick={decrement}>-</button>
                    {countDetail}
                    <button className="mr-6 px-4 py-1 text-black hover:bg-indigo-100" onClick={increment}>+</button>
                </div>
                <button
                    type="submit"
                    className="w-3/5 mt-0 w-full bg-slate-900 border border-transparent rounded py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>
            </div>
            :
            <Link to={'/cart'} className='w-full'>
                <button
                    type="submit"
                    className="w-full w-full bg-slate-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
                >
                    Checkout
                </button>
            </Link>
    );
}
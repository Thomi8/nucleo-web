import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

export default function ItemCountCart({ item }) {
    const cartContext = useContext(CartContext)
    const [cantidad, setCantidad] = useState(item.quantity)

    useEffect(() => {
        item.quantity = cantidad
        cartContext.addItem(item)
    }, [cantidad])

    function change() {
        if (cantidad !== item.stock) {
            setCantidad(cantidad + 1)
        } else {
            swal(`¡No puedes agregar más de ${item.stock} unidades!`);
        }
    }

    function changeD() {
        if (cantidad !== item.min) {
            setCantidad(cantidad - 1)
        } else {
            swal(`¡No puedes agregar menos de ${item.min} unidad!`);
        }
    }

    return (
        <div className="w-2/4">
            <div
                className="flex w-fit text-gray-500 justify-start items-center px-0 py-0 border-indigo-600 border-0 rounded-md hover:bg-gray-50 ml-2">
                <button className="mr-0.5 px-2 pt-1 hover:bg-indigo-100" onClick={changeD}>-</button>
                <button className="ml-0.5 px-2 pt-1 hover:bg-indigo-100" onClick={change}>+</button>
            </div>
        </div>
    );
}
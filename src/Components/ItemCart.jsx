import {useDispatch} from 'react-redux'
import { addUpdateItem, removeItem } from './Reduce/CartSlice.js'

function ItemCart({data})
{
    const dispatch = useDispatch()

    let UpdateSL = (event) => {
        event.preventDefault();
        let value = parseInt(event.target.value); // Chuyển đổi giá trị input thành số nguyên
        if (isNaN(value) || value < 0)
        {
            return; // Không thực hiện nếu giá trị không hợp lệ hoặc âm
        }
        dispatch(addUpdateItem({id:data.id, price:data.price, quantity:value}))
    }

    let RemoveSP = (event) => {
        event.preventDefault();
        dispatch(removeItem({id:data.id}))
    }

    return (
         <tr>
            <td className="shoping__cart__item">
                <img src={data.image} style={{heigth:'100px', width: '100px'}} alt="" />
                <h5>{data.name}</h5>
            </td>
            <td className="shoping__cart__price">${data.price}</td>
            <td className="shoping__cart__quantity">
                <div className="quantity">
                <div className="pro-qty">
                <input type="number" placeholder={data.quantity} onChange={UpdateSL} min="0" /> {/* Sử dụng value thay vì placeholder */}
                </div>
                </div>
            </td>
            <td className="shoping__cart__total">${data.itemTotal}</td>
            <td className="shoping__cart__item__close">
                <span className="icon_close" onClick={RemoveSP}/>
            </td>
        </tr>
    )
}

export default ItemCart;
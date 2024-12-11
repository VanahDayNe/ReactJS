import { useDispatch } from "react-redux"
import { addUpdateItem } from "../Components/Reduce/CartSlice";

function ItemProduct({ sanpham })
{
    const dispatch = useDispatch();

    let addCart = (event) => {
        event.preventDefault();
        dispatch(addUpdateItem({ id: sanpham.id, image: sanpham.images[0], name: sanpham.title, price: sanpham.price, quantity: 1 }));
        alert('Đã thêm vào giỏ hàng');
    }
    return (
       <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="featured__item">
                            <div className="product-image">
                            <a href={`/${sanpham.category}/${sanpham.id}`}>
                                <img src={sanpham.thumbnail} alt="" />
                            </a>
                          
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">{sanpham.title}</a>
                                </h6>
                                <h5>{sanpham.price}${ ""}</h5>
                                 <a onClick={addCart} href="#" className="btn btn-success">
                                   Thêm vào giỏ hàng <i className="fa fa-shopping-cart" />
                                </a>
                            </div>
                        </div>
                    </div>
    )
}
export default ItemProduct;
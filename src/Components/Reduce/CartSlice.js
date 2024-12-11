import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    //Vừa thêm và vừa cập nhập sản phẩm
    addUpdateItem: (state, action) => {
      let item = action.payload; //action.payload giá trị được gửi vào (sản phẩm)
      let existItem = state.items.find((i) => i.id === item.id); //Sản phẩm đã tìm thấy
      if (!existItem) {
        //Thêm sản phẩm vào giỏ hàng
        state.items.push({ ...item, itemTotal: item.quantity * item.price });
        state.total += Number(item.quantity * item.price);
      } else {
        //Đã có sản phẩm trong giỏ hàng
        existItem.quantity += item.quantity;
        existItem.itemTotal = item.quantity * item.price;
        state.total += Number(item.quantity * item.price);
      }
    },
      //Xóa sản phẩm khỏi giỏ hàng
      removeItem: (state, action) => {
        let item = action.payload; //action.payload giá trị được gửi vào (sản phẩm)
          let remove = false; //Chưa xóa
          state.items.find((v, i) => {
              if (!remove) {
                if (v.id === item.id) {
                  state.total -= v.itemTotal;
                  state.items.splice(i, 1); //Xóa phần tử khỏi mảng
                  remove = true;
                }
              }
          }) // Sản phẩm đã tìm thấy       
      }
  }
});

export const { addUpdateItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
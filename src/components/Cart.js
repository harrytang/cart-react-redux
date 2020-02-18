 import React,{Component}from 'react';
import {connect} from 'react-redux';
import { sumBy } from 'lodash'; 
// import carts from './../reducers/carts';
import Helpers from './../libs/Helpers';
// import Notify from './Notify';
import CartItem from './CartItem';
class Cart extends Component {
  render(){
    let {items} = this.props;
    console.log(items);
    return (
       <section className="section">
            <div className="table-responsive">
              <table className="table product-table">
                <thead>
                  <tr>
                    <th />
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Cộng</th>
                    <th />
                  </tr>
                </thead>
                {this.showCartItem(items)}
                {this.showFooter(items)}
              </table>
            </div>
    </section>
 )
 }
 showCartItem(items){
   let xhml = null;
   if(items !== null && items.length >0){
     xhml = items.map((item,index)=>{
     return <CartItem key={index} item={item} index={index}/>
     })
   }
   return <tbody>{xhml}</tbody>
 }
showFooter(items){
let xhtml = null; 
  if(items !== null && items.length >0){
    let totalValue = sumBy(items,(item)=>{
      return item.product.price * item.quantity; 
    })
  xhtml = <tr>
                    <td colSpan={3}/>
                    <td>
                    <strong>Tổng Tiền</strong>
                    </td>
                    <td>{totalValue}</td>
                    <td colSpan={3}>
                      <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right" />
                      </button>
                    </td>
           </tr>
}
return <tfoot id="my-cart-footer">{xhtml}</tfoot>
}
}
const mapStateToProps = (state) => {
  return {
  items : state.carts
  }
}
 export default connect(mapStateToProps,null)(Cart);




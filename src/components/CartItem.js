import React,{Component}from 'react';
import {connect} from 'react-redux';
import { sumBy } from 'lodash'; 
import Helpers from './../libs/Helpers';
import * as configs from './../constants/Config';
// import Validate from './../libs/Validate';
import {actRemoveProduct,actChangeNotify,actUpdateProduct} from './../actions/index'; 
class CartItem extends Component {
  constructor(props){
    super(props); 
    this.state={
      quantity:1
    }
    this.onDelete = this.onDelete.bind(this);
    this.onUpdateQuantity = this.onUpdateQuantity.bind(this);
   
  }
  onDelete(id){
    this.props.onDelete(id);
    this.props.changeNotify(configs.NOTI_ACT_DELETE)
  }

  
onUpdateQuantity(product,quantity){
  if(quantity >0){
   this.setState({
      quantity:+quantity
    })
   this.props.onUpdateQuantity(product,quantity);
   this.props.changeNotify(configs.NOTI_ACT_UPDATE)
  }
}
render(){
let {item} = this.props;
let {product} = item;
let quantity = (item.quantity>0) ? item.quantity : this.state.quantity;

 return (
                    <tr>
                    <th scope="row">
                      <img src={product.image} alt="" className="img-fluid z-depth-0" />
                    </th>
                    <td>
                      <h5>
                        <strong>{product.name}</strong>
                      </h5>
                    </td>
                    <td></td>
                    <td className="center-on-small-only">
                      <span className="qty">{item.quantity}</span>
                      <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                        className="btn btn-sm btn-primary tn-rounded waves-effect waves-light">
                          <a onClick={()=>this.onUpdateQuantity(product,item.quantity-1)}>—</a>
                        </label>
                        <label 
                        onClick={()=>this.onUpdateQuantity(product,item.quantity+1)} 
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                          <a>+</a>
                        </label>
                      </div>
                    </td>
                    <td>{this.showSubTotal(product.price,quantity)}</td>
                    <td>
                      <button onClick={()=>this.onDelete(product.id)}type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top">
                        DELETE
                      </button>
                    </td>    
                    </tr>
)
}


showSubTotal(price,quantity){
  return Helpers.toCurrency(price*quantity,"USD","right")

}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onDelete: (id) => {
      dispatch(actRemoveProduct(id))
    },
    changeNotify: (content) =>{
      dispatch(actChangeNotify(content))
  },
  onUpdateQuantity:(product,quantity)=>{
  dispatch(actUpdateProduct(product,quantity))
}
}
}

export default connect(null,mapDispatchToProps)(CartItem)



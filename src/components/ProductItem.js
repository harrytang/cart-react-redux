import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import Validate from './../libs/Validate'; 
import * as config from './../constants/Config';
import {actBuyProduct,actChangeNotify} from './../actions/index';

import Helpers from './../libs/Helpers';
class ProductItem extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:1
    }
    this.handleBuy = this.handleBuy.bind(this)
  }
  handleBuy(product,quantity){

    this.props.handleBuy(product,quantity);
    this.props.changeNotify(config.NOTI_ACT_ADD);
  }
  render(){
    let {product} = this.props;
    let quantity = +this.state.quantity;
    return (
      <div className="row">
              <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image} className="img-fluid" alt="" />
                    <a>
                      <div className="mask waves-light waves-effect waves-light" />
                    </a>
                  </div>
                 </div>    

       <div className="card-body">
                    <h4 className="card-title">
                      <strong>
                        <a>{product.name}</a>
                      </strong>
                    </h4>
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <p className="card-text">
                      {product.summary}
                    </p>
                    <div className="card-footer">
                      <span className="left">
                      {Helpers.toCurrency(product.price,"USD","right")}
                      </span>
                      <span className="right">
                        <a onClick={()=>this.handleBuy(product,quantity)}className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </span>
                    </div>
                  </div>
             </div>
     </div>


  );
}}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleBuy: (product,quantity) => {
      dispatch(actBuyProduct(product,quantity))
    },
    changeNotify: (content) =>{
      dispatch(actChangeNotify(content))
  }
}
}

export default connect(null,mapDispatchToProps)(ProductItem); 



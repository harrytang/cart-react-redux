import React,{Component}from 'react';
import {connect} from 'react-redux'; 
import ProductItem from './ProductItem'; 
import Notify from './Notify';
// import * as config from './../constants/Config';
class Product extends Component {

  render(){
    let {products} = this.props;
    return (
<main id="mainContainer">
        <div className="container">
          <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
     
                 {this.showProducts(products)}        
          </section>  
          <Notify />     
        </div>
      </main>
      )

  }
  showProducts(products){
    let xhml = null;
    if(products !==null && products.length >0){
      xhml = products.map((product,index)=>{
        return <ProductItem key={index} product={product} index={index}/>
      })
    }
    return xhml
  }
}
  
const mapStateToProps = (state) =>{
  return {
    products:state.products
  }
}


export default connect(mapStateToProps,null)(Product)




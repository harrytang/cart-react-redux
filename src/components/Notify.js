import React,{Component}from 'react';
import {connect} from 'react-redux';
class Notify extends Component {
render(){
return (
<div>
  <h3>
  <span className="badge amber darken-2">
    {this.props.notify}
  </span>
  </h3>
</div>
)
}
}
const mapStateToProps = (state) =>{
return {
notify:state.notify
}
}
export default connect(mapStateToProps,null)(Notify)
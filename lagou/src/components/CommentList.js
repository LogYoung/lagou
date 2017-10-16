
import React,{Component} from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component {
	constructor(){
		super()
	}
	render(){
		//console.log(this.props.list);
		let {list,onDelete} = this.props;

		var lis = list.map((elem,index)=>{
			return <CommentItem item = {elem} key={index} onDelete={onDelete} />
		})

		return (
			  <ul className="welcome">
                  {lis}
			  </ul>
			)
	}
}

export default CommentList
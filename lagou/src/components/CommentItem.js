
import React,{Component} from 'react';

class CommentItem extends Component {
	constructor(){
		super();
		this.handleDelete =this.handleDelete.bind(this);
	}
	render(){
		var {item} = this.props;
		return (
			   <li className="list-group-item">
                   <h4 className="list-group-item-heading">{item.title}</h4>
                   <p className="list-group-item-text">{item.detail}</p>
                   <button data-id = {item.id} onClick={this.handleDelete} className="btn btn-success">删除</button>
			   </li>
			)
	}
	handleDelete(e){
         this.props.onDelete(e.target.dataset.id)
	}
}

export default CommentItem
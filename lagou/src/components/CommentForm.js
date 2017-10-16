import React,{Component} from 'react';

class CommentForm extends Component {
	constructor(){
		super();
		this.state = {
			title:"",
			detail:""
		}
		this.handleTitle = this.handleTitle.bind(this);
		this.handleDetail = this.handleDetail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render(){
		return (
			   <div>
				  <div className="form-group">
				    <label htmlFor="exampleInputEmail1">主题</label>
				    <input type="text" value={this.state.title} onChange={this.handleTitle} className="form-control" id="exampleInputEmail1" placeholder="输入..." />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">内容</label>
				    <textarea  value={this.state.detail} onChange={this.handleDetail} className="form-control" id="exampleInputPassword1" placeholder="请输入..." />
				  </div>
				  <button onClick={this.handleSubmit} className="btn btn-default">提交</button>
			   </div>
			)
	}
	handleTitle(e){
       this.setState({
       	  title:e.target.value.trim()
       })
	}
	handleDetail(e){
       this.setState({
       	  detail:e.target.value.trim()
       })
	}
	handleSubmit(){ //

        this.props.onFormSubmit({...this.state, id : new Date().getTime() + ''});
        this.setState({
       	  detail:"",
       	  title:""
       })
	}
}

export default CommentForm
/*controlled comp. : controlled by state*/
import React from "react";
import './index.css';
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
console.log( this.state.value);   
   event.preventDefault();
   this.setState({value: ''});


    }
  
    render() {
      return (






        
        <form onSubmit={this.handleSubmit}>
          
           
       
       
            <div class="form-group  ">
  
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"  cols="80"        placeholder="Write what you think"  type="text" value={this.state.value} onChange={this.handleChange}></textarea>  <br></br>
       
       
        <button  type="submit"  class="btn btn-primary  p">   Add Post  </button>

  </div>
       
       
       
      
        </form>
      );
    }
  }

  export default Form
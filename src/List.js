import React from "react";
import './index.css';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'rrrrrrrrrrrrrrrrrrrrrrrr', show: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log('liked');
    event.preventDefault();
  }
  setShow(event) {
    console.log('liked');
    event.preventDefault();
  }


  data = () => { this.setState({ show: true }) }


  render() {
    return (
      <ul className="list-group" >
        <li className="list-group-item shadow p-3 mb-5 bg-white rounded">{this.state.value}</li>
        <div className="button-box col-lg-12">
          <button onClick={this.handleSubmit} type="button" className="btn btn-info" >Like</button>
          <button onClick={this.data} className="btn btn-info comment" >comment</button>
        </div>


        {
          this.state.show ? (
            <form> <div>
              <input type="text" className="form-control" id="formGroupExampleInput" nKeyPress={this._handleKeyPress}     placeholder="Write a comment..." />
            
              <ul className="list-group" >
                <li className="list-group-item shadow p-3 mb-5 bg-white rounded">{this.state.value}</li>
                <li className="list-group-item shadow p-3 mb-5 bg-white rounded">{this.state.value}</li>
              </ul>


            </div>
            </form>) :
            null

        }



      </ul>



    );
  }
}

export default List
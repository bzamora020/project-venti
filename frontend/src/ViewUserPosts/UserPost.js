import React from 'react';

class UserPost extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            homeData: null
        }
    }

    componentDidMount(){
        fetch('/api/user/getHome', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
          })
          .then((resp)=>{
            return resp.json();
          })
          .then((data)=>{
            console.log(data);
            this.setState({
                homeData: data
            })
          })
          .catch((error)=>{
            console.error(error);
          })
    }

    render(){
        return(
            <div>
                <h1></h1>
                <p>{this.props.header}</p>
                <p>{this.props.comment}</p>
            </div>
        )
    }

}

export default UserPost;
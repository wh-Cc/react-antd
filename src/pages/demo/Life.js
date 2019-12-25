import React,{Component} from 'react';
import Child from './Child';
import {Button} from 'antd';
import './index.less';




class Life extends Component{

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    handleAdd=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

    render() {
        return (
            <div className='content'>
                <p>this is Life</p>
                <p> {this.state.count} </p>
                <Button onClick={this.handleAdd}> count + 1 </Button>
                <Child></Child>
            </div>
        )
    }
}

export default Life;
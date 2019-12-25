import React,{Component} from 'react';
import {Card,Button,Modal} from 'antd';
import './../style/ui.less';
import './index.less'

class Modals extends Component{
  state = {
    handleOpen1: false,
    handleOpen2: false,
    handleOpen3: false,
    handleOpen4: false,
    modal1Visible:false
  };
  
  handleOpen(type){
    this.setState({ 
      [type]: true,
    });
  }


  handelConfirm(type){
    Modal[type]({
      title:'确定?',
      content:'你确定？',
      onOk(){
        console.log('ok')
      },
      onCancel(){
        console.log('cancel')
      }
    })
  }

  render(){
    
    return(
      <div>
        <Card title='基础提示框'>
          <Button type="primary"  onClick={() => this.handleOpen('handleOpen1')}>Open</Button>
          <Modal
            title="Modal"
            visible={this.state.handleOpen1}
            onOk={() => {this.setState({handleOpen1:false})}}
            onCancel={() => {this.setState({handleOpen1:false})}}
          >
            <p>class.fun</p>
            <p>等于</p>
            <p>class[fun]</p>
          </Modal>

          <Button type="primary" onClick={() => this.handleOpen('handleOpen2')}>自定义页脚</Button>
          <Modal
            title="自定义页脚"
            visible={this.state.handleOpen2}
            onOk={() => {this.setState({handleOpen2:false})}}
            onCancel={() => {this.setState({handleOpen2:false})}}
            okText="自定义ok"
            cancelText="自定义cancel"
          >
            <p>自定义页脚</p>
          </Modal>
        
          <Button type="primary" onClick={() => this.handleOpen('handleOpen3')}>顶部20px弹框</Button>
          <Modal
            title="顶部20px弹框"
            style={{top:20}}
            visible={this.state.handleOpen3}
            onOk={() => {this.setState({handleOpen3:false})}}
            onCancel={() => {this.setState({handleOpen3:false})}}
          >
            <p>顶部20px弹框</p>
           
          </Modal>
        
          <Button type="primary" onClick={() => this.handleOpen('handleOpen4')}>水平垂直居中</Button>
          <Modal
            title="水平垂直居中"
            wrapClassName="vertical-center-modal"
            visible={this.state.handleOpen4}
            onOk={() => {this.setState({handleOpen4:false})}}
            onCancel={() => {this.setState({handleOpen4:false})}}
          >
            <p>水平垂直居中</p>
          </Modal>
        </Card>

        <Card title='信息确认框'>
          <Button type="primary" onClick={() => this.handelConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handelConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handelConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handelConfirm('warning')}>Warning</Button>
         
        </Card>
      </div>
    )
  }
}

export default Modals;

import React,{Component} from 'react';
import {Card,Button,Icon,Radio} from 'antd';
import './index.less';


const ButtonGroup = Button.Group;


class Buttons extends Component{
  state = {
    loading: true,
    size:'default'
  };

  enterLoading = () => {
    this.setState({ loading: !this.state.loading});
  };
  
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render(){
    const { size } = this.state;
    return(
      <div>
        <Card title='基础按钮'>
          <Button type="primary">wh-Cc</Button>
          <Button>wh-Cc</Button>
          <Button type="dashed">wh-Cc</Button>
          <Button type="danger">wh-Cc</Button>
          <Button disabled>wh-Cc</Button>
        </Card>
        <Card title='图形按钮'>
          <Button type="primary" icon='plus'>创建</Button>
          <Button icon='edit'>编辑</Button>
          <Button icon='delete'>删除</Button>
          <Button shape='circle' icon='search'></Button>
          <Button icon='search'>搜索</Button>
          <Button icon='download'>下载</Button>
        </Card>
        <Card title='Loading 按钮'>
          <Button type="primary" icon='plus' loading={this.state.loading} >确定</Button>
          <Button shape='circle' icon='search' loading={this.state.loading}></Button>
          <Button onClick={this.enterLoading}>点击加载</Button>
        </Card>
        <Card title='按钮组'>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>
        </Card>
        <Card title='按按钮尺寸钮组'>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio value="small">Small</Radio>
            <Radio value="default">Default</Radio>
            <Radio value="large">Large</Radio>
          </Radio.Group>
          <Button type="primary" size={size}>wh-Cc</Button>
          <Button size={size}>wh-Cc</Button>
          <Button type="dashed" size={size}>wh-Cc</Button>
          <Button type="danger" size={size}>wh-Cc</Button>
          <Button disabled size={size}>wh-Cc</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons;

import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import MenuConfig from '../../config/menuConfig';
import { Menu} from 'antd';
import './index.less';

const { SubMenu } = Menu;

class NavLeft extends Component{


    UNSAFE_componentWillMount(){
        const menuTreeNode = this.RenderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    
    //菜单渲染
    RenderMenu = (data) => {
        return data.map(item => {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.RenderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
        })
        
    };


    render(){
        return(
            <div>
                <div className='logo'>
                    <img src='/assets/logo192.png' alt=""/>
                    <h2>React MS</h2>
                </div>

                <Menu
                    mode="inline"
                    theme="dark"
                >
                {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;
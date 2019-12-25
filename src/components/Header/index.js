import React,{Component} from 'react';
import {Row,Col} from 'antd';
import './index.less';
import Util from '../../utils/utils';
import Axios from '../../axios';

class Header extends Component{

    UNSAFE_componentWillMount(){
        this.setState({
            userName:'wh-Cc'
        })
        setInterval(()=>{
            let stsTime =  Util.formateDate(new Date().getTime());
            this.setState({
                stsTime
            })
        },1000)
        this.getWeatherAPIData();
    } 
    
    getWeatherAPIData(){
        let city = encodeURIComponent('北京');
        Axios.Jsonp({
            url:"https://www.tianqiapi.com/api/?version=v1&cityid="+city+"&appid=17691921&appsecret=E85AFYSu"
        }).then((res)=>{
            if(res){
                console.log(res);
                let data = res.data[0];
                console.log(data);
                this.setState({
                    dayWeek: data.week,//白天的天气图片
                    weather: "【"+data.wea+data.tem+"】",//今天天气
                    weathersWd:data.air_tips
                })
            }
        })

    }


    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>{this.state.userName}</span>
                        <a href="/#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col className="weather">
                        <span className="date">{this.state.stsTime}</span>
                        <span className="weather-symbol">{this.state.dayWeek}</span>
                        <span className="weather-detail" title={this.state.weathersWd}>{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
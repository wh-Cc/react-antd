const menuList = [
    {
        title:'首页',
        key:'/admin/home'
    },
    {
        title:'UI',
        key:'./admin/ui',
        children:[
            {
                title:'按钮',
                key:'/admin/ui/buttons',
            },
            {
                title:'弹框',
                key:'/admin/ui/modals',
            },
            {
                title:'Loading',
                key:'/admin/ui/loading',
            },
            {
                title:'通知提醒',
                key:'/admin/ui/notification',
            },
            {
                title:'全局Message',
                key:'/admin/ui/message',
            },
            {
                title:'Tab页签',
                key:'/admin/ui/tabs',
            },
            {
                title:'图片画廊',
                key:'/admin/ui/gallery',
            },
            {
                title:'轮播图',
                key:'/admin/ui/carousel',
            }
        ]
    },
    {
        title:'表单',
        key:'/admin/form',
        children:[
            {
                title:'登录',
                key:'/admin/form/login',
            },
            {
                title:'注册',
                key:'/admin/form/reg',
            },
        ]
    },
    {
        title:'表单',
        key:'/admin/table',
        children:[
            {
               title:'基础表格',
               ley:'/admin/table/basic', 
            },
            {
                title:'高级表格',
                ley:'/admin/table/high', 
            },
        ]
    },
    {
        title:'富文本',
        ley:'/admin/rich', 
    },
    {
        title:'城市管理',
        ley:'/admin/city', 
    },
    {
        title:'订单管理',
        ley:'/admin/order', 
        btnList:[
            {
                title:'订单详情',
                ley:'detail', 
            },
            {
                title:'结束订单',
                ley:'finish', 
            },
        ]
    },
    {
        title:'员工管理',
        ley:'/admin/user', 
    },
    {
        title:'车辆地图',
        ley:'/admin/bikeMap', 
    },
    {
        title:'图标',
        ley:'/admin/charts', 
        children:[
            {
                title:'柱形图',
                ley:'/admin/charts/bar', 
            },
            {
                title:'饼图',
                ley:'/admin/charts/pie', 
            },
            {
                title:'折线图',
                ley:'/admin/charts/Line', 
            },
        ]
    },
    {
        title:'权限设置',
        key:'admin/permission'
    },
    
];
export default menuList; 
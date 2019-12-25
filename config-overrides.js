
const { 
  override,
  addLessLoader, // less配置函数
  fixBabelImports // 按需加载配置函数
} = require('customize-cra')
 
module.exports = override(
  addLessLoader({        
    javascriptEnabled: true,        
    modifyVars: { 
        '@primary-color': '#1DA57A' 
    }    
  }),
  fixBabelImports('import', { // antd 按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)

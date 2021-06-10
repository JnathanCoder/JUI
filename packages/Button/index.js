
// 导入组件，组件必须声明 name
import JButton from './src'

// 为组件提供 install 安装方法，供按需引入
JButton.install = (Vue) => {
    Vue.component(JButton.name, JButton)
}

// 导出组件
export default JButton 
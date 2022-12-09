import DefaultTheme from 'vitepress/theme'
import './style/code.css'
import './style/overrides.css'
import 'uno.css'
import { Theme } from 'vitepress'
// import DataVVue3Plugin from '@heroes2016/yike'
import DataVVue3Plugin from '../../../../yike/index'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(DataVVue3Plugin)
  }
}

export default theme

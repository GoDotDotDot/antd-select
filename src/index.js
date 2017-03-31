import React from 'react'
import {render} from 'react-dom'

import {Form, Button} from 'antd'
import SearchForm from './form.jsx'
import SelectTest from './select.jsx'
import SelectDemo from './select1'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.changeData_1 = this.changeData_1.bind(this)
    this.changeData_2 = this.changeData_2.bind(this)
    this.state = {
      form: [
        {
          value: 'rmb',
          text: '人民币'
        },
        {
          value: '$',
          text: '美元'
        }
      ]
    }
  }
  changeData_1 () {
    const changeDta = [
      {
        value: 'zh-cn',
        text: '中文'
      },
      {
        value: 'en',
        text: '英文'
      }
    ]
    this.setState({form: changeDta})
  }
  changeData_2 () {
    const changeDta = [
      {
        value: 'rmb',
        text: '人民币'
      },
      {
        value: '$',
        text: '美元'
      }
    ]
    this.setState({form: changeDta})
  }
  render () {
    return (
      <div>
        <Button onClick={this.changeData_1}>Data-1</Button>
        <Button onClick={this.changeData_2}>Data-2</Button>
        <hr />
        <SelectDemo data={this.state.form} />
      </div >
    )
  }
}

render(
  <App />, document.getElementById('root'))

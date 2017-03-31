import React from 'react'
import { Form, Button, DatePicker, Select } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
const dateFormat = 'YYYY/MM/DD'
const FormItem = Form.Item
const {Option} = Select

class SearchForm extends React.Component {
  constructor (props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const type = this.props.data
    return (
      <Form ref='form' onSubmit={this.handleSubmit} className='search-form' layout='inline' style={{ display: 'inline-block' }}>
        <FormItem label='类型'>
          {
            getFieldDecorator('type', {
              rules: [{ required: true, message: '请选择类型！' }],
              initialValue: type[0].value
            })(
              <Select style={{ width: 120 }} onChange={function (value) { console.log('onChange:' + value) }}>
                {
                        type.map((item, index) => <Option key={index} value={item.value}>{item.text}</Option>)
                    }
              </Select>
            )}
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit' className='login-form-button' icon='search'>查询</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrapedSearchForm = Form.create()(SearchForm)
export default WrapedSearchForm

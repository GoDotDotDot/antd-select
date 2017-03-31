import { Select } from 'antd'
import React from 'react'
const Option = Select.Option

// class SelectDemo extends React.Component {
//   render () {
//     const opt = this.props.data.map((item, index) => <Option key={index} value={item.value}>{item.text}</Option>)
//     return (
//       <div>
//         <Select style={{ width: 90 }} defaultValue={this.props.data[0].value} >
//           {opt}
//         </Select>
//       </div>
//     )
//   }
// }

const SelectDemo = (props) => {
  const opt = props.data.map((item, index) => <Option key={index} value={item.value}>{item.text}</Option>)
  return (
    <div>
        <Select style={{ width: 90 }} defaultValue={props.data[0].value} >
          {opt}
        </Select>
      </div>
  )
}

export default SelectDemo

// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  withdraw = () => {
    const {value, withdrawAmount} = this.props
    withdrawAmount(value)
  }

  render() {
    const {value} = this.props
    return (
      <li>
        <button className="button" type="button" onClick={this.withdraw}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem

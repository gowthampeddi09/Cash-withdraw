// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="cash-withdrawal-card">
          <div className="user-profile-container">
            <div className="profile-first-letter-container">
              <h1 className="first-letter">S</h1>
            </div>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="sub-heading">Your Balance</p>
            <p className="amount">{amount}</p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sub-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-list">
            {denominationsList.map(eachButton => (
              <DenominationItem
                value={eachButton.value}
                key={eachButton.id}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal

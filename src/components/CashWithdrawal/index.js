import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onCutAmount = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-bg">
        <div className="sub-div">
          <div className="profile">
            <div className="profile-div">S</div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-div">
            <p className="para">Your Balance</p>
            <div>
              <p className="balance-para">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-para">Withdraw</p>
          <p className="choose-para">Choose SUM (IN RUPEES)</p>
          <ul className="list-items">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                onCutAmount={this.onCutAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

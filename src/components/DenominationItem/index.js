import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onCutAmount} = props
  const {value, id} = denominationDetails

  const onCut = () => {
    onCutAmount(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onCut}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

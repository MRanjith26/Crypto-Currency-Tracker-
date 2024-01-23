// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="coin-values">
        <p className="price">{usdValue}</p>
        <p className="price">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

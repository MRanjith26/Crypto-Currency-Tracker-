// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem/index'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updateCryptoData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoData: updateCryptoData, isLoading: false})
  }

  renderCryptoListData = () => {
    const {cryptoData} = this.state

    return (
      <ul className="crypto-list-container">
        <li className="crypto-head">
          <p className="head">Coin Type</p>
          <div className="coin-values">
            <p className="values">USD</p>
            <p className="values">EURO</p>
          </div>
        </li>
        {cryptoData.map(eachData => (
          <CryptocurrencyItem cryptoDetails={eachData} key={eachData.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="list-container">
        <h1 className="list-title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="main-img"
        />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoListData()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList

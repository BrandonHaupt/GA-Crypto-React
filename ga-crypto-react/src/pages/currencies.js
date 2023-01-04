import { Link } from "react-router-dom"

export default function Currencies(props) {

    const currencies = [
        {name: "Bitcoin", symbol: "BTC"},
        {name: "Litecoin", symbol: "LTC"},
        {name: "Ethereum", symbol: "ETH"},
        {name: "Etherum Classic", symbol: "ETC"},
        {name: "Stellar Lumens", symbol: "XLM"},
        {name: "Dash", symbol: "DASH"},
        {name: "Ripple", symbol: "XRP"},
        {name: "ZCash", symbol: "ZEC"},
    ]


    return(
        <div className="currencies">
            {currencies.map((coin) => {
                const {name, symbol} = coin
                return(<Link to={`/price/${symbol}`}>
                    <h2>{name}</h2>
                </Link>)
            })}
        </div>
    )

}

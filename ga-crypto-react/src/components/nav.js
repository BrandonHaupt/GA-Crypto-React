import { Link } from "react-router-dom";

export default function Nav(props){

    return(
        <div className="nav">
            {/* Links are still a href tags */}
            <Link to="/"> 
                <div>Crypto Prices</div>
            </Link>
            <Link to='/currencies'>
                <div>Currencies</div>
            </Link>
        </div>
    )

}
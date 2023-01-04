import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";
import { priceLoader } from "./loader";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route path="" element={<Main/>} />
            <Route path="currencies" element={<Currencies/>} />
            <Route path="price/:symbol" element={<Price/>} loader={priceLoader}/>
        </Route>
    )
);

export default router;


// Same as lines 7-15

// This is just to show we should write it
// Without the createRoutesFromElements Method

// createBrowserRouter([
//     {
//         path: "/",
//         element: <App />
//         children: [
//               path: ""
//               element: <Main />
//           ]
//     }
// ])


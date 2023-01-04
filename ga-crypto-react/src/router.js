import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<h1>Hello World</h1>}
        >
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
//         element= <h1>Hello World</h1> 
//     }
// ])


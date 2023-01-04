
export const priceLoader = async ({ params }) => {

    console.log(params)
    const symbol = params.symbol;
    const apiKey = "BFB4B0B7-3932-46B0-A53D-9084198F2858"
    
    return (await fetch(
        `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
    )).json();
};

    
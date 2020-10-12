const SendTransaction = async objectTransaction => {
    const getFetch = await fetch(`${process.env.API_PATH}/v1/product/transaction`, {
        body: JSON.stringify(objectTransaction),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    const resFetch = await getFetch.json();
    return resFetch
}

export default SendTransaction;
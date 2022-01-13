import axios from "axios";

const SendTransaction = async (objectTransaction, cookies) => {
    const getFetch = await axios.post(`${process.env.API_PATH}/v1/product/transaction`, 
        objectTransaction,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'token': cookies?.user?.token
            }
        }
    );
    const resFetch = await getFetch.data;
    return resFetch
}

export default SendTransaction;
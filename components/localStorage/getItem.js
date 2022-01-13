const GetItem = ( itemName ) => {
   return (typeof window !== 'undefined' && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {})
}

export default GetItem
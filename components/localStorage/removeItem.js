const RemoveItem = ( itemName ) => {
   localStorage.removeItem(itemName)
   return true
}

export default RemoveItem
class Order {
  
  constructor(obj) {
   
    store.order = store.order || []    
    store.order.push(obj)
    store.save()
    console.log('yep', store.order)
  }
  

}


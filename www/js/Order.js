class Order {

  constructor(obj) {
   
    store.obj = store.obj || []    
    store.obj.push(obj)
    console.log('yep', store.obj)
  }
  

}


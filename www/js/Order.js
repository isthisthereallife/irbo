class Order {

  constructor(obj) {
   
    store.obj = store.obj || []    
    store.obj.push(obj)
    store.save()
    console.log('yep', store.obj)
  }
  

}


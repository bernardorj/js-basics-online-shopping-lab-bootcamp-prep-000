var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let cartObj = {};
  let price = Math.floor(Math.random()*100);
  cartObj[item] = price;

  cart.push(cartObj);

  console.log(`${item} has been added to your cart.`)
  return cart

}

function viewCart() {
  //FOR NO ITEMS IN CART
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')

//FOR 1 ITEM IN CART
  } else if (cart.length === 1) {
    let itemName = Object.keys(cart[0]);
    let price = Object.keys(cart[0]).map(function(e) {
      return cart[0][e]
    });
    console.log(`In your cart, you have ${itemName} at $${price}.`)

//FOR 2 ITEMS IN CART
  } else if (cart.length === 2) {
    let item1 = [];
    let item2 = [];

    for (let i=0; i<cart.length; i++){
      if (i===0){
        let itemName = Object.keys(cart[i]);
        let price = Object.keys(cart[i]).map(function(e) {
          return cart[i][e]
        });
        item1.push(`${itemName} at $${price}`);
      } else if (i===1){
        let itemName = Object.keys(cart[i]);
        let price = Object.keys(cart[i]).map(function(e) {
          return cart[i][e]
        });
        item2.push(`${itemName} at $${price}`)
      }
      console.log(`In your cart, you have ${item1} and ${item2}.`)
    }

//FOR 3 ITEMS IN CART
    } else if (cart.length = 3) {
      let item1 = [];
      let item2 = [];
      let item3 = [];

      for (let i=0; i<cart.length; i++) {
        if (i===0){
          let itemName = Object.keys(cart[i]);
          let price = Object.keys(cart[i]).map(function(e){
            return cart[i][e]
          });
          item1.push(`${itemName} at $${price}`);

        } else if (i===1){
          let itemName = Object.keys(cart[i]);
          let price = Object.keys(cart[i]).map(function(e){
            return cart[i][e]
          });
          item2.push(`${itemName} at $${price}`);

        } else if (i===2){
          let itemName = Object.keys(cart[i]);
          let price = Object.keys(cart[i]).map(function(e){
            return cart[i][e]
          });
          item3.push(`${itemName} at $${price}`);
        }
      }
      console.log(`In your cart, you have ${item1}, ${item2}, and ${item3}.`)

    //FOR 3+ ITEMS IN CART
        } else if (cart.length > 3) {
          let item1 = [];
          let item2 = [];
          let item3 = [];
          let item4 = [];

          for (let i=0; i<cart.length; i++) {
            if (i===0){
              let itemName = Object.keys(cart[i]);
              let price = Object.keys(cart[i]).map(function(e){
                return cart[i][e]
              });
              item1.push(`${itemName} at $${price}`);

            } else if (i===1){
              let itemName = Object.keys(cart[i]);
              let price = Object.keys(cart[i]).map(function(e){
                return cart[i][e]
              });
              item2.push(`${itemName} at $${price}`);

            } else if (i===2){
              let itemName = Object.keys(cart[i]);
              let price = Object.keys(cart[i]).map(function(e){
                return cart[i][e]
              });
              item3.push(`${itemName} at $${price}`);
            } else if (i===3){
              let itemName = Object.keys(cart[i]);
              let price = Object.keys(cart[i]).map(function(e){
                return cart[i][e]
              });
              item4.push(`${itemName} at $${price}`);
          }
        }
        console.log(`In your cart, you have ${item1}, ${item2}, ${item3}, and ${item4}.`)
      }
  } //this one closes the entire function

function total() {
  for (let i = 0; i < cart.length; i++){

  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

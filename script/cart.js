


var cartItems = JSON.parse(localStorage.getItem("cart_data")) || [];

if (cartItems.length == 0) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = "images/empty-cart-icon.svg";
  let h3 = document.createElement("h3");
  h3.textContent = "Oops!";
  let p = document.createElement("p");
  p.textContent = "Looks like there is no item in your cart yet.";
  let m_button = document.createElement("button");
  m_button.id = "add_medicines";
  m_button.innerText = "ADD MEDICINES";
  m_button.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  div.append(img, h3, p, m_button);
  div.style.textAlign = "center";
  div.style.margin = "auto";
  img.id = "empty_img";
  let a = document.getElementById("container");
  a.innerHTML = "";
  a.append(div);
} 
else {
  let a = document.getElementById("cart_items");
  let c = document.getElementById("cart_total");

  let total_price = 0;
  let total_discount = 0;
  let total_d = 0;
  function displayArr(cartItems) {
    cartItems.map((element,index) => {
      let count = 1;
      let b = document.createElement("div");
      b.style.display = "flex";
      let { mrp, price } = element;
      let temp = document.createElement("div");
      let temp1 = document.createElement("div");
      temp.style.width = "50%";
      temp1.style.width = "50%";
      temp1.style.textAlign = "right";
      let h2 = document.createElement("h3");
      h2.innerText = element.name;

      let price_h2 = document.createElement("h3");
      price_h2.innerText = `Rs. ${price}`;

      let org_price = document.createElement("h5");
      org_price.id = "dsc_prc";
      org_price.innerText = `Rs. ${mrp}`;

    
       let cnt = document.createElement("span");

       cnt.innerText="1"
      cnt.id="cnt"
      let qty = document.createElement("p");
      qty.innerText = element.quantity;

      let plus = document.createElement("button");
      plus.innerText = "+";
      plus.id = "plus";//for style
      plus.addEventListener("click", function () {
      count++;
        price_h2.innerText = `Rs. ${+price  * count}`;
        cnt.innerText = count;
        total_price = +price * count;
        total_discount = +mrp * count;
      
        location.reload;
      });
      let minus = document.createElement("button");
      minus.innerText = "-";
       minus.id = "minus";
       minus.addEventListener("click", function () {
       
        count--;
        price_h2.innerText = `Rs. ${price * count}`;
        cnt.innerText = count;
        total_price = price * count;
        total_discount = mrp * count;
        location.reload;

      });

    let del = document.createElement("button");
      del.innerText = "Remove";
      del.id = "del";

      del.addEventListener("click", function (index) {
        cartItems.splice(index, 1);
        // count--;
        localStorage.setItem("cart_data", JSON.stringify(cartItems));
        displayArr(cartItems);
        location.reload();
      });
      
      
    temp.append(h2, qty, del);

      temp1.append(price_h2, org_price,minus,cnt,plus);
      b.append(temp, temp1);
      a.append(b);


       total_price += +mrp;
       total_discount += +price;
    });
    total_d = total_discount + 10;
    document.getElementById("itm_total").innerText = total_price;
    document.getElementById("ttl_dsc1").innerText =
      total_price - total_discount;
    document.getElementById("ttl_dsc").innerText =
      total_price - total_discount;
    document.getElementById("ttl").innerText = total_d;
    let price_arr = [];
    price_arr.push(total_price, total_discount, total_d);
    localStorage.setItem("price_data", JSON.stringify(price_arr));
  }
}



displayArr(cartItems);
document.getElementById("chkout").addEventListener("click", function () {
  let user_login = JSON.parse(localStorage.getItem("user_login"));
  if(user_login==true){
    window.location.href = "address.html"; 
  }else{
    window.location.href = "address.html"; 
  }
  
});
document.querySelector("#mg_home").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.querySelector("#need_help").addEventListener("click", () => {
  window.location.href = "NeedHelp.html";
});
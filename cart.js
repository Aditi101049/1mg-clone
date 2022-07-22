var cartItemsArr = JSON.parse(localStorage.getItem("cart_data")) || [];

if (cartItemsArr.length == 0) {
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
} else {
  let a = document.getElementById("cart_items");
  let c = document.getElementById("cart_total");

  let total_price = 0;
  let total_discount = 0;
  let total_d = 0;
  function displayArr(cartItemsArr) {
    cartItemsArr.map((element) => {
      let count = 1;
      let b = document.createElement("div");
      b.style.display = "flex";
      let { name, quantity, mrp, price } = element;
      let temp = document.createElement("div");
      let temp1 = document.createElement("div");
      temp.style.width = "50%";
      temp1.style.width = "50%";
      temp1.style.textAlign = "right";
      let h2 = document.createElement("h3");
      let price_h2 = document.createElement("h3");
      let org_price = document.createElement("h5");
      org_price.id = "dsc_prc";
      let cnt = document.createElement("span");
      let qty = document.createElement("p");
      let plus = document.createElement("button");
      let minus = document.createElement("button");
      let del = document.createElement("button");
      del.addEventListener("click", function (index) {
        cartItemsArr.splice(index, 1);
        // count--;
        localStorage.setItem("cart_data", JSON.stringify(cartItemsArr));
        displayArr(cartItemsArr);
        location.reload();
      });
      plus.addEventListener("click", function () {
        let arr = JSON.parse(localStorage.getItem("cart_data"));
        count++;
        price_h2.innerText = `Rs. ${+price * count}`;
        cnt.innerText = count;
        total_price = +price * count;
        total_discount = +mrp * count;
        // displayArr(cartItemsArr);
        location.reload;
      });

      plus.innerText = "+";
      minus.innerText = "-";
    
      plus.id = "plus";
      minus.id = "minus";
      del.id = "del";
      del.innerText = "Remove";
      price_h2.innerText = `Rs. ${price}`;
      org_price.innerText = `Rs. ${mrp}`;
      h2.innerText = name;
      qty.innerText = quantity;
      temp.append(h2, qty, del);

      temp1.append(price_h2, org_price,minus,plus);
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

document.getElementById("chkout").addEventListener("click", function () {
  let user_login = JSON.parse(localStorage.getItem("user_login"));
  if(user_login==true){
    window.location.href = "address.html"; 
  }else{
    alert('Please login In first');
    window.location.href = "login.html";
  }
  
});
document.querySelector("#mg_home").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.querySelector("#need_help").addEventListener("click", () => {
  window.location.href = "NeedHelp.html";
});

displayArr(cartItemsArr);

multi();
async function multi(){
  try{
      
       let res= await fetch("https://tata1mg.herokuapp.com/products/ayurved?page=1&size=7")

       let data= await res.json();
      displaymg(data);
  }
  catch(e){
      console.log("err:",e);
  }
  }
function displaymg(mg_data) {
  mg_data.map(function (ele) {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);
    img.setAttribute("class", "proClass");
    let name_div = document.createElement("div");
    name_div.setAttribute("class", "name_div");
    let name = document.createElement("h2");
    name.textContent = ele.name;
    name_div.append(name);
    name.setAttribute("class", "proname");
    let quantity = document.createElement("p");
    quantity.textContent = ele.prd_highlight;
    quantity.setAttribute("class", "quantity");
    let rating_div = document.createElement("div");
    rating_div.setAttribute("class", "div5");
    let rating = document.createElement("p");
    rating.textContent = `${ele.rating}★`;
    rating.setAttribute("class", "rating");
    rating_div.append(rating);
    let mrp = document.createElement("p");
    let span2 = document.createElement("span");
    span2.textContent = `MRP ₹${ele.mrp}`;
    span2.setAttribute("class", "mrp");
    let span = document.createElement("span");
    span.innerText = `${ele.discount}%off`;
    mrp.append(span2, span);
    // var discount=document.createElement("p");
    // discount.textContent=;
    span.setAttribute("class", "dis");
    let price = document.createElement("p");
    price.textContent = "₹" + ele.price;
    price.setAttribute("class", "price");

    div1.append(img, name_div, quantity);

    document.querySelector("#mg").append(div1);
  });
}

multinext();
async function multinext(){
  try{
      
       let res= await fetch("https://tata1mg.herokuapp.com/products/ayurved?page=2&size=7")

       let data= await res.json();
       displaypre(data);
  }
  catch(e){
      console.log("err:",e);
  }
  }

function displaypre(pre_data) {
  pre_data.map(function (ele) {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);
    img.setAttribute("class", "pre_img");
    let name_div = document.createElement("div");
    name_div.setAttribute("class", "name_div");
    let name = document.createElement("h2");
    name.textContent = ele.name;
    name_div.append(name);
    name.setAttribute("class", "proname");

    
    let quantity = document.createElement("p");
    quantity.textContent = ele.prd_highlight;
    quantity.setAttribute("class", "quantity");
    let rating_div = document.createElement("div");
    rating_div.setAttribute("class", "div5");
    let rating = document.createElement("p");
    rating.textContent = `${ele.rating}★`;
    rating.setAttribute("class", "rating");
    rating_div.append(rating);
    let mrp = document.createElement("p");
    let span2 = document.createElement("span");
    span2.textContent = `MRP ₹${ele.mrp}`;
    span2.setAttribute("class", "mrp");
    let span = document.createElement("span");
    span.innerText = `${ele.discount}%off`;
    mrp.append(span2, span);
    // var discount=document.createElement("p");
    // discount.textContent=;
    span.setAttribute("class", "dis");
    let price = document.createElement("p");
    price.textContent = "₹" + ele.price;
    price.setAttribute("class", "price");

    div1.append(img, name_div, quantity);

    document.querySelector("#sup").append(div1);
  });
}
import navbar_top from "../components/navbar.js";

document.querySelector("#main").innerHTML = navbar_top();
let id;
document
  .querySelector("#query")
  .addEventListener("input",()=>{
    debounce(main(), 1000)
  });

async function main() {
  let data = await getdata();
  apend(data);
}

async function getdata() {
  let query = document.querySelector("#query").value;
  if (query === "") {
    document.querySelector("#r_res").innerHTML = "";
  } else {
    const url = `https://tata1mg.herokuapp.com/products?s=${query}&size=10`;

    let res = await fetch(url);
    let data = await res.json();
    return data;
  }

}

function apend(data) {
  let r_res = document.querySelector("#r_res");
  r_res.innerHTML = "";
  let r_drop = document.createElement("div");
  r_drop.setAttribute("id", "r_drop");
  r_drop.innerHTML = null;
  data.forEach(function (el) {
    let div = document.createElement("div");
    div.onclick = () => {
      saveresult(el);
    };

    let name = document.createElement("p");
    name.innerText = el.name;

    div.append(name);
    r_drop.append(div);
    r_res.append(r_drop);
  });
}
function saveresult(data) {
  localStorage.setItem("result", JSON.stringify(data));
  window.location.href = "";
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
}

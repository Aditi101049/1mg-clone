var slideIndex = 1;

var myTimer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 3000);
});

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 3000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 3000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 3000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 3000);
};

var otp = 123456;
document.getElementById("login_span").addEventListener("click", function () {
  let a = document.getElementById("account_1");
  let b = document.getElementById("account_2");
  let c = document.getElementById("verify_otp");
  let d = document.getElementById("email_id_new");
  a.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  b.style.display = "block";
});

document.getElementById("signup_span").addEventListener("click", function () {
  let a = document.getElementById("account_2");
  let b = document.getElementById("account_1");
  let c = document.getElementById("verify_otp");
  let d = document.getElementById("email_id_new");
  a.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  b.style.display = "block";
});

document.getElementById("edit_button").addEventListener("click", function () {
  let a = document.getElementById("account_2");
  let b = document.getElementById("account_1");
  let c = document.getElementById("verify_otp");
  let d = document.getElementById("email_id_new");
  a.style.display = "none";
  b.style.display = "block";
  d.style.display = "none";
  c.style.display = "none";
});

document
  .getElementById("account_continue")
  .addEventListener("click", function () {
    let number = document.getElementById("mobile_number").value;
    let string = number.toString();
    
    if (string.length != 10) {
      document.getElementById("account_invalid_num").style.display = "block";
      document.getElementById("account_continue").style.marginTop = "20px";
    } else {
     
      document.getElementById("user_mobile").textContent = number;
      let a = document.getElementById("account_2");
      let b = document.getElementById("account_1");
      let c = document.getElementById("verify_otp");
      let d = document.getElementById("email_id_new");
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "block";
      d.style.display = "none";
      document.getElementById("account_invalid_num").style.display = "none";
      document.getElementById("account_continue").style.marginTop = "70px";
    }
  });

document
  .getElementById("login_button-1")
  .addEventListener("click", function () {
    let number = document.getElementById("login_mobile_number").value;
    let string = number.toString();
    
    if (string.length != 10) {
      document.getElementById("login_invalid_num").style.display = "block";
      document.getElementById("login_button-1").style.marginTop = "20px";
    } else {
    
      document.getElementById("user_mobile").textContent = number;
      let a = document.getElementById("account_2");
      let b = document.getElementById("account_1");
      let c = document.getElementById("verify_otp");
      let d = document.getElementById("email_id_new");
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "block";
      d.style.display = "none";
      document.getElementById("login_invalid_num").style.display = "none";
      document.getElementById("login_button-1").style.marginTop = "70px";
    }
  });

document.getElementById("done").addEventListener("click", function () {

    let a = document.getElementById("account_2");
    let b = document.getElementById("account_1");
    let c = document.getElementById("verify_otp");
    let d = document.getElementById("email_id_new");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    document.getElementById("wrong_otp").style.display = "none";
 // }
});

document
  .getElementById("email_continue")
  .addEventListener("click", function () {
    if (document.getElementById("email_new").value.length == 0) {
      document.getElementById("invalid_email").style.display = "block";
      document.getElementById("email_continue").style.marginTop = "20px";
    } else {
      let f = document.getElementById("email_new").value;

      document.getElementById("invalid_email").style.display = "none";
      document.getElementById("email_continue").style.marginTop = "125px";
    }
  });

 
   // signup
 let register_data;
 async function Register(event){
      try{
          event.preventDefault();
      let register_data={
         mobile:document.querySelector("#mobile_number").value,
         password:document.querySelector("#one_time_p").value,
         email:document.querySelector("#email_new").value,
       };
       register_data=JSON.stringify(register_data);
       //console.log("register_data:",register_data);
       let mobile=document.querySelector("#mobile_number").value;
       let password=document.querySelector("#one_time_p").value;
      if(mobile.length==10&&password.length>=8){
        let reg_api=`https://tata1mg.herokuapp.com/register`
        let response=await fetch(reg_api,{
            method:'POST',
            body:register_data,
            headers:{
                "Content-Type":'application/json',
            },
        })
        let data=await response.json();
        //console.log("data:",data);
        if(data==null){
            alert('Registration failed, user already exists or enter valid 10 digit mobile or valid email');
            window.location.href="signup.html";
        }else{
            alert('Registration Successful,Please login')
            display();
        }
      }else{
        alert('Registration failed, user already exists or enter valid 10 digit mobile or valid email')
        window.location.href="signup.html";
      }
      }catch(err){
          console.log("err:",err);
      }
   }
   function display(){
    window.location.href="login.html";
  }


  //login

  var user_login=JSON.parse(localStorage.getItem("user_login"))||"";
  let login_data;
 async function login(event){
      try{
          event.preventDefault();
       login_data={
         mobile:document.querySelector("#login_mobile_number").value,
         password:document.querySelector("#one_time_p").value,
         email:document.querySelector("#email_new").value,
       };
       login_data=JSON.stringify(login_data);
       //console.log("login_data:",login_data);
       let reg_api=`https://tata1mg.herokuapp.com/register/login`
       let response=await fetch(reg_api,{
           method:'POST',
           body:login_data,
           headers:{
               "Content-Type":'application/json',
           },
       })
       let data=await response.json();
       if(data==null){
           alert('login failed,email or password or mobile is wrong')
           loginpage();
       }else{
           alert('login Successful')
           user_login=true;
           localStorage.setItem("user_login",JSON.stringify(user_login));
           home();
       }
      }catch(err){
          console.log("err:",err);
      }
   }

   function home(){
    window.location.href="index.html";
  }
  function loginpage(){
    window.location.href="login.html";
  }

document.getElementById("otp_sms").addEventListener("click", function () {
  document.getElementById("error").innerHTML =
    "You will soon receive an SMS with the OTP";
  document.getElementById("error").style.color = "green";
});
document.getElementById("otp_call").addEventListener("click", function () {
  document.getElementById("error").innerHTML =
    "You will soon receive an call with the OTP";
  document.getElementById("error").style.color = "green";
});

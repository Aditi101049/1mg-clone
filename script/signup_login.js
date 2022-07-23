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

document.getElementById("signup").addEventListener("click", function () {
  let a = document.getElementById("U_container");
  let b = document.getElementById("account_1");
  a.style.display = "block";
  b.style.display = "block";
});

document.getElementById("login").addEventListener("click", function () {
  let a = document.getElementById("U_container");
  let b = document.getElementById("account_2");
  a.style.display = "block";
  b.style.display = "block";
});
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
    // console.log(string.length);
    if (string.length != 10) {
      document.getElementById("account_invalid_num").style.display = "block";
      document.getElementById("account_continue").style.marginTop = "20px";
    } else {
      localStorage.setItem("mobile_number", JSON.stringify(number));
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

document.getElementById("login_button").addEventListener("click", function () {
  let number = document.getElementById("login_mobile_number").value;
  let string = number.toString();
  // console.log(string.length);
  if (string.length != 10) {
    document.getElementById("login_invalid_num").style.display = "block";
    document.getElementById("login_button").style.marginTop = "20px";
  } else {
    localStorage.setItem("mobile_number", JSON.stringify(number));
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
    document.getElementById("login_button").style.marginTop = "70px";
  }
});

document.getElementById("done").addEventListener("click", function () {
  if (document.getElementById("one_time_p").value != 123456) {
    document.getElementById("wrong_otp").style.display = "block";
    if (document.getElementById("error").style.color == "green") {
      document.getElementById("error").style.color = "red";
      document.getElementById("error").innerHTML =
        "<span class='a_orange' id='otp_sms'>Get OTP on SMS</span> | <span class='a_orange' id='otp_call'>Get OTP on Call</span>";
    }
  } else {
    let a = document.getElementById("account_2");
    let b = document.getElementById("account_1");
    let c = document.getElementById("verify_otp");
    let d = document.getElementById("email_id_new");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    document.getElementById("wrong_otp").style.display = "none";
  }
});

document
  .getElementById("email_continue")
  .addEventListener("click", function () {
    if (document.getElementById("email_new").value.length == 0) {
      document.getElementById("invalid_email").style.display = "block";
      document.getElementById("email_continue").style.marginTop = "20px";
    } else {
      let f = document.getElementById("email_new").value;
      localStorage.setItem("email", JSON.stringify(f));
      let a = document.getElementById("account_2");
      let b = document.getElementById("account_1");
      let c = document.getElementById("verify_otp");
      let d = document.getElementById("email_id_new");
      let e = document.getElementById("U_container");
      a.style.display = "none";
      b.style.display = "block";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      document.getElementById("invalid_email").style.display = "none";
      document.getElementById("email_continue").style.marginTop = "125px";
    }
  });

var close_elements = document.getElementsByClassName("close");
for (let i = 0; i < close_elements.length; i++) {
  close_elements[i].addEventListener("click", function () {
    let a = document.getElementById("account_2");
    let b = document.getElementById("account_1");
    let c = document.getElementById("verify_otp");
    let d = document.getElementById("email_id_new");
    let e = document.getElementById("U_container");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  });
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


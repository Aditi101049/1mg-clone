
document.querySelector("#mg_home").addEventListener("click",() => {
    window.location.href="index.html";
})
document.querySelector("#need_help").addEventListener("click", () => {
    window.location.href="NeedHelp.html";
})


let add_data;
 async function saveAdd(event){
      try{
          event.preventDefault();

          let flag=true;
    let building=document.querySelector("#building_name").value;
    let pin=document.querySelector("#pincode").value;
    let locality=document.querySelector("#locality").value;
    let city=document.querySelector("#city").value;
    let state=document.querySelector("#state").value;
    let customer_name=document.querySelector("#name").value;
    let number=document.querySelector("#mobile").value;

    if(building==""){
        alert('Enter Flat Number,Building Name,Street/Locality');
        flag=false;
    }
    if(pin.length<6){
        alert('Enter valid Pincode');
        flag=false;
    }
    if(locality==""){
        alert('Enter locality');
        flag=false;
    }
    if(city==""){
        alert('Enter city Name');
        flag=false;
    }
    if(state==""){
        alert('Enter state Name');
        flag=false;
    }
    if(customer_name==""){
        alert('Enter customer name');
        flag=false;
    }
    if(number.length<10){
        alert('Enter valid Mobile Number');
        flag=false;
    }
    

       add_data={
        flat_no:document.querySelector("#building_name").value,
        landmark:document.querySelector("#Landmark").value,
        pincode:document.querySelector("#pincode").value,
        locality:document.querySelector("#locality").value,
        city:document.querySelector("#city").value,
        state:document.querySelector("#state").value,
        customer_name:document.querySelector("#name").value,
        mobile:document.querySelector("#mobile").value,
       };
       add_data=JSON.stringify(add_data);
       let api=`https://tata1mg.herokuapp.com/address`
       let response=await fetch(api,{
           method:'POST',
           body:add_data,
           headers:{
               "Content-Type":'application/json',
           },
       })
       let data=await response.json();
       console.log(data);

       if(flag==true){
        window.location.href="payment.html";
      }
      }catch(err){
          console.log("err:",err);
      }
   }
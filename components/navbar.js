let navbar_top=()=>{
    return `        <div id="r_navbar">
    <a href=""><img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt=""></a>
    <div id="r_head_left">
        <a href="">MEDICINE</a>
        <a href="">LAB TEST <div class="r_save">SAFE</div></a>
        <a href="">CONSULT DOCTORS</a>
        <a href="">COVID-19</a>
        <a href="">AYURVEDA</a>
        <a href="">CARE PLAN <div class="r_save">SAVE MORE</div></a>
    </div>
    <div id="r_head_right">
        <div id="r_log_sign">
            <a href="">Login</a>
            <div></div>
            <a href="">Sign Up</a>
        </div>
        <a href="">Offers</a>
        <a id="r_cart_logo" href=""><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt=""></a>
        <a href="">Need Help?</a>
    </div>
</div>
<div id="r_midbar">
<div id="r_left">
  <div id="r_locate">
    <i id="lc" class="fa-solid fa-location-dot"></i>
    <select name="STATE" id="state" required>
      <option value="new delhi">New Delhi</option>
      <option value="andaman and nicobar island">
        ANDAMAN AND NICOBAR ISLAND
      </option>
      <option value="Andhra Pradesh">ANDHRA PRADESH</option>
      <option value="Arunachal Pradesh">ARUNACHAL PRADESH</option>
      <option value="Assam">ASSSAM</option>
      <option value="Bihar">BIHAR</option>
      <option value="Chhattisgarh">CHHATTISGARH</option>
      <option value="Goa">GOA</option>
      <option value="Gujarat">GUJARAT</option>
      <option value="Haryana">HARYANA</option>
      <option value="Himachal Pradesh">HIMACHAL PRADESH</option>
      <option value="Jharkhand">JHARKHAND</option>
      <option value="Karnataka">KARNATAKA</option>
      <option value="Kerala">KERALA</option>
      <option value="Madhya Pradesh">MADHYA PRADESH</option>
      <option value="Maharashtra">MAHARASHTRA</option>
      <option value="Manipur">MANIPUR</option>
      <option value="Meghalaya">MEGHALAYA</option>
      <option value="Mizoram">MIZORAM</option>
      <option value="Nagaland">NAGALAND</option>
      <option value="Odisha">ODISHA</option>
      <option value="Punjab">PUNJAB</option>
      <option value="Rajasthan">RAJASTHAN</option>
      <option value="Sikkim">SIKKIM</option>
      <option value="Tamil Nadu">TAMIL NADU</option>
      <option value="Telangana">TELANGANA</option>
      <option value="Tripura">TRIPURA</option>
      <option value="Uttar Pradesh">UTTAR PRADESH</option>
      <option value="Uttarakhand">UTTARAKHAND</option>
      <option value="West Bengal">WEST BENGAL</option>
    </select>
    <img
      src="https://app.cloudbiz.software/pos/assets/scss/icons/ionicons/png/512/android-locate.png"
      alt=""
    />
  </div>
  <div id="r_search">
    <input

      type="text"
      id="query"
      placeholder="Search for Medicines and Health Products"
    />
    <i
      id="r_magnify"
      onclick="getdata()"
      class="fa-solid fa-magnifying-glass"
    ></i>
  </div>
</div>
<div id="r_right">
  <p>
    <i class="fa-solid fa-bolt"></i> QUICK BUY! Get 25% off on medicines*
  </p>
  <button>Quick Order</button>
</div>
</div>
<div id="r_res"></div>`

}

export default navbar_top
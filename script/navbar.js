let navbar_top=()=>{
    return `        <div id="r_navbar">
    <a href="index.html"><img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt=""></a>
    <div id="r_head_left">
        <a href="index.html">MEDICINE</a>
        <a href="index.html">LAB TEST <div class="r_save">SAFE</div></a>
        <a href="Consult_Doctor.html">CONSULT DOCTORS</a>
        <a href="covid.html">COVID-19</a>
        <a href="ayurved.html">AYURVEDA</a>
        <a href="care1.html">CARE PLAN <div class="r_save">SAVE MORE</div></a>
    </div>
    <div id="r_head_right">
        <div id="r_log_sign">
            <a href="login.html">Login</a>
            <div></div>
            <a href="signup.html">Sign Up</a>
        </div>
        <a href="offers.html">Offers</a>
        <a id="r_cart_logo" href="cart.html"><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt=""></a>
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
<div id="r_res"></div>
<div id="r_drop_part">
<div class="drop">
  Health Resource Center <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">All Diseases</a>
    </ul>
    <ul>
      <a href="#">All Medicines</a>
    </ul>
    <ul>
      <a href="#">Medicines by Therapeutic Class</a>
    </ul>
  </div>
</div>
<div class="drop">
  Vitamins & Nutrients <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Vitamins & Supplements</a>
    </ul>
    <ul>
      <a href="#">Nutritional Drinks</a>
    </ul>
    <ul>
      <a href="#">Health Food & Drinks</a>
    </ul>
    <ul>
      <a href="#">Protein Supplements</a>
    </ul>
    <ul>
      <a href="#">Omega & Fish Oil</a>
    </ul>
    <ul>
      <a href="#">Immutnity Boosters</a>
    </ul>
    <ul>
      <a href="#">Speciality Supplements</a>
    </ul>
    <ul>
      <a href="">Weight Management</a>
    </ul>
  </div>
</div>
<div class="drop">
  Diabetes <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Devices</a>
    </ul>
    <ul>
      <a href="#">Diabetic Medicines</a>
    </ul>
    <ul>
      <a href="#">Sugar Substitutes</a>
    </ul>
    <ul>
      <a href="#">Diabetic Diet</a>
    </ul>
    <ul>
      <a href="#">Diabetic Food Health</a>
    </ul>
  </div>
</div>
<div class="drop">
  Healthcare Devices <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Top brands in Healthcare Devices</a>
    </ul>
    <ul>
      <a href="#">Masks (N95, Surgical and more)</a>
    </ul>
    <ul>
      <a href="#">Oxygen Concentration & Cans</a>
    </ul>
    <ul>
      <a href="#">BP Monitors</a>
    </ul>
    <ul>
      <a href="#">Nebulizers & Vaporizers</a>
    </ul>
    <ul>
      <a href="#">Oximeters & Pedometers</a>
    </ul>
    <ul>
      <a href="#">Vital Signs Monitors & Wearable</a>
    </ul>
    <ul>
      <a href="#">Weighing Scales</a>
    </ul>
    <ul>
      <a href="#">Thermometers</a>
    </ul>
    <ul>
      <a href="#">Body Massager</a>
    </ul>
    <ul>
      <a href="#">Diabetes Monitors</a>
    </ul>
    <ul>
      <a href="#">Mobility Equiments</a>
    </ul>
  </div>
</div>
<div class="drop">
  Personal Care <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Sexual Wellness</a>
    </ul>
    <ul>
      <a href="#">Skin Care</a>
    </ul>
    <ul>
      <a href="#">Body Care</a>
    </ul>
    <ul>
      <a href="#">Hair Care</a>
    </ul>
    <ul>
      <a href="#">Elderly Care</a>
    </ul>
    <ul>
      <a href="#">Women Care</a>
    </ul>
    <ul>
      <a href="#">Men Care</a>
    </ul>
  </div>
</div>
<div class="drop">
  Health Conditions <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Stomach Care</a>
    </ul>
    <ul>
      <a href="#">Hearth Care</a>
    </ul>
    <ul>
      <a href="#">Bone, Joint & Muscel Care</a>
    </ul>
    <ul>
      <a href="#">Pain Relief</a>
    </ul>
    <ul>
      <a href="#">Ear Care</a>
    </ul>
    <ul>
      <a href="#">Eye Care</a>
    </ul>
    <ul>
      <a href="#">Cold & Caugh</a>
    </ul>
    <ul>
      <a href="#">Mental Wellness</a>
    </ul>
    <ul>
      <a href="#">Kidney Care</a>
    </ul>
    <ul>
      <a href="#">Respiratory Care</a>
    </ul>
    <ul>
      <a href="#">Smoking Cessation</a>
    </ul>
  </div>
</div>
<div class="drop">
  Ayurveda Products <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Ayurveda Top Brands</a>
    </ul>
    <ul>
      <a href="#">Popular Categories</a>
    </ul>
    <ul>
      <a href="#">Top Health Concerns</a>
    </ul>
    <ul>
      <a href="#">Unani Medicines</a>
    </ul>
  </div>
</div>
<div class="drop">
  Homeopathy <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Homeopathy Top Brands</a>
    </ul>
    <ul>
      <a href="#">Homeopathy Wellness Combos</a>
    </ul>
    <ul>
      <a href="#">Homeopathy Popular Categories</a>
    </ul>
    <ul>
      <a href="#">Homeopathy Medicines</a>
    </ul>
  </div>
</div>
<div class="drop">
  Featured <i class="fa-solid fa-angle-down"></i>
  <div class="indrop">
    <ul>
      <a href="#">Flash Deals</a>
    </ul>
    <ul>
      <a href="#">Tata 1mg Health Products</a>
    </ul>
    <ul>
      <a href="#">Monsoon Store</a>
    </ul>
    <ul>
      <a href="#">Trending Now</a>
    </ul>
    <ul>
      <a href="#">New Arrivals on Tata !mg</a>
    </ul>
    <ul>
      <a href="#">Buy More, Save More</a>
    </ul>
    <ul>
      <a href="#">Minimum 33% Off</a>
    </ul>
    <ul>
      <a href="#">Popular Combo Deals</a>
    </ul>
    <ul>
      <a href="#">Deals of the Day</a>
    </ul>
    <ul>
      <a href="#">Top Brands</a>
    </ul>
    <ul>
      <a href="#">Super Savings</a>
    </ul>
  </div>
</div>
</div>`

}

export default navbar_top
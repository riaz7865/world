



//Product model create
  
/*  
  product=[
   {'design':'N12',
  ' material':'zins',
  'pattern':'plain',
  'gender':'boys',
   'price':500,
   'image':'https://lh3.googleusercontent.com/aqf5iTj9d80YwwfHaQlPrd6HKO6wVMmFd2nVO1vjENo4aD8MEu8WfKogRe247Yrp0eNU2UuYXr70ep7umiIvHICRDILAUBicTMXVejCcl0xgC49FIpJEuvQShMsEkXFL7xOxQ0BL-g=w600-h315-p-k'},
   
  {'design':'N75',
  ' material':'cotton',
  'pattern':'print',
  'gender':'boys',
   'price':8000,
   'image':'https://lh3.googleusercontent.com/I_a6D-1ZxsPnwHYv4_j_j55Tt4Wk2NhlQIU-Nsw-n8LrLVRjaZyuaFRUlapwdrfwP2RLQtaLZJ2q0SpDy4yzObJI9c_bquZUmGamn6LCVx47aRMf-dkG-r2dSbsWRM8loboF-pU3XQ=w600-h315-p-k'},
  
  {'design':'J66',
  ' material':'mixed-cotton',
  'pattern':'plain',
  'gender':'boys',
  'price':10000,
  'image':'https://lh3.googleusercontent.com/nB5j5jMR87kTiSRwyEgHae8fLIl36vUjb1mqNoBiGCMxT75zuxYezfgMsP7MtGFtq7Aj26_Xc7XOPceTieXhAPv3Gvz0IaMYgDhmvAPspzB31gGUSgyolBTackVesI0Kn5Hu49MlOA=w600-h315-p-k'},
  
  {'design':'J66',
  ' material':'mixed-cotton',
  'pattern':'plain',
  'gender':'boys',
  'price':20000,
  'image':'https://lh3.googleusercontent.com/nln_LVms_f0ynSneJ-q28gz-8WaGenBKJ53cabeW_3q97oXdKH-qIVmMhwA9GdDIVxc0Uf4MUfWwHOiv5oxoQbQJPBsKTAGv_urxkryPRRMtg0h8bvP7bZIC0p7LHZzAFrnk8PFljA=w600-h315-p-k'},
  
  
  {'design':'J66',
  ' material':'mixed-cotton',
  'pattern':'plain',
  'gender':'boys',
  'price':99000,
  'image':'https://lh3.googleusercontent.com/e3I1ZZQY5PCXGcInpvTNuL6oOAf_xf4BVBCIkqjTTHrMdhNpo7_U1aNwZBXIhuflIfZOD1QSC8ICLJSFpHR_BRIU5RnHjxC83EWaewXukxWvjA_GEK8Rr_FKNvWzFbU29PGdYrkVCA=w600-h315-p-k'},
  
  
  {'design':'J66',
  ' material':'mixed-cotton',
  'pattern':'plain',
  'gender':'boys',
  'price':88000,
  'image':'https://lh3.googleusercontent.com/cRUzLzxFRzVe9Buac6gI-_WSCjVIWU0_fp6pjeuN9Kb6A8sVPiEpO7E2Sqd0_kxH4vEPlF4xWkPV4ALmqJZygopH_AYTUeRwZFqr9oPxwuj-E-vvtrKmLLEBl0Vs3rnvkl00fcsrIg=w600-h315-p-k'},
  
  
  

  
  
  ];
  
  */
  
  
  product=[
  {'design':'N12',
  ' material':'zins',
  'pattern':'plain',
  'gender':'boys',
  'price':500,
  'image':'product1.jpg'},
  
  {'design':'N75',
  ' material':'cotton',
  'pattern':'print',
  'gender':'boys',
  'price':8000,
  'image':'product2.jpg'},
  
  {'design':'J66',
  ' material':'mixed-cotton',
  'pattern':'plain',
  'gender':'boys',
  'price':10000,
  'image':'product3.jpg'},
  
  {'design':'J66',
  ' material':'mixed-cotton',
  'pattern':'plain',
  'gender':'boys',
  'price':20000,
  'image':'product4.jpg'},
  
 ] 
  
  
  
 //create function for show product model
  
  function show_product(d,a){
  ln='';
  if(a==0 | a>product.length){
  
  ln=product.length
  
  }else{
  ln=a
  
  }
  
  document.getElementById(d).innerHTML='';
   for(var i=0;i<ln;i++){
   
   document.getElementById(d).innerHTML+=`<div class="col-lg-3 col-md-3 col-sm-3 col-6">
   <div class="  " style="background:#f5f5f5; width:10rem; ">
   
   
   <a onclick="showProductDetails(${i})">
   <div class="card mx-auto my-4" style="width:9rem; height:17rem; color:black;">
   <img src="${product[i]['image']}"class="card-img-top" style="height:170px; margin-bottom:0; padding-bottom:0;"alt="...">
   <div class="card-body py-1 my-0">
   <h5 class="card-title text-center" style="padding-top:15px;padding-bottom:0;margin-0;">    Baba suit  </h5>
   <p class=" text-center" style=" margin:0;padding:0;line-height:2px;"> Price:${product[i]['price']}</p>
   <p style=" margin:2px;padding:3px;"> Offer:50%   </p>
   ${ln}
 
   </div>
   </div>
   </a>
   
   </div>
   </div> 
   `;
   
   
   
   }
   
  
   
   }
   
 
 
 function sh(){
  alert("let's go");
//   main=document.getElementById('main');
   
//   main.style.display='block';
//   show_product(0);
      
      }
     
/*

btn=document.querySelectorAll('.lr');
panel=document.querySelectorAll('.main-tab .panel');
alert(panel[0]);

function showHome(index){

btn.forEach(function(node){
node.style.backgroundColor='pink';
node.style.color='black';

});

btn[index].style.backgroundColor='red';
btn[index].style.color='blue';


panel.forEach(function(node){
node.style.display='none';


});
panel[index].style.display='block';
panel[index].style.backgroundColor='yellow';



}

//showTab(2);

*/




//profile model


profile=[
   {'name':'Md Saifuddin',
   'brand':"Monira dressed",
   'business_type':"Exporter, Manufacturer, Supplier & Wholesaler",
   'Year of Establishment':2018,
   'Business Location':" Kolkata (West Bengal, India)",
   'No. of Employees':100,
   ' No. of Production Units':01,
   ' Warehousing Facility':'yes',}
   
]   
   
/*   
   Business Location
   
   Kolkata (West Bengal, India)
   
   No. of Employees
   
   100
   
   No. of Production Units
   
   01
   
   Brand Name
   
   Benleaf
   
   Warehousing Facility
   
   Yes
   
   Bankers
   
   Axis Bank & State Bank of India
   
   Export Market
   
   Worldwide
   
   Import/Export Code
   
   AATFB4015F
   
   GST No.
   
   19AATFB4015F1ZG
   
   Annual Turnover
   
   Rs. 15 Crore
   
   Working As An Original Equipment Manufacturer
   
   Yes
   
   Monthly Production Capacity
   
   10 Lakh Pieces
   
   TAN No.
   
   CALB18925E
   
   Ownership Type
   
   Partnership
   
*/   










//function for home tab 

function showHome(){
home=document.getElementById("home");
item=document.getElementById("item");
contact=document.getElementById("contact");
about=document.getElementById("about");
product_details=document.getElementById("product-details");

product_details.style.display='none';
item.style.display='none';
contact.style.display='none';
home.style.display='block';
about.style.display='none';
show_product("img-div",0);

}

//function for contact tab 

function showContactContent(){

document.getElementById("contact").innerHTML="";
document.getElementById("contact").innerHTML+=`

<section class="breadcrumb-section">

<div class="container p-1 p-sm-3">
<div class="row">
<div class="col-12">
<h2>Contact Us </h2>
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>

</div>
</div>
</div>
</section>

<section >
<div class="container">
<div class="row">
<div class="col-12">
<p>I am saifuddin .I workWe at Benzer Creations offer you with Boys Capri manufactured using best quality fabrics to provide endless comfort to boys.
</p>
<hr>
</div>
</div>
</div>
</section >





<section class="form-section">
<div class="container">
<div class="row">



















<div class="col-sm-6 col-6  address">

<h5>Call/Whatsup</h5>
<p> <a href="tel:+918961163717 "><i class="fas fa-phone"></i>(+91)8961163717</a><br>
</p>

<h5>Email / website</h5>
<p> <a href="mailto: pmd.saifuddin@gmail.com"><i class="fas fa-envelope"></i>pmd.saifuddin@gmail.com</a><br>

<a href="https://www.google.vom"><i class="fas fa-globe"></i>www.google.com</a><br>

</p>

<h5>Working hours</h5>
<p> monday to friday - 8 a.m - 10 p.m (IST) </p>

<h5>Address</h5>
<p>Malipara,Kankhuli road, PO-Bartala,Kolkata - 700018 Westbengal</p

</div>
















</div>
</div>
</section >`






}


function showContact(){
home=document.getElementById("home");
item=document.getElementById("item");
contact=document.getElementById("contact");
about=document.getElementById("about");
product_details=document.getElementById("product-details");

product_details.style.display='none';
about.style.display='none';
item.style.display='none';
contact.style.display='block';
home.style.display='none';
showContactContent();

}







//function for Item tab 


function slide(d,a){

ln='';
 if(a==0 | a>product.length){
 
 ln=product.length
 
 }else{
 ln=a
 
 }

div_slide=document.getElementById(d);

div_slide.innerHTML="";
for(var i=0;i<ln;i++){
 
 div_slide.innerHTML+=`
 <div class="container  " style=" ">
 
     
<a href="/product/product_details/{{p.id}}">
 <div class="card mr-1 ml-0 my-4" style="width:13rem; height:17rem; color:black;">
 <img src="${product[i]['image']}"class="card-img-top" style="height:190px; margin-bottom:0; padding-bottom:0;"alt="...">
 <div class="card-body py-1 my-0">
 <h5 class="card-title text-center" style="padding-top:15px;padding-bottom:0;margin-0;">Baba suit</h5>
 <p class=" text-center" style="padding-0; margin:0;line-height:2px;"> {{p.price}}</p>
 
 </div>
 </div>
 </a>
 
 </div>`
 }
 <!-- end first image-->
 

}




function showItemContent(){

show_product("adiv",0);
slide("slide",4);




}





function showItem(){
home=document.getElementById("home");

item=document.getElementById("item");
contact=document.getElementById("contact");
product_details=document.getElementById("product-details");

product_details.style.display='none';
item.style.display='block';
contact.style.display='none';
home.style.display='none';
showItemContent();
about=document.getElementById("about");
about.style.display='none';
//show_product("adiv",0);
alert("about");
}



//end function for Item tab 







//function for product details tab

function showProduct(a){

div=document.getElementById('p-div');
div.innerHTML="";
div.innerHTML+=`
<div class="container p-1 p-sm-3">
<div class="row">
<div class="col-12">

  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Product</li>
     <li class="breadcrumb-item active" aria-current="page">Product details</li>
    
  </ol>

</div>
</div>
</div>
</section>

<div class="container " style="padding-left:55%;">

<button class="btn btn-dark p-1 m-1" style="width:60px;" >
<a href="/product/product/edit/{{product.id}}">Edit</a></button>


  
<button class="btn btn-danger p-1 m-1 " style="width:60px;">
<a href="/product/product/delete/{{product.id}}">Delete</a></button>




</div>





<div class="container " style="margin-top:100px;">

<div class="row">

<div class="col-md-5">
  <img src="${product[a]['image']}" class="figure-img img-fluid rounded" style="height:600px;width:100%;" alt="...">
  
 </div>
 
 
  <div class="col-md-7">
  <p class="newarrival text-center">New</p>
  
  
  
  <h2>{{product.title}}</h2>
  <p class="price">Price:{{product.price}}</p>
  
  <p><b>Availability</b>: Yes</p>
  <p><b>Condition</b>: New</p>
  <p><b>Brand</b>: {{product}}</p>
   <p><b>Design</b>: {{product.product_design}}</p>
    <p><b>Catagory</b>: {{product.product_catagory}}</p>
     <p><b>offer</b>: {{product.offer}}</p>
      <p><b>Description</b>: {{product.desc}}</p>
  <label>Quantity :</label>
  <input  type="text" value="1">
  <button  type="button" class="btn btn-default cart">Add to cart</button>
  
</div>
  
  
  
  
</div>



</div>
`;




}



function productDetailsContent(a){
showProduct(a);

}
function showProductDetails(a){
home=document.getElementById("home");

item=document.getElementById("item");
contact=document.getElementById("contact");
product_details=document.getElementById("product-details");



item.style.display='none';
contact.style.display='none';
home.style.display='none';
about=document.getElementById("about");
about.style.display='none';
product_details.style.display='block';
productDetailsContent(a);
}




//end function for product details tab






//function for About tab 


function myFunction(item, index) {
  document.getElementById("im-div").innerHTML += index + ":" + item + "<br>"; 
}



function showAboutContent(){

adiv=document.getElementById("im-div");


adiv.innerHTML="";
for(let p in profile[0]){

adiv.innerHTML+=`
<div class="p-3 m-3">
<table class="table table-brderless" style="text-align:left;">
<tbody>

<tr>
      <th scope="row">${p}</th>
      <td>${profile[0][p]}</td>
     
     
    </tr>



</tbody>
</table>
</div>
`;

}


}



/*
for(var i=0;i<product.length;i++){

document.getElementById("im-div").innerHTML+=

`<div class="col-lg-3 col-md-3 col-sm-3 col-6">
<div class="  " style="background:#f5f5f5; width:10rem; ">


<a href="/product/product_details/{{p.id}}">
<div class="card mx-auto my-4" style="width:9rem; height:17rem; color:black;">
<img src="${product[0]['image']}"class="card-img-top" style="height:170px; margin-bottom:0; padding-bottom:0;"alt="...">
<div class="card-body py-1 my-0">
<h5 class="card-title text-center" style="padding-top:15px;padding-bottom:0;margin-0;">    Baba suit  </h5>
<p class=" text-center" style=" margin:0;padding:0;line-height:2px;"> Price:${product[i]['price']}</p>
<p style=" margin:2px;padding:3px;"> Offer:50%   </p>

 
</div>
</div>
</a>

</div>
</div> 
`;

}

*/

 








function showAbout(){
home=document.getElementById("home");
item=document.getElementById("item");
contact=document.getElementById("contact");
product_details=document.getElementById("product-details");

product_details.style.display='none';
item.style.display='none';
contact.style.display='none';
home.style.display='none';
about=document.getElementById("about");
about.style.display='block';



showAboutContent();


}
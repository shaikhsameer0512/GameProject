
// LOGIN SYSTEM

function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

if(u==="Kedgaon" && p==="Nagar"){

document.querySelector(".hero").style.display="none"
document.getElementById("dashboard").style.display="block"

let btn=document.getElementById("authBtn")
btn.innerText="Logout"

btn.onclick=function(){
location.reload()
}

}

else{

alert("Invalid login. Use correct username and password.")

}

}



// MANDAP DESIGNS

const mandapDesigns={

"Royal Mandap":[
{title:"Golden Palace Mandap",img:"https://images.unsplash.com/photo-1519741497674-611481863552"},
{title:"Maharaja Wedding Mandap",img:"https://images.unsplash.com/photo-1520857014576-2c4f4c972b57"},
{title:"Crystal Royal Mandap",img:"https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d"},
{title:"Rajwadi Traditional Mandap",img:"https://images.unsplash.com/photo-1523438885200-e635ba2c371e"},
{title:"Royal Heritage Mandap",img:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc"}
],

"Floral Mandap":[
{title:"Rose Flower Mandap",img:"https://images.unsplash.com/photo-1530023367847-a683933f4172"},
{title:"Lotus Wedding Mandap",img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed"},
{title:"Orchid Floral Mandap",img:"https://images.unsplash.com/photo-1522673607200-164d1b6ce486"},
{title:"White Flower Mandap",img:"https://images.unsplash.com/photo-1507504031003-b417219a0fde"},
{title:"Jasmine Wedding Mandap",img:"https://images.unsplash.com/photo-1505236738415-9d9e3e0f6d6e"}
],

"Garden Mandap":[
{title:"Outdoor Garden Mandap",img:"https://images.unsplash.com/photo-1522673607200-164d1b6ce486"},
{title:"Nature Green Mandap",img:"https://images.unsplash.com/photo-1505236858219-8359eb29e329"},
{title:"Tree Wedding Mandap",img:"https://images.unsplash.com/photo-1520857014576-2c4f4c972b57"},
{title:"Sunset Garden Mandap",img:"https://images.unsplash.com/photo-1507504031003-b417219a0fde"},
{title:"Rustic Garden Mandap",img:"https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d"}
],

"Luxury Mandap":[
{title:"Diamond Luxury Mandap",img:"https://images.unsplash.com/photo-1519741497674-611481863552"},
{title:"Celebrity Wedding Mandap",img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed"},
{title:"Golden Luxury Stage",img:"https://images.unsplash.com/photo-1505236858219-8359eb29e329"},
{title:"Premium Designer Mandap",img:"https://images.unsplash.com/photo-1523438885200-e635ba2c371e"},
{title:"Royal Palace Mandap",img:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc"}
]

}



function openMandap(category){

document.getElementById("designBox").style.display="block"
document.getElementById("designTitle").innerText=category+" Designs"

let gallery=document.getElementById("designGallery")

gallery.innerHTML=""

mandapDesigns[category].forEach(function(item){

gallery.innerHTML+=`

<div class="card">

<img src="${item.img}">

<h3>${item.title}</h3>

</div>

`

})

}



// FILTER DETAILS

const detailData={

Mandap:"Mandap is the sacred wedding stage where bride and groom take their vows.",

Decor:"Decor includes luxury fabrics, flowers and lighting creating magical ambience.",

Stage:"Wedding stages are designed with royal seating and floral decoration.",

Entrance:"Grand entrances decorated with arches and flowers welcome guests.",

Lighting:"Romantic lighting creates beautiful wedding atmosphere.",

Reception:"Reception decoration includes premium dining and stage setup.",

Floral:"Floral decoration uses roses, orchids and jasmine flowers."

}



function showDetail(name){

document.getElementById("detailBox").style.display="block"

document.getElementById("detailTitle").innerText=name

document.getElementById("detailText").innerText=detailData[name]

}
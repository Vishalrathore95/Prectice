let arr = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

window.onload = function () {
  displayDiss(arr);
};

const card2 = document.getElementById("card2");

function displayDiss(item) {
  const cards = document.createElement("div");
  cards.classList.add("res");
  card2.innerHTML = ""; // Clear previous content
  card2.appendChild(cards);

  item.forEach((diss) => {
    const row = `<div>
            <img src="${diss.imageSrc}" alt="${diss.name}">
            <h3> ${diss.name}</h3>
            <p> Time:${diss.time}</p>
            <p> Type:${diss.type}</p>
            <p> Like/Dislike :${diss.isLiked}</p>
            <p> Rating:${diss.rating}</p>
        </div>`;
    cards.innerHTML += row;
  });
}

function Search() {
  const input = document.getElementById("gsearch").value.toLowerCase();
  const filteredRecipes = arr.filter(
    (item1) =>
      item1.type.toLowerCase().includes(input) ||
      item1.name.toLowerCase().includes(input) ||
      item1.time.toLowerCase().includes(input) ||
      item1.isLiked.toString().toLowerCase().includes(input) ||
      item1.rating.toString().toLowerCase().includes(input)
  );

  displayDiss(filteredRecipes);
}


 let button1 =document.querySelector('#button1')
 button1.addEventListener('click',()=>{
    setTimeout(function(){
        document.location.reload();
    }, 10)
 })
function sortByVeg() {
  const veg = arr.filter((item1) => item1.type.toLowerCase().includes("veg"));

  const onlyVeg = veg.filter(
    (item1) => !item1.type.toLowerCase().includes("non-veg")
  );

  displayDiss(onlyVeg);
}

function sortByNonVeg() {
  const nonVeg = arr.filter((item1) =>
    item1.type.toLowerCase().includes("non")
  );
  displayDiss(nonVeg);
}


function  fourOFAbove(){
 const Four = arr.filter((item1 =>{
  return item1.rating > 4
 }))
 displayDiss(Four)
}
function  fourBelow(){
  const low = arr.filter((item1 =>{
   return item1.rating < 4
  }))
  displayDiss(low)
 }
 function validateEmail(){
  var email = document.getElementById("email").value;
  var input =document.getElementById("email") ;

  if(email){
    alert("Thanks for Subscribe")
   

  }else{
    input.style.borderColor = "red";
    alert("Please Enter Your Email Address") 
   
  }
}  
 


displayDiss(arr);
 
// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const personImage = document.getElementById("person-image");
const name = document.getElementById("name");
const position = document.getElementById("position");
const info = document.getElementById("about");
const next = document.querySelector(".next")
const previous = document.querySelector(".previous")
const random = document.querySelector(".random-btn")
let i = 0;

function showreview() {
  personImage.src = reviews[i].img;
  position.textContent = reviews[i].job;
  name.textContent = reviews[i].name;
  info.textContent = reviews[i].text; 
}



window.addEventListener("DOMContentLoaded", function () {
 showreview(i)
})




next.addEventListener('click', function () {
  i++;
  if (i > reviews.length - 1) {
    i = 0
    showreview(i)
  }
  else {
    
    showreview(i)
  }

})
previous.addEventListener('click', function () {
  i--;
  if (i < 0) {
    i = reviews.length - 1;
    showreview(i)
  }
  else {
    showreview()
  }
})
random.addEventListener("click", function () {
   i =Math.floor(Math.random() * reviews.length)
  
  showreview(i)
})


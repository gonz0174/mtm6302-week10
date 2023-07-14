const cats = [
  {
    name: "Cat",
    bio: "Cat is an English word.",
    thumb: "images/kitten1-thumb.jpeg",
    img: "images/kitten1.jpeg"
  },
  {
    name: "Mao",
    bio: "Mao is is a Cantonese word.",
    thumb: "images/kitten2-thumb.jpeg",
    img: "images/kitten2.jpeg"
  },
  {
    name: "Gato",
    bio: "Gato is a Spanish word",
    thumb: "images/kitten3-thumb.jpeg",
    img: "images/kitten3.jpeg"
  },
  {
    name: "Billi",
    bio: "Billi is a Hindi word.",
    thumb: "/images/kitten4-thumb.jpeg",
    img: "/images/kitten4.jpeg"
  },
  {
    name: "Chat",
    bio: "Chat is a French word.",
    thumb: "images/kitten5-thumb.jpeg",
    img: "images/kitten5.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Polish word.",
    thumb: "images/kitten6-thumb.jpeg",
    img: "images/kitten6.jpeg"
  },
  {
    name: "Kit",
    bio: "Kit is a Ukrainian word.",
    thumb: "images/kitten7-thumb.jpeg",
    img: "images/kitten7.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Russian word.",
    thumb: "images/kitten8-thumb.jpeg",
    img: "images/kitten8.jpeg"
  }
]

const catsRow = document.getElementById("catsRow")

const cards = []

for (const cat of cats) {
  console.log(cat.name)
  // Create Card HTML template copying from HTML page and replacing content with values from the object
  const card = `
    <div class="col">
      <div class="card">
        <img data-bs-toggle="modal" data-bs-target="#exampleModal" src=${cat.thumb} class="card-img-top" alt="placeholder kitten" data-fullimg=${cat.img}>
        <div class="card-body">
          <h5 class="card-title">${cat.name}</h5>
          <p class="card-text">${cat.bio}</p>
          <a href="#" class="btn btn-light">Like</a>
        </div>
      </div>
    </div>`

    // push each card template to the cards array
    cards.push(card)
}

console.log(cards)

catsRow.insertAdjacentHTML("afterbegin", cards.join(""))

//Selecting all the images
const cardImages = document.querySelectorAll(".card-img-top")

//Adding event listeners multiple elements
for (const cardImage of cardImages) {
  cardImage.addEventListener("click", openModal)
}

//Get the full img path with dataset.fullimg
function openModal(){
  console.log(this.getAttribute("src"))

  console.log(this.dataset.fullimg)
  const fullImage = this.dataset.fullimg

  const modalBody = document.querySelector(".modal-body")
  //To show the images in full screen
  modalBody.innerHTML = `<img src="${fullImage}" alt="placeholder">`
}




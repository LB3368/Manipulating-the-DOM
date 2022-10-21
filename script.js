let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

//Part 1

function shortenTitle () {
  let mainTitleEl = document.getElementById('main-title')
mainTitleEl.textContent = "I'm Dom"
}
shortenTitle()

// Part 2
function changeBodyColor() {
let bodyEl = document.querySelector('body')
bodyEl.style.backgroundColor = "tan"
}
changeBodyColor()

//Part 3
function removeLastFavThing() {
let favThingsEl = document.getElementById('favorite-things')
favThingsEl.lastElementChild.remove()
}
removeLastFavThing()

//Part 4
function changeSpecialTitleFont() {
let specialTitleEl = document.querySelectorAll('special-title')
specialTitleEl.forEach(function(elem) 
{
  elem.style.fontSize = '2rem'})
}
changeSpecialTitleFont()

  //Part 5
function removeChicago() {
let pastRacesEl = document.getElementById('past-races')
console.log(pastRacesEl)


  let pastRacesListArray = document.querySelectorAll('#past-races > li')
  console.log(pastRacesListArray)
  pastRacesListArray.forEach(function(liEl) {
    if(liEl.textContent === 'Chicago') {
      liEl.remove()
      return;
    }
  })
}
removeChicago()

  //Part 6 
  function addMiami() {
  let newLiEL = document.createElement("li")
  newLiEL.textContent = 'Miami'
  
  let pastRacesULEl = document.getElementById("past-races")
  pastRacesULEl.append(newLiEL)

  return newLiEL
  }
let newLiElement = addMiami()


//Part 7
function createBlogPost(newLiElement) {
let mainEl = document.querySelector('.main')
//console.log(mainEl)

let newBlogDiv = document.createElement('div')
newBlogDiv.classList.add('blog-post', 'purple')
//console.log(newBlogEl)

let newBlogH1 = document.createElement('h1')
newBlogH1.textContent = newLiElement.textContent

let newBlogP = document.createElement('p')
newBlogP.textContent = "I RACED THROUGH THE BEACHES!"

newBlogDiv.append(newBlogH1, newBlogP)
//console.log(newBlogDiv)
mainEl.append(newBlogDiv)
}
createBlogPost(newLiElement)

//Part 8

// Random quote of the day generator
function getRandomQuote() {
const randomQuote = function() {
  document.querySelector('#quote-of-the-day').textContent = `"${
    quotes[Math.floor(Math.random() * quotes.length)]
  }"`;
};

let quoteTitleEl = document.getElementById('quote-title')
quoteTitleEl.addEventListener('click', function() {
  randomQuote()
})
}
getRandomQuote()


//Part 9
function addMouseEvt() {
let allBlogPosts = document.querySelectorAll('.blog-post')
console.log(allBlogPosts)
allBlogPosts.forEach(function (blogPost) {
  console.log()
  blogPost.addEventListener('mouseout', function() {
    blogPost.classList.toggle('red') //declaring the 'purple' doesn't work at this property because 'purple' is declared somewhere else.
    stopPropagation
  })
  blogPost.addEventListener('mouseenter', function() {
    blogPost.classList.toggle('red')
  })
})
}
addMouseEvt()
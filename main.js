const add = (x,y)=>{return x+y}
const updateWithAdd = async (event) => {
  
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
  
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const ans =`Sum is ${add(i,j)}.`
    document.querySelector('#result').innerHTML = ans
   // document.querySelector('#result').innerHTML = "Difference is:"+ans1
   // document.querySelector('#result').innerHTML = "Multiple is:"+ans2
  }
 
}

const updateWithJoke = async (event) => {
  document.querySelector('#result').innerHTML = ''
  const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
  const response = await fetch(url)
  const obj = await response.json()
  const joke = obj.value.joke || 'No joke for you.'
  document.querySelector('#result').innerHTML = joke
}
document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

function count() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'click1') { count(event) }
});

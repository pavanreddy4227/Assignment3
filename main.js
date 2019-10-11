const add1 = (x,y)=>{return x+y}
const updateWithAdd1 = async (event) => {
  
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
  
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const ans =`Sum is ${add1(i,j)}.`
    document.querySelector('#result').innerHTML = ans
   // document.querySelector('#result').innerHTML = "Difference is:"+ans1
   // document.querySelector('#result').innerHTML = "Multiple is:"+ans2
  }
  const updateWithJoke = async (event) => {
    document.querySelector('#joker').innerHTML = ''
    const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
    const response = await fetch(url)
    const obj = await response.json()
    const joke = obj.value.joke || 'No joke for you.'
    document.querySelector('#joker').innerHTML = joke
  }
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })
}
document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd1(event) }
})

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
  
const getAdvice = async () =>{
  var data = await fetch("https://api.adviceslip.com/advice")
  var json = await data.json()
  console.log(json.slip.advice)
  document.querySelector("#adviceField").innerHTML = json.slip.advice
}
  
}


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

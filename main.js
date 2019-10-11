const add = (x,y)=>{return x+y}
const sub=(x,y)=>{return x-y}
const mul=(x,y)=>{return x*y}
const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
  
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const ans =`Sum is ${add(i,j)}.`
    const ans1 =`\ndifference is ${sub(i,j)}.`
    const ans2 =`\nmul is ${mul(i,j)}.`
    document.querySelector('#result').innerHTML = ans+"\n"+ans1+"\n"+ans2
   // document.querySelector('#result').innerHTML = "Difference is:"+ans1
   // document.querySelector('#result').innerHTML = "Multiple is:"+ans2
  }
  
}


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

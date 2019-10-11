

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
  
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const ans = i+j;
    const ans1=i-j;
    const ans2=i*j;
    var a="Sum is:"+ans+"\n"+ "Subraction is:"+ans1+"\n"+" multiplication is:"+ans2
    document.querySelector('#result').innerHTML = a
   // document.querySelector('#result').innerHTML = "Difference is:"+ans1
   // document.querySelector('#result').innerHTML = "Multiple is:"+ans2
  }
  
}


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

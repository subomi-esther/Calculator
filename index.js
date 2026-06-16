const clear = document.querySelector('.clear')
const button = document.querySelectorAll('.enter')
const showHistory = document.querySelector('.show')
const allAnsw = document.querySelector('.allAnswers')
const items = allAnsw.getElementsByTagName('li')
const hideAns = document.querySelector('.hideHistory')
// const ul =  document.querySelector('.answers')
const inputOne = document.getElementById('entryOne')
const inputTwo = document.getElementById('entryTwo')
const form = document.getElementById('form')


function enableBtn() {
  button.forEach(btn => {
      btn.disabled= false
   })


 } 
function enable () {
  if (inputOne.value != '' && inputTwo.value !='') {
    enableBtn()
  } 
}
form.addEventListener('input', enable)


clear.addEventListener('click', function(){
   button.forEach(btn => {
  btn.disabled= true
   })

})

function addNumber() {
  const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value
  const sum = Number(firstEntry) + Number (secondEntry)

    document.querySelector('.answers').textContent = `${sum}`
    allAnsw.innerHTML += `<li>${sum} </li>`

}



 function subNumber() {
      const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value

  const sub = Number(firstEntry) - Number (secondEntry)
      allAnsw.innerHTML += `<li>${sub} </li>`

  document.querySelector('.answers').textContent = `${sub}`

   

 }
 function multiplyNumber() {
   
   const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value
  const multiply = Number(firstEntry) * Number (secondEntry)
    allAnsw.innerHTML += `<li>${multiply} </li>`

  document.querySelector('.answers').textContent = `${multiply}`


 }
 function divideNumber() {
   
   const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value
  const divide = Number(firstEntry) / Number (secondEntry)
    allAnsw.innerHTML += `<li>${divide} </li>`

  document.querySelector('.answers').textContent = `${divide}`


 }
 


function squareNumber(){
     const firstEntry  = document.querySelector('.entryOne').value
       const secondEntry = document.querySelector('.entryTwo').value

     const square = firstEntry ** secondEntry
         allAnsw.innerHTML += `<li>${square} </li>`


    document.querySelector('.answers').textContent = `${square}`
   
}


function clearAnswers() {
  allAnsw.textContent = ''
  allAnsw.hidden = true
  hideAns.hidden = true


}

function clearOnly() {
   document.querySelector('.answers').textContent = ''
}

 showHistory.addEventListener ('click', function(){
 
    allAnsw.hidden = false
    hideAns.hidden = false
 
   

 })      



 hideAns.addEventListener ('click', ()=> {
   allAnsw.hidden = true
   hideAns.hidden = true
 })




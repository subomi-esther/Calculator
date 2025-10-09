const clear = document.querySelector('.clear')
const button = document.querySelectorAll('.enter')
const showHistory = document.querySelector('.show')
const allAnsw = document.querySelector('.allAnswers')
const items = allAnsw.getElementsByTagName('li')
const hideAns = document.querySelector('.hide')
// const ul =  document.querySelector('.answers')


function enableBtn() {
  button.forEach(btn => {
      btn.disabled= false
   })


 } 


clear.addEventListener('click', function(){
   button.forEach(btn => {
  btn.disabled= true
   })

})

function addNumber() {
  const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value
  const sum = Number(firstEntry) + Number (secondEntry)

    document.querySelector('.answers').innerText = `${sum}`
    allAnsw.innerHTML += `<li>${sum} </li>`

}
function validate(obj) {
  if (obj.value.length > 0) {
      button.forEach(btn => {
        btn.disabled= false
       })

  } else {

    button.forEach(btn => {
      btn.disabled= true
    })
  }
}


 function subNumber() {
   
   const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value
  const sub = Number(firstEntry) - Number (secondEntry)
      allAnsw.innerHTML += `<li>${sub} </li>`

  document.querySelector('.answers').innerText = `${sub}`

   

 }
 function multiplyNumber() {
   
   const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value
  const multiply = Number(firstEntry) * Number (secondEntry)
    allAnsw.innerHTML += `<li>${multiply} </li>`

  document.querySelector('.answers').innerText = `${multiply}`


 }
 function divideNumber() {
   
   const firstEntry  = document.querySelector('.entryOne').value
  const secondEntry = document.querySelector('.entryTwo').value
  const divide = Number(firstEntry) / Number (secondEntry)
    allAnsw.innerHTML += `<li>${divide} </li>`

  document.querySelector('.answers').innerText = `${divide}`


 }
 


function squareNumber(){
     const firstEntry  = document.querySelector('.entryOne').value
       const secondEntry = document.querySelector('.entryTwo').value

     const square = firstEntry ** secondEntry
         allAnsw.innerHTML += `<li>${square} </li>`


    document.querySelector('.answers').innerText = `${square}`
   
}


function clearAnswers() {
  allAnsw.innerText = ''
      hideAns.hidden = true


}

function clearOnly() {
   document.querySelector('.answers').innerText = ''
}

 showHistory.addEventListener ('click', function(){
 
    allAnsw.hidden = false
    hideAns.hidden = false
 
   

 })      

  // for (let i = 0; i < items.length; i++){
  //   if (items.length > 7) {
  //     items[i].style.display = 'none'
  //     console.log('greater')
  //   } else if (items.length <= 5) {
  //     items[i].style.display = 'block'

  //     console.log('lesser')
  //   }
  //  }


 hideAns.addEventListener ('click', ()=> {
   allAnsw.hidden = true
   hideAns.hidden = true
 })




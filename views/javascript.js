const userName = "temp"
console.log(document.cookie)

async function checkUser(){
if (document.cookie != ""){
 userName = document.cookie
}else{
    console.log("start")
  //  let respone = await fetch("/reset",{  method: "POST",})
  //  let result =  await respone.json()
  //  updateUI(result)
}
}
async function selectUser(){
let respone = await fetch("/loadUser",
    {
        method: "post",
        headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ "user": {
      "name" : document.getElementById("nameField").value,
    }})
    
})
let result = await respone.json()
    updateUI(result)
}
 async function clicked(){
    console.log("works")
    let respone = await fetch("/clicked",{  method: "POST",})
    let result =  await respone.json()
    updateUI(result)
}
async function plusLevel(){
   let respone = await fetch("/levelUp",{  method: "POST",})
   let result =  await respone.json()
   updateUI(result)
}
async function updateUI(result){
    document.getElementById('money').innerHTML= "du har " + result.money + " £"
    document.getElementById('level').innerHTML= "du er level" + result.level
    document.getElementById('priceForlevel').innerHTML = "Prisen for at levelup er " + result.priceForLevel
}

async function start(){
    checkUser()
}

async function reset(){
    let respone = await fetch("/reset",{  method: "POST",})
    let result =  await respone.json()
    updateUI(result)
}

function saveOnServer(){
    fetch("/save",
    {
        method: "post",
        headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ "user": {
      "name" : document.getElementById("nameField").value,
    }})
})
}


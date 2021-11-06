
var money = 0
var level = 1
var priceForLevel=10
console.log("Works")
console.log(money)

let amountOfClicksInTheLast5Sec = 0

function yesclick(){
    amountOfClicksInTheLast5Sec = amountOfClicksInTheLast5Sec + 1
    console.log("works")

    var payload = 2
    
    var data = new FormData();
    data.append( "json",  JSON.stringify(payload)  );
    console.log(JSON.stringify(payload) )
    fetch("/clicked",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body : {
            "Folk": [{
                "name": "Gustav",
                "age": "old",
                "height": "Tall"
            }, {
                "name": "Chilas",
                "age": "Less Old",
                "height": "Less Tall"
            },{
                "name": "TallBoy",
                "age": "Not Old",
                "height": "Tallest"
            }]
        }

    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })

//updateUI()
}



// setInterval(
//     function(){
//         let data = new URLSearchParams();
//         data.append(`key`, `value`);
//         data.append(`anotherKey`, `another value`);

//         const options = {
//             method: `POST`,
//             body: data
//           };


//         fetch('/clicked',options)
//         amountOfClicksInTheLast5Sec = 0; 
//     },5000
// )


function plusLevel(){
    fetch('/levelUp',{method: 'POST'}) 
updateUI()
}


function updateUI(){

    


    //document.getElementById('money').innerHTML= "du har " + money + " £"
    //document.getElementById('level').innerHTML= "du er level" + level
    //document.getElementById('priceForlevel').innerHTML = "Prisen for at levelup er " + priceForLevel
}

function saveWithLocalStorage(){
    localStorage.setItem("money", money)
    localStorage.setItem("level", level)
    localStorage.setItem("priceForLevel", priceForLevel)
    
}

function saveWithCoockie(){
document.cookie = +money 
}

function saveWithSession(){
    sessionStorage.setItem("money", money)
    sessionStorage.setItem("level", level)
    sessionStorage.setItem("priceForLevel", priceForLevel)
    
}

function loadWithCoockie(){
    money = parseInt(document.cookie)
}
function loadlWithLocalStorage(){
    if(localStorage.getItem("money")!=null){
      money = parseInt(localStorage.getItem("money"))  
    }
    
    if(localStorage.getItem("level")!=null){
        level = parseInt(localStorage.getItem("level"))  
      }
priceForLevel = parseInt(localStorage.getItem("priceForLevel"))
}

function loadlWithSessionStorage(){
    if(sessionStorage.getItem("money")!=null){
      money = parseInt(sessionStorage.getItem("money"))  
    }
    
    if(sessionStorage.getItem("level")!=null){
        level = parseInt(sessionStorage.getItem("level"))  
      }
      if(sessionStorage.getItem("priceForLevel")!=null){
        priceForLevel = parseInt(sessionStorage.getItem("priceForLevel"))  
      }

}

function reset(){
    money = 0
    level = 1
    priceForLevel = 10
    updateUI()
}

function save(){
    saveWithSession()
}

function start(){
    loadlWithSessionStorage()
    updateUI()
}

function saveOnServer(){
    fetch('/clicked',{method: 'POST'}) 
}


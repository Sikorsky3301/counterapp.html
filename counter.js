
let saveEl = document.getElementById("save-el") 
let countEL = document.getElementById("count-el")
console.log(countEL)

let count = 0
function increment(){
    count = count + 1
    countEL.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

function reset(){
    count = 0
    countEL.textContent = 0    
}

function resetdat(){
    saveEl.textContent = "Previous Content:" + " "    
}

function negdat(){
    counter = count --
    countEL.textContent = counter 
    console.log(counter)     
    
} 

// //create function
// function qwerty(parms) {
//     // body
// }
// qwerty() // call Function

// function sum(num1, num2){
//     console.log(num1 + num2) // 29
// }

// sum(20,9)

function openMenu(action) {
    if (action == 'show') {
        document.getElementById('mobile_nav').style.display = 'flex'
    } else {
        document.getElementById('mobile_nav').style.display = 'none'
    }
}

function openModal(action) {
    if (action == 'show') {
        document.getElementById('modal').style.display = 'flex'
    } else {
        document.getElementById('modal').style.display = 'none'
    }
}
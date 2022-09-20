let carSlots = document.getElementsByClassName('btnSmall')
let mixedSlots = document.getElementsByClassName('btnMixed')
let customerName = document.getElementsByClassName('name').value
let carReg = document.getElementsByClassName('reg').value
let carSize = document.getElementsByClassName('size').value
let submitBtn = document.getElementsByClassName('submit-btn')
let displayTrxDetails = document.getElementById('#display')

let checkInTime = new Date()
let checkOutTime = Date.now()


if (checkInTime == new Date(60000) && carSize == 'small') { 
    fee = (checkOutTime - checkInTime) * 2;
}

if (checkInTime == new Date(60000) && carSize == 'big') {
    fee = (checkOutTime - checkInTime) * 3.5;
}


submitBtn.addEventListener('click', setTrxDetails)
function setTrxDetails() {
    localStorage.setItem(customerName, carReg, carSize, checkInTime);
}

function displayTrxDetails() {
    return localStorage.getItem(customerName, carReg, checkInTime), fee;
}


for (let carSlot of carSlots) {
    carSlot.addEventListener('click', slotBooked)

    function slotBooked() {
        carSlot.style.backgroundColor = 'orange'
        carSlot.innerHTML = '<h2>Slot Booked!</h2>'

       if (slotBooked) {
        carSlot.addEventListener('click', unBookCarSlot)
        function unBookCarSlot() {
            carSlot.style.backgroundColor = 'green'
            carSlot.innerHTML = '<h3>Book slot.</h3>'
            }
            displayTrxDetails()
       } 
    }
}


for (let mixedSlot of mixedSlots) {
    mixedSlot.addEventListener('click', slotBooked)

    function slotBooked() {
        mixedSlot.style.backgroundColor = 'orange'
        mixedSlot.innerHTML = '<h2>Slot Booked!</h2>'

        if(slotBooked) {
            mixedSlot.addEventListener('click', unBookSlot)
            function unBookSlot() {     
                mixedSlot.style.backgroundColor = 'green'
                mixedSlot.innerHTML = '<h3>Book Slot</h3>'
            }
            displayTrxDetails()
        }   
       
    }
}

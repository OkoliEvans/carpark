let bookCarSlotButton = document.querySelectorAll('.btnSmall')
let bookMixedSlotButton = document.querySelectorAll('.btnMixed')
let cars = []
let totalSlots = 20
let totalCarSlot = totalSlots.length <= 12
let totalMixedVehicleSlot = totalSlots.length > 12

function bookCarSlot(event) {
    if(totalCarSlot.length !== totalCarSlot && totalCarSlot.isBooked === false){
        totalCarSlot [event.target.dataset.row].isBooked = true
        let totalCarSlot = document.querySelectorAll('.btnSmall')
        for( let i = 0; i < totalCarSlot.length; i++) {
            totalCarSlot[i].style.backgroundColor = 'red'
            totalCarSlot[i].innerText = 'Booked'
        }
    }
   
}

function unBookCarSlot(event) {
    if (bookNewCar()) {
        totalCarSlot [event.target.dataset.row].isBooked = false
        let totalCarSlot = document.querySelectorAll('.btnSmall')
        for( let i = 0; i <= totalCarSlot.length; i++) {
            totalCarSlot[i].style.backgroundColor = 'green'
        }
    }
   
}

function bookMixedVehicleSlot(event) {
    if (totalMixedVehicleSlot.length !== totalMixedVehicleSlot && totalMixedVehicleSlot.isBooked === false) {
        totalMixedVehicleSlot [event.target.dataset.row].isBooked = true
        let totalMixedVehicleSlot = document.querySelectorAll('.btnMixed')
        for (let i = 0; i <= totalMixedVehicleSlot.length; i++) {
            totalMixedVehicleSlot[i].style.backgroundColor = 'red'
            totalMixedVehicleSlot.innerText = 'Booked'
        }
    }
}

function unBookMixedVehicleSlot(event) {
    if(bookMixedVehicleSlot()) {
        totalMixedVehicleSlot [event.target.dataset.row].isBooked = false
        let totalMixedVehicleSlot = document.querySelectorAll('.btnMixed')
        for (let i = 0; i <= totalMixedVehicleSlot.length; i++ ) {
            totalMixedVehicleSlot[i].style.backgroundColor = 'green'
        }
    }
}

bookCarSlotButton.addEventListener('click', bookCarSlot)

bookMixedSlotButton.addEventListener('click', bookMixedVehicleSlot)
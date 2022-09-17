let carSlots = document.getElementsByClassName('btnSmall')
let mixedSlots = document.getElementsByClassName('btnMixed')

for (let carSlot of carSlots) {
    carSlot.addEventListener('click', slotBooked)

    function slotBooked() {
        carSlot.style.backgroundColor = 'orange'
        carSlot.innerHTML = '<h2>Slot Booked!</h2>'

        setTimeout(
            () => {
                carSlot.style.backgroundColor = 'orange'
            }, 50000)
    }
}

for (let mixedSlot of mixedSlots) {
    mixedSlot.addEventListener('click', slotBooked)

    function slotBooked() {
        mixedSlot.style.backgroundColor = 'orange'
        mixedSlot.innerHTML = '<h2>Slot Booked!</h2>'

        setTimeout(
            () => {
            mixedSlot.style.backgroundColor= 'orange'
        }, 5000);
    }
}
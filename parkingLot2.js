let carSlots = document.getElementsByClassName('btnSmall')
let mixedSlots = document.getElementsByClassName('btnMixed')

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
        } 
        
    }
}
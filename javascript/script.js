window.onload = () => {
    const slots = document.querySelectorAll(".slot")
    const resetBtn = document.getElementById("reset")
    const result = document.getElementById("result")
    console.log(slots)
    const win = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ]
    let Rturn = true
    let turns = 0

    // Win Function <<Not working>> Explanation ==>
    const resultcheck = () => {
        
        // I tried to loop on all winning combinations
        for(let i of win){

            // assigning red/yellow/null to 3 indexes of i (winning senarios)
            let inside1 = slots[i[0]].innerHTML
            let inside2 = slots[i[1]].innerHTML
            let inside3 = slots[i[2]].innerHTML
            console.log(inside1,inside2,inside3)
        // checked if any is null(not placed yet)
        if(inside1 != null && inside2 != null && inside3 != null){
            // if not null then check whether the 3 indeces are the same(either all red or all yellow)
            if(inside1 == inside2 && inside2 == inside3){
                // if yes ==> state the game has ended
                result.innerHTML = "<p>Game Over</p>"
            }}}
    }

    slots.forEach((inside) => {
        inside.addEventListener("click", () => {
            if (Rturn){
                Rturn = false
                inside.innerHTML = "<img src='/assets/red.png'></img>"
                inside.disabled = true
            } else{
                Rturn = true
                inside.innerHTML = "<img src='/assets/yellow.png'></img>"
                inside.disabled = true
            }

            turns++

            if (turns == 9){
            result.innerHTML = "<p>Draw</p>"
        }
        resultcheck()
        })
        
        
    })

// 

    resetBtn.addEventListener("click", () => {
        slots.forEach((inside) => {
            inside.innerHTML = ""
            inside.disabled = false
            turns = 0
            result.innerHTML = "<p>In Progress...</p>"
        })
    })
    }
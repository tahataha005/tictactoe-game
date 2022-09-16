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
    let Xturn = true
    let turns = 0

    const resultcheck = () => {
        for(let i of win){
            let [inside1,inside2,inside3] = [
                slot[i[0]].innerText,
                slot[i[0]].innerText,
                slot[i[0]].innerText                
            ]
        }
        if(inside1 == inside2 && inside2 == inside3){
            result.innerHTML = "<p>Game Over</p>"
        }
    }

    slots.forEach((inside) => {
        inside.addEventListener("click", () => {
            if (Xturn){
                Xturn = false
                inside.innerHTML = "<img src='/assets/red.png'></img>"
                inside.disabled = true
            } else{
                Xturn = true
                inside.innerHTML = "<img src='/assets/yellow.png'></img>"
                inside.disabled = true
            }

            turns++

            if (turns == 9){
            result.innerHTML = "<p>Draw</p>"
        }
            resultcheck
        })
        
        
    })

    resetBtn.addEventListener("click", () => {
        slots.forEach((inside) => {
            inside.innerHTML = ""
            inside.disabled = false
            turns = 0
        })
    })
    }
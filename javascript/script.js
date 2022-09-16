window.onload = () => {
    const slots = document.querySelectorAll(".slot")
    const resetBtn = document.getElementById("reset")
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

    slots.forEach((inside) => {
        inside.addEventListener("click", () => {
            if (Xturn){
                Xturn = false
                inside.innerHTML = "X"
                inside.disabled = true
            } else{
                Xturn = true
                inside.innerHTML = "O"
                inside.disabled = true
            }
        })
    })
    }
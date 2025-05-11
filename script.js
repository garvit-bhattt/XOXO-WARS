let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;//PLAYER X , PLAYER O
let newgamebtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg")
//defining the win patterns
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
//showing of O and X as soon as button is clicked
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();

    })

})
//logic for disabling boxes after winner is declared
const disablebox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//logic for declaring the winner and showing of newgame button
const showwinner= (winner)=>{
    msg.innerText=`Congrats ,winner is ${winner}` ;
    msgcontainer.classList.remove("hide");
    newgamebtn.classList.remove("hide");
    disablebox();

}
//logic for checking the winner
const checkwinner = () => {
    for(let pattern of winpatterns){
        let box1value= boxes[pattern[0]].innerHTML;
        let box2value= boxes[pattern[1]].innerHTML;
        let box3value= boxes[pattern[2]].innerHTML;

        if (box1value!="" && box2value!="" && box3value!=""){
            if (box1value===box2value && box2value===box3value){
                console.log("winner",box1value);
                showwinner(box1value);
            }
        }

    }
}
//enabling the boxes after reset is clicked
const enablebox = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML=" ";
    }
}

//reset-btn logic
const reset=()=>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");
}
newgamebtn.addEventListener("click ",reset);
resetBtn.addEventListener("click",reset);

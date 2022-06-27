let valueScreen = document.querySelector(".valueScreen");
let answerScreen = document.querySelector(".answerScreen");
let clearBtn = document.querySelector("#clear");
let del = document.querySelector("#delete");
let percentage = document.querySelector("#percentage");
let button  = document.querySelectorAll("button");
let equals = document.querySelector("#equals");


let screenValue = []

clearBtn.addEventListener("click", ()=> {
    screenValue = [''];
    // answerScreen.innerHTML =0;
    // valueScreen.className = "valueScreen";
    // answerScreen.className = "answerScreen";
    answerScreen.style.color= "black";
})

button.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if(!btn.id.match("del")) {
            screenValue.push(btn.value)
            valueScreen.innerHTML=screenValue.join("");

            if (btn.classList.contains("num-btn")) {
                answerScreen.innerHTML=eval(screenValue.join(""));
            }
        }

        if(btn.id.match("del")){
            screenValue.pop();
            valueScreen.innerHTML=screenValue.join("");
            answerScreen.innerHTML=eval(screenValue.join(""));

        }

        if(btn.id.match("equals")){
            screenValue.pop();
            valueScreen.className="answerScreen";
            answerScreen.className="valueScreen";
            answerScreen.style.color="black";
        }

        if(typeof eval(screenValue.join("")) == "undefined") {
            answerScreen.innerHTML = 0
        }
    })
})
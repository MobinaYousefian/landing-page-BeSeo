// let questions = document.querySelectorAll(".question__title");




// for (let question of questions) {
//     question.addEventListener("click", (event) => {
//         event.target.classList.toggle("active");

//         if (event.target.nextElementSibling.style.maxHeight == 0) {
//             event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
//         } else {
//             event.target.nextElementSibling.style.maxHeight = "";
//         }
//     });
// }


let questionTitle = document.querySelectorAll(".question__title");
let questions = document.querySelectorAll(".question");
let questionText= document.querySelectorAll(".question__question");
let answerText= document.querySelectorAll(".question__answer");
let questionNum= document.querySelectorAll(".num");
let questionAdd= document.querySelectorAll(".--add");
let questionRemove= document.querySelectorAll(".--remove");


questionTitle.forEach((q)=>{
    q.addEventListener('click', (e)=>{
        q.classList.toggle("yellow");
        answerText[q.id-1].classList.toggle("show-question");
        questions[q.id-1].classList.toggle("border");
        questionAdd[q.id-1].classList.toggle("hide-add");
        questionRemove[q.id-1].classList.toggle("show-remove");


    })
})




let questionTitle = document.querySelectorAll(".question__title");
let questions = document.querySelectorAll(".question");
let questionText= document.querySelectorAll(".question__question");
let answerText= document.querySelectorAll(".question__answer");
let questionNum= document.querySelectorAll(".num");
let questionAdd= document.querySelectorAll(".--add");
let questionRemove= document.querySelectorAll(".--remove");
console.log(questions);
let index;

questionTitle.forEach((q)=>{
    q.addEventListener('click', (e)=>{
        if(index && index!=q.id-1 || index===0 && index!=q.id-1){
            questionTitle[index].classList.remove("yellow");
            answerText[index].classList.remove("show-question");
            questions[index].classList.remove("border");
            questionAdd[index].classList.remove("hide-add");
            questionRemove[index].classList.remove("show-remove");
        }



        q.classList.toggle("yellow");
        answerText[q.id-1].classList.toggle("show-question");
        questions[q.id-1].classList.toggle("border");
        questionAdd[q.id-1].classList.toggle("hide-add");
        questionRemove[q.id-1].classList.toggle("show-remove");

        index=q.id-1
        console.log(index);

    })
})

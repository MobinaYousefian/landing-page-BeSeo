


const bannerStats1 = document.querySelector(".stats--number1")
const bannerStats2 = document.querySelector(".stats--number2")
const bannerStats3 = document.querySelector(".stats--number3")
const bannerStats4 = document.querySelector(".stats--number44")
const banner = document.querySelector(".banner-stats")
let flag=0;

function startCounting1() {
    let countNumber = 0;
    let nIntervId;
    nIntervId = setInterval(()=> { 
        if (countNumber == 849) {
          clearInterval(nIntervId); 
        }
        countNumber++;
        bannerStats1.innerHTML = countNumber;
      }, 1);
}

function startCounting2() {
    let countNumber = 0;
    let nIntervId;
    nIntervId = setInterval(()=> { 
        if (countNumber == 19) {
          clearInterval(nIntervId); 
        }
        countNumber++;
        bannerStats2.innerHTML = countNumber;
      }, 180);
}
function startCounting3() {
    let countNumber = 0;
    let nIntervId;
    nIntervId = setInterval(()=> { 
        if (countNumber == 28) {
          clearInterval(nIntervId); 
        }
        countNumber++;
        bannerStats3.innerHTML = countNumber;
      }, 130);
}
function startCounting4() {
    let countNumber = 0;
    let nIntervId;
    nIntervId = setInterval(()=> { 
        if (countNumber == 0) {
          clearInterval(nIntervId); 
        }
        countNumber++;
        bannerStats4.innerHTML = countNumber;
      }, 2000);
}


window.addEventListener("load", function(e) {
    var rect = banner.getBoundingClientRect();
    flag =1;
    // e.stopPropagation() 
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        startCounting1();
        startCounting2();
        startCounting3();
        startCounting4();
        window.removeEventListener("load", arguments.callee);
    }

});
console.log(flag)
if(flag===0){
    window.addEventListener("scroll", function(e) {
        flag =0;
        // e.stopPropagation() 
        var rect = banner.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            startCounting1();
            startCounting2();
            startCounting3();
            startCounting4();
        window.removeEventListener("scroll", arguments.callee);
        }

    });
    }

console.log(flag)
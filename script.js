let newB = document.querySelector(".new");
let pop = document.querySelector(".popup");
let exit = document.querySelector(".exit");
let submit = document.querySelector(".submit");
let xs = document.querySelectorAll(".x");
let checks = document.querySelectorAll(".check");
function appear(){
    pop.classList.add("show");
}
function disappear(){
    pop.classList.remove("show");
}
function add(){
    pop.classList.remove("show");
}
function change(){
    if(this.matches(".x"))
    {
        this.classList.remove("fa-times-circle","x");
        this.classList.add("fa-check-square","check");
    }
    else
    {
        this.classList.add("fa-times-circle","x");
        this.classList.remove("fa-check-square","check");
    }
}
newB.addEventListener("click",appear);
exit.addEventListener("click",disappear);
submit.addEventListener("click",add);
xs.forEach(x => x.addEventListener("click", change));
checks.forEach(check => check.addEventListener("click", change));



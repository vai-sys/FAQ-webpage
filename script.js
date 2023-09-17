const accordians=document.querySelectorAll(".accordian");
accordians.forEach(accordian=>{
    const icon=accordian.querySelector('.icon');
    const answer=accordian.querySelector('.answer');
    accordian.addEventListener("click",()=>{
        answer.classList.toggle('active');
        icon.classList.toggle("active")


    })
})
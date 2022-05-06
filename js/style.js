const allCross = document.querySelectorAll('.ask');


console.log(allCross);


allCross.forEach(element => {

    element.addEventListener('click', function(){

        const removeVisible = [...document.querySelectorAll(".container-answer")]

        removeVisible.forEach(element =>{
            element.classList.remove("answerVisible");
        })
        


        const currentChoice = this.children[1];

        const arrow = this.children[0].children[1];
        const bold = this.children[0].children[0];


        currentChoice.classList.toggle("answerVisible") 
        arrow.classList.toggle("arrowRotate")

        bold.classList.toggle("bold")
    })

})
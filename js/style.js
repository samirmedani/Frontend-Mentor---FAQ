const allCross = document.querySelectorAll('.hyper-container-question');


console.log(allCross);


allCross.forEach(element => {

    element.addEventListener('click', function(){


        const currentChoice = this.children[1];
        console.log(currentChoice);

        currentChoice.classList.toggle("answerVisible") 


        
    })

})
// function preventDefaultAction(submittingtheform) {
// // if buttonClicked === document.createElecment('button') 
   // button.addEventListener("click", () => submittingtheform.preventDefault());
    //return inputTextElementinform 
//} 
//console.log(return inputTextElementinform); 

let textInput = document.getElementById("textarea");
        let form = document.querySelector("form");
        form.addEventListener("submit", event => {
            event.preventDefault();
            console.log(textInput.value);
        });

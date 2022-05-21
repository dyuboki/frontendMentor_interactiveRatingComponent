
let feedback_value = 0;
let form = document.querySelector("form");
let ratinggroup = document.getElementById("rating-group");
let feedback_display = document.getElementById("feedback-display");

let feedback_content = document.getElementById("card-feedback");
let thankyou_content = document.getElementById("card-thankyou");

thankyou_content.style.display = "none";

document.getElementById("submit-feedback").addEventListener('click',
()=>{

    for(let elem of ratinggroup.children){
        if(elem.checked == true){
            feedback_value = elem.id;
        }
    }

    feedback_content.style.display = "none";
    thankyou_content.style.display = "flex";

    feedback_display.innerHTML = `<p>You selected ${feedback_value} out of 5</p>`;
});
(function () { 
document.getElementById("ex1_button").addEventListener("click", function() {
   
    let numbers = Array.from({length: 10}, (_, i) => i).join(", ");

    document.getElementById("ex1_content").textContent = numbers;
});

let phone_numb = []
phone_numb = document.getElementById("ex2_text").value ;
document.getElementById("ex2_content").textContent = phone_numb;
})();

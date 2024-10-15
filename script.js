(function () { 
document.getElementById("ex1_button").addEventListener("click", function() {
   
    let numbers = Array.from({length: 10}, (_, i) => i).join(", ");

    document.getElementById("ex1_content").textContent = numbers;
});

const input = document.getElementById("ex2_text");
  const validationContent = document.getElementById("ex2_content");

  input.addEventListener("input", function () {
    const value = input.value;

    if (/[a-zA-Z]/.test(value)) {
      validationContent.textContent = "Numer nie może zawierać liter";
      return;
    }

    if (/[^0-9]/.test(value)) {
      validationContent.textContent =
        "Numer nie może zawierać znaków specjalnych";
      return;
    }

    if (value.length !== 9) {
      validationContent.textContent = "Długość numeru musi być równa 9";
      return;
    }

    validationContent.textContent = "Numer telefonu jest poprawny";
  });

  const dragElement = document.getElementById("ex3_element");
  const dropZone1 = document.getElementById("ex3_one");
  const dropZone2 = document.getElementById("ex3_two");

  dragElement.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
  });

  [dropZone1, dropZone2].forEach((zone) => {
    zone.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
  });

  [dropZone1, dropZone2].forEach((zone) => {
    zone.addEventListener("drop", function (event) {
      event.preventDefault();
      const data = event.dataTransfer.getData("text");
      const element = document.getElementById(data);
      zone.appendChild(element);
    });
  });
})();

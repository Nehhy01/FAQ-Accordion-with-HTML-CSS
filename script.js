const accordion_question = document.querySelectorAll(".accordion-question");
const accordion_answer = document.querySelectorAll(".accordion-answer");
const accordion_icons = document.querySelectorAll(".accordion-question img");

accordion_question.forEach((question) => {
  question.addEventListener("click", () => {
    let question_number = question.getAttribute("data-value");
    question_number = Number(question_number);

    // condition check if accordion is already open,
    if (accordion_answer[question_number].classList.contains("open")) {
      //  close it
      accordion_answer[question_number].classList.remove("open");
      accordion_answer[question_number].style.height = `0`;

      accordion_icons[question_number].setAttribute(
        "src",
        `./assets/images/icon-plus.svg`,
      );
    }

    // if accordion is closed,
    else {
      // close everyother one
      accordion_answer.forEach((answer) => {
        answer.classList.remove("open");
        answer.style.height = "";
      });
      
      // change the icon
      accordion_icons.forEach((each) => {
        each.setAttribute("src", `./assets/images/icon-plus.svg`);
      });

      // and open this one.
      accordion_answer[question_number].classList.add("open");
      accordion_answer[question_number].style.height =
        `${accordion_answer[question_number].scrollHeight}px`;
      console.log(accordion_answer[question_number].scrollHeight);

      // also change the icon
      accordion_icons[question_number].setAttribute(
        "src",
        `./assets/images/icon-minus.svg`,
      );
    }
  });
});

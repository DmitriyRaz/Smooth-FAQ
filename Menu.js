// this grabs all of the accordian contents, which is question and answer
const accordianContent = document.querySelectorAll(".accordian-content");

// this loops through the Node List called accordianContent
accordianContent.forEach(function (item, index) {
  // making a variable called header that will grab the actual header (question + icon)
  let header = item.querySelector("header");

  // here is the event listenter when you click anywhere on the header
  header.addEventListener("click", function () {
    item.classList.toggle("open");
    // remember, toggle it unique in that if it is already opened, it will close it.
    // let's get more specific, it won't actual "close" anything, there is no close,
    // rather it removes the "open" from item.classList

    // description is answer
    let description = item.querySelector(".description");

    // if open, then answer displays using the transition in css
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      console.log("This is open");

      // show minus
      item.querySelector(".icon1").src = "assets/images/icon-minus.svg";
    } else {
      // show plus
      description.style.height = "0px";
      item.querySelector(".icon1").src = "assets/images/icon-plus.svg";
    }
  });
});

// REMEMBER, the "open" litterlly comes from the toggle above, not any css.
//  also, setting the height of description to description.scrollHeight is just how high it is with overflow.
// (content not visible on the screen) ^^^

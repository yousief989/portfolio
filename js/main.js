window.addEventListener("scroll", (event) => {
  scroll(event);
});

const scroll = (event) => {
  let scroll = this.scrollY;
  let element = document.getElementById("navbar");
  if (scroll != 0) {
    element.classList.add("fixed-top");
  }else{
    element.classList.remove("fixed-top");

  }
};

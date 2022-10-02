const food_Btn = document.getElementById("btn1");
// const food_result = document.getElementById("display");
const food_img = document.getElementById("f-img");
const hide = document.getElementById("check");
food_Btn.addEventListener("click", getFreeFood);

function getFreeFood() {
  hide.display = "none";
  fetch("https://foodish-api.herokuapp.com/api/")
    .then((res) => res.json())
    .then((data) => {
      food_img.src = data.image;
      document.getElementById("yay").style.display = "block";
      // document.getElementById("check").style.display = "none";
      // food_result.innerHTML = `<img src=${data.image} alt="random-food-image" />`;
    });
}

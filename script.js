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

// const content = document.querySelector("#display");
// const button = document.querySelector("#btn1");

// button.addEventListener("click", function () {
//   getRandomFood();
// });

// function getRandomFood() {
//   const ajax = new XMLHttpRequest();
//   const url = "https://foodish-api.herokuapp.com/api/";

//   ajax.open("GET", url, true);

//   ajax.onreadystatechange = function () {
//     if (this.status === 200 && this.readyState === 4) {
//       console.log(this.response);
//       let data = JSON.parse(this.response);
//       content.innerHTML = `${data.image}`;
//     } else {
//       this.onerror = onerror();
//     }
//   };
//   ajax.send();
// }

// function onerror() {
//   content.textContent = "There was an error!";
// }

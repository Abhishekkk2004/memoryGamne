let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.style.backgroundColor = "#BFCBC2";
});
colorbar = boxes[0].style.backgroundColor;
color = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "orange",
  "pink",
  "purple",
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "orange",
  "pink",
  "purple",
];
//
// Function to shuffle the array content
function shuffleArray(array) {
  for (i = array.length - 1; i > 0; i--) {
    // Generate random number
    j = Math.floor(Math.random() * (i + 1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
arr1 = shuffleArray(color);
console.log(arr1);
array = [];
count = 0;

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (array.length == 0) {
      array.push(index);
      count++;
    } else if (array[0] != index) {
      array.push(index);
      count++;
    }
    // box.classList.add("trans");
    box.style.backgroundColor = color[index];
    if (count > 1) {
      a = array[0];
      b = array[1];
      // console.log("First Number " + a);
      // console.log("Second Number " + b);
      color1 = color[a];
      color2 = color[b];
      console.log("FIrst color " + color1);
      console.log("Second Color " + color2);
      if (color1 !== color2) {
        setTimeout(() => {
          boxes[a].style.backgroundColor = "#BFCBC2";
          boxes[b].style.backgroundColor = "#BFCBC2";
        }, 200);
      }
      count = 0;
      array = [];
      popup();
    }
  });
});
function popup() {
  countnumber = 0;

  for (i = 0; i < 16; i++) {
    colorOfBox = boxes[i].style.backgroundColor;
    console.log(colorOfBox);
    console.log("***");
    if (colorOfBox != colorbar) {
      countnumber++;
    }

    if (countnumber == 16) {
      boxes.forEach((box) => {
        box.style.backgroundColor = "#BFCBC2";
      });
      // shuffleArray(color);

      Swal.fire({
        title: "CONGRATULATIONS!!",
        text: "You have won the game.",
        icon: "success",
      });
    }
  }
}

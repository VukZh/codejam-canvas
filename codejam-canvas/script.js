let requestURL_4 = "data/4x4.json";
let requestURL_32 = "data/32x32.json";
let requestURL_png = "data/image.png";

let canvas = document.getElementById("my_canvas");
let ctx = canvas.getContext("2d");

let arr4 = [];
let request4 = new XMLHttpRequest();
request4.open("GET", requestURL_4);
request4.responseType = "json";
request4.send();
request4.onload = function () {
    arr4 = request4.response;
};

let arr32 = [];
let request32 = new XMLHttpRequest();
request32.open("GET", requestURL_32);
request32.responseType = "json";
request32.send();
request32.onload = function () {
    arr32 = request32.response;
};

function createImage(arr, type) {
    let k = my_canvas.width / arr.length;
    //  console.log("K " + k);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (type == "hex") {
                ctx.fillStyle = `#${arr[i][j]}`;
            } else if (type === "rgb") {
                ctx.fillStyle = `rgb(${arr[i][j][0]},${arr[i][j][1]},${arr[i][j][2]})`;
            }
            ctx.fillRect(i * k, j * k, k, k);
            //      console.log("color " + i + " " + j + " - " + arr[i][j]);
        }
    }
}

document
    .querySelector(".canvas_field--select--4x4")
    .addEventListener("click", () => {
        createImage(arr4, "hex");
    });

document
    .querySelector(".canvas_field--select--32x32")
    .addEventListener("click", () => {
        createImage(arr32, "rgb");
    });

document
    .querySelector(".canvas_field--select--png")
    .addEventListener("click", () => {
        var img = new Image();
        img.src = "data/image.png";
        ctx.drawImage(img, 0, 0, my_canvas.width, my_canvas.width);
    });
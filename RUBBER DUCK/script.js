function askTheDuck() {
  const oracleText = document.getElementById("oracleText").value;
  const newLi = document.createElement("li");
  newLi.textContent = oracleText;

  setTimeout(() => {
    document.getElementById("todoList").appendChild(newLi);
  }, 1000);
}

document.getElementById("oracleText").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    askTheDuck();
  }
});

document.getElementById("consult").addEventListener("click", function () {
  askTheDuck();
});

const duckImg = document.querySelector(".duckImg");
const tickleText = document.createElement("div");
tickleText.textContent = "hahaha I'm ticklish";
tickleText.style.position = "absolute";
tickleText.style.backgroundColor = "#f0f0f0";
tickleText.style.border = "1px solid black";
tickleText.style.padding = "5px";
tickleText.style.display = "none";
tickleText.style.zIndex = "10";
document.body.appendChild(tickleText);

duckImg.addEventListener("mouseenter", function (event) {
  tickleText.style.left = event.pageX + "px";
  tickleText.style.top = event.pageY + "px";
  tickleText.style.display = "block";
});

duckImg.addEventListener("mouseleave", function () {
  tickleText.style.display = "none";
});

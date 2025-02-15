document.getElementById("createDivBtn").addEventListener("click", function() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");

    // Tasodifiy rang generatsiya qilish
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    newDiv.style.backgroundColor = randomColor;

    // Containerga qo‘shish
    document.getElementById("container").appendChild(newDiv);
});

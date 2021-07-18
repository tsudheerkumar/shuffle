const originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let shuffledData = [...originalData];

renderNumbers(originalData);

function renderNumbers(arr) {
    const targetNode = document.getElementById("buttons");
    if (targetNode.childElementCount) {
        while (targetNode.firstChild) {
            targetNode.removeChild(targetNode.lastChild);
        }
    }
    arr.forEach((button, index) => {
        var color;
        switch (button) {
            case 1:
            case 8:
                color = "rgba(111,152,168,255)";
                break;
            case 2:
            case 4:
                color = "rgba(43,142,173,255)";
                break;
            case 3:
            case 5:
            case 9:
                color = "rgba(47,69,78,255)";
                break;
            case 7:
            case 6:
                color = "rgba(191,191,191,255)";
        }
        var x = document.createElement("BUTTON");
        console.log("Sudheer",color);
        x.setAttribute('id', "st" + button);
        x.style.backgroundColor = color;        
        var t = document.createTextNode(button);
        x.appendChild(t);
        x.classList.add("col-4");
        targetNode.appendChild(x);
    })
}

function shuffle() {
    shuffledData = [...originalData].sort(() => .5 - Math.random());
    renderNumbers(shuffledData);
}

function sort() {
    if (JSON.stringify(originalData) === JSON.stringify(shuffledData)) return;
    renderNumbers(originalData);
    shuffledData = [...originalData];
}
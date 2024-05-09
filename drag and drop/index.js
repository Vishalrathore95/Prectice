let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) {
    list.addEventListener("dragstart", function (e) { // Corrected event name to "dragstart"
        let select = e.target;
        
        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function (e) {
            e.preventDefault(); // Prevent the default behavior
            rightBox.appendChild(select);
            select = null;
        });

        leftBox.addEventListener("dragover", function (e) { // Corrected variable name to "leftBox"
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function (e) {
            e.preventDefault(); // Prevent the default behavior
            leftBox.appendChild(select); // Corrected variable name to "leftBox"
            select = null;
        });
    });
}

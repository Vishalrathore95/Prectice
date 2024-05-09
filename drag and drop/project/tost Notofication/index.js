let toastbox = document.getElementById("tostbox");
let successmsg = '<i class="fa-solid fa-square-check"></i> successfully submit';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> error fill out all fields correctly';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i> invalid input, check again!';

function showToast(msg) {
    let toast = document.createElement("div");

    toast.classList.add("toast");
    toast.innerHTML = msg;

    toastbox.appendChild(toast);

    if (msg.includes("error")) {
        toast.classList.add("correctly"); // It seems like a typo, should be "incorrectly" instead of "correctly"
    }
    if (msg.includes("invalid")) {
        toast.classList.add("invalid");
    }
    setTimeout(() => {
        toast.remove();
    }, 6000); // Change this to 5000 if you want it to be removed after 5 seconds
}

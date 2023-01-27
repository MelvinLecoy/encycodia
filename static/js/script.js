const btns = document.querySelectorAll(".lg-btn");
// Collapsible code when button is clicked
btns.forEach(btn =>
    btn.addEventListener("click", function() {
        const code = this.nextElementSibling;
        code.style.display = (code.style.display === "none") ? "block" : "none";
    })
);
// Button color holds when it's clicked until the next time
btns.forEach(btn => btn.addEventListener("click", () => btn.classList.toggle("clicked")));

// Close all opened code sections when details are closed
document.querySelectorAll("details").forEach(element =>
    element.addEventListener("toggle", event => {
        if (!event.target.open) {
            event.target.querySelectorAll(".code").forEach(code => code.style.display = "none");
            event.target.querySelectorAll(".lg-btn").forEach(btn => btn.classList.remove("clicked"));
            event.target.firstElementChild.style.backgroundColor = "";
            event.target.firstElementChild.style.color = "";
        }
        else {
            event.target.firstElementChild.style.backgroundColor = "yellow";
            event.target.firstElementChild.style.color = "black";
        }
    })
);


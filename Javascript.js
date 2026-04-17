const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something")
    } else {
        let list = document.createElement("li")
        list.innerHTML = inputbox.value
        listcontainer.appendChild(list)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        list.appendChild(span)

    }
    inputbox.value = ""
    savedata()

}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savedata()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        savedata()

    }
}, false)

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data")
}
showtask()
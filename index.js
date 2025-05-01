let gagdets = JSON.parse(localStorage.getItem("gadgets")) || []
let techForm = document.getElementById("techform")
let gadgetList = document.getElementById("gadgetList")

techForm.addEventListener("submit" , function(event) {
    event.preventDefault()
    const name = document.getElementById("name").value.trim()
    const model = document.getElementById("model").value.trim()
    const description = document.getElementById("description").value.trim()
    const image = document.getElementById("image").value.trim()

    const gadget = {
        name:name,
        model:model,
        description:description,
        image:image,
    }
    gagdets.push(gadget)
    localStorage.setItem("gadgets" , JSON.stringify(gagdets))
    techForm.reset ()
    displayGadgets(gagdets)
})
function displayGadgets(data) {
    const gadgetList = document.getElementById("gadgetList");
    gadgetList.innerHTML =``
    gagdets.forEach((gagdet,index) => {
        const gadgetdiv = document.createElement(`div`);
        gadgetdiv.className = `gadget-item`;
        gadgetdiv.innerHTML = `<strong>${gagdet.name}</strong>-${gadget.model}<br>${gadget.description}<br><img src=${gagdet.image}" alt =${gadget.name}" width ="100"><br><button onclick="removeGadget(${index})">Remove</button>`;
        gadgetListDiv.appendChild(gadgetdiv);
    });
}
function addGadget() {
    const gadgetInput =document.getElementById(`gadgetInput`);
    if(gadget) {
        gagdets.push(gadget);
        localStorage.setItem(`gadgets` ,JSON.stringify(gadgets));
        gadgetInput.value =``;
        displayGadgets(gadgets)
        gadgetList.appendChild(div)
    }
}
function removeGadget(index) {
    gadgets.splice(index, 1);
    if (gadgets.length === 0) {
        localStorage.removeItem(`gadgets`, JSON.stringify(gadgets));
    }
    displayGadgets(gadgets);
}
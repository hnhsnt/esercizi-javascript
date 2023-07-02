// opera://extensions/
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));
    renderLeads();
});

function renderLeads() {
    let listItems = ""
    for(let i = 0; i<myLeads.length; i++) {
        listItems += `
        <li><a href=' ${myLeads[i]} ' target='_blank'> ${myLeads[i]} </a>
        </li>`;
        // Another way to write this code:
        // create element
        // set text content
        // append to ul
        /* const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li); */
    }
    ulEl.innerHTML = listItems;
}


// json - JavaScript Object Notation
// It's a way for us developers to store and send data.
// Often used when you want to send a piece of data from
// a server to a client (that is to a browser).

/* In our case, we are using the manifest.json file
to configure our app and to provide metadata about it. */

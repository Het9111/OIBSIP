showNotes();
let btn = document.getElementById('btn');
btn.addEventListener("click", function (e) {

    let txtDesc = document.getElementById("txtDesc");
    let txtTitle = document.getElementById("txtTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj= {
        title: txtTitle.value,
        text: txtDesc.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    txtDesc.value = "";
    txtTitle.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html =  `<tr>
                    <td class="listTitle">Title</td>
                    <td class="listDesc">Description</td>
                    <td class="delete">Delete</td>
                  </tr> 
                `;
    notesObj.forEach(function (element, index) {
        html += `
        <tr>
            <td class="dataTitle">${element.title}</td>
            <td class="dataDesc">${element.text}</td>
            <td><button class="deletebtn" id="${index}" onclick = "deleteNotes(this.id)" >Delete</button> </td>
        </tr>  
        `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
     notesElm.innerHTML = `<div id="option">There is no notes available. Please add some notes.</div>`;   
    }
}

function deleteNotes(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index , 1); 
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
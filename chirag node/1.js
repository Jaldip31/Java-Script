const addButton = document.querySelector("#add");
let bgcolor;
let textAreaColor;
let mulcolor, selectl;
let colr = [];
const arr = [];
// -------- > Update Data of Note in localstorage
const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea");
    let notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
};
// -------- > End : Update Data in Note
console.log("array is here:", arr)

// -------- > Add New Note
const addNewNote = (obj) => {
    const note = document.createElement("div");
    note.classList.add("note");
    const htmlData = `
        <div class="operation">
            <button class="edit"> <i class="fas fa-edit"></i> </button>
            <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
            <button class="save"><i class="fas fa-palette"></i>
            <button class="save"><i class="fas fa-palette"></i>

            <select class = "sele" class = "clr2"> <option value="white" selected="white">select</option>
            <option class="c1" value="orange">orange</option>
            <option class="c2" value="skyblue">skyblue</option>
            <option class="c3" value="pink">pink</option> 
            <option class="c4" value="yellow">yellow</option> </select>
            </button>
        </div>
        <div class="main ${obj.note ? "" : "hidden"}"> </div>
        <textarea class="${obj.note ? "hidden" : ""}"></textarea>`;

    note.insertAdjacentHTML("afterbegin", htmlData);
    note.style.backgroundColor=obj.color
    var editButton = note.querySelector(".edit");
    var delButton = note.querySelector(".delete");
    var mainDiv = note.querySelector(".main");
    var textArea = note.querySelector("textarea");
    var sele = note.querySelector(".sele");
    var save = note.querySelectorAll(".save");
    // selectl = note.querySelectorAll(".sele")
    textArea.style.backgroundColor = obj.color;
    // console.log("textArea.style.backgroundColor",textArea.style.backgroundColor)

    // -------- >  Delete Specific note
    delButton.addEventListener("click", () => {
        note.remove();
        updateLSData();

    });

    // -------- >  edit or save note
    textArea.value = obj.note;
    mainDiv.innerHTML = obj.note;
    editButton.addEventListener("click", () => {
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
        // sele.classList.toggle("hidden");
    });

    textArea.addEventListener("change", (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSData();
    });
    document.body.appendChild(note);
    //  -------- > End : edit or save note

    //  -------- >  Add color in note

    sele.addEventListener("change", () => {
        console.log("color background :")
        for (var i = 0; i < save.length; i++) {
            console.log(i)
            var element = save[i]
            mulcolor = note.style.backgroundColor = sele.value
            colr.push(mulcolor);
        }
        localStorage.setItem("background", JSON.stringify(colr))
    })
    window.addEventListener("load",()=>{
        bgcolor = note.style.backgroundColor = color;

    })
};
// -------- >  End : Add New note

// -------- >  get note value or color from localstorage
const notes1 = JSON.parse(localStorage.getItem("notes"));
const notes2 = JSON.parse(localStorage.getItem("ObjectFormat")) ;
const color = JSON.parse(localStorage.getItem("background"));
console.log(notes1)
// if (notes1) {notes1.forEach(note => {
//     console.log(note)
//     addNewNote(note)})
// }

// -------- > Call function for Add note
addButton.addEventListener("click", () => addNewNote({}));


// -------- >  Create Array of Object in localstorage
for (var i = 0; i < notes1.length; i++) {
    const object = {
        note: notes1[i],
        color: color[i]
    }
    arr.push(object)
    console.log("object " + i + ":", object.note);
}
localStorage.setItem("ObjectFormat", JSON.stringify(arr))

const getob = (localStorage.getItem("ObjectFormat"))

if (notes2) {notes2.forEach(note => {
    console.log("arr : : ",note)
    addNewNote(note)})
}
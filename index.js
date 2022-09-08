const container = document.getElementsByClassName("container");


//adding tasks
let tasklist = [];
const T1 = document.getElementById("T1");
const pop1 = document.getElementById("popup1");
function addtask() {
    container[0].style.filter = "blur(0px)"
    T1.style.display = "none";
    pop1.style.display = 'none'
    let values = document.getElementById("name").value;

    let obj1 = {
        lname: values,
    }
    tasklist.push(obj1);

    taskonscreen();
}

//popup for add items
function openPopup() {
    container[0].style.filter = "blur(2px)"
    pop1.style.display = "block";

}

function closePopup() {
    pop1.style.display = 'none'
}



const p = document.getElementById("parent");
let child = document.getElementsByClassName("child");
child[0].style.display = 'none'

const trash = document.getElementById("deletecan");
const addicon = document.getElementById("addit");


//creating card 

function taskonscreen() {

    const child = document.createElement("div");
    child.setAttribute("id", "child");

    child.style.display = 'inline'

    p.appendChild(child);

    let card1 = document.createElement("div");
    card1.setAttribute("id", "card1");
    child.appendChild(card1);




    let storedtxt = card1.innerText = tasklist[tasklist.length - 1].lname;

    if (storedtxt == " " ) {
        container[0].style.filter = "blur(0px)"
        pop1.style.visibility = 'hidden'
       
    } else {

        child.innerHTML = `${storedtxt} <hr> <i style="display: block; color: brown ; cursor: pointer;position: absolute; 
        top: 300px; right: 20px;" id="addit" onclick="addit(this)" class="fa-solid fa-circle-plus"></i>
        <i style="display: block; color: brown; position: absolute; top: 300px; right: 210px;
        " id="deletecan" onclick="deletecan(this)" class="fa-solid fa-trash"; cursor: pointer></i>`
    }
}

//removing the card

function deletecan(thisElem) {
    thisElem.parentElement.remove();

    const child = document.createElement("div");
    child.setAttribute("id", "child");


    if (p.children.length <= 0) {
        T1.style.display = "block";
    }
}

let pop2 = document.getElementById("popup2");
pop2.style.display = 'none';


function addit() {
    container[0].style.filter = "blur(2px)";
    pop2.style.display = "block";
}


function additems() {
    container[0].style.filter = "blur(0px)";
    pop2.style.display = "none";

    inside1()
}

//tasks created inside the card

function inside1() {
    let child = document.getElementById("child")
    child.style.display = 'block'

    let txtt = document.createElement("div")
    child.appendChild(txtt);

    let name2 = document.getElementById("name2").value;

    txtt.innerHTML = `<span style = "text-align:left"  class = "innline" >${name2}</span>
    <span id="show" style="width: 45px; border: 2px solid brown; font-size: 18px;background-color:brown;
    border-radius:10px;position:relative; top:7px; color:white;font-weight: 800; height: 15px;
    line-height:15px;float:right;text-decoration: yellow" class= "show">mark</span>`;


    $(".show").click(function () {
        $(".innline").css("text-decoration", "line-through");
    })

    txtt.style.paddingTop = '20px'
    txtt.style.fontSize ='20px'

}



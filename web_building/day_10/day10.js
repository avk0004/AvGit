const con = document.getElementById("container")
const arr = ["./asset/1.jpg","./asset/2.jpg","./asset/3.jpg","./asset/4.jpg", "./asset/5.jpg","./asset/6.jpg","./asset/7.jpg","./asset/8.jpg"]
const imgactive = document.getElementsByClassName("imags")
console.log(imgactive)
let i = 0
function work()
{
    imgactive[i].classList.remove("active")

    i++;
    if (i >= arr.length)
    {
        i = 0;  

    }
    con.style.backgroundImage = `url(${arr[i]})`;
    imgactive[i].classList.add("active")

}

function left ()
{

    i--;
    if (i <0){
        i = arr.length-1

    } 
    con.style.backgroundImage = `url(${arr[i]})`

}


function slide(a){

    for(let j=0; j<imgactive.length;j++){
        imgactive[j].classList.remove("active")
    }
    con.style.backgroundImage= `url(${arr[a]})`
    imgactive[a].classList.add("active")
    i = a
}

setInterval(work,5000)
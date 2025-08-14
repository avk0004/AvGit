const container = document.getElementById("c")
const arr = ["./asset/1.jpg","./asset/2.jpg","./asset/3.jpg","./asset/4.jpg", "./asset/5.jpg","./asset/6.jpg","./asset/7.jpg","./asset/8.jpg"]
let i = 0
function work()
{
    i++;
    if (i >= arr.length)
    {
        i = 0;  
    }
    container.style.backgroundImage = `url(${arr[i]})`;
}

function left ()
{
    i--
    if (i <=-1){
        i = arr.length
    }
    container.style.backgroundImage = `url(${arr[i]})`
}

function ick(a){
    container.style.backgroundImage= `url(${arr[a]})`
}
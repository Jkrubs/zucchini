let commodity=document.getElementsByClassName("commodity")

for (let i = 0; i < commodity.length; i++) {
    commodity[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    
}
let container=document.getElementById("menu")


function showMenu(){
    container.style.left="0";
}


function hideMenu(){
    container.style.left='-1000px'
}
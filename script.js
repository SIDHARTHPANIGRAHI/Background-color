function changecolor(getcolor){
    let bg=document.querySelector(".bg")
    let selectcolor=getcolor.value;
    let text=getcolor.options[getcolor.selectedIndex].text;
    bg.style.background=selectcolor;
    bg.innerHTML=text;
}
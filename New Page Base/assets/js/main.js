
// This is a local construction to make things from inside unavailable outside

var menuV = false;

function toggleMenu(){
    if(menuV)
    {
        document.getElementById("menuBTN").style.transform="rotate(180deg)";
        document.getElementById("menu").style.right="-1000px";
    }
        
    else {
        document.getElementById("menu").style.right="0px";
        document.getElementById("menuBTN").style.transform="rotate(0deg)";
    }
    
    menuV = !menuV;

    
}

var prev = window.pageYOffset;

window.onscroll = function(){
    var page = document.getElementById("page");
    var bH = document.getElementById("banner").offsetHeight;
    var curr = window.pageYOffset;
    var el = document.getElementById("head");
    if (curr > bH && prev < bH)
    { 
        el.style.pointerEvents = "auto";
        el.style.opacity = "100%";
    }
    else if (curr < bH && prev > bH)
    {
        el.style.pointerEvents = "none";
        el.style.opacity = "0%";
    }
    prev = curr;

}





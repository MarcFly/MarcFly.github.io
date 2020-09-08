
// This is a local construction to make things from inside unavailable outside

var menuV = false;

function toggleMenu(){
    if(menuV) document.getElementById("menu").style.right="-1000px";
        
    else document.getElementById("menu").style.right="0px";
    
    menuV = !menuV;
}

function closeMenu(){
    document.getElementById("menu").style.right="-20%";
}

function chooseBGPic(){
    var randomNum = Math.floor(Math.random() * 24);
    var pixStyle = "linear-gradient(rgba(46, 41, 87, 0.8) 0%, rgba(46, 41, 87, 0.6) 90%, rgba(46, 41, 87, 0.5) 100%), ";
    document.body.style.background = pixStyle + "url('assets/BGImages/" + randomNum + ".jpg')";
    document.body.style.backgroundSize = "cover";
}

var prev_perc = 0;
window.onscroll = function(){
    var page = document.getElementById("page");
    var perc = page.scrollTop - document.getElementById("banner").offsetHeight;
    var el = document.getElementById("hide_head");
    if (perc > 0 && prev_perc < 0)
    { 
        el.style.pointerEvents = "auto";
        el.style.opacity = "100%";
    }
    else if (perc < 0 && prev_perc > 0)
    {
        el.style.pointerEvents = "none";
        el.style.opacity = "0%";
    }
    prev_perc = perc;

}





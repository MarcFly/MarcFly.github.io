
// This is a local construction to make things from inside unavailable outside


function openMenu(){
    document.getElementById("menu").style.right="0%";

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





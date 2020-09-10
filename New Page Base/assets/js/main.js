// Configure Require.js
// This will be base app to load and from here we do

requirejs.config({
    baseUrl: "assets/js/libs",
    paths:{
        app: "../main"
    }
})


// SideBar Menu
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

// Header Hiding on Scrolling

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

// Get Photos from folder

function onLoad(){
    requirejs(["jquery.min", "require"]),
    function($, require){
        const path = require("path");
        const fs = require("fs");
        
        const dirPath = path.join(__dirname, "../assets/images/photography/2019");
        fs.readdir(dirPath, function(err, files){
            if(err){return console.log("Unable to scan dir: " + err)}
        
            var photo_s = document.getElementById("photo_section");
            for(i = 0; i < 4; ++i)
            {
                photo_s.appendChild('<img src="' + files[i] + '">' );
            }
        })
    }
}



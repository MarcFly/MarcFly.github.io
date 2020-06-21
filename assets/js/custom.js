var pixStyle = "linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), ";

var pics = 24;

function choosePic() {
    var randomNum = Math.floor(Math.random() * pics);
    document.body.style.backgroundImage = pixStyle + "url('../../rndImages/" + randomNum + ".jpg')";
}
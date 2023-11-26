var Element = document.getElementById("ImgBorder");
const CurrentMonth = date.getMonth() + 1;
const Path = "WebAssets/SeasonBorder/";
var img = "";

switch(CurrentMonth){
    case 10: img = "Blood.gif"; break;
    case 2: img = "Hearts.gif"; break;
    case 12: img = "Stars.gif"; break;
    case 1:
    case 2: img = "Snow.gif"; break;
    case 3:
    case 4:
    case 5: img = "Flowers.gif"; break;
    case 7:
    case 8:
    case 9: img = "Clouds.gif"; break;
    case 9:
    case 10:
    case 11: img = "Rain.gif"; break;

}

Element.src = Path + img;
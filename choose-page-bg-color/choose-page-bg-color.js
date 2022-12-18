function changecolor() {

    switch (document.getElementById("bgcolors").value)
    {
        case "white":
        document.getElementById("background").style.backgroundColor = "white"; break;
        case "blue":
        document.getElementById("background").style.backgroundColor = "aqua"; break;
        case "grey":
        document.getElementById("background").style.backgroundColor = "grey"; break;  
        case "green":
        document.getElementById("background").style.backgroundColor = "green"; break;
        case "pink":
        document.getElementById("background").style.backgroundColor = "pink"; break;
        case "beige":
        document.getElementById("background").style.backgroundColor = "beige"; break;    
    }

} 

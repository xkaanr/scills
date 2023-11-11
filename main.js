var childInput = document.getElementById("child"),
    btn = document.getElementsByTagName("button"),
    number = document.getElementById("num"),
    i  = 10;

number.innerHTML = i + "%";

btn[1].onclick = function () {
    
    "use strict";
    
    i = i + 10;
    
    childInput.style.width = i + "%";
    
    number.innerHTML = i + "%";
    
    if ( i > 100) {
        
        i = 100;
        
        childInput.style.width = i + "%";
    
        number.innerHTML = i + "%";
        
    }
    
}

btn[0].onclick = function () {
    
    "use strict";
    
    i = i - 10;
    
    childInput.style.width = i + "%";
    
    number.innerHTML = i + "%";
    
    if ( i < 0) {
        
        i = 0;
        
        childInput.style.width = i + "%";
    
        number.innerHTML = i + "%";
        
    }
    
}
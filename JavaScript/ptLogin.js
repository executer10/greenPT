let fontSizeONOFF = document.querySelector('.loginButton');
fontSizeEvent(fontSizeONOFF);

function fontSizeEvent(element){
    element.onmouseover = function(){
        this.style.fontSize = '28px';
    }
    element.onmouseout = function(){
        this.style.fontSize = '20px';
    }
}
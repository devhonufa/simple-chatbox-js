const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");


setTimeout(girlContent, 2000);
function girlContent(){
    content1.style.display = "flex";
    content1.style.transition = "2s ease all";
    content1.innerHTML = `<h3>Hi, Adil❤️</h3>`;
}

setTimeout(boyContent, 4000);
function boyContent(){
    content2.style.display = "flex";
    content2.style.transition = "2s ease all";
    content2.innerHTML = `<h3>Hello, Haniya❤️</h3>`;
}

setTimeout(girlContentOne, 6000);
function girlContentOne(){
    content3.style.display = "flex";
    content3.style.transition = "2s ease all";
    content3.innerHTML = `<h3>How are you?</h3>`;
}

setTimeout(boyContentOne, 8000);
function boyContentOne(){
    content4.style.display = "flex";
    content4.style.transition = "2s ease all";
    content4.innerHTML = `<h3>I am Fine 😊</h3>`;
}
const newImage = new Image();
newImage.src = "../pictures/alastor.jpeg";
newImage.onload= () => {
    console.log('yay :)');
};
newImage.onerror= () => {
    console.log('sed');
};
const newImage2= new Image();
newImage2.src="../pictures/cyn.jpg";
document.body.appendChild(newImage);
document.body.appendChild(newImage2);
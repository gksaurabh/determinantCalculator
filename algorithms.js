


document.getElementById("setMatrixButton").addEventListener("click", saveUserData);



function saveUserData(){
    var dimension = document.getElementById("n-dimension").value;
   
    
    const h1 = document.createElement("h1");
    const textNode = document.createTextNode(dimension)
    h1.appendChild(textNode);
    document.getElementById("testPrint").appendChild(h1);
    
    console.log(dimension)

}
function calculate()
{
    //variables
    let economy = document.getElementById("economy").value; 
    let distance = document.getElementById("distance").value;
    let fuel = document.getElementById("fuel").value; 
    //calculate fuel / distance cost
    let LitreCost = (economy * fuel) / 100;
    //display
    document.getElementById("display").innerHTML = "This trip will cost you $" + Math.round((LitreCost * distance));
}
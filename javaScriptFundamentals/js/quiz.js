const printResult = () => {
    let usrText = document.getElementById("userInput").value; 
    let totalN = 0;

    for (let i = 0; i < usrText.length; i++) {
        if(usrText[i].toLowerCase() === 'n') {
            totalN++;
            window.alert(totalN);
        }
    }

    document.getElementById("result").innerHTML = "Total n's = " + totalN;
}

const printList = () => {
    let groList = ["Milk", "Egg", "Chicken", "Sausage"];
    
    //window.alert(groList.length);

    // Add item at end of array
    groList.push('Ham');

    // Add item to the front of array
    groList.unshift('Cheese');

    // Remove item from end of array
    groList.pop();

    // Remove item from front of array
    groList.shift();

    for (let i = 0; i < groList.length; i++) {
        window.alert(groList[i]);
        document.getElementById("groceryList").innerHTML = groList[i];
    }
}
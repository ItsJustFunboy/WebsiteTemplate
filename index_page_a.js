const textSendButton = document.getElementById("mainInputBoxSendButton");
const resultLabel = document.getElementById("resultLabel");
const inputBox = document.getElementById("mainUInputBox");

if (textSendButton, resultLabel, inputBox) {
    console.log("All label/input elements found.")
} else {
    console.error("Not all label/input elements have been found.")
};

document.addEventListener("DOMContentLoaded", function() {
   
    textSendButton.addEventListener("click", clickEventHandler);
});


function getTextFromUserInput(){
    console.log("getTextRequest Sent.")
    inputBoxVal = document.getElementById("mainUInputBox").value;
    return(inputBoxVal);
};

function setLabelToFunctionResult(local_desiredValue){
    console.log("setTextRequest Sent.")
    resultLabel.innerHTML = local_desiredValue;
    return null;
};

function processUserInput(){
    console.log("ProcessInputRequest Sent.")
    inputText = getTextFromUserInput()

    //complex stuff goes here

    finalResponse = "Placeholder"
    setLabelToFunctionResult(finalResponse)
    return null;
};

function clickEventHandler(){
    console.log("SendButtonRequest Sent.")
    processUserInput();
    return null;
}





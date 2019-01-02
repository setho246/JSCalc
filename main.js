var calced = false; //Tracks if the last action made was to calc()

/*
 * When a num button is clicked, add it to the end of the screen
 *
 * If calced is true, clean screen first
 */
function input(clicked) {
    if(calced) {
        clean();
        calced = false;
    }
    document.getElementById("screen").value = document.getElementById("screen").value + clicked;
}

/*
 * When action button is clicked, add it to the end of the screen
 *
 * If calced is true, set it is false
 */
function actionInput(clicked) {
    if(calced) {
        calced = false;
    }
    document.getElementById("screen").value = document.getElementById("screen").value + clicked;
}

/*
 * When < button is clicked, remove the last character from the screen
 */
function back() {
    var current = document.getElementById("screen").value;
    document.getElementById("screen").value = current.substring(0, current.length-1);
}

/*
 * Cleans the screen of all charaters
 */
function clean() {
    document.getElementById("screen").value = '';
}

/*
 * Calculates the content of the screen
 *
 * If decimals are present, rounds to 2dp.
 * 
 * If last character is an action character (+, -, /, *) presents an error message
 */
function calc() {
    
    if(document.getElementById("screen").value === "Error") {
        return;
    }
    
    try {
        if (document.getElementById("screen").value.includes('.')) {
            document.getElementById("screen").value = eval(document.getElementById("screen").value).toFixed(2);
        } else {
            document.getElementById("screen").value = eval(document.getElementById("screen").value);
        }
        calced = true;
    } catch (err) {
        document.getElementById("screen").value = "Error";
        calced = true;
    }
}
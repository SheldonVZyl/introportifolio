var input = "Javascript is awesome";
var output = " ";
for (let i = 0; i < input.length; i++) {
    if (input[i].toLowerCase() === "a") {
        output += 4;
    }
    else if (input[i].toLowerCase() === "e") {
        output += 3;
    }
    else if (input[i].toLowerCase() === "i") {
        output += 1;
    }
    else if (input[i].toLowerCase() === "o") {
        output += 0;
    }
    else {
        output += input[i];
    };

};
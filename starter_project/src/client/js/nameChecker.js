function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);


    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/[\w-./?%&=]*)?$/i;

    if (urlRegex.test(inputText)) {
        console.log("Valid URL provided:", inputText);
    } else {
        alert("Please enter a valid URL!");
    }
}

export { checkForName };

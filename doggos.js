const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");


function addNewDog() {
    const promise = fetch(DOG_URL);
    promise.then(function(responce) {
            const processingPromise = responce.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img)
            console.log(processedResponse.message)
        });

    console.log("This will log first");
}

document.querySelector(".add-doggo").addEventListener("click", addNewDog)
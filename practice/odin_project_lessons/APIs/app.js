const img = document.querySelector('img');
const btn = document.querySelector('button');
const input = document.querySelector('input')
let query = "pokemon"
btn.onclick = replaceGif;

async function replaceGif() {
    if (input.value != "") {
        query = input.value;
    };

    let queryResult = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=10YMYw3C0R31pNY2yK4Wf3YsAPMNP5yp&s=${query}`, { mode: "cors" });
    let url = await queryResult.json();

    try {
        img.src = url.data.images.original.url;
        let span = document.querySelector('span').classList.add("hidden");
    } catch {
        let span = document.querySelector('span').classList.remove("hidden");
        img.src = "https://cdn.iconscout.com/icon/premium/png-512-thumb/oh-no-face-3472821-2906934.png"
    }
}

btn.click();
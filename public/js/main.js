document.querySelector("button").addEventListener("click", getRapperName);
const nameH2 = document.querySelector("#name");
const ageH2 = document.querySelector("#age");
const locationH2 = document.querySelector("#location");

const inputText = document.querySelector("input");

async function getRapperName() {
    const rapperName = inputText.value;
    console.log("debug", rapperName);
    try {
        const res = await fetch(
            `https://good-rose-barracuda-tutu.cyclic.app/api/${rapperName}`
        );
        const data = await res.json();

        nameH2.innerText = data["birthName"];
        ageH2.innerText = data["age"];
        locationH2.innerText = data["birthLocation"];
    } catch (err) {
        console.log(err);
    }
}

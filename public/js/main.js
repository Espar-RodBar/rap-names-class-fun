console.log("index loaded");
document.querySelector("button").addEventListener("click", getRapperName);
const inputText = document.querySelector("input");

async function getRapperName() {
    const rapperName = inputText.value;
    console.log("debug", rapperName);
    try {
        const res = await fetch(
            `https://good-rose-barracuda-tutu.cyclic.app//api/${rapperName}`
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

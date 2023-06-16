console.log("index loaded");
document.querySelector("button").addEventListener("click", getRapperName);
const inputText = document.querySelector("input");

async function getRapperName() {
    const rapperName = inputText.textContent;
    try {
        const res = await fetch(
            `https://good-rose-barracuda-tutu.cyclic.app//api/${rapperName}`
        );
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

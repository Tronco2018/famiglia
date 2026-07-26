const main_lore = document.getElementById("main-lore");
const para = document.getElementById("lore");
const filename = "res/vattalore.txt"

async function update_lore() {
    if (!para) return;
    try {
        const response = await fetch(filename);

        if (!response.ok) {throw new Error(`Stat:${response.status}`)}

        const result = await response.text();
        if (result.length == 0)  {
            throw new Error(`Void`);
        }
        para.innerText = result;
    } catch (error) {
        main_lore.style.display = "none";
    }
}
update_lore();
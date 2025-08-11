const names = [ "carlos", "marianne", "Nhuamai", "erika", "Casandra", "Blair", "ekho", "naomi", "jesus", "gael", "kazi", "rosie", "fany", "emilio", "nicko"]
const number=Math.floor(Math.random() * names.length);
document.getElementById("Name").textContent = names[number] = "You sadly going call " +  names[number] + ".";
document.getElementById("generate").addEventListener("click", function() {
    const number = Math.floor(Math.random() * names.length);
    document.getElementById("Name").textContent = "You sadly going call " + names[number] + ".";
})
const display = document.querySelector(".display_head_player");
const iframe = document.createElement("iframe");
const pseudos = ["Yoshbiskar", "Royal14"];

iframe.src = `https://minecraft-api.com/api/skins/${pseudos[1]}/head`
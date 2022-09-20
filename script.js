function showStuff(card, tag) {
    document.getElementById(card).style.display = "none";
    document.getElementById(tag).style.display = "flex";
}

function hideStuff(card, tag) {
    document.getElementById(card).style.display = "flex";
    document.getElementById(tag).style.display = "none";
}
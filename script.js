let text = document.getElementById("text");
text.addEventListener("keyup", () => {
localStorage.setItem('name', text.value);
});
if (localStorage.getItem('name')) {
text.value = localStorage.getItem('name');
}
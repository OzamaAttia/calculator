let display = document.getElementById("screen");

const wipe = () => {
    display.value = "";
};

const arafa = () => {
    display.value = "ايوا ياعرفه";
};

const show = (n) => {
    display.value += n;
};

const calc = () => {
    display.value = eval(display.value);
}

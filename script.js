// Фон, меняющийся от 0,0,0 до 13,13,13
let colorValue = 0;
let increasing = true;

function updateBackground() {
    document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    
    if (increasing) {
        colorValue += 1;
        if (colorValue >= 13) {
            increasing = false;
        }
    } else {
        colorValue -= 1;
        if (colorValue <= 0) {
            increasing = true;
        }
    }
    
    setTimeout(updateBackground, 100);
}

// Список шрифтов для заголовка
const fonts = [
    "'Arial', sans-serif",
    "'Courier New', monospace",
    "'Times New Roman', serif",
    "'Verdana', sans-serif",
    "'Georgia', serif",
    "'Palatino', serif",
    "'Garamond', serif",
    "'Comic Sans MS', cursive",
    "'Impact', sans-serif",
    "'Trebuchet MS', sans-serif"
];

function changeFont() {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById('title').style.fontFamily = randomFont;
    setTimeout(changeFont, 100);
}

// Запуск анимаций
window.onload = function() {
    updateBackground();
    changeFont();
};

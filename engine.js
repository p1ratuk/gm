const canvas = document.getElementById('gameCanvas');
const gl = canvas.getContext('webgl');

// шейдеры в строках для экономии файлов
const vsSource = `attribute vec4 aPos; void main() { gl_Position = aPos; }`;
const fsSource = `void main() { gl_FragColor = vec4(0.2, 0.2, 0.2, 1.0); }`;

function init() {
    // 1. настройка webgl (компиляция шейдеров, буферы)
    // 2. настройка камеры (матрицы вида)
    // 3. цикл gameLoop
    requestAnimationFrame(render);
}

function render() {
    // очистка кадра
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // здесь отрисовка стен, стола и объектов
    requestAnimationFrame(render);
}

// логика взаимодействия и зарплата
document.addEventListener('click', () => {
    // проверка попадания луча (raycast) в деталь пк
});

init();

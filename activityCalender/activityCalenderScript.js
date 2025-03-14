const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawPolygon();

    drawTriangle1();
    drawTriangle2();
    drawTriangle3();

    drawTinyArc1();
    drawTinyArc2();
    drawTinyArc3();

    drawLinesAroundRectangle();
    drawLinesAroundImage();

    drawArc();
    drawDiagonalLine();
    drawCircle(0.33 * canvas.width, 0.98 * canvas.height, "#FAFAD2");
    drawCircle(0.45 * canvas.width, 0.02 * canvas.height, "#FAFAD2");
};

function drawLinesAroundRectangle() {
    const radius = 20; // Pas de straal van de afgeronde hoeken aan
    const x1 = 0.442 * canvas.width;
    const y1 = 0.02 * canvas.height;
    const x2 = 0.98 * canvas.width;
    const y2 = 0.98 * canvas.height;

    ctx.beginPath();
    ctx.moveTo(x1 + radius, y1); // Begin met een kleine offset om ruimte te maken voor de bocht
    ctx.lineTo(x2 - radius, y1); // Bovenste lijn
    ctx.arcTo(x2, y1, x2, y1 + radius, radius); // Boven-rechts hoek
    ctx.lineTo(x2, y2 - radius); // Rechter lijn
    ctx.arcTo(x2, y2, x2 - radius, y2, radius); // Rechts-onder hoek
    ctx.lineTo(x1 + radius, y2); // Onderste lijn
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.stroke();
};

function drawLinesAroundImage() {
    ctx.beginPath();
    ctx.moveTo(0.33 * canvas.width, 0.98 * canvas.height);
    ctx.lineTo(0.02 * canvas.width, 0.98 * canvas.height);
    ctx.lineTo(0.02 * canvas.width, 0.02 * canvas.height);
    ctx.lineTo(0.33 * canvas.width, 0.02 * canvas.height);
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.stroke();
};

function drawPolygon() {
    // Definieer de punten van de polygon als percentages
    const percentagePoints = [
        { x: 0.45, y: 0.02 },
        { x: 0.98, y: 0.02 },
        { x: 0.98, y: 0.98 },
        { x: 0.45, y: 0.98 },
    ];

    // Converteer percentagepunten naar pixelcoördinaten
    const points = percentagePoints.map(pt => ({
        x: pt.x * canvas.width,
        y: pt.y * canvas.height
    }));

    // Teken de polygon
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    };

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;

    ctx.closePath();
    ctx.stroke();
};

function drawArc() {
    ctx.beginPath();
    ctx.moveTo(0.45 * canvas.width, 0.02 * canvas.height);
    ctx.quadraticCurveTo(0.338 * canvas.width, 0.2 * canvas.height, 0.33 * canvas.width, 0.98 * canvas.height);
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
    ctx.stroke();
};

function drawTinyArc1() {
    ctx.beginPath();
    ctx.moveTo(0.45 * canvas.width, 0.02 * canvas.height);
    ctx.quadraticCurveTo(0.40 * canvas.width, 0.1 * canvas.height, 0.368 * canvas.width, 0.32 * canvas.height);

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

function drawTinyArc2() {
    ctx.beginPath();
    ctx.moveTo(0.368 * canvas.width, 0.32 * canvas.height);
    ctx.quadraticCurveTo(0.33 * canvas.width, 0.65 * canvas.height, 0.33 * canvas.width, 0.98 * canvas.height);

    ctx.fillStyle = "#FAFAD2";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

function drawTinyArc3() {
    ctx.beginPath();
    ctx.moveTo(0.45 * canvas.width, 0.02 * canvas.height);
    ctx.quadraticCurveTo(0.40 * canvas.width, 0.1 * canvas.height, 0.368 * canvas.width, 0.32 * canvas.height);

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

function drawTriangle1() {
    // the triangle
    ctx.beginPath();
    ctx.moveTo(0.45 * canvas.width, 0.02 * canvas.height);
    ctx.lineTo(0.45 * canvas.width, 0.98 * canvas.height);
    ctx.lineTo(0.368 * canvas.width, 0.32 * canvas.height);

    // the fill color
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

function drawTriangle2() {
    // the triangle
    ctx.beginPath();
    ctx.moveTo(0.368 * canvas.width, 0.32 * canvas.height);
    ctx.lineTo(0.45 * canvas.width, 0.98 * canvas.height);
    ctx.lineTo(0.33 * canvas.width, 0.98 * canvas.height);

    // the fill color
    ctx.fillStyle = "#FAFAD2";
    ctx.fill();
    ctx.strokeStyle = "#FAFAD2";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

};

function drawTriangle3() {
    // the triangle
    ctx.beginPath();
    ctx.moveTo(0.33 * canvas.width, 0.02 * canvas.height);
    ctx.lineTo(0.45 * canvas.width, 0.02 * canvas.height);
    ctx.lineTo(0.368 * canvas.width, 0.32 * canvas.height);

    // the fill color
    ctx.fillStyle = "#FAFAD2";
    ctx.fill();
    ctx.strokeStyle = "#FAFAD2";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
};

function drawDiagonalLine() {
    ctx.beginPath();
    const diagStartPercentage = { x: 0.33, y: 0.02 };
    const diagEndPercentage = { x: 0.45, y: 0.98 };

    const diagStart = {
        x: diagStartPercentage.x * canvas.width,
        y: diagStartPercentage.y * canvas.height
    };
    const diagEnd = {
        x: diagEndPercentage.x * canvas.width,
        y: diagEndPercentage.y * canvas.height
    };

    ctx.moveTo(diagStart.x, diagStart.y);
    ctx.lineTo(diagEnd.x, diagEnd.y);

    ctx.moveTo(0.33 * canvas.width, 0.98 * canvas.height);

    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.stroke();
};

function drawCircle(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
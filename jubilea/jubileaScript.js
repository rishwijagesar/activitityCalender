const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawLinesAroundRectangle();
    drawTriangle1();
    drawTriangle2();
    drawTriangle3();

    drawTinyArc1();
    drawTinyArc2();
    
    
    drawLinesAroundImage();

    drawArc();
    drawDiagonalLine();
    drawCircle(0.60 * canvas.width, 0.02 * canvas.height, "#FAFAD2");
    drawCircle(0.60 * canvas.width, 0.98 * canvas.height, "#FAFAD2");
};

function drawLinesAroundRectangle() {
    const radius = 20; // Straal van de afgeronde hoeken

    const x1 = 0.02 * canvas.width;
    const y1 = 0.02 * canvas.height;
    const x2 = 0.447 * canvas.width;
    const y2 = 0.98 * canvas.height;

    ctx.beginPath();
    ctx.moveTo(x1 + radius, y1); // Beginpunt met afgeronde hoek
    ctx.lineTo(x2 - radius, y1); // Bovenste lijn
    ctx.arcTo(x2, y1, x2, y1 + radius, radius); // Boven-rechts hoek
    ctx.lineTo(x2, y2 - radius); // Rechter lijn
    ctx.arcTo(x2, y2, x2 - radius, y2, radius); // Rechts-onder hoek
    ctx.lineTo(x1 + radius, y2); // Onderste lijn
    ctx.arcTo(x1, y2, x1, y2 - radius, radius); // Onder-links hoek
    ctx.lineTo(x1, y1 + radius); // Linker lijn
    ctx.arcTo(x1, y1, x1 + radius, y1, radius); // Links-boven hoek

    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();
};

function drawLinesAroundImage() {
    ctx.beginPath();
    ctx.moveTo(0.60 * canvas.width, 0.02 * canvas.height);
    ctx.lineTo(0.98 * canvas.width, 0.02 * canvas.height);
    ctx.lineTo(0.98 * canvas.width, 0.98 * canvas.height);
    ctx.lineTo(0.60 * canvas.width, 0.98 * canvas.height);
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.stroke();
};

function drawArc() {
    ctx.beginPath();
    ctx.moveTo(0.40 * canvas.width, 0.02 * canvas.height); // Startpunt
    ctx.quadraticCurveTo(0.3 * canvas.width, 0.7 * canvas.height, 0.60 * canvas.width, 0.98 * canvas.height); 
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
    ctx.stroke();
};

function drawDiagonalLine() {
    ctx.beginPath();
    const diagStartPercentage = { x: 0.60, y: 0.02 };
    const diagEndPercentage = { x: 0.40, y: 0.98 };

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

function drawTriangle1() {
    // the triangle
    ctx.beginPath();
    ctx.moveTo(0.60 * canvas.width, 0.019 * canvas.height);
    ctx.lineTo(0.447 * canvas.width, 0.755 * canvas.height);
    ctx.lineTo(0.40 * canvas.width, 0.019 * canvas.height);

    // the fill color
    ctx.fillStyle = "#FAFAD2";
    ctx.fill();
    ctx.strokeStyle = "#FAFAD2";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
};

function drawTriangle2() {
    // the triangle
    ctx.beginPath();
    ctx.moveTo(0.447 * canvas.width, 0.755 * canvas.height);
    ctx.lineTo(0.54 * canvas.width, 0.98 * canvas.height);
    ctx.lineTo(0.40 * canvas.width, 0.98 * canvas.height);

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
    ctx.moveTo(0.447 * canvas.width, 0.755 * canvas.height);
    ctx.lineTo(0.50 * canvas.width, 0.98 * canvas.height);
    ctx.lineTo(0.40 * canvas.width, 0.98 * canvas.height);

    // the fill color
    ctx.fillStyle = "#FAFAD2";
    ctx.fill();
    ctx.strokeStyle = "#FAFAD2";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
};

function drawTinyArc1() {
    ctx.beginPath();
    ctx.moveTo(0.4 * canvas.width, 0.02 * canvas.height);
    ctx.quadraticCurveTo(0.35 * canvas.width, 0.34 * canvas.height, 0.447 * canvas.width, 0.755 * canvas.height);

    ctx.fillStyle = "#FAFAD2";
    ctx.fill();
    ctx.strokeStyle = "#FAFAD2";;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
};

function drawTinyArc2() {
    ctx.beginPath();

    // Coördinaten (geschaald naar canvas)
    const x1 = 0.447 * canvas.width, y1 = 0.755 * canvas.height; // Startpunt
    const x2 = 0.6 * canvas.width, y2 = 0.98 * canvas.height; // Eindpunt
    const curveX = 0.505 * canvas.width, curveY = 0.895 * canvas.height; // Controlepunt voor de kromming

    // Start de driehoek
    ctx.moveTo(x1, y1);

    // Teken de gebogen zijde als onderkant
    ctx.quadraticCurveTo(curveX, curveY, x2, y2);

    // Sluit de driehoek
    ctx.lineTo(x1, y2);
    ctx.closePath();

    // Vul de driehoek met oranje kleur
    ctx.fillStyle = "#FAFAD2";
    ctx.fill();
    ctx.stroke();
};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
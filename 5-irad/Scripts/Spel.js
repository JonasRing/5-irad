// Get the canvas context
var spelCanvas = document.getElementById("board");
var spelContext = spelCanvas.getContext("2d");
var CirkelImage = document.getElementById('Cirkel');
var KryssImage = document.getElementById('Kryss');

// Draw the Spel board 

drawBoard();
function drawBoard() {
    spelContext.clearRect(0, 0, 900, 900);
    spelContext.fillStyle = "grey";
    spelContext.strokeStyle = "red";
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
            spelContext.beginPath();
            spelContext.lineWidth = "1";
            spelContext.strokeStyle = "black";
            spelContext.rect(100 * x, 100 * y, 100, 100);
            spelContext.stroke();


        }
    }
}
// Get Click-coordination and draw the: X and O
$('#board').on('click', function (e) {

    x = e.pageX - spelCanvas.offsetLeft;
    y = e.pageY - spelCanvas.offsetTop;
    var X = x / 100; var Y = y / 100;
    var X = -(Math.ceil(-X)); var Y = -(Math.ceil(-Y));
    var X = (X * 100); var Y = (Y * 100);

    // window.alert("You Clicked!!!");
    Image = CirkelImage;
    spelContext.drawImage(Image, X, Y, 90, 90);
    spelContext.strokeStyle = "black";
    var fig = [Image, X, Y];
    var colfig = [fig];
    // Swap the imges
    Image = CirkelImage;
    CirkelImage = KryssImage;
    KryssImage = Image;

    //canvas.strokeStyle = "black";



});
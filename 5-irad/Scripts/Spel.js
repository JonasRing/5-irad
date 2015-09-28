//window.onload = window.alert("test");

window.onload = function () {
    //    init();
    window.alert("test");
    drawBoard();
    
};

//<script id="spel board" type="text/javascript">

var kryssImage = new Image();
var CirkelImage = new Image();

kryssImage.src = "Content/Images/kryss.png";
CirkelImage.src = "Content/Images/Cirkel.png";
// Get the canvas context
var spelCanvas = document.getElementById("board");
var spelContext = spelCanvas.getContext("2d");


// Draw the Spel board
function drawBoard() {
    spelContext.clearRect(0, 0, 900, 900);
    spelContext.fillStyle = "grey";
    spelContext.strokeStyle = "red";
	
    // Draw the alternating squares
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {

            spelContext.beginPath();
            spelContext.lineWidth = "1";
            spelContext.strokeStyle = "black";
            spelContext.rect(100* x, 100 * y, 100, 100);
            spelContext.stroke();

        }
    }
}
// Add a border around the entire board
spelContext.strokeRect(0, 0, 900, 900);
$('#board').on('click', function(e){

    window.alert("du klickade på brädet");
    var canvas = document.getElementById('board'),
    x = e.pageX - canvas.offsetLeft,
    y = e.pageY - canvas.offsetTop;
    X=x/100,Y=y/100;
    X=-(Math.ceil(-X));Y=-(Math.ceil(-Y))
    X=(X*100),Y=(Y*100);
    Image=CirkelImage;
    spelContext.drawImage(Image, X,Y, 90, 90);
    spelContext.strokeStyle = "black";
    var fig=[Image,X,Y];
    var colfig=[fig];

    Image=CirkelImage;
    CirkelImage=kryssImage;
    kryssImage=Image;
    spelContext.strokeStyle = "black";


    //spelContext.drawImage(CirkelImage, X,Y, 100, 100);
    //spelContext.stroke();

});

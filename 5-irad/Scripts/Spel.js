// Get the canvas context
var spelCanvas = document.getElementById("board");
var spelContext = spelCanvas.getContext("2d");
var CirkelImage = document.getElementById('Cirkel');
var KryssImage = document.getElementById('Kryss');
var Square = {};
var SquareCollection = new Array(30); for (i = 0; i < 30; i++) { SquareCollection[i] = new Array(30); };


for (i = 0; i < 30; i++) {
    for (j = 0; j < 30; j++) {
        SquareCollection[i][j] = Square;
    };
};
// Draw the Spel board 

drawBoard();
function drawBoard() {
    spelContext.clearRect(0, 0, 30, 30);
    spelContext.fillStyle = "grey";
    spelContext.strokeStyle = "red";
    for (var x = 0; x < 30; x++) {
        for (var y = 0; y < 30; y++) {
            spelContext.beginPath();
            spelContext.lineWidth = "1";
            spelContext.strokeStyle = "black";
            spelContext.rect(30 * x, 30 * y, 30, 30);
            spelContext.stroke();


        }
    }
}



$('#board').on('click', function (e) {

    x = e.pageX - spelCanvas.offsetLeft;
    y = e.pageY - spelCanvas.offsetTop;
    var X = x / 30; var Y = y / 30;
    //var xc = X;
    //var yc = Y;
    var X = -(Math.ceil(-X)); var Y = -(Math.ceil(-Y));
    var xc = X;
    var yc = Y;
    var X = (X * 30); var Y = (Y * 30);
    if (!SquareCollection[xc][yc].clicked) {
        // window.alert("You Clicked!!!");
        Image = KryssImage;
        // if (!(SquareCollection[SquareCollection.length-1].clickedOrNot)){


        spelContext.drawImage(Image, X, Y, 30, 30);
        SquareCollection[xc][yc] = { clickImage: Image.id, clicked: true };//Square
        // Collect all square and info

        //SquareCollection.push(Square);
        //}
        //else {
        //  window.alert("You clicked in the same Square!!! ");
        //}
        //window.alert("row:"+xc+"column:"+yc+"___"+"Type of Image: " + Image.id);
        //window.alert("Row:" + yc + "Column:" + xc);
        window.alert("X:" + xc + "Y:" + yc + "___" + "Image:" + SquareCollection[xc][yc].clickImage + "--" + "clicked?" + SquareCollection[xc][yc].clicked);

        spelContext.strokeStyle = "black";
        var fig = [Image, X, Y];
        var colfig = [fig];
        // Swap the imges
        Image = KryssImage;
        KryssImage = CirkelImage;
        CirkelImage = Image;
    }
    else {
        window.alert("The Square has been Clicked before!!! Try another Square. ");

    };
});
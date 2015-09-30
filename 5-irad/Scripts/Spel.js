// Get the canvas context
var spelCanvas = document.getElementById("board");
var spelContext = spelCanvas.getContext("2d");
var CirkelImage = document.getElementById('Cirkel');
var KryssImage = document.getElementById('Kryss');

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
var Square = new Square("Kryss", false);
var SquareCollection = new Array();
SquareCollection.push(Square);
// SquareCollection[0] = Square;
// Get Click-coordination and draw the: X and O
//if (!SquareCollection[0].clickedOrNot) {



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

    // window.alert("You Clicked!!!");
    Image = KryssImage;
    // if (!(SquareCollection[SquareCollection.length-1].clickedOrNot)){


    spelContext.drawImage(Image, X, Y, 30, 30);
    Square.click_image = Image.id;
    Square.clicked = true;
    var SquareCollection = [[Square.click_image, Square.clicked]];
    // Collect all square and info

    //SquareCollection.push(Square);
    //}
    //else {
    //  window.alert("You clicked in the same Square!!! ");
    //}
    //window.alert("row:"+xc+"column:"+yc+"___"+"Type of Image: " + Image.id);
    //window.alert("Row:" + yc + "Column:" + xc);
    //window.alert("Image:" + SquareCollection[0][0] + "--" + "clicked?" + SquareCollection[0][1]);
    document.getElementById('success').innerHTML = ("Image:" + SquareCollection[0][0] + "--" + "clicked?" + SquareCollection[0][1]);
    spelContext.strokeStyle = "black";
    var fig = [Image, X, Y];
    var colfig = [fig];
    // Swap the imges
    Image = KryssImage;
    KryssImage = CirkelImage;
    CirkelImage = Image;
    //canvas.strokeStyle = "black";
});

function Square(click_image, clicked) {

    this.click_image = click_image;
    this.clicked = clicked;
}
/*}
 else {
     window.alert("You clicked in the same Square!!! ");
         
 }
 */

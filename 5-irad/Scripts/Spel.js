// Get the canvas context
var spelCanvas = document.getElementById("board");
var spelContext = spelCanvas.getContext("2d");
var CirkelImage = document.getElementById('Cirkel');
var KryssImage = document.getElementById('Kryss');
var Square = {};
var win;
var level;
var rep;
var SquareCollection = new Array(30); for (i = 0; i < 30; i++) { SquareCollection[i] = new Array(30); };
var yc;
var xc;
var sendXX;
var sendYY;
var geX;
var geY;
var senastDrag;
var Image;

document.getElementById("NyttS").addEventListener("click", drawBoard, false);


// Draw the Spel board 

drawBoard();
function drawBoard() {
    for (i = 0; i < 30; i++) {
        for (j = 0; j < 30; j++) {
            SquareCollection[i][j] = Square;
        };
    };
    document.getElementById('success').innerHTML = ("Nytt bräde");
    spelContext.clearRect(0, 0, spelCanvas.width, spelCanvas.height);
    spelContext.clearRect(0, 0, 30, 30);
    spelContext.fillStyle = "grey";
    spelContext.strokeStyle = "red";
    for (var x = 0; x < 30; x++) {
        for (var y = 0; y < 30; y++) {
            spelContext.beginPath();
            spelContext.lineWidth = "1";
            spelContext.strokeStyle = "white";
            spelContext.rect(30 * x, 30 * y, 30, 30);
            spelContext.stroke();


        }
    }
}

function submitForm() {

    var model = new Object();
    //model.ID = 120;
    model.Name = "hej";
    model.Wins = 360;
    model.Points = 480;

    $.ajax({
        url: '/Home/Points',
        type: 'POST',
        async: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        //processData: false,
        data: JSON.stringify({ highscore: model }),

        success: function (data) {
            alert(data);
        }
    });

}

$(document).ready(function () {
    // Reference the auto-generated proxy for the hub.
    var chat = $.connection.luffarHub;
    // Create a function that the hub can call back to display messages.
    chat.client.addNewMessageToPage = function (name, message, sendX, sendY) {
        // Add the message to the page.
        if ($('#displayname').val() != name)
        {
    sendXX = sendX;
    sendYY = sendY;
    addDrag(Image);
        }
        $('#discussion').append('<li><strong>' + htmlEncode(name)
            + '</strong>: ' + htmlEncode(message) + htmlEncode(sendX) + htmlEncode(sendY) + '</li>');

        senastDrag = name;
       

    };
    // Get the user name and store it to prepend to messages.
    $('#displayname').val(prompt('Enter your name:', ''));
    // Set initial focus to message input box.
    $('#message').focus();
    // Start the connection.
    $.connection.hub.start().done(function () {


        //$('#board').click(function () {

        //    chat.server.send($('#displayname').val(), $('#message').val(), xc.toString(), yc.toString());
        //    $('#board').focus();

        //});
        $('#board').click(function (e) {

            
            if ($('#displayname').val() != senastDrag)
            {
                window.alert("ja det var din tur");
                //window.alert(Image.id);
                drawImage(e, chat);

            }
        });

        $('#sendmessage').click(function () {
            // Call the Send method on the hub.
            chat.server.send($('#displayname').val(), $('#message').val());
            // Clear text box and reset focus for next comment.
            $('#message').val('').focus();
        });
    });
});
// This optional function html-encodes messages for display in the page.
function htmlEncode(value) {
    var encodedValue = $('<div />').text(value).html();
    return encodedValue;
}

function drawImage(e, chat)
{
    win = false;
    var kryssja = 0;
    var Cirkelja = 0;

    //if (SquareCollection[01][00].clicked) {
    //    window.alert(SquareCollection[01][00].clickImage);
    //    if (SquareCollection[01][00].clickImage == "Kryss")
    //    {
    //        window.alert("Kryss");
    //    }
    //}
    x = e.pageX - spelCanvas.offsetLeft;
    y = e.pageY - spelCanvas.offsetTop;
    var X = x / 30; var Y = y / 30;

    //var xc = X;
    //var yc = Y;
    var X = -(Math.ceil(-X)); var Y = -(Math.ceil(-Y));

    xc = X;
    yc = Y;
    var X = (X * 30); var Y = (Y * 30);



    if (!SquareCollection[xc][yc].clicked) {
        // window.alert("You Clicked!!!");
        Image = KryssImage;
        sendXX = X;
        sendYY = Y;
        addDrag(Image)

        Image = KryssImage;
        // if (!(SquareCollection[SquareCollection.length-1].clickedOrNot)){


        //spelContext.drawImage(Image, X, Y, 30, 30);
        geX = X;
        geY = Y;
        //window.alert(geX + geY);
        //SquareCollection[xc][yc] = { clickImage: Image.id, clicked: true };//Square
        // Collect all square and info

        //SquareCollection.push(Square);
        //}
        //else {
        //  window.alert("You clicked in the same Square!!! ");
        //}
        //window.alert("row:"+xc+"column:"+yc+"___"+"Type of Image: " + Image.id);
        //window.alert("Row:" + yc + "Column:" + xc);
        ////document.getElementById('success').innerHTML = ("X:" + xc + "Y:" + yc + "___" + "Image:" + SquareCollection[xc][yc].clickImage + "--" + "clicked?" + SquareCollection[xc][yc].clicked+"You win:" + win);

        spelContext.strokeStyle = "black";
        //var fig = [Image, X, Y];

        //var colfig = [fig];
        // Swap the imges
        Image = KryssImage;
        KryssImage = CirkelImage;
        CirkelImage = Image;

        //send position of click to other player.
        chat.server.send($('#displayname').val(), $('#message').val(), geX, geY);
        //$('#board').focus();
        //for (var r = 0; r < 30; r++) {

        //    for (var i = 0; i < 30; i++) {

        //        if (SquareCollection[i][r].clickImage == null) {
        //            kryssja = 0;
        //            Cirkelja = 0;
        //        }
        //        if (SquareCollection[i][r].clickImage == "Kryss") {
        //            kryssja++
        //            Cirkelja = 0;
        //            if (SquareCollection[i][r + 1].clickImage == "Kryss"
        //                && SquareCollection[i][r + 2].clickImage == "Kryss"
        //                && SquareCollection[i][r + 3].clickImage == "Kryss"
        //                && SquareCollection[i][r + 4].clickImage == "Kryss") {
        //                window.alert("5 Kryss lodrät");
        //            }
        //            if (SquareCollection[i + 1][r + 1].clickImage == "Kryss"
        //                && SquareCollection[i + 2][r + 2].clickImage == "Kryss"
        //                && SquareCollection[i + 3][r + 3].clickImage == "Kryss"
        //                && SquareCollection[i + 4][r + 4].clickImage == "Kryss") {
        //                window.alert("5 Kryss diagonalt");
        //            }
        //            if (SquareCollection[i - 1][r + 1].clickImage == "Kryss"
        //                 && SquareCollection[i - 2][r + 2].clickImage == "Kryss"
        //                 && SquareCollection[i - 3][r + 3].clickImage == "Kryss"
        //                 && SquareCollection[i - 4][r + 4].clickImage == "Kryss") {
        //                window.alert("5 Kryss diagonalt");
        //            }
        //        }

        //        if (SquareCollection[i][r].clickImage == "Cirkel") {
        //            Cirkelja++
        //            kryssja = 0;
        //            if (SquareCollection[i][r + 1].clickImage == "Cirkel"
        //                && SquareCollection[i][r + 2].clickImage == "Cirkel"
        //                && SquareCollection[i][r + 3].clickImage == "Cirkel"
        //                && SquareCollection[i][r + 4].clickImage == "Cirkel") {
        //                window.alert("5 Cirklar lodrät");
        //            }
        //            if (SquareCollection[i + 1][r + 1].clickImage == "Cirkel"
        //                && SquareCollection[i + 2][r + 2].clickImage == "Cirkel"
        //                && SquareCollection[i + 3][r + 3].clickImage == "Cirkel"
        //                && SquareCollection[i + 4][r + 4].clickImage == "Cirkel") {
        //                window.alert("5 Cirklar diagonalt");
        //            }
        //            if (SquareCollection[i - 1][r + 1].clickImage == "Cirkel"
        //                && SquareCollection[i - 2][r + 2].clickImage == "Cirkel"
        //                && SquareCollection[i - 3][r + 3].clickImage == "Cirkel"
        //                && SquareCollection[i - 4][r + 4].clickImage == "Cirkel") {
        //                window.alert("5 Cirklar diagonalt");
        //            }

        //        }

        //        if (kryssja == 5) {
        //            window.alert("5 Kryss vågrätt");
        //        }
        //        if (Cirkelja == 5) {
        //            window.alert("5 Cirklar vågrätt");
        //        }

        //        //window.alert(SquareCollection[i][00].clickImage);
        //    }
        //}


        level = document.getElementById("level").value;
        if (level === "") {
            //By default level is 2.
            level = 2;
        }
        //level = 3;


        ////Winning Status Vertical,Horizontal Diagonal NW-SE and Diagonal NE-SW.




        winningStatusVertical(SquareCollection, level, "Kryss");
        winningStatusVertical(SquareCollection, level, "Cirkel");
        winningStatusHorizontal(SquareCollection, level, "Kryss");
        winningStatusHorizontal(SquareCollection, level, "Cirkel");
        winningStatusDiagonal(SquareCollection, level, "Kryss");
        winningStatusDiagonal(SquareCollection, level, "Cirkel");
        winningStatusDiagonalNESW(SquareCollection, level, "Kryss");
        winningStatusDiagonalNESW(SquareCollection, level, "Cirkel");
        document.getElementById('success').innerHTML = ("X:" + xc + "Y:" + yc + "___" + "Image:" + SquareCollection[xc][yc].clickImage + "--" + "clicked?" + SquareCollection[xc][yc].clicked + "You win:" + win + "    in the Level:" + level);
        

    }
    else {
        document.getElementById('success').innerHTML = ("The Square has been Clicked before!!! Try another Square. ");

    };
}

function addDrag(Image)
{
    window.alert("stop stanna");
    
    spelContext.drawImage(Image, sendXX, sendYY, 30, 30);
    window.alert(sendXX + sendYY);
    sendXX = (sendXX / 30);
    sendYY = (sendYY / 30);
    window.alert(sendXX + sendYY);
    SquareCollection[sendXX][sendYY] = { clickImage: Image.id, clicked: true };//Square
}

//// Methods to discovering the X and O
function winningStatusVertical(v, level, clickImage)
{
    for (var i = 0; i < 30; i++)
    {
        rep = 0;
        for (var j = 0; j < 29; j++)
        {
            if ((v[i][j].clickImage === clickImage
                && v[i][j + 1].clickImage === clickImage))
            {
                rep++;
                if (rep === level - 1)
                {
                    win = true;

                }
            } else
            {
                //break
                rep = 0;

            }

        }

    }
    return win, level, clickImage;
}
function winningStatusHorizontal(v, level, clickImage)
{
    for (var j = 0; j < 30; j++)
    {
        rep = 0;
        for (var i = 0; i < 29; i++)
        {
            if ((v[i][j].clickImage === clickImage
                && v[i + 1][j].clickImage === clickImage))
            {
                rep++;
                if (rep === level - 1)
                {
                    win = true;

                }
            } else
            {
                //break
                rep = 0;

            }

        }

    }
    return win;
}
function winningStatusDiagonal(v, level, clickImage)
{
    /// NW-SE Direction
    for (var i = 0; i < 29; i++)
    {
        rep = 0;
        k = i;

        for (var j = 0; j < 29; j++)
        {

            if ((v[k][j].clickImage === clickImage
                && v[k + 1][j + 1].clickImage === clickImage))
            {
                rep++;
                k++;
                if (k == 29)
                {
                    k = 28;
                }
                //l++;
                if (rep === level - 1)
                {
                    win = true;

                }
            } else
            {
                //break
                rep = 0;
                k = i;

            }

        }


    }


    return win;
}
function winningStatusDiagonalNESW(v, level, clickImage)
{


    /// NE-SW Direction
    for (var i = 29; i > 0; i--)
    {
        rep = 0;
        k = i;

        for (var j = 0; j < 29; j++)
        {
            if ((v[k][j].clickImage === clickImage
                && v[k - 1][j + 1].clickImage === clickImage))
            {
                rep++;
                k--;
                if (k == 0)
                {
                    k = 1;
                }
                if (rep === level - 1)
                {
                    win = true;

                }
            } else
            {
                //break
                rep = 0;
                k = i;

            }

        }


    }
    return win;
}
//Beyaz ve siyah karelere ait renkler
const SQUARE_COLOR1 = "rgba(145,140,125)";
const SQUARE_COLOR2 = "rgba(180,175,165)";

//Tahtayi sadece cizdiren fonksiyon 8x8 matris
function drawBoard() {
    console.log("drawBoard start");
    for(let i = 1; i<=8; i++) {
        for(let j = 1; j<=8; j++) {
            $("#board").append('<div class="square' + '" data-row="' + i + '" data-column="' + j + '"></div>');
        }
    }

    /**
     * i integer 0-63 
     * j drawBoard icinde append ile atanan square divi
     */
    $(".square").each(function(i, j) {
        let color1, color2;
        //divin data-row degeri
        let rowNumber = $(j).data("row");
        //divin data-column degeri
        let columnNumber = $(j).data("column");

        if(rowNumber%2) {
            color1 = SQUARE_COLOR1;
            color2 = SQUARE_COLOR2;
        } else {
            color2 = SQUARE_COLOR1;
            color1 = SQUARE_COLOR2
        }

        if(columnNumber%2) {
            $(j).css("background-color", color1);
        } else {
            $(j).css("background-color", color2);
        }

        //Boardun soldan ve yukaridan hizasi. Degistirilirse pieceslarin da degeri degistirilmeli.
        $(j).css("left", 100 * (columnNumber -1) + "px");
        $(j).css("top", 100 * (rowNumber - 1) + "px");
        //TODO: Alt tarafi sil
        // $(j).text("rowNumber: " + rowNumber + "\n" + "columnNum: " + columnNumber);
        let notationChars = ["a","b","c","d","e","f","g","h"];
        let squareNotation = notationChars[columnNumber-1] + (9-rowNumber);
        $(j).text(squareNotation); //Remove this

    }
    );
    console.log("drawBoard end");
}

function setPieces() {
    console.log("setPieces start");
    let black_pawn_columnn_count = 1;
    let white_pawn_columnn_count = 1;

    for (piece_number = 1; piece_number <= 32; piece_number++) {
        let piece_name, piece_row, piece_column, piece_color;

        switch (piece_number) {
            case 1:
                piece_name = "Rook"; piece_row = 1; piece_column = 1; piece_color = "black";
                break;
            case 2:
                piece_name = "Knight"; piece_row = 1; piece_column = 2; piece_color = "black";
                break;
            case 3:
                piece_name = "Bishop"; piece_row = 1; piece_column = 3; piece_color = "black";
                break;
            case 4:
                piece_name = "Queen"; piece_row = 1; piece_column = 4; piece_color = "black";
                break;
            case 5:
                piece_name = "King"; piece_row = 1; piece_column = 5; piece_color = "black";
                break;
            case 6:
                piece_name = "Bishop"; piece_row = 1; piece_column = 6; piece_color = "black";
                break;
            case 7:
                piece_name = "Knight"; piece_row = 1; piece_column = 7; piece_color = "black";
                break;
            case 8:
                piece_name = "Rook"; piece_row = 1; piece_column = 8; piece_color = "black";
                break;
            case 17:
                piece_name = "Rook"; piece_row = 8; piece_column = 1; piece_color = "white";
                break;
            case 18:
                piece_name = "Knight"; piece_row = 8; piece_column = 2; piece_color = "white";
                break;
            case 19:
                piece_name = "Bishop"; piece_row = 8; piece_column = 3; piece_color = "white";
                break;
            case 20:
                piece_name = "Queen"; piece_row = 8; piece_column = 4; piece_color = "white";
                break;
            case 21:
                piece_name = "King"; piece_row = 8; piece_column = 5; piece_color = "white";
                break;
            case 22:
                piece_name = "Bishop"; piece_row = 8; piece_column = 6; piece_color = "white";
                break;
            case 23:
                piece_name = "Knight"; piece_row = 8; piece_column = 7; piece_color = "white";
                break;
            case 24:
                piece_name = "Rook"; piece_row = 8; piece_column = 8; piece_color = "white";
                break;
            default:
                piece_name = "Pawn"; piece_row = 1; piece_column = 1; piece_color = "white"
        }
        
        if(piece_name != "Pawn") {
            $("#board").append(
                '<div class="piece ' + piece_color + '" data-piece="' + piece_name + '" data-row="' + piece_row + 
                '" data-column="' + piece_column + '" style="top:' + 100 * (piece_row - 1) + "px; left:" + 100 * (piece_column - 1) + 'px"></div>'
            );
        } else {
            if(piece_number <= 16) {
                $("#board").append(
                    '<div class="piece black" data-piece="Pawn" data-row="2" data-column="' + black_pawn_columnn_count + '" style="top:100px; left:' + (black_pawn_columnn_count-1) * 100 + 'px"></div>'
                );
                black_pawn_columnn_count++;
            } else {
                $("#board").append(
                    '<div class="piece white" data-piece="Pawn" data-row="7" data-column="' + white_pawn_columnn_count + '" style="top:600px; left:' + (white_pawn_columnn_count-1) * 100 + 'px"></div>'
                );
                white_pawn_columnn_count++;
            }
        }
    }
    console.log("setPieces end");
}

drawBoard();
setPieces();
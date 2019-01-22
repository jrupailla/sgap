module.exports = {
    random_text: function( length ){
        var RANDOM_TEXT = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7',
        '8', '9' ];

        var text_random = '';

        for ( var i=0 ; i<length ; i++){
            text_random += RANDOM_TEXT[ Math.round( ( 1 + Math.random() * (RANDOM_TEXT.length - 1) ) ) ];
        }

        return text_random;
    }
}
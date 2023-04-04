var soldier = $('.soldier');
var hpsoldier1 = 1200;
var hpsoldier2 = 1500;
var soldier1 = $('#soldier1 .hp').text(hpsoldier1);
var soldier2 = $('#soldier2 .hp').text(hpsoldier2);


// função para reproduzir áudio
var audio = new Audio('./audios/dano.mp3');

function playAudio() {
    audio.play();
}


$(document).ready(function() {

    $('.soldier').draggable({

        containment: '.box',
        stack: '.soldier',

        drag: function() {

            var thisSoldier = $(this);
            var thisOffset = thisSoldier.offset();
            var thisWidth = thisSoldier.width();
            var thisHeight = thisSoldier.height();

            soldier.each(function() {

                if (this != thisSoldier[0]) {
                    var otherSoldier = $(this);
                    var otherOffset = otherSoldier.offset();
                    var otherWidth = otherSoldier.width();
                    var otherHeight = otherSoldier.height();

                    if (thisOffset.left < otherOffset.left + otherWidth &&
                        thisOffset.left + thisWidth > otherOffset.left &&
                        thisOffset.top < otherOffset.top + otherHeight &&
                        thisOffset.top + thisHeight > otherOffset.top) {

                        //colisão
                        thisSoldier.css('background-color', '');
                        otherSoldier.css('background-color', 'red');
                        $('.hp').css('color', 'white');

                        // reproduz áudio
                        playAudio();

                        // Verifica qual soldado foi atingido e subtrai 10 do seu valor de HP
                        if (thisSoldier.attr('id') === 'soldier1') {
                            hpsoldier2 -= 10;
                            $('#soldier2 .hp').text(hpsoldier2);
                        } else {
                            hpsoldier1 -= 10;
                            $('#soldier1 .hp').text(hpsoldier1);
                        }

                    } else {

                        //quando a colisão acabar
                        thisSoldier.css('background-color', '');
                        otherSoldier.css('background-color', '');
                        $('.hp').css('color', 'red');
                    }
                }
            });
        }
    });
});
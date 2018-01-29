window.onload = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            pokemonList = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "assets/JSON/pokemons.json", true);
    xhttp.send();

    var div = document.querySelector('.squareImageRightText');
    var imageUrlImage = document.querySelector('.squareInsideImage2Img');
    var blockErrors = document.querySelector('#form-errors');
    var random = document.querySelector('.random');

    random.onclick= function () {
           var x = Math.floor((Math.random() * 151) + 1);

        for (var i in pokemonList) {
            if (x == i) {
                div.innerHTML = 'Name : ' + pokemonList[i].name + '<br/>' + '<br/>' + 'Type : ' + pokemonList[i].type;
                imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/' + pokemonList[i].name.toLowerCase() + '.gif';
                blockErrors.innerHTML = '';
            }
            else if (x == 32 || x == 'nidoran'.toLowerCase()) {
                    imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/nidoranm.gif';
            }
            else if (x == 29) {
                    imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/nidoranf.gif';
            }
            else if (x == 122 || x == 'mr. mime'.toLowerCase()) {
                    imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/mr-mime.gif';

            }
        }
    };
    document.forms['check-form'].onsubmit = function () {
        var valueInput = document.querySelector('#text').value.toLowerCase();
        var isFormValid = false;

        for (var i in pokemonList) {

            if (valueInput == i || valueInput == pokemonList[i].name.toLowerCase()) {
                div.innerHTML = 'Name : ' + pokemonList[i].name + '<br/>' + '<br/>' + 'Type : ' + pokemonList[i].type;
                imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/' + pokemonList[i].name.toLowerCase() + '.gif';
                isFormValid = true;
                blockErrors.innerHTML = "";
            }
            else if (valueInput == 83 || valueInput == 'nidoran'.toLowerCase()) {
                imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/farfetchd.gif';
            }
            else if (valueInput == 32 || valueInput == 'nidoran'.toLowerCase()) {
                imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/nidoranm.gif';
            }
            else if (valueInput == 29) {
                imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/nidoranf.gif';
            }
            else if (valueInput == 122 || valueInput == 'mr. mime'.toLowerCase()) {
                imageUrlImage.src = 'http://www.pokestadium.com/sprites/xy/mr-mime.gif';
            }
        }
            if (isFormValid === false) {
                blockErrors.innerHTML = "Pokemon not found";
                if (isNaN(valueInput)) {
                    blockErrors.innerHTML = valueInput + " not found";
                    div.innerHTML = "";
                    imageUrlImage.src = 'https://pa1.narvii.com/5736/a7de96b45dcc4e8cdf68f7e35ccc68980774c82b_hq.gif';
                } else {
                    blockErrors.innerHTML = "Pokemon number " + valueInput + " not found";
                    div.innerHTML = "";
                    imageUrlImage.src = 'https://pa1.narvii.com/5736/a7de96b45dcc4e8cdf68f7e35ccc68980774c82b_hq.gif';
                }
            }
            return false;
    };
};
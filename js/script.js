const txtElement = ['WELLCOME TO MY WEBSITE','HAVE A NICE DAY :)'];
let count = 0;
let txtindex = 0;
let words = '';

(function ngetik(){

    if (count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtindex);
    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length == currentTxt.length){
        count ++
        txtindex = 0;
    }

    setTimeout(ngetik, 200);

})();
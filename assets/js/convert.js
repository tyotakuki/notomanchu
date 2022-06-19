
function parseWords(longstr){
    wordlist = longstr.split(/([^a-zA-Z@0-9žšū'\*\-]+)/);
    return wordlist;
}

function regularizeWords(shortstr){
    shortstr = shortstr.replace("c'", "X");
    shortstr = shortstr.replace("j'", "J");
    shortstr = shortstr.replace("ioi", "ü");
    shortstr = shortstr.replace("iung", "û");
    shortstr = shortstr.replace("iong", "ô");
    shortstr = shortstr.replace("š", "x");
    shortstr = shortstr.replace("ū", "v");
    shortstr = shortstr.replace("k'", "K");
    shortstr = shortstr.replace("g'", "G");
    shortstr = shortstr.replace("h'", "H");
    shortstr = shortstr.replace("ts", "C");
    shortstr = shortstr.replace("dz", "Z");
    shortstr = shortstr.replace("z", "Z");
    shortstr = shortstr.replace("ž", "R");
    shortstr = shortstr.replace("ng", "M");
    shortstr = shortstr.replace("ai", "ay");
    shortstr = shortstr.replace("ei", "ey");
    shortstr = shortstr.replace("ii", "iy");
    shortstr = shortstr.replace("oi", "oy");
    shortstr = shortstr.replace("ui", "uy");
    shortstr = shortstr.replace("vi", "vy");
    shortstr = shortstr.replace("ao", "aw");
    shortstr = shortstr.replace("eo", "ew");
    shortstr = shortstr.replace("io", "iw");
    shortstr = shortstr.replace("oo", "ow");
    shortstr = shortstr.replace("uo", "uw");
    shortstr = shortstr.replace("vo", "vw");
    shortstr = shortstr.replace("y'", "V");
    shortstr = shortstr.replace(/sy$/g, "sV");
    shortstr = shortstr.replace(/Cy$/g, "CV");
    shortstr = shortstr.replace(/Zy$/g, "Zi");
    // shortstr = shortstr.replace(/o$/g, "O")
    shortstr = shortstr.replace(/^t/g, "T");
    shortstr = shortstr.replace(/^d/g, "D");
    shortstr = shortstr.replace(/y$/g, "Y");
    shortstr = shortstr.replace(/t$/g, "T");
    shortstr = shortstr.replace(/n\*$/g, "N");
    shortstr = shortstr.replace(/k$/g, "Q");
    return shortstr;
}

function processChinese(str) {
    str = str.replace("ü", "ᡳ᠍ᠣᡳ");
    str = str.replace("û","ᡳ᠍ᡠᠩ");
    str = str.replace("ô","ᡳ᠍ᠣᠩ");
    str = str.replace("CV","ᡮᡟ");
    // str = str.replace("Cy","ᠰᡟ")
    str = str.replace("ZV","ᡯᡳ᠌");
    str = str.replace("sV","ᠰᡟ");
    // str = str.replace("sy","ᠰᡟ")
    str = str.replace("Zi","ᡯᡳ᠌");
    str = str.replace("X", "ᡱ");
    str = str.replace("J", "ᡷ");
    // str = str.replace("Zy","ᡯᡳ᠌")
    return str;
}

function akUju (str) {
    if (str.match(/[@nkghpbsxtTdDlmcjyrfwKGHZCR]?[aeiouv]k/)) {
        if (str === "tek" || str === "Tek") {
            str = str.replace("k", "ᡴ᠋");
        }
        else if (str === "kuk" || str === "guk" || str === "huk" || str === "Kak" || str === "Gak"|| str ==="Hak") {
            str = str.replace("k", "ᡴ᠌");
        }
        else if (str.match(/[@nkghpbsxtTdDlmcjyrfwKGHZCR]?[aoui]k/)) {
            str = str.replace("k", "ᡴ᠋");
        }
        else if (str.match(/[@nkghpbsxtTdDlmcjyrfwKGHZCR]?[ev]k/)){
            str = str.replace("k", "ᡴ᠌");
        }
    }
    else if (str.match(/[@nkghpbsxtTdDlmcjyrfwKGHZCR]?[aeiouv]Q/)) {
        if (str === "teQ" || str === "TeQ") {
            str = str.replace("Q", "ᡴ");
        }
        else if (str === "kuQ" || str === "guQ" || str === "huQ" || str === "KaQ" || str === "GaQ"|| str ==="HaQ") {
            str = str.replace("Q", "ᡴ᠋");
        }
        else if (str.match(/[@nkghpbsxtTdDlmcjyrfwKGHZCR]?[aoui]Q/)) {
            str = str.replace("Q", "ᡴ");
        }
        else if (str.match(/[@nkghpbsxtTdDlmcjyrfwKGHZCR]?[ev]Q/)){
            str = str.replace("Q", "ᡴ᠋");
        }
    }
    else {
        str = str
    }
    return str
}

function TaDaTeDe(str) {
    str = str.replace("ta", "ᠲᠠ");
    str = str.replace("te", "ᡨᡝ᠋");
    str = str.replace("ti", "ᠲ‍ᡳ");
    str = str.replace("to", "ᠲᠣ");
    str = str.replace("tu", "ᡨᡠ᠋");
    str = str.replace("tv", "ᠲᡡ");
    str = str.replace("da", "ᡩ᠋ᠠ");
    str = str.replace("de", "ᡩᡝ᠋");
    str = str.replace("di", "ᡩ᠋ᡳ");
    str = str.replace("do", "ᡩ᠋ᠣ");
    str = str.replace("du", "ᡩᡠ᠋");
    str = str.replace("dv", "ᡨᡡ");

    str = str.replace("Ta", "ᠲᠠ");
    str = str.replace("Te", "ᡨᡝ᠋");
    str = str.replace("Ti", "ᠲᡳ");
    str = str.replace("To", "ᠲᠣ");
    str = str.replace("Tu", "ᡨᡠ᠋");
    str = str.replace("Tv", "ᠲᡡ");
    str = str.replace("Da", "ᡩᠠ");
    str = str.replace("De", "ᡩ᠋ᡝ᠋");
    str = str.replace("Di", "ᡩᡳ");
    str = str.replace("Do", "ᡩᠣ");
    str = str.replace("Du", "ᡩ᠋ᡠ᠋");
    str = str.replace("Dv", "ᡨᡡ");
    return str;

}

function fw(str) {
    str = str.replace("fi", "ᡶ᠋ᡳ");
    str = str.replace("fo", "ᡶ᠋ᠣ");
    str = str.replace("fu", "ᡶ᠋ᡠ");
    str = str.replace("fv", "ᡶ᠋ᡡ");
    return str;
}

function processAinUin(str) {
    str = str.replace(/yn$/g, "ᡳ᠌ᠨ᠋");
    str = str.replace(/yn$/g, "ᡳ᠌ᠨ᠋");
    str = str.replace(/yM$/g, "ᡳ᠌ᠩ");
    str = str.replace(/yM$/g, "ᡳ᠌ᠩ");
    return str;
}
function allLetters(str) {
    str = str.replace(/y$/, "ᡳ᠌");
    str = str.replace(/w$/, "ᠣ");
    str = str.replace(/N$/, "ᠨ᠌");
    str = str.replace(/Y$/, "ᡳ");
    str = str.replace(/T$/, "ᡨ");
    str = str.replace(/t$/, "ᡨ᠌");
    str = str.replace(/ho$/, "ᡥᠤ");
    str = str.replace(/ko$/, "ᡴᠤ");
    str = str.replace(/ke$/, "ᠭᠡ");
    // str = str.replace(/^xu$/, "ᡧ")
    
    str = str.replace(/r$/, "ᡵ");
    str = str.replace(/n$/, "ᠨ᠋");
    str = str.replace(/s$/, "ᠰ");
    str = str.replace(/x$/, "ᡧ");
    str = str.replace(/b$/, "ᠪ");
    str = str.replace(/l$/, "ᠯ");
    str = str.replace(/m$/, "ᠮ");

    str = str.replace(/o\*$/, "ᠣ᠋");
    str = str.replace(/u\*$/, "ᡠ‌");
    str = str.replace("O", "ᡠ᠋");

    str = str.replace("a", "ᠠ");
    str = str.replace("e", "ᡝ");
    str = str.replace("i", "ᡳ");
    str = str.replace("o", "ᠣ");
    str = str.replace("u", "ᡠ");
    str = str.replace("v", "ᡡ");

    str = str.replace("@", "᠇");
    str = str.replace("n", "ᠨ");
    str = str.replace("k", "ᡴ");
    str = str.replace("g", "ᡤ");
    str = str.replace("h", "ᡥ");
    str = str.replace("b", "ᠪ");
    str = str.replace("p", "ᡦ");
    str = str.replace("s", "ᠰ");
    str = str.replace("x", "ᡧ");
    str = str.replace("l", "ᠯ");
    str = str.replace("m", "ᠮ");
    str = str.replace("c", "ᠴ");
    str = str.replace("j", "ᠵ");
    str = str.replace("y", "ᠶ");
    str = str.replace("r", "ᡵ");
    str = str.replace("f", "ᡶ");
    str = str.replace("w", "ᠸ");
    str = str.replace("K", "ᠺ");
    str = str.replace("G", "ᡬ");
    str = str.replace("H", "ᡭ");
    str = str.replace("Z", "ᡯ");
    str = str.replace("C", "ᡮ");
    str = str.replace("R", "ᡰ");
    str = str.replace("M", "ᠩ");
    return str
}


function getSyllables (word) {
    return word.match(/(([@nkghpbsxtTdDlmcjyrfwKGHZCRXJ]?[aeiouvüûôIV][nkbsxtlmyrwMNYTQ]?)(?=([@nkghpbsxtTdDlmcjyrfwKGHZCRXJ][aeiouvV])))|(([@nkghpbsxtTdDlmcjyrfwKGHZCRXJ]?[aeiouvüûôIV][nkbsxtlmyrwMNYTQ]?)\*?$)|(([@nkghpbsxtTdDlmcjyrfwKGHZCRXJ]?[au]y[nM])(?=([@nkghpbsxtTdDlmcjyrfwKGHZCRXJ][aeiouvüûôIV])))|(([@nkghpbsxtTdDlmcjyrfwKGHZCRXJ]?[au]y[nM])\*?$)/g);
}

function processWords(shortstr){
    if (shortstr === "-i") {
        shortstr = shortstr.replace("-i", "‍ᡳ");
    }
    else if(shortstr.match(/[a-zA-Zžšū'\*]+/)){
        shortstr = getSyllables(regularizeWords(shortstr));
        shortstr = shortstr.map((q) => processChinese(q));
        shortstr = shortstr.map((q) => processAinUin(q));
        shortstr = shortstr.map((q) => akUju(q));
        shortstr = shortstr.map((q) => TaDaTeDe(q));
        shortstr = shortstr.map((q) => fw(q));
        shortstr = shortstr.map((q) => allLetters(q));
        // shortstr = shortstr.map((q) => q.join())
        shortstr = shortstr.join('');
    }
    else {
        shortstr = shortstr;
    }
    return shortstr;
}

function writeManchu() {
    var mollendorff = document.getElementById('mollendorff').value;
    word_separated = parseWords(mollendorff);

    word_final = word_separated.map(processWords);
    word_final = word_final.join('');
    word_final = word_final.replace(/,/g, "᠈");
    word_final = word_final.replace(/\./g, "᠉");
    
    document.getElementById('manjuhergen').innerHTML = word_final;
    // document.getElementById('manjuhergen').innerHTML += regularizeWords("saingge");
}

function writeGalik(str) {
    document.getElementById('galik').innerHTML += str;
}

function backspace() {
    var txt = document.getElementById('galik').textContent;
    document.getElementById('galik').innerHTML = txt.slice(0, txt.length - 1);
}

function copyManchu() {
    /* Get the text field */
    var range = document.createRange();
    range.selectNode(document.getElementById("manjuhergen"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
  
function copyGalik() {
    /* Get the text field */
    var range = document.createRange();
    range.selectNode(document.getElementById("galik"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
  
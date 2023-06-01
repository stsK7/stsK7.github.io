var btn = document.getElementById('btnBtcToBanknote');
var v = document.getElementById('inputBtcToBanknote');
var p = document.getElementById('priceBtcToBanknote');
var stc = document.getElementById('priceToCustomer');
var b = document.getElementById('benefice');

function btcToBanknote() {
    btn.addEventListener('click', () => {
        var sum = parseInt(v.value) * parseInt(p.value);
        var sumWithShip = sum + 5;
        var defaultPrice = parseInt(v.value) * 10;
        var benefice = sum - defaultPrice;
        if (stc != null) {
            stc.innerHTML = sumWithShip;
        }
        if (benefice != null) {
            b.innerHTML = benefice;
        }
        // console.log(sum, sumWithShip, defaultPrice, benefice); 
    })
}

function securityCode() {

    let c = 857429612;
    let i = prompt('Enter the security code : ', '* * * * * * * *');
    if (i == c) {
        
    } else {
        window.location.href = "https://www.google.com/";
    }
}

securityCode();

btcToBanknote();
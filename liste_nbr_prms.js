function estPremier (n){
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
};

function listePremiers(n){
    var L=[];
    var i;
    for (i=0; i<n; i++){
        if (estPremier(i)){
            L.push(i);
        }
    }
    return L;
};

module.exports = listePremiers;
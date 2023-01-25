/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const plafond = 900;
const primeanciennete = 300;

function DistanceMaximaleParcourueFinAnnee(nb){
    const prix = 0.01;
    let primededistance = plafond * prix;
    if (plafond > 900){
        return primededistance;
    }
    else{
        return plafond;
    }
}
function PrimeAnciennete(nb){
    const pourcentagedaugmentation = 0.30;
    let annéesupplementairedanciennete = primeanciennete * pourcentagedaugmentation;
    if (nb === 4){
        return primeanciennete;
    }
    else if(nb >4){
        
    }
}

function NbAccidentEgaleReductionDePrime(nb){
    if(nb === 1){
        return plafond/2;
    }
    else if(nb === 2){
        return plafond/3;
    }
    else if(nb === 3){
        return plafond/4;
    }
    else{
        return plafond === 0.0;
    }
}
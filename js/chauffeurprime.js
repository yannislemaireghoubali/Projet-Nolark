/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const plafond = 900;
const primeanciennete = 300;
/**
 *  simulateur de calcul leur permettant de calculer simplement leur prime de fin d’année.
 * @param {type} nb
 * @returns {Number|plafond}
 */
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
/**
 * fonction renvoyant une prime d’ancienneté attribuée qu’à partir de 4 années d'ancienneté dans l'entreprise.
 * @param {type} nb
 * @returns {Number|primeanciennete}
 */
function PrimeAnciennete(nb){
    const pourcentagedaugmentation = 0.30;
    let annéesupplementairedanciennete = primeanciennete * pourcentagedaugmentation;
    if (nb === 4){
        return primeanciennete;
    }
    else if(nb >4){
        return annéesupplementairedanciennete;
    }
}
/**
 * fonction qui retourne la prime obtenu par le chauffeur
 * en comptant la prise en compte du nombre d'accident
 * @param {type} nb
 * @returns {Number|Boolean}
 */
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

function calcRemu() {
    // Déclaration des constantes
    const plafond = 900;
    const primeanciennete = 300;
    // Déclaration et affectation des variables
    let nbAncien = recupValeur("#num_ancien");
    let nbAccident = recupValeur("#num_kilometres");
    let nbkm = recupValeur("#num_accident");
    let nbAncien2 = parseInt(window.document.querySelector("#num_ancien").value);
    let nbAccident2 = parseInt(window.document.querySelector("#num_kilometres").value);
    let nbkm2 = parseInt(window.document.querySelector("#num_accident").value);
    
    // Affichage du résultat
    window.document.querySelector("#remuneration").innerHTML = "La rémunération sera de : " + total + " €";
    }
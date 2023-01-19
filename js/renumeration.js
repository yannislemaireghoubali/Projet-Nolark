const fixe = 1100;
/**
 * Pour Satisfaite de les prestations lors de la création du site vitrine, il fautr concevoir une page 
spécifique contenant un simulateur de calcul à l’attention des commerciaux faisant partie de la force de vente itinérante 
(dix personnes environ) et ayant accessoirement assuré la distribution des trois modèles suivants :
 Le modèle "X-Spirit", haut de gamme est vendu au prix moyen de 350 € HT ;
 Le modèle "Multitec", qualité standard, est vendu au prix moyen de 180 € HT ;
 Le modèle "S 20", qualité standard, est vendu au prix moyen de 140 € HT.

La rémunération des représentants se calcule de la façon suivante :
 Un fixe de 1100 €, majoré de 3% à partir de 5 ans d'ancienneté ou de 6% au-delà de 10 ans ;
 Une commission de 2% sur le CA (chiffre d'affaires) HT du modèle "S 20" ;
 Une commission de 6% sur le CA HT du modèle "X-Spirit" après le 50ème casque vendu ;
 Une commission progressive sur le modèle "Multitec" :
o 4% sur le CA jusqu'au 20ème casque ;
o 6% du 21ème au 50ème ;
o 10% à partir du 51ème casque vendu.
 */

function comS20(nb){
    const prix_S20= 140;
    const taux_S20= 0.02;
    return nb*prix_S20*taux_S20;
}

function comXSpirit(nb){
    const prixXSpirit = 350;
    const tauxXSpirit = 0.06;
    if (nb => 50){
        return nb*prixXSpirit*tauxXSpirit;
    }

function comMultitec(nb){
    const prixMultitec = 180;
    if (nb => 20){
        return nb*prixXSpirit*0.04;
    }
    else if (nb => 21, nb <=50){
        return nb*prixXSpirit*0.06;
    }
    else{
        return nb*prixXSpirit*0.10;
    }
}

function Anciennete(nbAncien){
    if (nbAncien <5){
        
    }
    else if nbAncien <10{
        
    }
    else{
        
    }
}
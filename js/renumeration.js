const fixe = 1100;
/**
 * Pour Satisfaite de les prestations lors de la création du site vitrine, il fautr concevoir une page 
spécifique contenant un simulateur de calcul à l’attention des commerciaux faisant partie de la force de vente itinérante 
(dix personnes environ) et ayant accessoirement assuré la distribution des trois modèles suivants :
 Le modèle "X-Spirit", haut de gamme est vendu au prix moyen de 350 € HT ;
 Le modèle "Multitec", qualité standard, est vendu au prix moyen de 180 € HT ;
 Le modèle "S 20", qualité standard, est vendu au prix moyen de 140 € HT.
 */

function anciennete(ancien,salaire){
    if()
}

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
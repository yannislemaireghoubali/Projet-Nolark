/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// 0 verre
if (0 === getAlcooPur(0)) {
    console.log('0 verre : ok');
} else {
    console.log('0 verre : erreur');
}
// 1 verre
if (10 === getAlcooPur(1)) {
    console.log('1 verre : ok');
} else {
    console.log('1 verre : erreur');
}

/**
* Tests unitaires du projet Alcoolémie
* 
*/
MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function() {
    assertEquals('0 verre', 0, getAlcoolPur(0));
    assertEquals('1 verre', 10, getAlcoolPur(1));
};

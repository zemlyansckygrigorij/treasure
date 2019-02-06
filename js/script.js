'use strict' ;

//add listeners default
finishButtonOk.addEventListener("click", gameRepeat);
finishButtonExit.addEventListener("click", exit);
document.addEventListener("keydown", keyPush);


finishString.innerHTML = "";


fillField(field);
fillDataGames();

//prepareDataTest();









// close current page
function exit(){
	let exit = confirm("Вы действительно хотите покинуть страницу ?");
	if( exit ){
		window.close();
	}
	
}

// write count game into localStorage
function writeGame(count){
	
	if(window.localStorage.getItem("count")){
		let oldCount = Number(window.localStorage.getItem("count"));
		window.localStorage.setItem("count",oldCount + count)
	
	}else{
		window.localStorage.setItem("count", 0)
	}
	
	
	if(window.localStorage.getItem("games")){
		let oldCountGames = Number(window.localStorage.getItem("games"));
		
		window.localStorage.setItem("games",oldCountGames + 1)
	
	}else{
		window.localStorage.setItem("games", 0)
	}
}

function gameRepeat(){
	isGame = true;
	fillField(field);
	fillDataGames();
	game.removeAttribute("hidden");
    finish.setAttribute("hidden", true);
}
 
function createElement(left,top ){
	let div = document.createElement(ELEM_DIV);
	div.top =  top ;
	div.left = left ;
	div.style.top =  top + "px";
	div.style.left = left + "px";
	div.setAttribute("class",  "element");
	return div;
}


function createImage(src){
	let img = document.createElement(ELEM_IMG);
	img.setAttribute("src",  src);
	
	return img;
}




function createWall(left,top ){
	let div = createElement(left,top );
	div.classList.add(CLASS_WALL);
	
	return div;
}

function createGoldMan(left,top ){
	let div = createElement(left,top );
	let img = createImage(PATH_GOLD_MAN );
	img.setAttribute("class",  CLASS_GOLDMAN);
	div.appendChild(img);
	div.count = 0 ;
	div.move = function ( moveLeft,moveTop){
	    let y = div.top + moveTop*50 ;
	    let x = div.left + moveLeft*50 ;
	    if(checkStep(div ,moveLeft,moveTop)){
		    return;
	    }
		
	    div.top = y;
	    div.left = x;
	    div.style.top = y  + "px";
	    div.style.left = x + "px";	
    }

	return div;
}

function createTreasure(left,top ){
	let img = createImage(PATH_TREASURE );
	img.setAttribute("class",  CLASS_TREASURE);
	let div = createElement(left,top );
    div.appendChild( img);
	return div;
	
}

function createExit(left,top ){
	let img = createImage(PATH_EXIT );
	img.setAttribute("class",  CLASS_EXIT);
	let div = createElement(left,top );
    div.appendChild( img);
	return div;
	
}

function createMonstr(left,top ){
	let img = createImage(PATH_MONSTR );
	img.setAttribute("class",  CLASS_MONSTR);
	let div = createElement(left,top );
    div.appendChild( img);
	div.timerId = setInterval(function(){
		if(!isGame) return;
	    switch(Math.floor(Math.random() * 4)){
			case 0:
			div.move(-1,0);
			break;
			
		case 1:
		    div.move(0,-1);
			break;
			
		case 2:
		    div.move(1,0);
			break;
			
		case 3:
		    div.move(0,1);
			break;
		}	
	
	
	}, 1000);
	
	div.move = function ( moveLeft,moveTop){
	    let y = div.top + moveTop*50 ;
	    let x = div.left + moveLeft*50 ;
	    if(checkStep(div ,moveLeft,moveTop)){
		    return;
	    }
		
	    div.top = y;
	    div.left = x;
	    div.style.top = y  + "px";
	    div.style.left = x + "px";	
    }

	return div;
	
}


// check element on place destination
function checkStep(div ,x,y){
	let left ;
	let top;
	let getCoordinate = div.getBoundingClientRect();
	if(x==0){
		left = getCoordinate.left+25;
		if(y>0){
			top = getCoordinate.bottom +25;
		}else{
			top = getCoordinate.top -25;
		}
	}
	
	if(y==0){
		top = getCoordinate.top+25;
		if(x>0){
			left = getCoordinate.right+25;
		}else{
			left = getCoordinate.left-25;
		}
	}
		
	let elem = document.elementFromPoint( left,top );
	let className = elem.getAttribute("class");

	if(elem.classList.contains(CLASS_WALL)){//crash with WALL  no move  
		return true ;
	}
	if(elem.classList.contains(CLASS_TREASURE)){//crash with TREASURE  up count delete TREASURE
		
		elem.remove();
		div.count++;
		return false;
	}
	if(elem.classList.contains(CLASS_MONSTR)){//crash with MONSTR  game exit
		/*стычка с чудовищем  доделать */
		if(div.classList.contains(CLASS_MONSTR)){//if himself MONSTR 
			return true ;
		}
		goldMan.remove();
		gameOver(false);
		return false;
	}
	if(elem.classList.contains(CLASS_GOLDMAN)){//crash with MONSTR  game exit
		/*стычка с чудовищем   доделать */
		goldMan.remove();
		gameOver(false);
		return false;
	}
	if(elem.classList.contains(CLASS_EXIT)){// come in div exit game exit
		
		gameOver(true);
		return false;
	}
}

function gameOver(win){
	// fill div id = finish from variable field
	if(win){
		finishString.innerHTML = "победили .<br/> Ваш счет : "+goldMan.count ;
	}else{
		finishString.innerHTML = "проиграли";
	}
	isGame = false;
	
// delete all childes from div id = game
	while (game.firstChild) {
		
		if("stopMove" in game.firstChild){
			
			clearInterval(game.firstChild.timerId);
			game.firstChild.stopMove();
		}
        game.removeChild(game.firstChild);
    }
	game.setAttribute("hidden", true);
    finish.removeAttribute("hidden");
	
	writeGame(goldMan.count);
	
}

//Handler  push key
//press key -> move goldMan

function keyPush(evt) {
	
	switch(evt.keyCode) {
		case 37:   // key  left
			goldMan.move(-1,0);
			break;
			
		case 38:  // key  up
		    goldMan.move(0,-1);
			break;
			
		case 39:  // key  right
		    goldMan.move(1,0);
			break;
			
		case 40:   // key  down
		    goldMan.move(0,1);
			break;
	}
}

// fill div id = game from variable field
function fillField(field){
	let top = 0;
	let left = 0;
	for(let i = 0; i<field.length;i++){
		for(let j = 0; j<field[i].length;j++){
			
		    switch(field[i][j]) {
				case "1":
					game.appendChild( createWall(left,top ));
					break;
					
				case "2":
					game.appendChild( createTreasure(left,top ));
					break;
					
				case "3":
					game.appendChild( createMonstr(left,top ));
					break;
					
				case "4":
				    goldMan =  createGoldMan(left,top );
					game.appendChild( goldMan);
					break;
				case "5":
				    game.appendChild( createExit(left,top ));
					break;
			}
			left += 50;
	    }
		left = 0;
		top +=50;
	}
}
//get data from localStorage default 0
function fillDataGames(){
// fill div id = countGame
	countgames.innerHTML =  window.localStorage.getItem("games")||0; 
    count.innerHTML =window.localStorage.getItem("count")||0;
}


//get data from localStorage default 0
function prepareDataTest(){
	mochaDiv.removeAttribute("hidden");
	mocha.setup('bdd');
	assert = chai.assert;
}

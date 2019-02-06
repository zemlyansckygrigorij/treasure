'use strict' ;

const PATH_GOLD_MAN = "img/GOLDMAN.png";
const PATH_TREASURE = "img/TRESUARE.png";
const PATH_MONSTR = "img/MONSTR.png";
const PATH_EXIT = "img/exit.png";

const CLASS_WALL = "wall";
const CLASS_GOLDMAN = "goldMan";
const CLASS_TREASURE = "treasure";
const CLASS_MONSTR = "monstr";
const CLASS_EXIT = "exit";

const ELEM_DIV = "div";
const ELEM_IMG = "img";



// fill  Field Game
let field = [
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
	["1", "","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"5"],
	["1", "","3" ,"" ,"" ,"" ,"" ,"3" ,"" ,"1" ,"" ,"" ,"" ,"" ,"2" ,"1"],
	["1", "","" ,"" ,"1" ,"" ,"" ,"" ,"" ,"1" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1", "","" ,"3" ,"1" ,"" ,"" ,"" ,"1" ,"1" ,"" ,"2","" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"1" ,"" ,"" ,"1" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"" ,"" ,"3" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"2","" ,"1"],
	["1", "","" ,"" ,"3" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"" ,"1" ,"1" ,"1" ,"" ,"" ,"" ,"" ,"3" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1", "","" ,"" ,"" ,"1" ,"1" ,"1" ,"" ,"" ,"" ,"2","" ,"" ,"" ,"1"],
	["1","4","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"1"],
	["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
	

];
let goldMan;
let isGame = true; 

// get elements
let game = document.getElementById("game");
let finish = document.getElementById("finishBlock");
let finishButtonOk = document.getElementById("finishBlock");
let finishButtonExit = document.getElementById("finishButtonExit");
let finishString = document.getElementById("finish");
let countgames = document.getElementById("countgames");
let count = document.getElementById("count");
let mochaDiv = document.getElementById("mocha");

let assert;
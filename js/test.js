'use strict' ;

// check function createElement
	let div = document.createElement("div");
	div.top =  100 ;
	div.left = 100 ;
	div.style.top =  100 + "px";
	div.style.left = 100 + "px";
	div.setAttribute("class",  "element");
    let checkDiv = createElement(100, 100);

	describe("createElement", function() {

	  it("check matches get element top", function() {
		assert.equal(checkDiv.top, div.top);
	  });
	  it("check matches get element left", function() {
		assert.equal(checkDiv.left, div.left);
	  });
	  it("check matches get element style.top", function() {
		assert.equal(checkDiv.style.top, div.style.top);
	  });
	  it("check matches get element style.left", function() {
		assert.equal(checkDiv.style.left, div.style.left);
	  });
	  it("check matches get element class - element", function() {
		assert.equal(checkDiv.getAttribute("class"), "element");
	  });
	  it("check matches get element tagName - div", function() {
		assert.equal(checkDiv.tagName, "DIV");
	  });
	  
	});
	
	
	// check function createImage
	let img = document.createElement("img");
	img.setAttribute("src",  "img/GOLDMAN.png");

	
    let checkImg =  createImage("img/GOLDMAN.png");
   describe(" createImage", function() {

	  it("check matches get element src  - img/GOLDMAN.png", function() {
		assert.equal(checkImg.getAttribute("src"), "img/GOLDMAN.png");
	  });
     
	   it("check matches get element tagName - img", function() {
		assert.equal(checkImg.tagName, 'IMG');
	  });
	});
	
	//check function createWall
	
	let wall = document.createElement("div");
	wall.classList.add(CLASS_WALL);
	wall.top =  100 ;
	wall.left = 100 ;
	wall.style.top =  100 + "px";
	wall.style.left = 100 + "px";
	wall.setAttribute("class",  "wall");
	
    let checkWall = createWall(100, 100);
	
		describe("createWall", function() {

	  it("check matches get element top", function() {
		assert.equal(checkWall.top, wall.top);
	  });
	  it("check matches get element left", function() {
		assert.equal(checkWall.left, wall.left);
	  });
	  it("check matches get element style.top", function() {
		assert.equal(checkWall.style.top, wall.style.top);
	  });
	  it("check matches get element style.left", function() {
		assert.equal(checkWall.style.left, wall.style.left);
	  });
	  it("check matches get element class - element", function() {
		assert.equal(checkWall.getAttribute("class"), "element wall");
	  });
	  it("check matches get element tagName - div", function() {
		assert.equal(checkWall.tagName, "DIV");
	  });
	    
	});
	
	//check function createGoldMan
	let goldManTest = document.createElement("div");
	

	goldManTest.top =  100 ;
	goldManTest.left = 100 ;
	goldManTest.style.top =  100 + "px";
	goldManTest.style.left = 100 + "px";
	goldManTest.setAttribute("class",  "goldMan");
	goldManTest.count = 0 ;
	
    let checkGoldMan = createGoldMan(100, 100);
	let checkGoldManImage = checkGoldMan.firstChild;
		describe("createGoldMan", function() {

	  it("check matches get element top", function() {
		assert.equal(checkGoldMan.top, goldManTest.top);
	  });
	  it("check matches get element left", function() {
		assert.equal(checkGoldMan.left, goldManTest.left);
	  });
	  it("check matches get element style.top", function() {
		assert.equal(checkGoldMan.style.top, goldManTest.style.top);
	  });
	  it("check matches get element style.left", function() {
		assert.equal(checkGoldMan.style.left, goldManTest.style.left);
	  });
	   it("check matches get element count ", function() {
		assert.equal(checkGoldMan.count, goldManTest.count);
	  });
	  it("check matches get element class - element", function() {
		assert.equal(checkGoldMan.getAttribute("class"), "element");
	  });
	  it("check matches get element tagName - div", function() {
		assert.equal(checkGoldMan.tagName, "DIV");
	  });
	 

    it("check matches get image tagName - IMG", function() {
		assert.equal(checkGoldManImage.tagName, 'IMG');
	  });	 
	  
	    it("check matches get element src  - img/GOLDMAN.png", function() {
		assert.equal(checkGoldManImage.getAttribute("src"), "img/GOLDMAN.png");
	  });
	});
	
		//check function createTreasure
	let treasure = document.createElement("div");

    let checkTreasure = createTreasure(100, 100);
	let checkTreasureImage = checkTreasure.firstChild;

	describe("createTreasure", function() {

	  it("check matches get element top", function() {
		assert.equal(checkTreasure.top, 100);
	  });
	  it("check matches get element left", function() {
		assert.equal(checkTreasure.left, 100);
	  });
	  it("check matches get element style.top", function() {
		assert.equal(checkTreasure.style.top, "100px");
	  });
	  it("check matches get element style.left", function() {
		assert.equal(checkTreasure.style.left, "100px");
	  });

	  it("check matches get element class - element", function() {
		assert.equal(checkTreasure.getAttribute("class"), "element");
	  });
	  it("check matches get element tagName - div", function() {
		assert.equal(checkTreasure.tagName, "DIV");
	  });
	 

    it("check matches get image tagName - IMG", function() {
		assert.equal(checkTreasureImage.tagName, 'IMG');
	  });	 
	  
	    it("check matches get image src  - img/TRESUARE.png", function() {
		assert.equal(checkTreasureImage.getAttribute("src"), "img/TRESUARE.png");
	  });
	});
	
	
	
		//check function createExit


    let checkExit = createExit(100, 100);
	let checkExitImage = checkExit.firstChild;

	describe("createExit", function() {

	  it("check matches get element top", function() {
		assert.equal(checkExit.top, 100);
	  });
	  it("check matches get element left", function() {
		assert.equal(checkExit.left, 100);
	  });
	  it("check matches get element style.top", function() {
		assert.equal(checkExit.style.top, "100px");
	  });
	  it("check matches get element style.left", function() {
		assert.equal(checkExit.style.left, "100px");
	  });

	  it("check matches get element class - element", function() {
		assert.equal(checkExit.getAttribute("class"), "element");
	  });
	  it("check matches get element tagName - div", function() {
		assert.equal(checkExit.tagName, "DIV");
	  });
	 

    it("check matches get image tagName - IMG", function() {
		assert.equal(checkExitImage.tagName, 'IMG');
	  });	 
	  
	    it("check matches get image src  - img/exit.png", function() {
		assert.equal(checkExitImage.getAttribute("src"), "img/exit.png");
	  });
	});
	
	
	
	
	
		//check function createMonstr


    let checkMonstr = createMonstr(100, 100);
	let checkMonstrImage = checkMonstr.firstChild;

	describe("createMonstr", function() {

	  it("check matches get element top", function() {
		assert.equal(checkMonstr.top, 100);
	  });
	  it("check matches get element left", function() {
		assert.equal(checkMonstr.left, 100);
	  });
	  it("check matches get element style.top", function() {
		assert.equal(checkMonstr.style.top, "100px");
	  });
	  it("check matches get element style.left", function() {
		assert.equal(checkMonstr.style.left, "100px");
	  });

	  it("check matches get element class - element", function() {
		assert.equal(checkMonstr.getAttribute("class"), "element");
	  });
	  it("check matches get element tagName - div", function() {
		assert.equal(checkMonstr.tagName, "DIV");
	  });
	 

    it("check matches get image tagName - IMG", function() {
		assert.equal(checkMonstrImage.tagName, 'IMG');
	  });	 
	  
	    it("check matches get image src  - img/exit.png", function() {
		assert.equal(checkMonstrImage.getAttribute("src"), "img/MONSTR.png");
	  });
	});
	
	
	
	// check function  fillField
	
	// get array elements
	let elems =[];
	for(let i = 0;i< game.childNodes.length;i++){
		elems.push(game.childNodes[i]);
	}
	

	let elements = 	elems.filter(function( item){
		return item.tagName ==="DIV";
	}); 
	let walls = elements.filter(function( item){
		return item.getAttribute("class")== "element wall" ;
	});
    let others = elements.filter(function( item){
		return item.getAttribute("class")== "element" ;
	}); 
    let monstres = others.filter(function( item){
		return item.firstChild.getAttribute("src")== "img/MONSTR.png" ;
	});	
	let treaseres = others.filter(function( item){
		return item.firstChild.getAttribute("src")== "img/TRESUARE.png" ;
	});
	let exites = others.filter(function( item){
		return item.firstChild.getAttribute("src")== "img/exit.png" ;
	});
	let goldmanes = others.filter(function( item){
		return item.firstChild.getAttribute("src")== "img/GOLDMAN.png" ;
	});
	
	describe("fillField", function() {

	  it("check matches get elements count", function() {
		assert.equal(elements.length, 85);
	  });
      it("check matches get walls count", function() {
		assert.equal(walls.length, 73);
	  });
	   it("check matches get others count", function() {
		assert.equal(others.length, 12);
	  });
	   it("check matches get exites count", function() {
		assert.equal(exites.length, 1);
	  });
	   it("check matches get monstres count", function() {
		assert.equal(monstres.length, 6);
	  });
	   it("check matches get treaseres count", function() {
		assert.equal(treaseres.length, 4);
	  });
	  it("check matches get goldmanes count", function() {
		assert.equal(goldmanes.length, 1);
	  });
	});
	
	//check goldMan.move
	
	
		// one step down
	goldMan.move(0,1);
	
	// one step left
	goldMan.move(-1,0);
	 
	 //two step up
	goldMan.move(0,-1);
	goldMan.move(0,-1);
	//three step right
	goldMan.move(1,0);
	goldMan.move(1,0);
	goldMan.move(1,0);
	
	// one step down
	goldMan.move(0,1);
	
	// one step left
	goldMan.move(-1,0);
	
	describe("goldMan.move", function() {

	  it("check matches get goldMan.top", function() {
		assert.equal(goldMan.top, 650);
	  });
      it("check matches get goldMan.left", function() {
		assert.equal(goldMan.left, 150);
	  });
	  
	});
	
	
	
	
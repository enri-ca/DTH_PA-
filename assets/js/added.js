  /**
   * Enrie
   */
	
	/**/
/*$(document).ready(function(){})*/

counter = 1
function slide_slides(selection){/*selection){*/
	if (selection == 1){
		id = "igraph1";
		}
	if (selection == 2){
		id = "igraph2";
		}
	if (selection == 3){
		id = "igraph3";
		}
	if (selection == 4){
		id = "igraph4";
		}
		
	graph = document.getElementById(id).src;

/*	
container = document.querySelector("#slider4");
if (container.querySelectorAll("a.control_next") {
		counter=counter+1;
		}
	
	if (a.classList.contains('control_prev')) {
		if (counter > 1){
			counter=counter-1;
		}
		if (counter <= 1){
			counter=4;
		}
	}*/
	
	counter = counter+1;
	if (counter==2) {
		graph = graph.replace('.1.html', '.2.html');
		}
	if (counter==3) {
		graph = graph.replace('.2.html', '.3.html');
		}
	if (counter==4) {
		graph = graph.replace('.3.html', '.1.html')
		counter = 1;
		}
	if (counter==0) {
		graph = graph.replace('.1.html', '.3.html');
		}
	if (counter==-1) {
		graph = graph.replace('.3.html', '.2.html')
		}
	if (counter==-2) {
		graph = graph.replace('.2.html', '.1.html');
		counter = 1;
		}
	
	document.getElementById(id).src = graph
	};



function bigImg(x) {
x.style.width = "120%"; /*32-64 px*/}

function normalImg(x) {
x.style.width = "100%"; /*32-64 px*/}



	
/*$(".testimonial-img").onmouseout(
	function normalImg(x) {
  x.style.height = "100%"; /*32-64 px

$(document).ready(function(){
		$(".testimonial-img").on("mouseover", function(){
									x.style.width = "200%";
									})
							});

/*
let

0 = 'assets/data_viz/1.1_OA_Countries0.htm'
1 = 'assets/data_viz/OA_Countries1.htm'
2 = 'assets/data_viz/OA_Countries1.htm'
counter = 0	
*/
/*
counter=0
function slide_articles(selection){
	if (selection == 1){
	id = "igraph1"};}
	if (selection == 2){
		id = "igraph2"};}
	if (selection == 3){
		id = "igraph3"};}
	if (selection == 4){
		id = "igraph4"};}	
	counter=counter+1;
	if (counter==1) {
	document.getElementById(id).src = 'assets/data_viz/1.2_OA.htm'
	if (counter==2) {
	document.getElementById(id).src = 'assets/data_viz/1.3_OA.htm'
	if (counter==3) {
	document.getElementById(id).src = 'assets\data_viz\1.1_OA.htm'
		counter = 0;
		}
	}
*/

  /**
   * Enrie
   */
	
	/**/
/*$(document).ready(function(){})*/
counter = 1
function slide_slides() /*(selection){
	if (selection == a){
		id = "igraph1"};}
	if (selection == b){
		id = "igraph2"};}
	if (selection == c){
		id = "igraph3"};}
	if (selection == d){
		id = "igraph4"};}*/	
	let id = "igraph4";
	counter=counter+1;
	if (counter==2) {
		graph = 'assets/data_viz/1.2_OA.htm';
		}
	if (counter==3) {
		graph = 'assets/data_viz/1.3_OA.htm';
		}
	if (counter==4) {
		graph = 'assets/data_viz/2.1_F.htm';
		counter = 0;
		}
	document.getElementById(id).src = graph
	}

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
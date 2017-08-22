$( document ).ready( function() {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * max) + min;
	}
	
	var squares = [
		"Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
		"Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", 
		"Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran-F", "Nidorina", 
		"Nidoqueen", "Nidoran-M", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff",
		"Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett",
		"Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
		"Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell",
		"Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", 
		"Magnemite", "Magneton", "Farfetchd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder",
		"Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb",
		"Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", 
		"Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie",
		"Mr-Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras",
		"Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops",
		"Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
	];

	var pickRandom = function() {
		var i = 0, m = squares.length;
		var pick = getRandomInt( 0, m );
		var ret = squares[ pick ];
		
		squares.splice(pick, 1)
		return ret;
	};
	
	var str = '', i;
	for( i = 0, x = 0; i < 24; i += 1 ) {
		
		str += '<div class="square"><div class="inner_square">' + pickRandom() + '</div></div>';
		
		if( i == 11 ) {
			str += '<div class="square"><div class="inner_square square_free">FREE</div></div>';
			x += 1;
		}
		
		if( x % 5 == 4 ) {
			$('#card').append( ''+str+'' );
			str = '';
		}
		
		x += 1;
	}
	
	$( 'div.inner_square' ).click( function() {
		if( !$( this ).hasClass( 'square_free' ) ) {
			$( this ).toggleClass( 'square_click' );
			
			
			var matches = [
				[ 0, 1, 2, 3, 4],
				[ 5, 6, 7, 8, 9],
				[10,11,12,13,14],
				[15,16,17,18,19],
				[20,21,22,23,24],
				[ 0, 5,10,15,20],
				[ 1, 6,11,16,21],
				[ 2, 7,12,17,22],
				[ 3, 8,13,18,23],
				[ 4, 9,14,19,24],
				[ 0, 6,12,18,24],
				[ 4, 8,12,17,22]
			], q, l, p;
			
			for( q = 0, l = matches.length; q < l; q += 1 ) {
				found_matches = false;
				if( $( 'div.square' ).eq( matches[ q ][ 0 ] ).find('div.inner_square').eq(0).hasClass('square_click') ) {
					found_matches = true;
					for( p = 0; p <= 4; p += 1 ) {
						if( !( $( 'div.square' ).eq( matches[ q ][ p ] ).find('div.inner_square').eq(0).is('.square_click, .square_free') ) ) {
							found_matches = false;
							break;
						}
					}
					
					if( found_matches === true ) {
						break;
					}
				}
			}
			
			if( found_matches === true ) {
				alert( "BINGO!" );
			}
		}
	} );
} );

/*!
* jQuery UI Touch Punch 0.2.3
*
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Depends:
*  jquery.ui.widget.js
*  jquery.ui.mouse.js
*/
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

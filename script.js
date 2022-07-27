var priceCalculator = document.getElementById('quote-calc');
priceCalculator.onchange = calculatesubtotal;
priceCalculator.onchange();
function calculatesubtotal() {
	var beds = Number(document.getElementById('beds').value) || 0;
	var baths = Number(document.getElementById('baths').value) || 0;
	var uploads = Number(document.getElementById('uploads').value) || 0;
	var server = Number(document.getElementById('server').value) || 0;
	var design = Number(document.getElementById('design').value) || 0;
	var database = Number(document.getElementById('database').value) || 0;
	var extras = 0;
	var Gallery = 0;
	var Image = 0;
	var Google = 0;
	var Custom = 0;
	var Contact = 0;
		if ( $( "#Gallery-col" ).hasClass( "on" ) ) {  Gallery = 99; }
		if ( $( "#Image-col" ).hasClass( "on" ) ) { Image = 29; }
		if ( $( "#Google-col" ).hasClass( "on" ) ) { Google = 39; }
		if ( $( "#Custom-col" ).hasClass( "on" ) ) { Custom = 29; }
		if ( $( "#Contact-col" ).hasClass( "on" ) ) { Contact = 29; }
	extras = Gallery + Image + Google + Custom + Contact;
	var discount = 1;
		if ( $( "#col-once-off" ).hasClass( "on" ) ) {
			discount = 1;
		} else if ( $( "#col-weekly" ).hasClass( "on" ) ) {
			discount = 0.5;
		} else if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
			discount = 0.55;
		} else if ( $( "#col-monthly" ).hasClass( "on" ) ) {
			discount = 0.6;
		}
	var subtotal = (beds + uploads + server + design + database + (baths * 29) + extras) * discount;
	document.getElementById("total").innerHTML = "Rs." + subtotal.toFixed(2);
}

$('#Gallery-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("Gallery");
	} else {
		$$.removeClass('on');
		document.getElementById("Gallery");
	}
	calculatesubtotal();
})
$('#Image-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("Image");
	} else {
		$$.removeClass('on');
		document.getElementById("Image");
	}
	calculatesubtotal();
})
$('#Google-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("Google");
	} else {
		$$.removeClass('on');
		document.getElementById("Google");
	}
	calculatesubtotal();
})
$('#Custom-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("Custom");
	} else {
		$$.removeClass('on');
		document.getElementById("Custom");
	}
	calculatesubtotal();
})
$('#Contact-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("Contact");
	} else {
		$$.removeClass('on');
		document.getElementById("Contact");
	}
	calculatesubtotal();
})

$('#col-once-off').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('onceOff');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("once-off");
	}
	calculatesubtotal();
})
$('#col-weekly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('weekly');
		document.getElementById("weekly");
	}
	calculatesubtotal();
})
$('#col-fortnightly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('fortnightly');
		document.getElementById("fortnightly");
	} 
	calculatesubtotal();
})
$('#col-monthly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('monthly');
		document.getElementById("monthly");
	} 
	calculatesubtotal();
})

function onlyOne(id) {
	switch (id) {
case 'onceOff':
			//discount = 1;
			// weekly
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				document.getElementById("weekly");
			}
			// fortnightly
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
				$( "#col-fortnightly" ).removeClass( "on" );
				document.getElementById("fortnightly");
			}
			// monthly
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
				$( "#col-monthly" ).removeClass( "on" );
				document.getElementById("monthly");
			}
			
break;
case 'weekly':
			//discount = 0.5;
			// Once Off
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
					$( "#col-once-off" ).removeClass( "on" );
					document.getElementById("once-off");
				}	
			// fortnightly
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
					$( "#col-fortnightly" ).removeClass( "on" );
					document.getElementById("fortnightly");
				}
			// monthly
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
					$( "#col-monthly" ).removeClass( "on" );
					document.getElementById("monthly");
				}
break;
case 'fortnightly':
			//discount = 0.45;
			// once-off
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
				$( "#col-once-off" ).removeClass( "on" );
				document.getElementById("once-off");
			}
			// weekly
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				document.getElementById("weekly");
			}
			// monthly
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
				$( "#col-monthly" ).removeClass( "on" );
				document.getElementById("monthly");
			}
break;
case 'monthly':
			//discount = 0.4;
			// once- off
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
				$( "#col-once-off" ).removeClass( "on" );
				document.getElementById("once-off");
			}
			// weekly
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				document.getElementById("weekly");
			}
			// fortnightly
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
				$( "#col-fortnightly" ).removeClass( "on" );
				document.getElementById("fortnightly");
			}
break;
	}
}
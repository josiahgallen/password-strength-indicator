'use strict';
var $ = require('jquery');

$(document).ready(function() {
	function passwordValidator(password) {
		if(/\d+/.test(password) && password.length < 8) {
			return 0;
		} else if(/[A-Z]+/i.test(password) && password.length < 8) {
			return 1;
		} else if(password.length >= 8 && /(?=.*\d)(?=.*[a-z])/i.test(password)) {
			return 2;
		}else if(/(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*]).*/i && password.length >= 8) {
			return 3;
		}
	}

	$('input').keyup(function() {
		var check = undefined;
		var messages = ['Very Weak', 'Weak', 'Strong', 'Very Strong'];
		var passwordString = $('input').val().toString();
		check = passwordValidator(passwordString);
		$('#output').html(messages[check]);
		if($('input').val().length < 1) {
			$('#output').html(messages[0]);
		}
	})
})
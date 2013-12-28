$(document).ready(function() {
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var lloji_1 = document.getElementById('lloji_1').value;
		var lloji_2 = document.getElementById('lloji_2').value;
		var lloji_3 = document.getElementById('lloji_3').value;
		var lloji_4 = document.getElementById('lloji_4').value;
		var lloji_5 = document.getElementById('lloji_5').value;

		/*Check what the user entered. In case the user left the input field empty then
		  that field is given the value 0 by default. */
		if (lloji_1==''){
		document.getElementById('lloji_1').value = 0;
		lloji_1 = document.getElementById('lloji_1').value;
		}

		if (lloji_2==''){
		document.getElementById('lloji_2').value = 0;
		lloji_2 = document.getElementById('lloji_1').value;
		}
		
		if (lloji_3==''){
		document.getElementById('lloji_3').value = 0;
		lloji_3 = document.getElementById('lloji_1').value;
		}

		if (lloji_4==''){
		document.getElementById('lloji_4').value = 0;
		lloji_4 = document.getElementById('lloji_1').value;
		}

		if (lloji_5==''){
		document.getElementById('lloji_5').value = 0;
		lloji_5 = document.getElementById('lloji_1').value;
        }		
		
        //check if the input fields do not contain integers, i.e.strings. In this case, display error message		
        if(Number(document.getElementById('lloji_1').value) < 0 || isNaN(document.getElementById('lloji_1').value) || !isInteger(document.getElementById('lloji_1').value)){
		  document.getElementById('error').innerHTML = "Please enter a number greater than or equal to 0!";
			return false;
		} else document.getElementById('error').innerHTML = "";
		
		if(Number(document.getElementById('lloji_2').value) < 0 || isNaN(document.getElementById('lloji_2').value) || !isInteger(document.getElementById('lloji_2').value)){
		  document.getElementById('error').innerHTML = "Please enter a number!";
			return false;
		} else document.getElementById('error').innerHTML = "";
		
		if(Number(document.getElementById('lloji_3').value) < 0 || isNaN(document.getElementById('lloji_3').value) || !isInteger(document.getElementById('lloji_2').value)){
		  document.getElementById('error').innerHTML = "Please enter a number!";
			return false;
		} else document.getElementById('error').innerHTML = "";
		
		if(Number(document.getElementById('lloji_4').value) < 0 || isNaN(document.getElementById('lloji_4').value) || !isInteger(document.getElementById('lloji_4').value)){
		  document.getElementById('error').innerHTML = "Please enter a number!";
			return false;
		} else document.getElementById('error').innerHTML = "";
		
		if(Number(document.getElementById('lloji_5').value) < 0 || isNaN(document.getElementById('lloji_5').value) || !isInteger(document.getElementById('lloji_5').value)){
		  document.getElementById('error').innerHTML = "Please enter a number!";
			return false;
		} else document.getElementById('error').innerHTML = "";
				
		//organize the data properly
		var data = new Object(); 
		data.lloji_1 = lloji_1;
		data.lloji_2 = lloji_2;
		data.lloji_3 = lloji_3;
		data.lloji_4 = lloji_4;
		data.lloji_5 = lloji_5;
		
		var jsonText = JSON.stringify(data);

		var postData = "data="+jsonText;
		
        $.ajax({
			type: "get",
			dataType: "json",
			data: postData,
			url: 'Bonusi.php',
			beforeSend: function() {
            //show loading animation here
			document.getElementById('loading').innerHTML = "</br>Loading ...";
            },
			success: function(data) {
			document.getElementById('loading').innerHTML = '';
			document.getElementById('sasia_1').value = data.sasia_1;
			document.getElementById('sasia_2').value = data.sasia_2;
			document.getElementById('sasia_3').value = data.sasia_3;
			document.getElementById('sasia_4').value = data.sasia_4;
			document.getElementById('sasia_5').value = data.sasia_5;
			document.getElementById('sasia_6').value = data.sasia_6;
			document.getElementById('sasia_7').value = data.sasia_7;
			document.getElementById('sasia_8').value = data.sasia_8;
			document.getElementById('sasia_9').value = data.sasia_9;
			document.getElementById('sasia_10').value = data.sasia_10;
		}
      });		
   });
 
 function isInteger(n) {
	return (n.toString().search(/^-?[0-9]+$/) == 0 )
}
});	

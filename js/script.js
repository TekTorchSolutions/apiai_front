


function make_request(text){
	const client = new ApiAi.ApiAiClient({accessToken: '518d3765d1154ab0b5d0f3f2863945b8'});
	const promise = client.textRequest(text);

promise
    .then(handleResponse)
    .catch(handleError);
}




function handleResponse(serverResponse) {
		console.log(serverResponse)
        text_response=(serverResponse.result.fulfillment.speech);
        $("#scrollable-content").append("<p><b>MeBot: </b>"+text_response+"</p>");
        adjust_scroll();
}



function handleError(serverError) {
        console.log(serverError);
}
function adjust_scroll(){
	$('#scrollable-content').animate({scrollTop:
        	$('#scrollable-content').prop('scrollHeight')},1000);
}


/*

function send_text_request(text){


	$.ajax({

		type:'POST',
		url:"https://api.api.ai/v1/query",
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		headers:{
			"Authorization":"Bearer "+"518d3765d1154ab0b5d0f3f2863945b8"
		},
		data:JSON.stringify({query:text,lang:'en',sessionId:"bankbot"}),

	}).done(function(response){
		
		console.log(response)
		handle_response(response.result.speech)

	});

};


function handle_response(text_response){

	$("#scrollable-content").append("<p><b>MeBot: </b>"+text_response+"</p>");



}
*/
function reply(){
		var text=$('#input_space').val();
		$("#input_space").val("");
		$("#scrollable-content").append("<p><b>You: </b>"+text+"</p>");
		adjust_scroll();
	//send_text_request(text);
		make_request(text);
		



		
}


$('#myForm').submit(function(e){
	e.preventDefault();
	reply();
});
$('#input_space').keypress(function(e){
	if(e.charCode==13){
		reply();
	}
})

$('.button').click(function(){
	$('#dialog-window').toggle();
})



//function to make request to API.ai.
function make_request(text){
	const client = new ApiAi.ApiAiClient({accessToken: '518d3765d1154ab0b5d0f3f2863945b8'});
	const promise = client.textRequest(text);

promise
    .then(handleResponse)
    .catch(handleError);
}



//response from request
function handleResponse(serverResponse) {
		console.log(serverResponse)
        text_response=(serverResponse.result.fulfillment.speech);
        $("#scrollable-content").append("<p><b>MeBot: </b>"+text_response+"</p>");
        adjust_scroll();
}



function handleError(serverError) {
        console.log(serverError);
}


//adjusts scrolling while chat proceeds
function adjust_scroll(){
	$('#scrollable-content').animate({scrollTop:
        	$('#scrollable-content').prop('scrollHeight')},1000);
}


//combines all above functions to generate a reply
function reply(){
		var text=$('#input_space').val();
		$("#input_space").val("");
		$("#scrollable-content").append("<p><b>You: </b>"+text+"</p>");
		adjust_scroll();
	//send_text_request(text);
		make_request(text);
		

}

//pressing send
$('#myForm').submit(function(e){
	e.preventDefault();
	reply();
});

//[ressing enter]
$('#input_space').keypress(function(e){
	if(e.charCode==13){
		reply();
	}
})

//toggle button
$('.button').click(function(){
	$('#dialog-window').toggle();
})


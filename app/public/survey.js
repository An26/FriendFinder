
var questions = [
'Your mind is always buzzing with unexplored ideas and plans.', 
'Generally speaking, you rely more on your experience than your imagination.', 
'You find it easy to stay relaxed and focused even when there is some pressure.',
'You rarely do something just out of sheer curiosity.',
'People can rarely upset you.',
'It is often difficult for you to relate to other people’s feelings.',
'In a discussion, truth should be more important than people’s sensitivities.',
'You rarely get carried away by fantasies and ideas.',
'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.',
'You feel more energetic after spending time with a group of people.'
];

function createQuestions() {
	for(var i = 0; i < questions.length; i++){

		var newQuestionDiv = $('<div class="question' + i + '">'); //creates <div> & </div> with class=question1or2or3...

		// var test = $('<div class="testy test">');
		// newQuestionDiv.append(test);

		var questionTextDiv = $('<div class="questionTexts well col-md-8">').html(i + 1 +'. ' + questions[i]);
		newQuestionDiv.append(questionTextDiv);

		var dropDownDiv = $('<div class="col-md-4">');
		var dropDownForm = $('<select class="form-control" id="selectForm' + i + '">');

		var optionForm = $('<option>').html("Choose response").attr('value', 0);
		var optionForm1 = $('<option>').html("1: Strongly Disagree").attr('value', 1);
		var optionForm2 = $('<option>').html("2: Disagree").attr('value', 2);
		var optionForm3 = $('<option>').html("3: Neutral").attr('value', 3);
		var optionForm4 = $('<option>').html("4: Agree").attr('value', 4);
		var optionForm5 = $('<option>').html("5: Strongly Agree").attr('value', 5);

		dropDownDiv.append(dropDownForm);

		dropDownForm.append(optionForm);
		dropDownForm.append(optionForm1);
		dropDownForm.append(optionForm2);
		dropDownForm.append(optionForm3);
		dropDownForm.append(optionForm4);
		dropDownForm.append(optionForm5);

		newQuestionDiv.append(dropDownDiv);

		$('.dynamicQuestionsHere').append(newQuestionDiv);
	};
};

function testFunc() {
	console.log('am i working?');
}

function getUserInfo(){
	var newFriend = {
		name: $('#yourName').val().trim(),
		img: $('#yourPhoto').val().trim(),
		response: [
		$('#selectForm0').find(":selected").text(),
		$('#selectForm1').find(":selected").text(),
		$('#selectForm2').find(":selected").text(),
		$('#selectForm3').find(":selected").text(),
		$('#selectForm4').find(":selected").text(),
		$('#selectForm5').find(":selected").text(),
		$('#selectForm6').find(":selected").text(),
		$('#selectForm7').find(":selected").text(),
		$('#selectForm8').find(":selected").text(),
		$('#selectForm9').find(":selected").text()]
	}
	console.log(newFriend);

	findFriendMatch(newFriend);

	alert('Thank you for your submission!');

	//resets all of the input boxes and selections
	$('#yourName').val("");
	$('#yourPhoto').val("");
	$('#selectForm0').prop('selectedIndex',1);
	$('#selectForm1').prop('selectedIndex',1);
	$('#selectForm2').prop('selectedIndex',1);
	$('#selectForm3').prop('selectedIndex',1);
	$('#selectForm4').prop('selectedIndex',1);
	$('#selectForm5').prop('selectedIndex',1);
	$('#selectForm6').prop('selectedIndex',1);
	$('#selectForm7').prop('selectedIndex',1);
	$('#selectForm8').prop('selectedIndex',1);
	$('#selectForm9').prop('selectedIndex',1);

	postNewFriend(newFriend);

	return newFriend;	
}

function postNewFriend(newFriend){
	//POSTING to my friends/api page
	var currentWindowURL = window.location.origin;

	$.post(currentWindowURL + '/api/friends', newFriend, function(data){
		console.log('friend was added!');
	});
}

function findFriendMatch(findFriendForMe){
	//get current friends from api - json call
	var currentURL = window.location.origin;

	//GET friends' scores, and compares it to newFriend, then pushes scores up to ScoresTotalArray.
	$.ajax({
		url: currentURL + '/api/friends', 
		method: 'GET'
	}).done(function (data){
		//console.log(data);
		//console.log('data: ' + data[0].name + '\n' + data[0].img + '\n' + data[0].response);

		var scoresTotalsArray = [];

		//for loop to find all the friends in the api array
		for(var i = 0; i < data.length; i++){ 
			console.log('------------------------------------------\napi length: ' + data.length);
			console.log('friends: ' + data[i].name);
			console.log('name: ' + data[i].name + '\nscores: ' + data[i].response);

			var scores = data[i].response; //api response/scores array
			var differenceArray = [];

			//for loop to compare each friends' response array with new friend
			for(var n = 0; n < scores.length; n++) { 
				var apiScore = parseInt(scores[n].charAt(0));
				var userScore = parseInt(findFriendForMe.response[n].charAt(0));
				var difference = Math.abs(apiScore - userScore);
				differenceArray.push(difference);

				//console.log('api scores: ' + apiScore);
				//console.log('new friend: ' + userScore);
				//console.log('diff: ' + difference);
				//console.log('diff array: ' + differenceArray);
			}

			var diffArraySum = eval(differenceArray.join('+')); 
			scoresTotalsArray.push(diffArraySum);

			//console.log('sum of diffArray = ' + diffArraySum);
			console.log('scoresTotalsArray: ' + scoresTotalsArray);


		}
		//finds the most compatible score and alerts the compatible friend!

		var bestFriendScore = Math.min.apply(Math, scoresTotalsArray);
		var bestFriendIndex = scoresTotalsArray.indexOf(bestFriendScore);

		//alert(data[bestFriendIndex].name);
	});
}




$('document').ready(function() {
	createQuestions();
	//findFriendMatch();  //comment out when finalized, uncomment for testing
	$('.submitBtn').on('click', getUserInfo);
});








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


$('document').ready(function() {
	createQuestions();
	$('submitBtn').on('click', getUserInfo());
}); 

//how to get a call back of answers from this dynamically created page?


function getUserInfo() {


newFriend = {
	name: $('#yourName').val().trim(),
	imgHref: $('#yourPhoto').val().trim()
// 		response0: $('#selectForm0').find(":selected").text();
// 		response1: $('#selectForm1').find(":selected").text();
// 		response2: $('#selectForm2').find(":selected").text();
// 		response3: $('#selectForm3').find(":selected").text();
// 		response4: $('#selectForm4').find(":selected").text();
// 		response5: $('#selectForm5').find(":selected").text();
// 		response6: $('#selectForm6').find(":selected").text();
// 		response7: $('#selectForm7').find(":selected").text();
// 		response8: $('#selectForm8').find(":selected").text();
// 		response9: $('#selectForm9').find(":selected").text();
// 		//how to get values from the select forms?? 
}
console.log(newFriend);

// 	// var currentWindowURL = window.location.origin;

// 	// $.post(currentWindowURL + '/api/friends', newFriend, function(data){
// 	// 	console.log('friend was added!');
// 	// });
};



// //at the end - to clear values in the inputs
// $('#yourName').val("");
// $('#yourPhoto').val("");
// //how to clear the selectForms?





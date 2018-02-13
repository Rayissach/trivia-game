console.log("hello")
var questions = [{
	question: "Who was #1",
	choices: ["Smitty Werberjagermanjenkins", "Smitty Jagerwerbenmanjensen", "Smitty Werbenjagermanjensen", "Smitty Werbenjenkinsmanjensen"],
	answer: 2
},
{
	question: "How many bad words are there if you're a sailor?",
	choices: ["7", "13", "11", "9"],
	answer:	1
},
{
	question: "What night does the ghost of the Hash-Slinging Slasher return to the Krusty Krab to wreak his horrible vengeance",
	choices: ["Monday", "Tuesday", "Wednesday", "Thursday"],
	answer:	1
},
{
	question: "Which of the following is not a Krabby Patty ingredient?",
	choices: ["Cheese", "Mushrooms", "Onions", "Mustard"],
	answer:	1
},
{
	question: "Why does the Flying Dutchman wear a sock?",
	choices: ["To Eat", "To Sleep", "To Fly", "To be Scary"],
	answer:	0
},
{
	question: "Which is NOT a way to attract a sea bear?",
	choices: ["Eating sliced cheese", "Playing the clarinet badly", "Wearing a sombrero in a goofy fashion", "Screeching like a chimpanzee"],
	answer:	0
}];


var correctAnswers = 0;
var incorrectAnswers = 0;
var uncompletedQuestions = 6;

$(document).ready(function() {

	$("#questionsDiv").hide();

	$(".start").on("click", function() {

		$("#start").hide()
		$("#questionsDiv").show();

		setTimeout(setTimer);

		var timeRemaining = 59;

		var counter = setInterval(setTimer, 1000);

		function setTimer() {

			$("#timer").html("Time Remaining: 00:" + timeRemaining);

			timeRemaining--;

			if (timeRemaining <= 0) {

				clearInterval(counter);

				$("#timer").html("<h4>Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "Uncompleted: " + uncompletedQuestions + "<br><br> Reload the page to try again!</h4>");

				$("#questionsDiv").hide();			
			}

			$(".submit").on("click", function submit() {

				clearInterval(counter);

				$("#timer").html("<h4>Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "Uncompleted: " + uncompletedQuestions + "<br><br> Reload the page to try again!</h4>");

				$("#questionsDiv").hide();

			});
		};

	});

	function qOne() {

		console.log(questions[0]);

		$("#questionsDiv").append("<h3>" + questions[0].question + "</h3> <br>");

		for (var i = 0; i < questions[0].choices.length; i++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ1" id="radioAnswer1">' + questions[0].choices[i]) + " ";
		}

		var radioValue = $('input[name="radioQ1"]:checked').val();
		if (radioValue === questions[0].answer) {
			correctAnswers++;
			uncompletedQuestions--;
			}
		else if (radioValue !== questions[0].answer) {
			incorrectAnswers++;
			uncompletedQuestions--;
			}
	}

	function qTwo() {

		console.log(questions[1]);

		$("#questionsDiv").append("<h3>" + questions[1].question + "</h3> <br>");

		for (var i = 0; i < questions[1].choices.length; i++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ2" id="radioAnswer2">' + questions[1].choices[i]) + " ";
		}


			var radioValue = $("input[name='radioQ2']:checked").val();
			if (radioValue == questions[1].choices[3]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}

	function qThree() {

		console.log(questions[2]);

		$("#questionsDiv").append("<h3>" + questions[2].question + "</h3> <br>");

		for (var i = 0; i < questions[2].choices.length; i++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ3" id="radioAnswer3">' + questions[2].choices[i]) + " ";
		}


			var radioValue = $("input[name='radioQ3']:checked").val();
			if (radioValue == questions[2].choices[1]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}

	function qFour() {

		console.log(questions[3]);

		$("#questionsDiv").append("<h3>" + questions[3].question + "</h3> <br>");

		for (var i = 0; i < questions[3].choices.length; i++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ4" id="radioAnswer4">' + questions[3].choices[i]) + " ";
		}


			var radioValue = $("input[name='radioQ4']:checked").val();
			if (radioValue == questions[3].choices[3]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}

	function qFive() {

		console.log(questions[4]);

		$("#questionsDiv").append("<h3>" + questions[1].question + "</h3> <br>");

		for (var i = 0; i < questions[4].choices.length; i++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ5" id="radioAnswer5">' + questions[4].choices[i]) + " ";
		}


			var radioValue = $("input[name='radioQ5']:checked").val();
			if (radioValue == questions[4].choices[2]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}

	function qSix() {

		console.log(questions[5]);

		$("#questionsDiv").append("<h3>" + questions[1].question + "</h3> <br>");

		for (var i = 0; i < questions[5].choices.length; i++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ6" id="radioAnswer5">' + questions[5].choices[i]) + " ";
		}


			var radioValue = $("input[name='radioQ6']:checked").val();
			if (radioValue == questions[4].choices[2]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}



	qOne();
	qTwo();
	qThree();
	qFour();
	qFive();
	qSix();

	$("#questionsDiv").append('<br><br> <button id="submit" class="btn btn-default submit" type="submit">SUBMIT</button>');

});

////////////////////////////////////////////////////////////////////////////////

// var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/loading.gif", "images/logo_JavaScript.png"];

// // Variable showImage will hold the setInterval when we start the slideshow
// var showImage;

// // Count will keep track of the index of the currently displaying picture.
// var count = 0;

// // TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
// // $("#startSlideshow").on("click", start);
// $("#start").click(startSlideshow);


// // TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
// // $("#stopSlildeshow").on("click", stop);
// $("#stop").click(stopSlideshow);

// // This function will replace display whatever image it's given
// // in the 'src' attribute of the img tag.
// function displayImage() {
//   $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
//   // intervalID = setInterval(count.nextImage, 3000);
// }

// function nextImage() {

//   // TODO: Increment the count by 1.
//   count++;


//   // TODO: Show the loading gif in the "image-holder" div.
//   $("#image-holder").html("<img src=" + images[2] + " width='200px'/>");


//   // TODO: Use a setTimeout to run displayImage after 1 second.
//   setTimeout(displayImage, 1000);


//   // TODO: If the count is the same as the length of the image array, reset the count to 0.
//   if (count === images.length) {
//   	count = 0
//   }
// }
// function startSlideshow() { 

//   // TODO: Use showImage to hold the setInterval to run nextImage.

//   showImage = setInterval(nextImage, 1000);

// }
// function stopSlideshow() {

//   // TODO: Put our clearInterval here:
//   clearInterval(showImage);

// }

// // This will run the display image function as soon as the page loads.
// displayImage();

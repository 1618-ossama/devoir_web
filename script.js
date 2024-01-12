function scrollB() {
  window.scrollBy(0,625);  
}

function scroll1() {
  var scrollableDiv = document.getElementById("container_3");
  scrollableDiv.scrollTop += 635;
}

function scrolle() {
  var scrollableDiv = document.getElementById("container_3");
  scrollableDiv.scrollTop += 605;
}

function non() {
  window.alert("Choix Incorrect !!!");
}

var correctAnswershtml = ['a', 'b', 'b', 'a', 'b'];
var correctAnswerscss = ['a', 'a', 'b', 'b', 'a'];
var correctAnswersjs = ['a', 'a', 'a', 'b', 'b'];

var total = 0;
var scorehtml = 0;
var scorecss = 0;
var scorejs = 0 ;

function scorehtmlf() {

  for (let i = 1; i <= correctAnswershtml.length; i++) {
      var selectedValue = document.querySelector('input[name="q' + i + '"]:checked');

      if (selectedValue) {
          selectedValue = selectedValue.value;

          if (selectedValue === correctAnswershtml[i - 1]) {
              scorehtml++;
          }
      }
  }

//  alert('HTML Score: ' + scorehtml);
}

function scorecssf() {

  for (let i = 1; i <= correctAnswerscss.length; i++) {
      var selectedValue = document.querySelector('input[name="m' + i + '"]:checked');

      if (selectedValue) {
          selectedValue = selectedValue.value;

          if (selectedValue === correctAnswerscss[i - 1]) {
              scorecss++;
          }
      }
  }

//  alert('css Score: ' + scorecss);
}

function scorejsf() {

  for (let i = 1; i <= correctAnswershtml.length; i++) {
      var selectedValue = document.querySelector('input[name="n' + i + '"]:checked');

      if (selectedValue) {
          selectedValue = selectedValue.value;

          if (selectedValue === correctAnswersjs[i - 1]) {
              scorejs++;
          }
      }
  }

//  alert('js Score: ' + scorejs);
}

function score() {
  total = scorecss + scorehtml + scorejs ;
  document.getElementById('score').innerHTML = total ;
  var images = ['imgs/score2.png', 'imgs/score1.png', 'imgs/score0.png'];
  var imageElement = document.getElementById('imgscore');
  var imageIndex;

if (total > 12) {
  imageIndex = 0;
} else if (total > 7) {
  imageIndex = 1;
} else {
  imageIndex = 2;
}

imageElement.src = images[imageIndex];

}

function searchkey(event) {
    if(event.key === 'Enter' ) {
      searchGoogle(); 
  }  
}

function searchGoogle() {
  var searchQuery = document.querySelector('.search').value;
  var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
  window.location.href = googleSearchUrl;
  document.querySelector('.search').value = '';
}
/*
 * DOTS: Level Two
 *
 */
let dots = document.querySelectorAll('.js-dot');
 console.log(dots.length);

 let scoreTotalTwo = document.querySelector('.js-score');
 console.log(scoreTotalTwo);
 let liveScoreTwo = 0;
console.log(liveScoreTwo.toString(10).padStart(4, '0'));


// dots.addEventListener('click', function(e) {
//   console.log(e);
//   liveScoreTwo += 10;
//   scoreTotal.innerText = liveScoreTwo.toString(10).padStart(4, '0')
//   if (liveScoreTwo >= 100) {
//    //levelTwo[0].style.display = !hidden
//    document.querySelector('main').classList.add('game-over')
//   }
// });

for (let i = 0; i < dots.length; i ++) {
  dots[i].addEventListener('click', function(e) {
  liveScoreTwo += 10;
  scoreTotalTwo.innerText = liveScoreTwo.toString(10).padStart(4, '0')
  if (liveScoreTwo >= 100) {
   document.querySelector('main').classList.add('game-over')
  }
  })
}
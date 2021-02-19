/*
 * DOTS: Level Three
 *
 */

let dotsThree = document.querySelectorAll('.js-dot');
console.log(dotsThree);
let scoreTotalThree = document.querySelector('.js-score');
console.log(scoreTotalThree);
let liveScoreThree = 0;
console.log(liveScoreThree.toString(10).padStart(4, '0'));


for (let i = 0; i < dotsThree.length; i ++) {
  dotsThree[i].addEventListener('click', function(e) {
    //console.log(this.dataset.increment);
    liveScoreThree += parseInt(this.dataset.increment);
    console.log(this.dataset.increment);
    console.log(liveScoreThree)
    scoreTotalThree.innerText = liveScoreThree.toString(10).padStart(4, '0')
  if (liveScoreThree >= 100) {
   document.querySelector('main').classList.add('game-over')
  }
  })
}
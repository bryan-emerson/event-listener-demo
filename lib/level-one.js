/*
 * DOTS: Level One
 *
 */
let levelTwo = document.querySelectorAll('ul li');
console.log(levelTwo[0]);
levelTwo[0].style.display = 'hidden';

 let dot = document.querySelector('.js-dot');
 console.log(dot);
 let scoreTotal = document.querySelector('.js-score');
 console.log(scoreTotal);
 let liveScore = 0;
console.log(liveScore.toString(10).padStart(4, '0'))

 dot.addEventListener('click', function(e) {
   console.log(e);
   liveScore += 10;
   scoreTotal.innerText = liveScore.toString(10).padStart(4, '0')
   if (liveScore >= 100) {
    //levelTwo[0].style.display = !hidden
    document.querySelector('main').classList.add('game-over')
  }
 })

//console.log(document.querySelector('main'))

// if (liveScore >= 100) {
//   //levelTwo[0].style.display = !hidden
//   document.querySelector('.main').classList.add('game-over')
// }
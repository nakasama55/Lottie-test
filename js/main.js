lottie.loadAnimation({
  container: document.getElementById('lottie01'), // アニメーションをさせたいdivなどhtml要素ににつけた名前
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'philosophy.json', // JSONファイルのパス
});

lottie.loadAnimation({
  container: document.getElementById('lottie02'), // アニメーションをさせたいdivなどhtml要素ににつけた名前
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'anim/history.json', // JSONファイルのパス
});


$(function () {
  
  var iconBlock = document.getElementById('space01');

  // ホバー時にアニメーションを再生
  iconBlock.addEventListener('mouseenter', function() {
    lottie01.play();
  });

  // ホバーが外れたらアニメーションを停止
  iconBlock.addEventListener('mouseleave', function() {
    lottie01.stop();
  });
});

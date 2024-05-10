lottie.loadAnimation({
  container: document.getElementById('lottie01'), // アニメーションをさせたいdivなどhtml要素ににつけた名前
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'philosophy.json', // JSONファイルのパス
});

lottie.loadAnimation({
  container: document.getElementById('lottie02'), // アニメーションをさせたいdivなどhtml要素ににつけた名前
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'anim/history.json', // JSONファイルのパス
});


$(function () {
  // ホバー時にアニメーションを再生
  testoki.addEventListener('mouseenter', function() {
    lottie01.play();
  });

  // ホバーが外れたらアニメーションを停止
  testoki.addEventListener('mouseleave', function() {
    lottie01.stop();
  });
});

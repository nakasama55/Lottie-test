lottie.loadAnimation({
  container: document.getElementById('lottie01'), // アニメーションをさせたいdivなどhtml要素ににつけた名前
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'philosophy.json', // JSONファイルのパス
});

lottie.loadAnimation({
  container: document.getElementById('lottie02'), // アニメーションをさせたいdivなどhtml要素ににつけた名前
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'anim/history.json', // JSONファイルのパス
});


$(function () {
  // Lottieプレーヤーを取得
  var lottiePlayer = document.getElementById('lottie');

  // icon-block要素を取得
  var iconBlock = document.getElementById('testoki');

  // ホバー時にアニメーションを再生
  testoki.addEventListener('mouseenter', function() {
    lottie.play();
  });

  // ホバーが外れたらアニメーションを停止
  testoki.addEventListener('mouseleave', function() {
    lottie.stop();
  });
});

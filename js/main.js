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
  // ホバー時にアニメーションを再生
  space01.addEventListener('mouseenter', function() {
    lottie01.play();
  });

  // ホバーが外れたらアニメーションを停止
  space01.addEventListener('mouseleave', function() {
    lottie01.stop();
  });
});

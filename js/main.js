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

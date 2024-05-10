// Lottieアニメーション1番目
const container01 = document.getElementById("lottie01"); // htmlのidを定義
lottie.loadAnimation({
  container: container01, // アニメーションを格納するDOM要素
  renderer: "svg", // svg、canvas、htmlの設定ができ、html側で生成されるタグが変わる
  loop: true, // アニメーションを繰り返し再生させるか
  autoplay: true, // 自動再生させるか
  path: "webdesign_hover.json"
});

// Lottieアニメーション2番目
const container02 = document.getElementById("lottie02"); // htmlのidを定義
lottie.loadAnimation({
  container: container02, // アニメーションを格納するDOM要素
  renderer: "svg", // svg、canvas、htmlの設定ができ、html側で生成されるタグが変わる
  loop: true, // アニメーションを繰り返し再生させるか
  autoplay: true, // 自動再生させるか
  path: "philosophy.json"
});



//$(function () {
  // Lottieプレーヤーを取得
  //var lottiePlayer = document.getElementById('L-anim');

  // icon-block要素を取得
  //var iconBlock = document.getElementById('lottie01');

  // ホバー時にアニメーションを再生
  //iconBlock.addEventListener('mouseenter', function() {
  //  lottiePlayer.play();
  //});

  // ホバーが外れたらアニメーションを停止
  //iconBlock.addEventListener('mouseleave', function() {
  //  lottiePlayer.stop();
  //});
//});

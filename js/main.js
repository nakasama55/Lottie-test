// Lottieアニメーション1番目
const container01 = document.getElementById("lottie01"); // htmlのidを定義
lottie.loadAnimation({
  container: container01, // アニメーションを格納するDOM要素
  renderer: "svg", // svg、canvas、htmlの設定ができ、html側で生成されるタグが変わる
  loop: true, // アニメーションを繰り返し再生させるか
  autoplay: true, // 自動再生させるか
  path: "./webdesign_hover.json", // JSONファイルのパス
});

// Lottieアニメーション2番目
const container02 = document.getElementById("lottie02"); // htmlのidを定義
lottie.loadAnimation({
  container: container02, // アニメーションを格納するDOM要素
  renderer: "svg", // svg、canvas、htmlの設定ができ、html側で生成されるタグが変わる
  loop: true, // アニメーションを繰り返し再生させるか
  autoplay: true, // 自動再生させるか
  path: "./philosophy.json", // JSONファイルのパス
});
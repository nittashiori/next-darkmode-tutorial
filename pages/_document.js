import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript,
            }}
          >
          </script>
        </body>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

const themeInitializerScript = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()`;

function setInitialColorMode() {
  function getInitialColorMode() {
    // ストレージからthemeを取得する。
    const storedPreferenceMode = window.localStorage.getItem("theme");
    // storedPreferenceModeが文字型か判定
    const hasStoredPreference = typeof storedPreferenceMode === "string";

    if(hasStoredPreference) {
      return storedPreferenceMode;
    }

    // 現在のpreference状態を確認する。

    // matchMedia：jsのメディアクエリ
    // prefers-color-scheme：cssのメディア特性で、　ユーザーがシステムに要求したカラーテーマが明色か暗色かを検出するためのもの
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    // preferenceがboolean型か判定
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if(hasMediaQueryPreference) {
      // preferenceがtrueならdark、falseならlightモード。
      return preference.matches ? "dark" : "light";
    }

    return "light";
  }

  const currentColorMode = getInitialColorMode();
  console.log(currentColorMode);

  if(currentColorMode === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

export default MyDocument;
import { useState, useEffect } from "react"

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked); // true or false
  }

  // 第2引数（darkTheme）の値に変更があったら発火する
  useEffect(() => {
    if(darkTheme !== undefined) {
      if(darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">私のポートフォリオ</div>
          <div>
            <form action="#">
              <label className="switch">
                <input type="checkbox" onChange={handleToggle} checked={darkTheme} />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>ellieのポートフォリオ🚀</h1>
            <h3>impressiveで働いてるWebデザイナーです。</h3>
            <p>
              主な業務はデザインとコーディングです。
              最近はNext.jsを勉強しています。
            </p>
            <button className="primary-btn">お問い合わせ</button>
          </div>
        </section>
      </div>
    </div>
  )
}

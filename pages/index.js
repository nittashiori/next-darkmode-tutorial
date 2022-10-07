export default function Home() {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">私のポートフォリオ</div>
          <div>
            <form action="#">
              <label className="switch">
                <input type="checkbox" />
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

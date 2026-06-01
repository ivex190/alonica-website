import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const chapters = [
  {
    id: 1,
    title: "A L O N I C A",
    subtitle: "Ia kuat, tapi belum selesai menemukan dirinya.",
    image: "/images/chapter-01.jpg",
    imagePosition: "center center",
    excerpt:
      "Awal perjalanan Alonica, perempuan yang terlihat tenang, tetapi menyimpan banyak keruntuhan di dalam dirinya.",
    content: [
      "Ada perempuan yang berjalan dengan tenang, padahal di dalam dirinya banyak hal sedang runtuh.",
      "Ia tidak selalu tahu harus pergi ke mana. Tidak selalu paham mengapa hidup begitu keras kepadanya. Tidak selalu mampu menjelaskan rasa lelah yang menumpuk di dadanya. Namun setiap pagi, ia tetap bangun. Tetap berjalan. Tetap terlihat baik-baik saja.",
      "Namanya Alonica.",
      "Bagi dunia, ia mungkin tampak kuat. Perempuan yang tidak banyak mengeluh. Perempuan yang mampu menyelesaikan banyak hal sendiri. Perempuan yang seolah selalu bisa bertahan, meski tidak ada tangan yang benar-benar menahannya ketika ia hampir jatuh.",
      "Namun dunia sering salah membaca perempuan seperti Alonica.",
      "Kuat bukan berarti tidak terluka. Diam bukan berarti tidak ingin didengar. Mandiri bukan berarti tidak pernah merasa sepi. Ada banyak hal yang ia sembunyikan, bukan karena ia ingin terlihat hebat, tetapi karena ia sudah terlalu sering belajar bahwa tidak semua orang mampu memahami luka yang tidak mereka lihat.",
      "Alonica tumbuh di antara tekanan, tuntutan, dan suara-suara yang memintanya menjadi sesuatu yang bahkan belum tentu ia inginkan. Dunia memberinya banyak peran, tetapi jarang memberinya ruang untuk bertanya, “Siapa aku sebenarnya?”",
      "Dan di situlah perjalanannya dimulai.",
      "Bukan perjalanan untuk menjadi sempurna. Bukan juga perjalanan untuk membuktikan apa pun kepada siapa pun. Alonica hanya ingin menemukan dirinya sendiri, di tengah dunia yang terlalu sibuk membentuknya sesuai keinginan mereka.",
      "Ia mungkin belum utuh.",
      "Tapi ia masih berjalan.",
      "Dan terkadang, itu sudah cukup untuk disebut berani."
    ]
  },
  {
    id: 2,
    title: "Perempuan yang Tidak Sempat Lemah",
    subtitle: "Tidak semua kekuatan lahir dari pilihan. Sebagian lahir karena keadaan.",
    image: "/images/chapter-02.jpg",
    imagePosition: "center center",
    excerpt:
      "Tentang tekanan yang membentuk Alonica, dan bagaimana ia belajar menyimpan semuanya sendiri.",
    content: [
      "Ada masa ketika Alonica ingin berhenti sebentar, tetapi hidup tidak memberinya ruang untuk itu.",
      "Ia belajar menjadi kuat bukan karena ia selalu mampu, melainkan karena tidak ada pilihan lain yang tersisa. Ketika orang lain menangis dan dipeluk, ia menangis dalam diam. Ketika orang lain meminta bantuan, ia belajar menyelesaikan semuanya sendiri.",
      "Lama-lama, dunia mengira ia memang tidak butuh siapa-siapa.",
      "Padahal di balik sikap tenangnya, ada seorang perempuan yang lelah karena terlalu sering diminta memahami, tetapi jarang benar-benar dipahami.",
      "Alonica tidak tumbuh dari kelembutan yang cukup. Ia tumbuh dari keadaan yang berkali-kali memintanya menahan diri. Ia belajar membaca suasana sebelum bicara. Ia belajar menelan kecewa sebelum sempat marah. Ia belajar terlihat baik-baik saja, bahkan ketika tubuhnya hanya ingin menyerah sebentar.",
      "Yang paling menyakitkan bukan ketika ia jatuh. Yang paling menyakitkan adalah ketika ia sadar bahwa tidak semua orang yang melihatnya jatuh benar-benar ingin menolongnya bangun.",
      "Sejak itu, Alonica mulai menjaga jarak. Bukan karena ia membenci dunia, tetapi karena ia mulai memahami bahwa tidak semua tempat aman untuk menjadi rapuh.",
      "Ia menjadi perempuan yang sulit ditebak. Tidak banyak meminta. Tidak banyak menjelaskan. Tidak banyak menunjukkan luka. Namun setiap diamnya menyimpan cerita yang tidak pernah selesai ia ucapkan.",
      "Di dalam dirinya, ada pertanyaan yang terus tumbuh: apakah selama ini ia benar-benar kuat, atau hanya terlalu lama dipaksa bertahan?"
    ]
  },
  {
    id: 3,
    title: "Menjadi Alonica",
    subtitle: "Ia tidak harus sempurna untuk pulang kepada dirinya sendiri.",
    image: "/images/chapter-03.jpg",
    imagePosition: "center center",
    excerpt:
      "Tentang Alonica yang mulai memilih dirinya sendiri, bukan untuk menang dari dunia, tetapi untuk berdamai dengan dirinya.",
    content: [
      "Alonica tidak berubah dalam satu malam.",
      "Ia tidak tiba-tiba menjadi perempuan yang sepenuhnya paham arah hidupnya. Ia masih takut. Masih ragu. Masih kadang merasa kecil di hadapan dunia yang terlalu sering menuntutnya menjadi kuat.",
      "Tetapi kali ini, ada sesuatu yang berbeda. Untuk pertama kalinya, ia mulai mendengarkan dirinya sendiri.",
      "Ia mulai berhenti meminta izin kepada dunia untuk merasa lelah. Ia mulai belajar bahwa tidak semua hal harus ia buktikan. Tidak semua orang harus ia puaskan. Tidak semua suara harus ia percaya.",
      "Pelan-pelan, Alonica mengerti bahwa menemukan diri bukan berarti menemukan jawaban untuk semuanya. Kadang, menemukan diri hanya berarti berani mengakui bahwa ia terluka. Berani menerima bahwa ia belum selesai. Berani berjalan tanpa harus terlihat sempurna.",
      "Ia mulai memilih ruang yang membuatnya bisa bernapas. Memilih diam yang menenangkan, bukan diam yang menahan sakit. Memilih pergi dari hal-hal yang terus mengecilkan dirinya. Memilih tinggal bersama bagian dirinya yang dulu sering ia abaikan.",
      "Dunia mungkin masih sama. Tekanannya belum benar-benar hilang. Namun Alonica tidak lagi berdiri dengan cara yang sama.",
      "Kini ia tahu, kekuatan tidak selalu berarti bertahan sampai hancur. Kadang kekuatan adalah keberanian untuk berhenti, mengakui luka, lalu memulai lagi dengan lebih jujur.",
      "Ia belum menjadi akhir dari perjalanannya.",
      "Tapi ia sudah mulai pulang.",
      "Dan untuk pertama kalinya, Alonica tidak lagi berjalan untuk menjadi seperti yang dunia inginkan.",
      "Ia berjalan untuk menjadi dirinya sendiri."
    ]
  }
];

function App() {
  const [selected, setSelected] = useState(chapters[0]);
  const currentIndex = chapters.findIndex((chapter) => chapter.id === selected.id);
  const previous = chapters[currentIndex - 1];
  const next = chapters[currentIndex + 1];

  const chooseChapter = (chapter) => {
    setSelected(chapter);
    setTimeout(() => {
      document.getElementById("read")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => setSelected(chapters[0])}>
            <span>A L O N I C A</span>
            <small>Ia kuat, tapi belum selesai menemukan dirinya.</small>
          </button>
          <nav className="nav-links" aria-label="Navigasi utama">
            <button onClick={() => setSelected(chapters[0])}>Home</button>
            <a href="#chapters">Chapters</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="container hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Narrative Blog</p>
            <h1 className="hero-title">A L O N I C A</h1>
            <p className="hero-description">
              Perjalanan seorang perempuan yang terlihat kuat dari luar, tetapi di dalam dirinya masih mencari bentuk, arah, dan jati diri.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#read">Mulai Membaca</a>
              <a className="button secondary" href="#chapters">Lihat Chapter</a>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image-wrap">
              <img
                src={selected.image}
                alt={selected.title}
                className="feature-image"
                style={{ objectPosition: selected.imagePosition }}
              />
              <div className="image-overlay" />
              <div className="feature-text">
                <p>Chapter {String(selected.id).padStart(2, "0")}</p>
                <h2>{selected.title}</h2>
                <span>{selected.excerpt}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="read" className="read-section">
          <article className="reader container-narrow">
            <p className="eyebrow">Chapter {String(selected.id).padStart(2, "0")}</p>
            <h2>{selected.title}</h2>
            <p className="subtitle">{selected.subtitle}</p>

            <div className="story-text">
              {selected.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="chapter-nav">
              {previous ? (
                <button onClick={() => chooseChapter(previous)}>
                  <small>← Back</small>
                  <span>{previous.title}</span>
                </button>
              ) : <span />}
              {next ? (
                <button onClick={() => chooseChapter(next)} className="next-link">
                  <small>Next →</small>
                  <span>{next.title}</span>
                </button>
              ) : <span />}
            </div>
          </article>
        </section>

        <section id="chapters" className="container chapters-section">
          <div className="section-heading">
            <p className="eyebrow">Chapters</p>
            <h2>Daftar Bagian</h2>
          </div>
          <div className="chapter-grid">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => chooseChapter(chapter)}
                className={`chapter-card ${selected.id === chapter.id ? "active" : ""}`}
              >
                <img src={chapter.image} alt={chapter.title} style={{ objectPosition: chapter.imagePosition }} />
                <div>
                  <p>Chapter {String(chapter.id).padStart(2, "0")}</p>
                  <h3>{chapter.title}</h3>
                  <span>{chapter.excerpt}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container-narrow about-box">
            <p className="eyebrow">About</p>
            <h2>Tentang Alonica</h2>
            <p>
              Alonica bukan perempuan sempurna. Ia adalah seseorang yang sedang belajar membaca dirinya sendiri setelah terlalu lama dibentuk oleh tekanan, luka, dan suara dunia.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">Somebody Else © 2026</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

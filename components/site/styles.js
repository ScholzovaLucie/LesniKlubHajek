export const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Nunito', sans-serif; background: #f3f1e8; color: #2c3a2d; }
  a { text-decoration: none; color: inherit; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up  { animation: fadeUp 0.55s ease both; }
  .fade-up2 { animation: fadeUp 0.55s 0.1s ease both; }
  .fade-up3 { animation: fadeUp 0.55s 0.2s ease both; }
  .hlift { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
  .hlift:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(60,100,20,0.18) !important; }
  .lk-gallery-item {
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }
  .lk-gallery-item img {
    transition: opacity 0.18s ease;
  }
  .lk-gallery-item:hover {
    border-color: rgba(111, 143, 95, 0.8);
    box-shadow: 0 10px 22px rgba(60, 100, 20, 0.2) !important;
  }
  .lk-gallery-item:hover img {
    opacity: 0.93;
  }
  .lk-mobile-toggle { display: none; }
  input, textarea { font-family: 'Nunito', sans-serif; }
  input:focus, textarea:focus { outline: none; border-color: #6f8f5f !important; box-shadow: 0 0 0 3px rgba(111,143,95,0.18); }
  button:hover { opacity: 0.9; }

  @media (max-width: 1024px) {
    .lk-grid-2 { grid-template-columns: 1fr !important; }
    .lk-grid-3 { grid-template-columns: 1fr 1fr !important; }
    .lk-grid-4 { grid-template-columns: 1fr 1fr !important; }
    .lk-footer-grid { grid-template-columns: 1fr 1fr !important; }
  }

  @media (max-width: 700px) {
    body { overflow-x: hidden; }
    .lk-nav-links { display: none !important; }
    .lk-mobile-toggle { display: inline-flex !important; }
    .lk-mobile-panel { width: min(90vw, 340px) !important; }
    .lk-grid-3 { grid-template-columns: 1fr !important; }
    .lk-grid-4 { grid-template-columns: 1fr !important; }
    .lk-footer-grid { grid-template-columns: 1fr !important; }
    .lk-hero-actions { flex-direction: column; align-items: center; }
    .lk-card { padding: 1.25rem !important; border-radius: 16px !important; }
    .lk-stats { flex-direction: column; gap: 0.7rem !important; }
    .lk-main { overflow-x: hidden; }
    .lk-hero-home { padding-top: 118px !important; min-height: auto !important; padding-bottom: 2rem !important; }
    .lk-home-content { max-width: 96vw !important; padding: 0 1rem !important; }
    .lk-hero-badge {
      font-size: 0.62rem !important;
      letter-spacing: 0.14em !important;
      padding: 0.38rem 0.8rem !important;
      display: inline-block;
      max-width: calc(100vw - 130px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lk-hero-title { font-size: clamp(2.3rem, 12vw, 3.5rem) !important; line-height: 1.02 !important; }
    .lk-hero-text { font-size: 0.9rem !important; line-height: 1.7 !important; margin-bottom: 1.6rem !important; }
    .lk-hero-chips { gap: 0.55rem !important; }
    .lk-hero-chip { font-size: 0.74rem !important; padding: 0.52rem 0.72rem !important; }
    .lk-hero-bg { opacity: 0.17 !important; align-items: center !important; }
    .lk-hero-bg-img {
      width: 124vw !important;
      max-height: none !important;
      height: auto !important;
      object-fit: contain !important;
    }
    .lk-gallery {
      columns: 2 140px !important;
      gap: 0.7rem !important;
    }
  }
`;

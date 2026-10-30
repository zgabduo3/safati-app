* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #fff7f3;
  --panel: #fffdfd;
  --primary: #ff6a8b;
  --primary-dark: #d94c6a;
  --secondary: #ffd8a8;
  --gold: #ffbf69;
  --text: #2d1b1a;
  --muted: #7d5a56;
  --stroke: #f8d9d5;
  --green: #34b27c;
  --shadow: 0 18px 40px rgba(186, 90, 90, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(180deg, #fff2ef 0%, #fffaf8 35%, #fff 100%);
  color: var(--text);
  min-height: 100vh;
}

button,
input {
  font: inherit;
}

.app-shell {
  width: min(100%, 460px);
  margin: 0 auto;
  min-height: 100vh;
  background: transparent;
  position: relative;
  padding: 22px 18px 110px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #ff9780);
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  box-shadow: var(--shadow);
}

.brand-subtitle {
  font-size: 0.7rem;
  color: var(--muted);
}

.brand-wrap h1 {
  font-size: 1.8rem;
  line-height: 1.1;
}

.icon-btn {
  position: relative;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow);
  cursor: pointer;
}

#notificationCount {
  position: absolute;
  top: -6px;
  right: -4px;
  min-width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: grid;
  place-items: center;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero-card {
  background: linear-gradient(135deg, #fff1f3, #fffdf9 55%, #fff0cf);
  border: 1px solid var(--stroke);
  border-radius: 30px;
  padding: 20px 18px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 12px;
  box-shadow: var(--shadow);
}

.pill {
  display: inline-flex;
  background: rgba(255, 106, 139, 0.12);
  color: var(--primary-dark);
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.72rem;
}

.hero-text h2 {
  margin-top: 12px;
  font-size: clamp(1.7rem, 4vw, 2.2rem);
  line-height: 1.2;
}

.hero-text p {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.7;
}

.hero-actions {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.primary-btn,
.secondary-btn,
.chip,
.nav-item,
.close-btn,
.icon-btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 14px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), #ff8b6f);
  color: white;
  box-shadow: 0 10px 18px rgba(255, 106, 139, 0.28);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.8);
  color: var(--text);
  border: 1px solid var(--stroke);
}

.primary-btn:hover,
.secondary-btn:hover,
.chip:hover,
.nav-item:hover,
.icon-btn:hover,
.close-btn:hover {
  transform: translateY(-1px);
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cake-card {
  width: 100%;
  min-height: 200px;
  background: linear-gradient(180deg, #fff 0%, #fdedd9 100%);
  border-radius: 24px;
  border: 1px solid rgba(255, 173, 122, 0.32);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
}

.cake-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(255, 191, 105, 0.25);
  color: #9b5e0f;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 999px;
}

.cake-illustration {
  font-size: 5rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

.cake-meta {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--text);
}

.search-panel {
  margin-top: 22px;
}

.search-box {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--stroke);
  border-radius: 18px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
}

.search-box input {
  width: 100%;
  border: none;
  background: transparent;
  padding: 15px 0;
  outline: none;
  color: var(--text);
}

.offers-section,
.products-section {
  margin-top: 24px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.section-heading h3 {
  font-size: 1.2rem;
}

.section-heading a {
  color: var(--primary-dark);
  text-decoration: none;
  font-weight: 700;
}

.offers-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.offer-card {
  background: white;
  border: 1px solid var(--stroke);
  border-radius: 18px;
  padding: 14px 10px;
  min-height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(206, 113, 97, 0.08);
}

.offer-card.pink {
  background: linear-gradient(135deg, #fff2f5, #ffe4ef);
}

.offer-card.gold {
  background: linear-gradient(135deg, #fffaf0, #ffe9c4);
}

.offer-card.purple {
  background: linear-gradient(135deg, #f6f0ff, #e9e1ff);
}

.offer-card h4 {
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.offer-card p {
  font-size: 0.72rem;
  color: var(--muted);
  line-height: 1.6;
}

.categories {
  margin-top: 22px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 6px;
}

.categories::-webkit-scrollbar {
  display: none;
}

.chip {
  background: rgba(255,255,255,0.65);
  border: 1px solid var(--stroke);
  color: var(--muted);
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
}

.chip.active {
  background: linear-gradient(135deg, var(--primary), #ff8d79);
  color: white;
  border-color: transparent;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.product-card {
  background: white;
  border: 1px solid var(--stroke);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 16px 30px rgba(242, 147, 120, 0.08);
}

.product-image {
  position: relative;
  height: 160px;
  background-size: cover;
  background-position: center;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.88);
  color: var(--primary-dark);
  padding: 5px 9px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
}

.product-body {
  padding: 12px 12px 14px;
}

.product-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.product-title {
  font-size: 1rem;
  font-weight: 700;
}

.product-price {
  color: var(--primary-dark);
  font-weight: 800;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.78rem;
}

.product-actions {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}

.add-btn,
.review-btn {
  flex: 1;
  border: none;
  border-radius: 12px;
  padding: 10px 8px;
  font-weight: 700;
  cursor: pointer;
}

.add-btn {
  background: linear-gradient(135deg, var(--primary), #ff8d79);
  color: white;
}

.review-btn {
  background: #fff4f2;
  color: var(--primary-dark);
}

.info-panel {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.mini-card {
  background: white;
  border: 1px solid var(--stroke);
  border-radius: 18px;
  padding: 14px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 14px 22px rgba(233, 138, 117, 0.08);
}

.mini-card.accent {
  background: linear-gradient(135deg, #fff2df, #fffaf4);
}

.mini-card span {
  font-size: 1.5rem;
}

.mini-card strong,
.mini-card small {
  display: block;
}

.mini-card small {
  color: var(--muted);
  margin-top: 2px;
}

.notification-panel {
  position: fixed;
  inset: 0 0 auto 0;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(8px);
  border-radius: 0 0 32px 32px;
  padding: 18px 18px 36px;
  box-shadow: 0 18px 32px rgba(120, 60, 46, 0.12);
  transform: translateY(0);
  transition: transform 0.25s ease;
  z-index: 10;
}

.notification-panel.hidden {
  transform: translateY(-120%);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.close-btn {
  background: #fff5f3;
  border: 1px solid var(--stroke);
  border-radius: 12px;
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.notification-list {
  display: grid;
  gap: 10px;
}

.notification-item {
  background: #fff9f8;
  border: 1px solid var(--stroke);
  border-radius: 18px;
  padding: 12px 14px;
}

.notification-item strong {
  display: block;
  font-size: 0.95rem;
}

.notification-item p {
  color: var(--muted);
  font-size: 0.8rem;
  margin-top: 6px;
}

.notification-item small {
  display: block;
  margin-top: 6px;
  color: #9c7b73;
}

.bottom-bar {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  width: min(92%, 430px);
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--stroke);
  border-radius: 24px;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px 12px;
  backdrop-filter: blur(10px);
}

.nav-item {
  border: none;
  background: transparent;
  border-radius: 18px;
  padding: 10px 0;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-item.active {
  background: #fff3f4;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%) translateY(18px);
  opacity: 0;
  background: rgba(45, 27, 26, 0.92);
  color: white;
  padding: 12px 18px;
  border-radius: 999px;
  font-size: 0.82rem;
  transition: all 0.25s ease;
  z-index: 20;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.hidden {
  display: none;
}

@media (max-width: 420px) {
  .hero-card {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .offers-list {
    grid-template-columns: 1fr;
  }
}

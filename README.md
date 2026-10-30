const state = {
  services: [],
  offers: [],
  notifications: [],
  profile: null,
  reviews: [],
  stats: {}
};

const productList = document.getElementById('productList');
const offersList = document.getElementById('offersList');
const notificationList = document.getElementById('notificationList');
const notificationPanel = document.getElementById('notificationPanel');
const notifyButton = document.getElementById('notifyButton');
const closeNotification = document.getElementById('closeNotification');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');
const notificationCount = document.getElementById('notificationCount');
const statsGrid = document.getElementById('statsGrid');
const reviewsList = document.getElementById('reviewsList');
const profileCard = document.getElementById('profileCard');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function createStars(rating) {
  return `<span class="stars">${'★'.repeat(Math.round(rating))}</span>`;
}

function renderStats(stats) {
  const items = [
    { icon: '🛍️', label: 'طلبات', value: stats.orders || 0 },
    { icon: '⭐', label: 'تقييم', value: `${stats.rating || 0}` },
    { icon: '❤', label: 'مفضلة', value: stats.favorites || 0 },
    { icon: '🚚', label: 'توصيل', value: stats.delivery || '20 د' }
  ];

  statsGrid.innerHTML = items.map((item) => `
    <div class="stat-card">
      <span>${item.icon}</span>
      <strong>${item.value}</strong>
      <small>${item.label}</small>
    </div>
  `).join('');
}

function renderOffers(data) {
  offersList.innerHTML = data.map((offer) => `
    <article class="offer-card ${offer.accent}">
      <h4>${offer.title}</h4>
      <p>${offer.text}</p>
    </article>
  `).join('');
}

function renderProducts(items) {
  productList.innerHTML = items.map((item) => `
    <article class="product-card">
      <div class="product-image" style="background-image: url('${item.image}')">
        <span class="badge">${item.badge}</span>
      </div>
      <div class="product-body">
        <div class="product-row">
          <h4 class="product-title">${item.name}</h4>
          <span class="product-price">${item.price} ر.س</span>
        </div>
        <div class="product-meta">
          <span>${createStars(item.rating)}</span>
          <span>${item.reviews} تقييم</span>
        </div>
        <div class="product-meta">
          <span>${item.category}</span>
          <span>${item.prepTime}</span>
        </div>
        <div class="product-actions">
          <button class="add-btn" data-name="${item.name}" data-price="${item.price}">أضف</button>
          <button class="review-btn" data-name="${item.name}">تقييم</button>
          <button class="favorite-btn" data-name="${item.name}">♡</button>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const itemName = button.dataset.name;
      try {
        const response = await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ itemName, quantity: 1, notes: 'بدون إضافات' })
        });
        const result = await response.json();
        showToast(result.message || 'تمت الإضافة إلى الطلب');
      } catch (error) {
        showToast('حدث خطأ أثناء إرسال الطلب');
      }
    });
  });

  document.querySelectorAll('.review-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const itemName = button.dataset.name;
      try {
        const response = await fetch('/api/review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ itemName, rating: 5, comment: 'ممتاز جدًا' })
        });
        const result = await response.json();
        showToast(result.message || 'تم حفظ التقييم');
      } catch (error) {
        showToast('فشل حفظ التقييم');
      }
    });
  });

  document.querySelectorAll('.favorite-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const itemName = button.dataset.name;
      showToast(`${itemName} أضيف إلى المفضلة`);
    });
  });
}

function renderNotifications(list) {
  notificationList.innerHTML = list.map((item) => `
    <div class="notification-item">
      <strong>${item.title}</strong>
      <p>${item.detail}</p>
      <small>${item.time}</small>
    </div>
  `).join('');

  notificationCount.textContent = list.length;
}

function renderReviews(list) {
  reviewsList.innerHTML = list.map((review) => `
    <article class="review-item">
      <div class="review-header">
        <strong>${review.user}</strong>
        <span>${createStars(review.rating)}</span>
      </div>
      <p><strong>${review.item}</strong> - ${review.text}</p>
    </article>
  `).join('');
}

function renderProfile(profile) {
  profileCard.innerHTML = `
    <div class="profile-top">
      <div class="profile-avatar">${profile.name.charAt(0)}</div>
      <div class="profile-meta">
        <h4>${profile.name}</h4>
        <small>عضو منذ ${profile.memberSince}</small>
      </div>
    </div>

    <div class="profile-points">
      <div>
        <small>نقاطك</small>
        <div class="points-box">${profile.points}</div>
      </div>
      <div>
        <small>المفضلة</small>
        <div class="points-box">${profile.favorite}</div>
      </div>
    </div>

    <div class="profile-detail">
      <div>📍 ${profile.address}</div>
      <div>📞 ${profile.phone}</div>
      <div>🚚 ${profile.deliveryStatus}</div>
    </div>
  `;
}

async function loadData() {
  try {
    const response = await fetch('/api/home');
    const result = await response.json();
    const { data } = result;

    state.services = data.featured;
    state.offers = data.offers;
    state.notifications = data.notifications;
    state.profile = data.profile;
    state.reviews = data.recentReviews;
    state.stats = data.stats;

    renderStats(state.stats);
    renderProducts(state.services);
    renderOffers(state.offers);
    renderNotifications(state.notifications);
    renderReviews(state.reviews);
    renderProfile(state.profile);

    const firstDish = state.services[0]?.name || 'بوظة الممكلة';
    document.getElementById('featuredDishName').textContent = firstDish;
  } catch (error) {
    showToast('تعذر تحميل التطبيق. حاول لاحقًا.');
  }
}

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();

  if (!query) {
    renderProducts(state.services);
    return;
  }

  const filtered = state.services.filter((item) =>
    item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
  );

  renderProducts(filtered);
});

notifyButton.addEventListener('click', () => {
  notificationPanel.classList.toggle('hidden');
});

closeNotification.addEventListener('click', () => {
  notificationPanel.classList.add('hidden');
});

document.getElementById('exploreBtn').addEventListener('click', () => {
  document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
});

loadData();

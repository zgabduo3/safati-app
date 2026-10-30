const state = {
  services: [],
  offers: [],
  notifications: [],
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

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function createStars(rating) {
  const stars = '★'.repeat(Math.round(rating));
  return `<span class="stars">${stars}</span>`;
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
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const itemName = button.dataset.name;
      const quantity = 1;

      try {
        const response = await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ itemName, quantity, notes: 'بدون إضافات' })
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

async function loadData() {
  try {
    const [servicesRes, offersRes, notificationsRes] = await Promise.all([
      fetch('/api/services'),
      fetch('/api/offers'),
      fetch('/api/notifications')
    ]);

    const servicesData = await servicesRes.json();
    const offersData = await offersRes.json();
    const notificationsData = await notificationsRes.json();

    state.services = servicesData.data;
    state.offers = offersData.data;
    state.notifications = notificationsData.data;

    renderProducts(state.services);
    renderOffers(state.offers);
    renderNotifications(state.notifications);
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
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
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

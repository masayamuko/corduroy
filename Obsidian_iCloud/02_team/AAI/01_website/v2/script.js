// スムーズスクロールの実装
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ヘッダーのスクロール制御
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // 下スクロール
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // 上スクロール
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// フォームバリデーション
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // 基本的なバリデーション
        if (!name || !email || !message) {
            alert('すべての項目を入力してください。');
            return;
        }
        
        // メールアドレスの形式チェック
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('有効なメールアドレスを入力してください。');
            return;
        }
        
        // ここでフォームデータの送信処理を実装
        // 例: fetch APIを使用した送信処理
        alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。');
        contactForm.reset();
    });
}

// アニメーション用のIntersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
document.querySelectorAll('.feature-card, .about-content, .contact-form').forEach(element => {
    observer.observe(element);
});

// カウントダウンタイマー
function updateCountdown() {
    // 開催日を設定（例：2024年4月1日）
    const eventDate = new Date('2024-04-01T00:00:00');
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById('countdown-timer').innerHTML = '開催中';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
}

// 残り席数の更新
function updateRemainingSeats() {
    const totalSeats = 30;
    const currentSeats = Math.floor(Math.random() * 10); // デモ用のランダムな数
    const remainingSeats = totalSeats - currentSeats;
    
    const seatsElement = document.getElementById('remaining-seats');
    if (seatsElement) {
        seatsElement.textContent = remainingSeats;
        
        // 残り席数が少なくなったら警告表示
        if (remainingSeats <= 5) {
            seatsElement.style.color = '#EF4444';
        }
    }
}

// FAQのアコーディオン機能
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('p');
    
    // 初期状態では回答を非表示
    answer.style.display = 'none';
    
    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        question.classList.toggle('active');
    });
});

// 定期的な更新
setInterval(updateCountdown, 60000); // 1分ごとにカウントダウンを更新
setInterval(updateRemainingSeats, 300000); // 5分ごとに残り席数を更新

// 初期表示
updateCountdown();
updateRemainingSeats();

// モバイルメニューの制御
const menuButton = document.createElement('button');
menuButton.className = 'menu-button';
menuButton.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;
document.querySelector('.header .container').appendChild(menuButton);

menuButton.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    menuButton.classList.toggle('active');
});

// スクロール時のヘッダー背景変更
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}); 
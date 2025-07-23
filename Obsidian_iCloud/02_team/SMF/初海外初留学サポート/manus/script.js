// スムーススクロール
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

// ヘッダーのスクロール時の背景変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// アニメーション対象要素を監視
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.problem-item, .feature-card, .testimonial-card, .timeline-item');
    animateElements.forEach(el => {
        el.classList.add('scroll-animation');
        observer.observe(el);
    });
});

// CTAボタンのクリックイベント
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        // ここに実際のフォーム送信やモーダル表示のロジックを追加
        if (this.textContent.includes('無料相談')) {
            alert('無料相談フォームを開きます。実際の実装では、フォームページへの遷移やモーダル表示を行います。');
        } else if (this.textContent.includes('資料')) {
            alert('資料ダウンロードを開始します。実際の実装では、PDFファイルのダウンロードを行います。');
        }
    });
});

// 統計数字のカウントアップアニメーション
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (target >= 1000 ? '+' : '%');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target >= 1000 ? '+' : '%');
        }
    }
    
    updateCounter();
}

// 統計セクションが表示されたときにカウントアップを開始
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});

// モバイルメニューの実装（必要に応じて）
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// フォームバリデーション（実際のフォームが実装された場合）
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('お名前は2文字以上で入力してください。');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('有効なメールアドレスを入力してください。');
    }
    
    if (!formData.phone || formData.phone.trim().length < 10) {
        errors.push('電話番号を正しく入力してください。');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// パフォーマンス最適化：画像の遅延読み込み
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// スクロール位置の保存と復元
window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', function() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

// Google Analytics イベント追跡（実装時に追加）
function trackEvent(action, category = 'User Interaction', label = '') {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// CTAボタンクリックの追跡
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('click', 'CTA Button', buttonText);
    });
});

// 外部リンクのクリック追跡
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('click', 'External Link', this.href);
    });
});

// ページ滞在時間の追跡
let startTime = Date.now();
window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', 'Engagement', timeSpent + ' seconds');
});


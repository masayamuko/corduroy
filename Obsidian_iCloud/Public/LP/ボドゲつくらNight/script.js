// FAQアコーディオン機能
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // 他のFAQアイテムを閉じる
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // クリックされたアイテムの状態を切り替え
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// スムーススクロール
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// スクロール時のヘッダー背景変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(255,140,66,0.95), rgba(255,210,63,0.95))';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary-orange), var(--primary-yellow))';
        header.style.backdropFilter = 'none';
    }
});

// 交差観測によるアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素の初期設定と観測開始
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.about-card, .benefit-item, .info-item, .faq-item');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
});

// CTAボタンのパーティクル効果
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // パーティクル要素を作成
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'white';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'particle-burst 0.8s ease-out forwards';
            
            // ボタンの位置を基準にパーティクルを配置
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            button.style.position = 'relative';
            button.appendChild(particle);
            
            // アニメーション終了後にパーティクルを削除
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 800);
        });
    });
});

// パーティクルアニメーションのCSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-burst {
        0% {
            transform: scale(1) translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: scale(0) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// モバイルメニューの実装（必要に応じて）
document.addEventListener('DOMContentLoaded', function() {
    // 小さな画面でのナビゲーション改善
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    // モバイルでのタッチ改善
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll('.about-card, .benefit-item, .info-item');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'translateY(-5px) scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'translateY(-5px) scale(1)';
            });
        });
    }
});

// ページ読み込み完了時の初期アニメーション
window.addEventListener('load', function() {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.transition = 'all 1s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
});

// X(Twitter)リンクの動的設定
document.addEventListener('DOMContentLoaded', function() {
    const twitterDmButton = document.querySelector('.twitter-dm');
    const hostAccount = 'ai_am_i_official'; // 実際のアカウント名に変更してください
    
    if (twitterDmButton && hostAccount) {
        const dmText = encodeURIComponent('ボドゲつくらNightに興味があります！参加について教えてください。');
        twitterDmButton.href = `https://twitter.com/messages/compose?recipient_id=${hostAccount}&text=${dmText}`;
    }
});
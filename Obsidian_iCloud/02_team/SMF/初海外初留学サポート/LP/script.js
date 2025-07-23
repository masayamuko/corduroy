// スムーススクロール
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションリンクのスムーススクロール
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
    
    // ヘッダーのスクロール効果
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // フォーム送信処理
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータの取得
            const formData = new FormData(this);
            const data = {};
            
            for (let [key, value] of formData) {
                data[key] = value;
            }
            
            // バリデーション
            if (!data.name || !data.email) {
                alert('お名前とメールアドレスは必須項目です。');
                return;
            }
            
            // メールアドレスの形式チェック
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('正しいメールアドレスを入力してください。');
                return;
            }
            
            // 送信ボタンの無効化
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = '送信中...';
            submitButton.disabled = true;
            
            // 実際の送信処理（ここではシミュレーション）
            setTimeout(() => {
                // 成功メッセージの表示
                showMessage('お申し込みありがとうございます！3営業日以内にご連絡いたします。', 'success');
                
                // フォームのリセット
                this.reset();
                
                // ボタンの復元
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Google Analytics等の送信イベント
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        'event_category': 'engagement',
                        'event_label': 'contact_form'
                    });
                }
            }, 1500);
        });
    }
    
    // FAQ機能（将来的に追加する場合）
    function initializeFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            if (question && answer && toggle) {
                question.addEventListener('click', function() {
                    const isOpen = item.classList.contains('active');
                    
                    // 他のFAQを閉じる
                    faqItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherAnswer && otherToggle) {
                            otherAnswer.style.maxHeight = '0';
                            otherToggle.style.transform = 'rotate(0deg)';
                        }
                    });
                    
                    // クリックされたFAQを開く/閉じる
                    if (!isOpen) {
                        item.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        toggle.style.transform = 'rotate(45deg)';
                    }
                });
            }
        });
    }
    
    // スクロールアニメーション
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
    
    // アニメーション対象要素
    const animateElements = document.querySelectorAll('.problem-item, .feature-card, .solution-text, .comparison-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 数値カウントアニメーション
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        
        updateCounter();
    }
    
    // 統計数値のアニメーション
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const text = stat.textContent.replace(/[^0-9]/g, '');
                    const number = parseInt(text);
                    if (number && number > 0) {
                        stat.textContent = '0';
                        setTimeout(() => {
                            animateCounter(stat, number);
                        }, 500);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // モバイルメニュー（将来的に追加する場合）
    function initializeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
            
            // メニューリンクをクリックしたときにメニューを閉じる
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });
        }
    }
    
    // 初期化
    initializeFAQ();
    initializeMobileMenu();
    
    console.log('パスポート留学LP JavaScript初期化完了');
});

// ユーティリティ関数
function showMessage(message, type = 'info') {
    // メッセージ表示用の要素を作成
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // スタイリング
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#43AA8B' : type === 'error' ? '#F24236' : '#2E86AB'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(messageDiv);
    
    // アニメーション
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // 自動削除
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 5000);
}

// フォーム入力の改善
function enhanceFormInputs() {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // フォーカス時のエフェクト
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value) {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });
        
        // 初期値がある場合の処理
        if (input.value) {
            input.parentElement.classList.add('filled');
        }
    });
}

// パフォーマンス改善のための遅延読み込み
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
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
}

// Google Analytics等のトラッキング用関数
function trackEvent(eventName, category = 'engagement', label = '') {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': category,
            'event_label': label
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName);
    }
    
    console.log(`Event tracked: ${eventName} - ${category} - ${label}`);
}

// CTA ボタンのクリック追跡
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        trackEvent('cta_click', 'engagement', e.target.textContent.trim());
    }
});

// ページの離脱意図検知
let exitIntentShown = false;
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        // 離脱防止ポップアップなどの処理
        trackEvent('exit_intent', 'engagement');
    }
});

// ページビューの追跡
window.addEventListener('load', function() {
    trackEvent('page_view', 'engagement', 'passport_study_lp');
});

console.log('パスポート留学LP - すべてのスクリプトが読み込まれました'); 
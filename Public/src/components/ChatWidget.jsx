import { useState, useRef, useEffect } from 'preact/hooks';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'こんにちは！AIアシスタントです。\nCorduroyのサービスや勉強会について、お気軽にご質問ください。' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            if (data.error) {
                setMessages(prev => [...prev, { role: 'assistant', content: 'すみません、エラーが発生しました: ' + data.error }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            }

        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: '通信エラーが発生しました。' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, fontFamily: '"Noto Sans JP", sans-serif' }}>
            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    width: '350px',
                    height: '500px',
                    maxHeight: '80vh',
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    marginBottom: '16px',
                    border: '1px solid #eef2f0',
                    fontSize: '14px'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '16px',
                        backgroundColor: 'var(--sea, #16614e)',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 'bold'
                    }}>
                        <span>AI Assistant (Beta)</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                cursor: 'pointer',
                                fontSize: '18px'
                            }}
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flex: 1,
                        padding: '16px',
                        overflowY: 'auto',
                        backgroundColor: '#fbf9f5'
                    }}>
                        {messages.map((msg, idx) => (
                            <div key={idx} style={{
                                marginBottom: '12px',
                                textAlign: msg.role === 'user' ? 'right' : 'left'
                            }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '10px 14px',
                                    borderRadius: '12px',
                                    backgroundColor: msg.role === 'user' ? 'var(--sea, #16614e)' : '#fff',
                                    color: msg.role === 'user' ? '#fff' : '#333',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    maxWidth: '85%',
                                    lineHeight: '1.6',
                                    whiteSpace: 'pre-wrap',
                                    textAlign: 'left'
                                }}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ textAlign: 'left' }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '10px 14px',
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    color: '#999',
                                    fontSize: '12px'
                                }}>
                                    入力中...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} style={{
                        padding: '12px',
                        borderTop: '1px solid #eee',
                        display: 'flex',
                        gap: '8px',
                        backgroundColor: '#fff'
                    }}>
                        <input
                            type="text"
                            value={input}
                            onInput={e => setInput(e.target.value)}
                            placeholder="質問を入力..."
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: '10px 12px',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                outline: 'none',
                                fontSize: '14px'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            style={{
                                backgroundColor: 'var(--sea, #16614e)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0 16px',
                                cursor: isLoading ? 'wait' : 'pointer',
                                opacity: isLoading || !input.trim() ? 0.6 : 1,
                                fontWeight: 'bold'
                            }}
                        >
                            送信
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--sea, #16614e)',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(22, 97, 78, 0.4)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    transition: 'transform 0.2s',
                    marginLeft: 'auto'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isOpen ? '×' : '💬'}
            </button>
        </div>
    );
}

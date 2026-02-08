tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: '#0F172A',
                darker: '#020617',
                primary: '#3B82F6',
                secondary: '#0EA5E9',
                accent: '#10B981',
                surface: '#1E293B',
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    400: '#94a3b8',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['"Inter"', 'system-ui', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'sans-serif'],
                body: ['"DM Sans"', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}

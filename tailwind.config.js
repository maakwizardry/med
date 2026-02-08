tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: '#F8FAFC',
                darker: '#FFFFFF',
                primary: '#0D9488',
                secondary: '#0EA5E9',
                accent: '#F97316',
                surface: '#F1F5F9',
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    600: '#475569',
                    700: '#334155',
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
                'gradient': 'gradient 3s linear infinite',
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
                },
                gradient: {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                }
            }
        }
    }
}

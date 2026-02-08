document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    const fields = {
        name: {
            element: document.getElementById('name'),
            validate: (val) => val.length >= 2,
            message: 'Name must be at least 2 characters'
        },
        practice: {
            element: document.getElementById('practice'),
            validate: (val) => val.length > 0,
            message: 'Practice name is required'
        },
        email: {
            element: document.getElementById('email'),
            validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
            message: 'Please enter a valid email address'
        },
        phone: {
            element: document.getElementById('phone'),
            validate: (val) => /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(val),
            message: 'Please enter a valid phone number'
        },
        message: {
            element: document.getElementById('message'),
            validate: (val) => val.length >= 10,
            message: 'Message must be at least 10 characters'
        }
    };

    // Helper to set error state
    const setError = (field, isError) => {
        const input = fields[field].element;
        const errorMsg = input.nextElementSibling; // Assuming p.error-msg is next sibling

        if (isError) {
            input.classList.add('border-red-500', 'focus:ring-red-500');
            input.classList.remove('border-gray-300', 'focus:ring-primary');
            if (errorMsg) {
                errorMsg.innerText = fields[field].message;
                errorMsg.classList.remove('hidden');
            }
        } else {
            input.classList.remove('border-red-500', 'focus:ring-red-500');
            input.classList.add('border-gray-300', 'focus:ring-primary');
            if (errorMsg) errorMsg.classList.add('hidden');
        }
    };

    // Real-time validation
    Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (field.element) {
            field.element.addEventListener('blur', () => {
                const isValid = field.validate(field.element.value);
                setError(key, !isValid);
            });

            field.element.addEventListener('input', () => {
                const isValid = field.validate(field.element.value);
                if (isValid) setError(key, false);
            });
        }
    });

    // Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        Object.keys(fields).forEach(key => {
            const field = fields[key];
            const isValid = field.validate(field.element.value);
            if (!isValid) {
                setError(key, true);
                isFormValid = false;
            }
        });

        if (isFormValid) {
            const submitBtn = document.getElementById('submit-btn');
            const originalBtnContent = submitBtn.innerHTML;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin w-5 h-5 mr-2"></i> Sending...';
            lucide.createIcons(); // Re-init icons for the loader

            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5 mr-2"></i> Sent Successfully!';
                submitBtn.classList.remove('bg-primary', 'hover:bg-primary-dark');
                submitBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                lucide.createIcons();

                contactForm.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    submitBtn.classList.add('bg-primary', 'hover:bg-primary-dark');
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 3000);
            }, 1500);
        }
    });
});

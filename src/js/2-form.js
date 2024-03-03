document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    
    form.addEventListener('input', (event) => {
      const formData = {
        email: form.querySelector('input[name="email"]').value,
        message: form.querySelector('textarea[name="message"]').value
      };
  
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });
    
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData) {
      form.querySelector('input[name="email"]').value = savedFormData.email;
      form.querySelector('textarea[name="message"]').value = savedFormData.message;
    }
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
      
      console.log({
        email: formData.email,
        message: formData.message
      });
      
      localStorage.removeItem('feedback-form-state');
      form.reset();
    });
  });
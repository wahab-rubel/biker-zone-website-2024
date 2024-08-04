document.addEventListener("DOMContentLoaded", function(){
 const faqItems = document.querySelectorAll('.faq-item');

 faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener("click", function (){
       faqItems.forEach(i => i !== item && i.classList.remove('active'));


       item.classList.toggle('active');
    });
 });
});
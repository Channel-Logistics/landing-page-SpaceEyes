/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           // Hero colors
           'hero-border': 'var(--color-hero-border)',
           'hero-background': 'var(--color-hero-background)',
           'hero-text': 'var(--color-hero-text)',
           'hero-text-primary': 'var(--color-hero-text-primary)',
   
           // Carousel colors
           'carousel-background': 'var(--color-carousel-background)',
           'carousel-border': 'var(--color-carousel-border)',
           'carousel-border-text': 'var(--color-carousel-border-text)',
           'carousel-text-primary': 'var(--color-carousel-text-primary)',
           'carousel-text-minimum': 'var(--color-carousel-text-minimum)',
   
           // About Us colors
           'about-us-text': 'var(--color-about-us-text)',
           'about-us-background': 'var(--color-about-us-background)',
           'about-us-border': 'var(--color-about-us-border)',
           'about-us-background-button': 'var(--color-about-us-background-button)',
   
           // Section colors
           'section-text': 'var(--color-section-text)',
           'section-background': 'var(--color-section-background)',
           'section-background-button': 'var(--color-section-background-button)',
           'footer-hr': 'var(--color-footer-hr)',
         },
       },
     },
     plugins: [],
   }
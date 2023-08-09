document.addEventListener('DOMContentLoaded', () => {
    const span = document.querySelector('span');
    const input = document.querySelector('input');
    const count = () => {
        span.innerHTML = input.value.length;
        input.value = input.value.toUpperCase();
    };
    input.addEventListener('input', count);
});

const btnTheme = document.querySelector('#btn-theme span');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if(document.body.classList.contains('dark-theme')) {
        btnTheme.style.right = 'unset';
        btnTheme.style.left = '0.5rem';
    } else {
        btnTheme.style.right = '0.5rem';
        btnTheme.style.left = 'unset';
    }
})
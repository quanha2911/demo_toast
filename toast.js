  // Toast function
  function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');


        // Auto remove toast
        // Sau khoảng duration + 1000 gỡ toast đi 
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when click
        toast.onclick = function (e) {
            // closest: tìm cái class của chính nó xem nó có class này hay k, k có lại tìm ra thẻ cha
           if (e.target.closest('.toast__close')){
            main.removeChild(toast);
            clearTimeout(autoRemoveId);
           }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle',
            error: 'fas fa-exclamation-circle',
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
         /*fadeOut: sau thời gian delay bắt đầu mờ đi toast, toast mờ trong 1s rồi biến mất*/
        toast.innerHTML = `
    <div class="toast__icon">
        <i class="${icon}"></i>
    </div>
    <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <div class="toast__msg">${message}</div>
    </div>
    <div class="toast__close">
        <i class="fas fa-times"></i>
    </div>
        `;
        main.appendChild(toast);
    
    }
}
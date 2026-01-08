(function(){
  const STORAGE_KEY = 'theme-preference';
  const root = document.documentElement;
  function applyTheme(theme){
    root.classList.remove('theme-dark','theme-light');
    root.classList.add(theme);
    const btn = document.getElementById('theme-toggle');
    if(btn){
      btn.innerHTML = theme === 'theme-dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      btn.setAttribute('aria-pressed', theme === 'theme-dark');
      btn.title = theme === 'theme-dark' ? 'Switch to light theme' : 'Switch to dark theme';
    }
  }
  function getPreferred(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'theme-light' || saved === 'theme-dark') return saved;
    return 'theme-dark';
  }
  document.addEventListener('DOMContentLoaded', function(){
    applyTheme(getPreferred());
    const btn = document.getElementById('theme-toggle');
    if(btn){
      btn.addEventListener('click', function(){
        const next = root.classList.contains('theme-dark') ? 'theme-light' : 'theme-dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    }
  });
})();

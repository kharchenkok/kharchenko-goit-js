
const refs={
    switchInput:document.querySelector('.js-switch-input'),
    body:document.querySelector('body'),
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

checkUserTheme();

function themeChange (e){
    if(e.target.checked){
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('userTheme', Theme.DARK)
    console.log(localStorage.userTheme);
    }else{
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        localStorage.setItem('userTheme', Theme.LIGHT)
        // localStorage.removeItem('userTheme');
        console.log(localStorage.userTheme);
    }
}


function checkUserTheme(){
    const currentUserTheme = localStorage.getItem('userTheme');
    if(currentUserTheme){
    refs.body.classList.add(currentUserTheme)
    if(currentUserTheme===Theme.DARK){
        refs.switchInput.checked=true
    }
    }
}
refs.switchInput.addEventListener('change', themeChange)
export function getHomePage(){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const home = document.createElement('div');
    home.innerHTML = "Best Steaks in Poland";
    home.classList.add('homepage');

    return content.appendChild(home);
}



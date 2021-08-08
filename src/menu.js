export function getMenuPage() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.innerHTML = "Menu";

    return content.appendChild(menu);
}
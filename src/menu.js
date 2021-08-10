export function getMenuPage() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.innerHTML = '<h3>Menu<h3>';
    menu.classList.add('menupage');
    
    //MENU
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menu_1 = document.createElement('div');
    menu_1.innerHTML = '<h4>Position 1</h4>';
    menu_1.classList.add('menuList');
    menuContainer.appendChild(menu_1);

    const menu_2 = document.createElement('div');
    menu_2.innerHTML = '<h4>Position 2</h4>';
    menu_2.classList.add('menuList');
    menuContainer.appendChild(menu_2);

    const menu_3 = document.createElement('div');
    menu_3.innerHTML = '<h4>Position 3</h4>';
    menu_3.classList.add('menuList');
    menuContainer.appendChild(menu_3);

    const menu_4 = document.createElement('div');
    menu_4.innerHTML = '<h4>Position 4</h4>';
    menu_4.classList.add('menuList');
    menuContainer.appendChild(menu_4);

    const menu_5 = document.createElement('div');
    menu_5.innerHTML = '<h4>Position 5</h4>';
    menu_5.classList.add('menuList');
    menuContainer.appendChild(menu_5);

    const menu_6 = document.createElement('div');
    menu_6.innerHTML = '<h4>Position 6</h4>';
    menu_6.classList.add('menuList');
    menuContainer.appendChild(menu_6);

    menu.appendChild(menuContainer);
  

    return content.appendChild(menu);
}
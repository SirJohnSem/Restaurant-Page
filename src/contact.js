export function getContactPage() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const contact = document.createElement('div');
    contact.innerHTML = 'Contact information';

    return content.appendChild(contact);
}
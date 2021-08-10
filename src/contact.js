export function getContactPage() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const contact = document.createElement('div');
    contact.innerHTML = '<h3>CONTACT DETAILS</h3>'+'<h2>Restaurant Prime Cut</h2>'+'<p>Twarda 18, 00-105 Warsaw<p>'+'<p>tel: +48 733 08 22 33<p>'+'<p>e-mail: reservation@primecut.pl<p>'+'<h2>OPENING HOURS</h2>'+'<p>Monday - Thursday: 12 a.m. - 11 p.m.<p>'+'<p>Friday: 12 a.m. - 12 p.m.<p>'+'<p>Saturday: 4 p.m. - 12 p.m.<p>'+'<p>Sunday: 4 p.m. - 10 p.m.<p>';
    contact.classList.add('contact-page');

    return content.appendChild(contact);
}
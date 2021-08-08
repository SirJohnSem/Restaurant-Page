export function getHomePage(){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const home = document.createElement('div');
    home.innerHTML = "<h3>Best Steaks in Poland<h3>" + "<h4>Located in an Art Deco room overlooking Regent Street, the menu at Hawksmoor Air Street is equally-weighted between steak and seafood. We’ve teamed up with Mitch Tonks, the chef/owner of one of the best seafood restaurants in the country, to mastermind the fish side of things, not least by ensuring that we receive the freshest produce possible straight from Brixham market in Devon.<h4>"+"<h4>Like our steaks, most of the seafood is simply cooked over real charcoal. A steakhouse serving the best fish in London? That’s our aim.   Close to the theatres of the West-End, we have an Express Menu that’s perfect for lunch, pre-theatre and post-theatre dinners. The entrance to the restaurant is on the short stretch of Air Street between Piccadilly and Regent Street.<h4>";
    home.classList.add('homepage');

    return content.appendChild(home);
}



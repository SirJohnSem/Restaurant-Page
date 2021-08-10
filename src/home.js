export function getHomePage(){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const home = document.createElement('div');
    home.innerHTML = "<h3>Best Steaks in Poland<h3>" + "<h4>Prime Cut is the best steak house restaurant in Warsaw. Run in a classic New York style with an addition of European cuisine elements.</h4>"+"<h4>Prime Cut is most known of its delicious, seasoned meat and fresh, daily delivered seafood.<h4>"+"<h4>The quality of the dishes is supervised by the best Polish cooks, carefully selected by Krystian Grejman - the chef known for his innovative, careful approach to cooking and high care for the final quality of the meal.</h4>"+"<h4>Prime Cut uses only the highest quality products which guarantee the best culinary experience. In order to maintain the right taste and flavor, steaks and fishes are prepared on a classic wood-burning grill.<h4>"+"<h4>The restaurant also offers fresh bread (baked on the spot), seasonal vegetables and various types of desserts, perfectly blending with the main dishes.<h4>"+"<h4>Prime Cut also offers an afternoon lunch menu, especially popular among business clients from Poland and abroad. Connoisseurs and regular customers will also appreciate a wide range of spirits, starting with wines and ending with tasty coctails.<h4>";
    home.classList.add('homepage');

    return content.appendChild(home);
}



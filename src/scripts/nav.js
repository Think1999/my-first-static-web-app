window.onload = function() {
    var navbar = ` 
        <nav>
        <ul>
            <li><img src="./images/Logo idea.png" /></li>
            <li><a class="active" href="./index.html">Home</a></li>
            <li><a href="./About.html">About</a></li>
        </ul>
    </nav>`;

        // inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin",navbar);
}
/*window.onload = function() {
const menuItems = [
  { label: 'Home', url: './index.html' },
  { label: 'About', url: './About.html' },
  // Add more menu items as needed
];

const navElement = document.getElementById('myNav');
const ul = document.createElement('ul');

menuItems.forEach(item => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = item.url;
  link.textContent = item.label;
  li.appendChild(link);
  ul.appendChild(li);
});

navElement.appendChild(ul)
}*/
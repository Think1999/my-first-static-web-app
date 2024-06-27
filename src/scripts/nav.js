window.onload = function() {
    var navbar = ` 
        <nav>
        <ul>
            <li><img src="./images/Logo idea.png" /></li>
            <li><a class="active" href="./index.html">Home</a></li>
            <li><a href="./NetworkingTOO.html">Networking</a></li>
            <li><a href="./KanoToo.html">Kano</a></li>
            <li><a href="./ResearchToo.html">Term Research Project</a></li>
            <li><a href="./About Us.html">About Us</a></li>
        </ul>
    </nav>`;

        // inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin",navbar);
}
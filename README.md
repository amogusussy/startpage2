# How to run

    git clone https://github.com/amogusussy/startpage2.git
    cd startpage2
    php -S localhost:8080
Then you can set it as your new tab with the [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) extension, by setting the URL to localhost:8080.

To get weather working, go to [openweathermap.org](https://openweathermap.org), search for your town/city, click on your town/city, then copy the last 7 digits of that URL.
Now open `index.js`, and change `"YOUR CITY ID HERE"` to your city ID.

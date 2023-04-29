// the way this code works is that you are creating a mini array within your JSON file or large array. 
// So each object is going to be its own array.


// defining my list 
let itemsList = [
  {
    "image": "img/stamp1.png",
    "price_in_USD": 0.10,
    "country": "Repulic of Guinea Bisseau",
    "color": "Blue",
    "category": "birds"
  },
  {
    "image": "img/stamp2.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "pink",
    "category": "birds"
  },
  {
    "image": "img/stamp3.png",
    "price_in_USD": "N/A",
    "country": "Polska",
    "color": "green",
    "category": "birds"
  },
  {
    "image": "img/stamp4.png",
    "price_in_USD": "N/A",
    "country": "Russia",
    "color": "blue",
    "category": "birds"
  },
  {
    "image": "img/stamp5.png",
    "price_in_USD": "",
    "country": "Russia",
    "color": "blue",
    "category": "birds"
  },
  {
    "image": "img/stamp6.png",
    "price_in_USD": 0.32,
    "country": "Belgium",
    "color": "green",
    "category": "birds"
  },
  {
    "image": "img/stamp7.png",
    "price_in_USD": 0.88,
    "country": "Czechoslovakia",
    "color": "green",
    "category": "birds"
  },
  {
    "image": "img/stamp8.png",
    "price_in_USD": "N/A",
    "country": "Germany",
    "color": "yellow",
    "category": "birds"
  },
  {
    "image": "img/stamp9.png",
    "price_in_USD": 0.01,
    "country": "Australia",
    "color": "red",
    "category": "birds"
  },
  {
    "image": "img/stamp10.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "green",
    "category": "nature"
  },
  {
    "image": "img/stamp11.png",
    "price_in_USD": 0.53,
    "country": "Belgium",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp12.png",
    "price_in_USD": 1.34,
    "country": "Ireland",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp13.png",
    "price_in_USD": 0.05,
    "country": "Belgium",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp14.png",
    "price_in_USD": 0.02,
    "country": "USA",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp15.png",
    "price_in_USD": 0.15,
    "country": "USA",
    "color": "orange",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp16.png",
    "price_in_USD": 0.53,
    "country": "Belgium",
    "color": "blue",
    "category": "landmark"
  },
  {
    "image": "img/stamp17.png",
    "price_in_USD": 0.27,
    "country": "France",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp18.png",
    "price_in_USD": 0.19,
    "country": "Belgium",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp19.png",
    "price_in_USD": 0.05,
    "country": "USA",
    "color": "blue",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp20.png",
    "price_in_USD": 1.45,
    "country": "China",
    "color": "blue",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp21.png",
    "price_in_USD": 0.04,
    "country": "USA",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp22.png",
    "price_in_USD": "N/A",
    "country": "China",
    "color": "orange",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp23.png",
    "price_in_USD": 0.01,
    "country": "USA",
    "color": "green",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp24.png",
    "price_in_USD": 0.02,
    "country": "Belgium",
    "color": "green",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp25.png",
    "price_in_USD": 0.04,
    "country": "USA",
    "color": "purple",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp26.png",
    "price_in_USD": 0.32,
    "country": "Belgium",
    "color": "green",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp27.png",
    "price_in_USD": 0.01,
    "country": "USA",
    "color": "green",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp28.png",
    "price_in_USD": 0.05,
    "country": "USA",
    "color": "blue",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp29.png",
    "price_in_USD": 0.10,
    "country": "USA",
    "color": "blue",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp30.png",
    "price_in_USD": 0.21,
    "country": "Belgium",
    "color": "purple",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp32.png",
    "price_in_USD": 0.64,
    "country": "Belgium",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp33.png",
    "price_in_USD": 2.69,
    "country": "Ireland",
    "color": "green",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp34.png",
    "price_in_USD": "N/A",
    "country": "Russia",
    "color": "yellow",
    "category": "birds"
  },
  {
    "image": "img/stamp35.png",
    "price_in_USD": 0.20,
    "country": "Rwanda",
    "color": "blue",
    "category": "birds"
  },
  {
    "image": "img/stamp36.png",
    "price_in_USD": "N/A",
    "country": "Germany",
    "color": "green",
    "category": "birds"
  },
  {
    "image": "img/stamp37.png",
    "price_in_USD": 0.43,
    "country": "Republic of the Congo",
    "color": "blue",
    "category": "fish"
  },
  {
    "image": "img/stamp38.png",
    "price_in_USD": 2.65,
    "country": "Czechoslovakia",
    "color": "blue",
    "category": "fish"
  },
  {
    "image": "img/stamp39.png",
    "price_in_USD": 0.64,
    "country": "Republic of Tchad",
    "color": "blue",
    "category": "fish"
  },
  {
    "image": "img/stamp40.png",
    "price_in_USD": 0.21,
    "country": "Republic of the Congo",
    "color": "green",
    "category": "fish"
  },
  {
    "image": "img/stamp41.png",
    "price_in_USD": "14.61?",
    "country": "Republic of Mali",
    "color": "orange",
    "category": "fish"
  },
  {
    "image": "img/stamp42.png",
    "price_in_USD": 0.21,
    "country": "Mauritania",
    "color": "blue",
    "category": "fish"
  },
  {
    "image": "img/stamp43.png",
    "price_in_USD": 0.01,
    "country": "People's Republic of Kampuchea",
    "color": "green",
    "category": "fish"
  },
  {
    "image": "img/stamp44.png",
    "price_in_USD": 0.11,
    "country": "Republic of the Congo",
    "color": "green",
    "category": "fish"
  },
  {
    "image": "img/stamp45.png",
    "price_in_USD": 0.12,
    "country": "Cuba",
    "color": "blue",
    "category": "fish"
  },
  {
    "image": "img/stamp46.png",
    "price_in_USD": 0.01,
    "country": "People's Republic of Kampuchea",
    "color": "green",
    "category": "fish"
  },
  {
    "image": "img/stamp47.png",
    "price_in_USD": 0.44,
    "country": "Czechoslovakia",
    "color": "blue",
    "category": "fish"
  },
  {
    "image": "img/stamp48.png",
    "price_in_USD": 0.01,
    "country": "Guinea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp49.png",
    "price_in_USD": 0.01,
    "country": "Guinea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp51.png",
    "price_in_USD": 0.08,
    "country": "Benin",
    "color": "red",
    "category": "dogs"
  },
  {
    "image": "img/stamp52.png",
    "price_in_USD": "N/A",
    "country": "N/A",
    "color": "green",
    "category": "dogs"
  },
  {
    "image": "img/stamp53.png",
    "price_in_USD": 0.32,
    "country": "Benin",
    "color": "red",
    "category": "dogs"
  },
  {
    "image": "img/stamp54.png",
    "price_in_USD": 0.24,
    "country": "Togo",
    "color": "red",
    "category": "dogs"
  },
  {
    "image": "img/stamp55.png",
    "price_in_USD": 0.81,
    "country": "Togo",
    "color": "green",
    "category": "cats"
  },
  {
    "image": "img/stamp56.png",
    "price_in_USD": 0.01,
    "country": "Guinea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp57.png",
    "price_in_USD": 0.01,
    "country": "Guniea",
    "color": "orange",
    "category": "horses"
  },
  {
    "image": "img/stamp58.png",
    "price_in_USD": 0.02,
    "country": "Korea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp60.png",
    "price_in_USD": 0.05,
    "country": "Cambodia",
    "color": "yellow",
    "category": "cats"
  },
  {
    "image": "img/stamp61.png",
    "price_in_USD": 561.87,
    "country": "Afghanistan",
    "color": "purple",
    "category": "cats"
  },
  {
    "image": "img/stamp62.png",
    "price_in_USD": 4.52,
    "country": "Polska",
    "color": "blue",
    "category": "dogs"
  },
  {
    "image": "img/stamp63.png",
    "price_in_USD": 0.49,
    "country": "Togo",
    "color": "red",
    "category": "dogs"
  },
  {
    "image": "img/stamp64.png",
    "price_in_USD": 0.34,
    "country": "Afghanistan",
    "color": "yellow",
    "category": "dogs"
  },
  {
    "image": "img/stamp65.png",
    "price_in_USD": 0.04,
    "country": "Tanzania",
    "color": "pink",
    "category": "dogs"
  },
  {
    "image": "img/stamp66.png",
    "price_in_USD": 0.02,
    "country": "Korea",
    "color": "green",
    "category": "cats"
  },
  {
    "image": "img/stamp68.png",
    "price_in_USD": 0.05,
    "country": "Korea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp69.png",
    "price_in_USD": 1.33,
    "country": "Czechoslovakia",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp70.png",
    "price_in_USD": 2.00,
    "country": "Guyana",
    "color": "yellow",
    "category": "cats"
  },
  {
    "image": "img/stamp72.png",
    "price_in_USD": 0.08,
    "country": "Belgium",
    "color": "brown",
    "category": "horses"
  },
  {
    "image": "img/stamp73.png",
    "price_in_USD": 0.16,
    "country": "Magyar",
    "color": "purple",
    "category": "horses"
  },
  {
    "image": "img/stamp74.png",
    "price_in_USD": 0.12,
    "country": "Cambodia",
    "color": "green",
    "category": "cats"
  },
  {
    "image": "img/stamp75.png",
    "price_in_USD": "N/A",
    "country": "Mongolia",
    "color": "orange",
    "category": "olympics"
  },
  {
    "image": "img/stamp76.png",
    "price_in_USD": 0.01,
    "country": "Korea",
    "color": "green",
    "category": "horses"
  },
  {
    "image": "img/stamp77.png",
    "price_in_USD": 0.02,
    "country": "Korea",
    "color": "pink",
    "category": "horses"
  },
  {
    "image": "img/stamp78.png",
    "price_in_USD": 0.07,
    "country": "Czechoslovakia",
    "color": "orange",
    "category": "horses"
  },
  {
    "image": "img/stamp79.png",
    "price_in_USD": 0.01,
    "country": "Korea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp80.png",
    "price_in_USD": 0.01,
    "country": "Korea",
    "color": "green",
    "category": "horses"
  },
  {
    "image": "img/stamp81.png",
    "price_in_USD": 0.04,
    "country": "Korea",
    "color": "blue",
    "category": "horses"
  },
  {
    "image": "img/stamp82.png",
    "price_in_USD": 0.05,
    "country": "Belgium",
    "color": "blue",
    "category": "landmark"
  },
  {
    "image": "img/stamp83.png",
    "price_in_USD": 0.05,
    "country": "Belgium",
    "color": "green",
    "category": "allegories/figures of power"
  },
  {
    "image": "img/stamp84.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "blue",
    "category": "olympics"
  },
  {
    "image": "img/stamp85.png",
    "price_in_USD": 0.02,
    "country": "Korea",
    "color": "pink",
    "category": "horses"
  },
  {
    "image": "img/stamp86.png",
    "price_in_USD": "N/A",
    "country": "Russia",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp87.png",
    "price_in_USD": 0.09,
    "country": "Czechoslovakia",
    "color": "red",
    "category": "horses"
  },
  {
    "image": "img/stamp88.png",
    "price_in_USD": 2.27,
    "country": "Czechoslovakia",
    "color": "orange",
    "category": "horses"
  },
  {
    "image": "img/stamp89.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "orange",
    "category": "olympics"
  },
  {
    "image": "img/stamp90.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "blue",
    "category": "space exploration"
  },
  {
    "image": "img/stamp91.png",
    "price_in_USD": 0.03,
    "country": "Korea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp93.png",
    "price_in_USD": 0.04,
    "country": "Czechoslovakia",
    "color": "orange",
    "category": "horses"
  },
  {
    "image": "img/stamp94.png",
    "price_in_USD": 0.01,
    "country": "Guinea",
    "color": "yellow",
    "category": "horses"
  },
  {
    "image": "img/stamp95.png",
    "price_in_USD": 0.05,
    "country": "Czechoslovakia",
    "color": "red",
    "category": "horses"
  },
  {
    "image": "img/stamp96.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "blue",
    "category": "olympics"
  },
  {
    "image": "img/stamp97.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "blue",
    "category": "space exploration"
  },
  {
    "image": "img/stamp98.png",
    "price_in_USD": 0.03,
    "country": "USA",
    "color": "blue",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp99.png",
    "price_in_USD": 0.15,
    "country": "USA",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp100.png",
    "price_in_USD": 0.08,
    "country": "Belgium",
    "color": "green",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp101.png",
    "price_in_USD": 0.04,
    "country": "Belgium",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp102.png",
    "price_in_USD": 0.32,
    "country": "France",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp109.png",
    "price_in_USD": 0.75,
    "country": "France",
    "color": "green",
    "category": "landmark"
  },
  {
    "image": "img/stamp103.png",
    "price_in_USD": 0.1,
    "country": "Norway",
    "color": "yellow",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp104.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "red",
    "category": "space exploration"
  },
  {
    "image": "img/stamp105.png",
    "price_in_USD": 0.01,
    "country": "Mongolia",
    "color": "blue",
    "category": "space exploration"
  },
  {
    "image": "img/stamp106.png",
    "price_in_USD": 0.04,
    "country": "Czechoslovakia",
    "color": "red",
    "category": "fish"
  },
  {
    "image": "img/stamp107.png",
    "price_in_USD": 0.01,
    "country": "Norway",
    "color": "green",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp108.png",
    "price_in_USD": 0.27,
    "country": "France",
    "color": "blue",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp110.png",
    "price_in_USD": 0.09,
    "country": "USA",
    "color": "green",
    "category": "landmark"
  },
  {
    "image": "img/stamp111.png",
    "price_in_USD": 0.05,
    "country": "France",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp112.png",
    "price_in_USD": 0.43,
    "country": "Belgium",
    "color": "yellow",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp113.png",
    "price_in_USD": "N/A",
    "country": "Germany",
    "color": "yellow",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp115.png",
    "price_in_USD": 4.10,
    "country": "France",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp116.png",
    "price_in_USD": 0.10,
    "country": "Norway",
    "color": "red",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp117.png",
    "price_in_USD": 0.25,
    "country": "Netherlands",
    "color": "blue",
    "category": "allegories/figure of power"
  },
  {
    "image": "img/stamp118.png",
    "price_in_USD": 0.15,
    "country": "Belgium",
    "color": "pink",
    "category": "allegories/figure of power"
  }
]
// defining my variables 
let Placeholder = document.getElementById("placeholder");

// defining the variables for my modal (my pop up screen)
// they are all already inside my HTML code 
let quicklook = document.getElementById('quicklook');
let quickLookImage = document.getElementById('quicklook-image');
let quickLookCountry = document.getElementById('country');
let quickLookPrice = document.getElementById('price');
let quickLookColor = document.getElementById('color');
let quickLookSection = document.getElementById('section');
let overlay = document.getElementById('overlay')


for (let i = 0; i < itemsList.length; i++) {
  // looping my images for the background
  let img = document.createElement('img');

  img.src = itemsList[i].image;
  img.id = 'stamp' + [i+1];

  Placeholder.append(img);

  // This is where the "quicklook" or "modal" code begins! 
  // Add a click event listener to each stamp image
  img.addEventListener('click', (event) => {

    // Get the clicked stamp's information, i'm creating a mini array called "stampInfo"
    let stampInfo = itemsList[i];

    quicklook.style.display = "block";
    overlay.style.display = "block"

    quickLookImage.src = stampInfo.image;
    quickLookCountry.innerHTML = ` <b>country</b>: ${stampInfo.country}`;
    quickLookPrice.innerHTML = `<b>price</b>: ${stampInfo.price_in_USD ? '$' + stampInfo.price_in_USD : 'N/A'}`;
    quickLookColor.innerHTML = `<b>color</b>: ${stampInfo.color}`;
    quickLookSection.innerHTML = `<b>category</b>: ${stampInfo.category}`;
  });
}

// so that my quicklook goes away when clicking the cross, its a function i already defined in my HTML
function hideQuickLook() {
  quicklook.style.display = "none";
  overlay.style.display = "none"
}




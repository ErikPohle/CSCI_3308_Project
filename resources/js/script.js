$( document ).ready(function() {

  // if routing to McDonalds webpage, apply data from database regarding McDonalds
  if(window.location.pathname == "/Mcdonalds") {

    // these contents can be turned into a function to be generalized
    var restDesc = document.getElementById('aboutMC');

    // update each card on the page with the restaurant info
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["McDonalds"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["McDonalds"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["McDonalds"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Qdoba webpage, apply data from database regarding Qdoba
  else if(window.location.pathname == "/Qdoba") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descQD')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Qdoba"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Qdoba"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Qdoba"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Subway webpage, apply data from database regarding Subway
  else if(window.location.pathname == "/Subway") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descSW')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Subway"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Subway"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Subway"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Dominos webpage, apply data from database regarding Dominos
  else if(window.location.pathname == "/Dominos") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descD')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Dominos"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Dominos"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Dominos"].Menu[x];
        count++;
      }
    }
  }
  else if(window.location.pathname == "/PizzaHut") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descPH')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Pizza Hut"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Pizza Hut"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Pizza Hut"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Potbelly webpage, apply data from database regarding Potbelly
  else if(window.location.pathname == "/Potbelly") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descPB')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Potbelly"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Potbelly"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Potbelly"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Wendys webpage, apply data from database regarding Wendys
  else if(window.location.pathname == "/Wendys") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descWD')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Wendys"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Wendys"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Wendys"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Cafe Mexicali webpage, apply data from database regarding Cafe Mexicali
  else if(window.location.pathname == "/CafeMexicali") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descCM')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Cafe Mexicali"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Cafe Mexicali"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Cafe Mexicali"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Five Guys webpage, apply data from database regarding Five Guys
  else if(window.location.pathname == "/FiveGuys") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descFG')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Five Guys"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Five Guys"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Five Guys"].Menu[x];
        count++;
      }
    }
  }

  // if routing to Cosmos webpage, apply data from database regarding Cosmos
  else if(window.location.pathname == "/Cosmos") {

    // update each card on the page with the restaurant info
    var restDesc = document.getElementById('descCP')
    var menuCards = document.getElementsByClassName("menuCard");
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var count = 0;
    restDesc.innerHTML = restaurantInfo["Cosmos"].Description;
    for(i in foodName) {
      for(x in restaurantInfo["Cosmos"].Menu) {
        foodName[count].innerHTML = x;
        foodPrice[count].innerHTML = "$" + restaurantInfo["Cosmos"].Menu[x];
        count++;
      }
    }
  }

  // routed to main page, update cards with restaurant info
  else {

    // get elements that we want to populate with info
    var restaurantCards = document.getElementsByClassName("restaurantCards");
    var restaurantName = document.getElementsByClassName("restaurantName");
    var restaurantRating = document.getElementsByClassName("restaurantRating");
    var restaurantPrice = document.getElementsByClassName("restaurantPrice");
    var restaurantType = document.getElementsByClassName("restaurantType");
    var restaurantLink = document.getElementsByClassName("restaurantLink");
    var count = 0;

    // for each card, add the rating, price, food type, company website, company name, filter-data, etc
    for(x in restaurantInfo) {
      restaurantName[count].innerHTML = x;
      restaurantRating[count].innerHTML = "<b>Rating:</b> " + restaurantInfo[x].AverageRating;
      restaurantPrice[count].innerHTML = "<b>Price:</b> $" + restaurantInfo[x].AveragePrice;
      restaurantType[count].innerHTML = "<b>Type:</b> " + restaurantInfo[x].FoodType;
      restaurantLink[count].href = restaurantInfo[x].RestaurantLink;
      restaurantLink[count].setAttribute('target', '_blank');
      restaurantLink[count].innerHTML = "Company Website";
      var filterAtt = restaurantInfo[x].AverageRating + "," + restaurantInfo[x].AveragePrice + "," + restaurantInfo[x].FoodType;
      restaurantCards[count].setAttribute('data-filter', filterAtt);
      count++; 
    }
  }
});

// when a button is clicked
$(function () {
  $('button').click(function() {

    // submit cart button clicked, time to populate cart with menu items

    // get cards
    var foodName = document.getElementsByClassName("foodName");
    var foodPrice = document.getElementsByClassName("foodPrice");
    var cartContentsID = document.getElementById("cartContents");
    var itemsChecked = document.getElementsByClassName("addToCart");
    var submitCart = document.getElementById("submitCart");
    var price = 0;
    cartContentsID.innerHTML = "";

    // iterate over all the checkboxes
    for(var i = 0; i < itemsChecked.length; i++) {

      // if a checkbox is checked, add the price of the item to total and update cart contents with price and name
      if(itemsChecked[i].checked) {
        price += Number(foodPrice[i].innerText.split('$')[1]);
        cartContentsID.innerHTML += foodName[i].innerText + ": " + foodPrice[i].innerText + "<br>";
      }
    }

    // display cart contents total price
    cartContentsID.innerHTML += "Total Price: $" + price;

    // disable submit cart button
    submitCart.disabled = true;
  });
});

// when a checkbox is selected
$(function () {
  $('input').click(function() {

    // read what is selected
    var restaurantCards = document.getElementsByClassName("restaurantCards");
    var filterFoodType = document.getElementsByClassName("filterFoodType");
    var filterRating = document.getElementsByClassName("filterRating");
    var filtersChecked = [];

    // for each filter selected, track the value
    for(var i = 0; i < filterFoodType.length; i++) {
      if(filterFoodType[i].checked) {
        filtersChecked.push(filterFoodType[i].value);
      }
      if(filterRating[i].checked) {
        filtersChecked.push(Number(filterRating[i].value));
      }
    }

    // if the filter contains at least one of the filters found in data-filter, hide the element
    var curFilter;
    for(var h = 0; h < restaurantCards.length; h++) {
      curFilter = restaurantCards[h].getAttribute('data-filter');
     //console.log(curFilter)
      var filterParsed = curFilter.split(",");
      for(var i = 0; i < filtersChecked.length; i++) {

        // check if food filter is checked
        if(filtersChecked[i] == filterParsed[2]) {
          restaurantCards[h].style.display = "block";
        }
        else if(filtersChecked[i] <= filterParsed[0]) {
          restaurantCards[h].style.display = "block";
        }
        else {
          restaurantCards[h].style.display = "none";
        }
      }
      if(filtersChecked.length == 0) {
        restaurantCards[h].style.display = "block";
      }
    }
  });
});

// Temp Database
var restaurantInfo =
{'McDonalds': 
{'FoodType' : "Fast Food",
'AveragePrice' : 3.25,
'AverageRating' : 3.0,
'Menu' : {'Fries' : 2.25, 'Burger' : 3.00, 'Drink' : 1.50, 'Milkshake' : 2.75, 'Chicken Nuggets' : 4.75, 'Ice Cream' : 2.00, 'Chicken Sandwich' : 3.55 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'From making healthier additions to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food.',
'RestaurantLink' : 'https://www.mcdonalds.com/us/en-us.html',
'Picture' : 'http://www.dewebsite.org/logo/mcdonalds/mcdonalds_m.jpg'
},
'Qdoba': 
{'FoodType' : 'Mexican Food',
'AveragePrice' : 9.00,
'AverageRating' : 4.25,
'Menu' : {'Chicken Burrito' : 8.75, 'Steak Burrito' : 9.70, 'Quesadilla' : 5.50, 'Nachos' : 4.50, 'Drink' : 2.50 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'A place where flavor takes a universal approach to activating your senses all at once, full blast',
'RestaurantLink' : 'https://www.qdoba.com/',
'Picture' : 'data:image/png;base64,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'
},
'Subway': 
{'FoodType' : 'Sandwiches',
'AveragePrice' : 5.25,
'AverageRating' : 5.0,
'Menu' : {'Italian BMT' : 10.50, 'Cold Cut Combo' : 7.20, 'BLT Sub' : 8.75, 'Cookie' : 1.50, 'Drink' : 1.25 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'Eat, move, live, & do good with us',
'RestaurantLink' : 'https://www.subway.com/en-US',
'Picture' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Subway_restaurant.svg/200px-Subway_restaurant.svg.png'
},
'Dominos': 
{'FoodType' : 'Pizza',
'AveragePrice' : 7.25,
'AverageRating' : 2.0,
'Menu' : {'Cheese Pizza' : 10.25, 'Pepperoni Pizza' : 11.00, 'Meat Lovers Pizza' : 11.75, 'Lava Cake' : 4.25, 'Drink' : 1.50 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'At Domino’s we’re all about pizza — and from the day our doors opened, we have dedicated ourselves to making and delivering delicious food with high-quality ingredients.',
'RestaurantLink' : 'https://www.dominos.com/',
'Picture' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAeFBMVEX////iFzcAY5EQbZifxdb0qLTP4urkJkT61Nrv9fj98fPnQ10wgKZgnrrtboJAiq2Ascj4xc3f7PH74ua/2OQgd5/xi5uPu89wp8HvfY/2t8HmNFCvzt1QlLPrYHZ8utVgq8xxtNLymqjpUWmn0OOWx95aqMuHv9n1RLWIAAACpUlEQVRoge3ZbZOaMBAAYFEEsSIQAd/vuNa2//8f1lPAJGxgN9nczM10Py4bH/IGZJzN/seXxq4o1r6NYxAE8cqvsQ0C78rT8Kt0hk/lZfhTZMOXohp+FN3woQyNu1L4N+6x/AKDVTEafMr6h9ngUsYNHmXK4FCmDXcFY7gqOMNNwRouCt6wVyiGrUIz7BTYiLenoli+MSmwcWw/uXbgVaoCG9KvgM9MmgIbNeUuLI2z8nlaQCUExbCujmoVXIRVTGtXe6Mf4aodDjHtD615DVf9xCFLA6J9ARkQzHglkVE5qZXwiz9GDFe0WRiVrVp6tu1ItJjPzYpyk3AJ0hhRfkmlu9jJGFG2/XZc2W74zhhRzs+9sq5d+zGqBOdtXb+BBNUYU4xBNuhKfKIbVAVzIBoaNMXWoCj2Bl5xMbCKm3GPcFpxNhAKgzGpsBgTCpMxqrAZIwqj8VBOwJOX1Xgoq4HCbIAKxggpBqCgjL75It2X4aEa/m6WZZVRoRmHBOxZFT6yIoUVmhH2uUjuzDXp0pcFoNCMvZSVVkImpcthX2hGpuTzfpqEnD7oCs2QBuszkn6e4HSrYAwhzXCiXsradAmnWwXzp4PUkbl2KYXT+VxRMLF3QjY4REhNtOHatGmhplPJ0FoYY3ritTGp6IasVEq+HxZ1ZZc2hqzkUjZ69fAiV2+sDMNjRTs6dJFaGrJybWc5V48O3fNGZNaGMvvXPM/Twdul2pczcXktLAtD3ZOIsDKIiqVBUqwNguJgoBUnA6k4GijF2UAoDMakwmJMKEzGqMJmjCgpG2FWWA2DwmzcX7HDgwS7ARyJPBgDxYuhKZ4MRfk0xMf7h5hsZK88+tHc3m9/+JFOeY5V87vxgjyV9nTS3MTfxgcyS8pL913naU6+VfwDn1QpQpPeEoEAAAAASUVORK5CYII='
},
'Pizza Hut': 
{'FoodType' : 'Pizza',
'AveragePrice' : 6.25,
'AverageRating' : 2.2,
'Menu' : {'Cheese Pizza' : 8.25, 'Pepperoni Pizza' : 9.00, 'Meat Lovers Pizza' : 11.00, 'Bread Twist' : 3.00, 'Cookie Pizza' : 5.25, 'Drink' : 2.50 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'We’re the pizza company that lives life unboxed.',
'RestaurantLink' : 'https://www.pizzahut.com/',
'Picture' : 'https://www.pizzahut.com/assets/ng/images/homepage/a/desktop-Logo-PH-Full.png'
},
'Potbelly': 
{'FoodType' : 'Sandwiches',
'AveragePrice' : 7.25,
'AverageRating' : 4.5,
'Menu' : {'Clubby' : 9.25, 'Italian' : 8.15, 'Turkey' : 7.00, 'BLT Sandwich' : 6.75, 'Oreo Milkshake' : 4.25, 'Vanilla Milkshake' : 4.25, 'Drink' : 3.50 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'Our Promise: Fresh, Fast & Friendly. We don’t use these words lightly.',
'RestaurantLink' : 'https://www.potbelly.com/',
'Picture' : 'https://www.potbelly.com/img/logo.svg'
},
'Wendys': 
{'FoodType' : 'Fast Food',
'AveragePrice' : 5.25,
'AverageRating' : 2.5,
'Menu' : {'Burger' : 5.25, 'Spicy Chicken Nuggets' : 4.50, 'Spicy Chicken Sandwich' : 3.30,  'Fries' : 3.20, 'Drink' : 1.20, 'Milkshake' : 2.85 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'At Wendy\'s, we\'re all about serving up fresh food, even if it means going the extra mile.',
'RestaurantLink' : 'https://www.wendys.com/home',
'Picture' : 'https://www.wendys.com/themes/custom/wendys_main/logo.svg'
},
'Cafe Mexicali': 
{'FoodType' : 'Mexican Food',
'AveragePrice' : 6.50,
'AverageRating' : 4.5,
'Menu' : {'Enchilada' : 8.25, 'Smothered Burrito' : 8.00, 'Steak Burrito' : 7.20, 'Chicken Burrito' : 6.40, 'Taco' : 4.75, 'Sopapilla' : 3.25, 'Drink' : 2.00},
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'Cafe Mexicali\’s goal is to provide customers with Mexican genre food that is \“as fresh as it gets\”.',
'RestaurantLink' : 'https://www.cafemexicali.com/',
'Picture' : 'https://www.cafemexicali.com/uploads/3/8/8/0/38808339/1185599_orig.gif'
},
'Five Guys': 
{'FoodType' : 'Fast Food',
'AveragePrice' : 9.70,
'AverageRating' : 4.7,
'Menu' : {'Burger' : 7.35, 'Fries' : 4.50, 'Chocolate Milkshake' : 3.75, 'Drink' : 1.00, 'Peanuts' : 0.00 },
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'We only use fresh ground beef. We only use peanut oil. There are no freezers in Five Guys locations, just coolers.',
'RestaurantLink' : 'https://www.fiveguys.com/',
'Picture' : 'https://static.thuisbezorgd.nl/images/chains/nl/fiveguys/logo_465x320.png'
},
'Cosmos': 
{'FoodType' : 'Pizza',
'AveragePrice' : 3.50,
'AverageRating' : 3.3,
'Menu' : {'Pizza' : 5.35, 'Spicy Ranch' : 1.50, 'Drink' : 1.25},
'Address' : '2920 Baseline Rd, Boulder, CO 80303',
'Description' : 'Late night pizza has never tasted so good.',
'RestaurantLink' : 'http://cosmospizza.com/',
'Picture' : 'http://cosmospizza.com/wp-content/uploads/2015/07/cosmospizza_logo.png'
}
};



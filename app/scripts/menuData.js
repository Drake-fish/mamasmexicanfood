  var appetizers = [{
      title: "Appetizers",
      name: "Mini Sampler Mexican Plate",
      description: "Try a little bite of evertying (Beef or Chicken) 4 min gorditas, 4 mini floutas, and 4 mini tacos accompanied with a delicious chile verde con queso",
      price: 14.99
  }, {
      name: "Mama's Green Chilie Cheese Fries",
      description: "French Fries drizzled with Mama's homemade creamy long green chile sauce topped with cheese",
      price: 8.99
  }, {
      name: "Mama's Nachos",
      description: "Homemade Tostada Chips Drizzled with our special homemade velveeta cheese sauce, beans, ground beef or chicken and topped with lettuce, tomato and sour cream",
      price: 8.99
  }, {
      name: "Choriquezzzzo",
      description: "Oven baked cheese with our homemade chorizo served with homemade tostada chips",
      price: 7.99
  }, {
      name: "Chilie Verde con Queso",
      description: "Our Special Roasted Chiles blended with our special spices and a combination of cheeses served with homemade tostada chips",
      price: 7.99,
      extra: "Add Extra Toppings(each) Ham, Chorizo, Ground Beef, Chicken or Brisket",
      extraPrice: 1.99
  }, {
      name: "Side of French Fries",
      price: 2.99
  }, {
      name: "Tostadas & Salsa",
      price: 1.99
  }, ];
  var houseSpecials = [{
          title: "Mama's House Specials",
          name: "Tampiquena Rib-Eye Steak",
          price: 16.99,
          description: "A Rib-Eye Steak topped with our special long green chiles, tomatoes, onions and topped with our special mix of melted cheeses accompanied with one red cheese enchilada served with rice and beans",
          options: ["Tomatoes","Onions","Cheese", "Long Green Chiles","Rice and Beans"]
      }, {
          name: "Tampiquena Breast of Chicken",
          price: 14.99,
          description: "A Breast of chicken topped with our special long green chile, tomatoes, onions and topped with our special mix of melted cheeses accompanied with one green cheese enchilada served with rice and beans",
          options: ["Tomatoes","Onions","Cheese", "Long Green Chiles","Rice and Beans"]
      }, {
          name: "Mama's Red Beef Mexican Plate",
          price: 12.99,
          description: "1 Beef Gordita, 1 red cheese enchilada, 1 beef flauta, 1 beef taco served in a bed of lettuce, tomato, sour cream and cheese, served with rice and beans",
          options: ["Tomatoes","Onions","Cheese","Rice and Beans"]
      }, {
          name: "Mama's Green Chicken Mexican Plate",
          price: 12.99,
          description: "1 Chicken Gordita, 1 green cheese enchilada, 1 Chicken flauta, 1 chicken taco served in a bed of lettuce, tomato, sour cream and cheese, served with rice and beans",
          options: ["Tomatoes","Onions","Cheese", "Rice and Beans"]
      }, {
          name: "Gabe's Combo",
          price: 10.99,
          description: "(2) Cheese or Chicken enchiladas topped with any of our homemade sauces and (2) beef or chicken tacos served with rice and beans",
          options: ["Tomatoes","Onions","Cheese","Rice and Beans"]
      }, {
          name: "Gorditas",
          price: 9.99,
          description: "Your choice of (3) ground beef or chicken corn Gorditas served in a bed of lettuce, tomato, sour cream, topped with cheese served with rice and beans Extra Gordita $2.99",
          options: ["Tomatoes","Onions","Cheese", "Long Green Chiles","Rice and Beans"]
      },



  ];
  var tacos = [{
          title: "Mama's Tacos",
          name: "Steak Tacos",
          price: 10.99,
          description: "(3) Lightly Fried, Seasoned Steak Tacos served with lettuce, tomato, sour cream, rice and beans"
      }, {
          name: "Brisket Tacos",
          price: 10.99,
          description: "Your choice of (3) crispy, soft or lightly fried Brisket tacos served with lettuce, tomato, sour cream, rice and beans"
      }, {
          name: "Chicken Tacos",
          price: 8.99,
          description: "Your choice of (3) crispy, soft or lightly fried Chicken Tacos served with lettuce, tomato, sour cream, rice and beans"
      }, {
          name: "Ground Beef Tacos",
          price: 8.99,
          description: "Your choice of (3) crispy, soft, or lightly fried Ground Beef Tacos served with lettuce, tomato, sour cream, rice and beans"
      }, {
          name: "Beef or Chicken Flautas",
          price: 8.99,
          description: "Your choice of (4) beef or chicken flautas served with lettuce, tomato, sour cream, rice and beans. Extra Flauta $2.99"
      }, {
          name: "Tostadas",
          price: 8.99,
          description: "Your choice of (3) mini ground beef or chicken tostadas topped with lettuce, tomato, sour cream and cheese served with rice and beans. Extra Tostada $2.99"
      },


  ];
  var enchiladas = [{
          title: "Mama's Enchiladas",
          name: '"Separados Pero No Divorciados"',
          price: 10.99,
          description: "Try any of our 2 sauces with your choice of (4) Chicken or Cheese enchiladas served in a bed of lettuce, tomato, sour cream with rice and beans",
          image:"../../../assets/images/mamas1.jpg"
      }, {
          name: "Mama's Specialty Green Enchiladas",
          price: 9.99,
          description: "Mama's Green Enchiladas are prepared in a homemade creamy long green chile verde sauce, Your choice of (3) cheese, or chicken enchiladas served with rice and beans",
          image:"../../assets/images/mamas1.jpg"
      }, {
          name: "Red Enchiladas",
          price: 9.99,
          description: "Our Red Enchiladas are prepared in a combination of different red chiles blended togther for our Special Red Chile Colorado Sauce, your choice of (3) cheese or chicken enchiladas served with lettuce, tomato, sour cream, rice and beans",
          image:"../../assets/images/mamas1.jpg"
      }, {
          name: "Spicy Creamy Chipotle Enchiladas",
          price: 9.99,
          description: "Your choice of (3) cheese or chicken spicy enchiladas topped in a delicious blend of Creamy Chipotle, Fresh Roasted tomatoes and Sundried Tomatoes served with rice beans and topped with lettuce, tomato, sour cream",
          image:"../../assets/images/mamas1.jpg"
      }, {
          name: "Enchiladas Poblanas",
          price: 9.99,
          description: "Your choice of (3) cheese or chicken enchiladas prepared in a delicious combination of fresh roasted tomatillos and chile poblano served with rice and beans topped with lettuce, tomato and sour cream",
          image:"../../assets/images/mamas1.jpg"
      }, {
          name: "Spicy Entomatadas",
          price: 9.99,
          description: "Your choice of (3) cheese or chicken spicy entomatadas topped with our sauce of blended roasted tomatoes served with rice and beans",
          image:"../../assets/images/mamas1.jpg"
      },



  ];
  var soupyTacos = [{
          title: "Mama's Soupy Tacos",
          name: "Dual Soupy Tacos",
          price: 8.99,
          description: "Try any of our two sauces with your choice of (4) Brisket or Chicken flautas topped with our special blend of cheeses"
      }, {
          name: "Original Soupy Tacos (Best Ever)",
          price: 7.99,
          description: "Your choice of (4) Brisket or Chicken flautas served in a long green chile sauce topped with our special blend of cheeses"
      }, {
          name: "Red Spicy Soupy Tacos",
          price: 7.99,
          description: "Your choice of (4) Brisket or Chicken flautas served in a blend of roasted tomato sauce topped with our special blend of cheeses"
      }, {
          name: "Creamy Soupy Tacos",
          price: 7.99,
          description: "Your choice of (4) Brisket or Chicken flautas served with our creamy green sauce topped with our special blend of cheeses"
      }, {
          name: "Spicy Chipotle Soupy Tacos",
          price: 7.99,
          description: "Your choice of (4) Brisket or Chicken flautas served with our creamy chipotle sauce topped with our special blend of cheeses"
      },


  ];
  var soups = [{
          title: "Mamacita's Soups & Salads",
          name: "Call for Soups of the day! (915)-595-1990",
          price: 6.99,
          description: "Mama's Homemade Soups"
      }, {
          name: "Mexican Taco Salad",
          price: 7.99,
          description: "Filled with crisp shredded lettuce, diced ripe tomatoes and a light touch of our special blend of cheeses topped with sour cream your choice of all-white-meat chicken, ground beef or brisket with Ranch Dressing."
      }, {
          name: "Rasberry-Pecan Salad",
          price: 7.99,
          description: "A paprika seasoned chicken breast served in a bed of crisp mixed greens, spinach, pecans, cranberries and feta cheese. Topped in a delicious Rasberry Vinaigrette."
      },



  ];
  var seafood = [{
          title: "Mama's Seafood",
          name: "Shrimp Tostadas",
          price: 10.99,
          description: "(3) Mini tostadas served with rice and topped with avocado and lime wedges"
      }, {
          name: "Tilapia Fish Tacos",
          price: 10.99,
          description: "(3) lightly fried tilapia fish tacos served with our homemade vinegratte coleslaw served with rice"
      }, {
          name: "Shrimp Cocktail",
          price: 9.99,
          description: "A chilled glass filled with our homemade spicy cocktail sauce and pico de gallo, avocado and cilantro"
      }

  ];
  var sides = [{
      title: "Side Orders",
      name: "Beans",
      price: 1.99,
  }, {
      name: "Rice",
      price: 1.99,
  }, {
      name: "Guacamole",
      price: 1.99,
  }, {
      name: "Chile con Queso",
      price: 3.99,
  }, {
      name: "French Fries",
      price: 2.99,
  }, {
      name: "Corn/Flour Tortillas",
      price: 1.50,
  }, {
      name: "Sour Cream",
      price: 1.99,
  }, {
      name: "Extra Sauce",
      price: 1.50,
  }, {
      name: "Extra Egg (1)",
      price: 1.50,
  }];
  var beverages = [{
      title: "Beverages",
      name: "Mama's House Drink- Teamonade",
      price: 1.99,
  }];
  var desserts = [{
          title: "Mama's Desserts",
          name: "Joshuas' Brownies",
          price: 5.99,
          description: "A warm homemade brownie with pecans & sliced almonds topped with two scoops of ice cream and drizzled with chocolate syrup and whipped cream"
      }, {
          name: "Mexican Flan",
          price: 5.99,
          description: "A homemade cool Mexican flan served in a caramel sauce topped with pecans and whipped cream"
      }

  ];
  export default {
      appetizers,
      houseSpecials,
      tacos,
      enchiladas,
      soupyTacos,
      soups,
      seafood,
      sides,
      beverages,
      desserts
  };

const recipes = [
    {
        id: 1,
        name: "Gluten-Free Mozzarella Mac and Cheese",
        categories: [
            "Healthy",
            "Gluten-free"
        ],
        ingredients: [
            "12 oz gluten-free macaroni noodles - 340g",
            "3 tablespoons unsalted butter - 43g",
            "3 tablespoons gluten-free all-purpose flour - 27g",
            "1 teaspoon salt",
            "1 teaspoon ground mustard",
            "1/2 teaspoon onion powder",
            "1/2 teaspoon ground black pepper",
            "2 cups whole milk - 16 fl oz, 480g",
            "2 cups mozzarella cheese - shredded (230g)",
            "1/2 cup parmesan cheese - shredded (48g)"
        ],
        directions: [
            "Cook the gluten-free elbow macaroni noodles according to the package directions.",
            "Drain the pasta and set aside.",
            "Place a large skillet or saucepan on the stove top over medium heat.",
            "Add the unsalted butter and melt.",
            "Once the butter is melted, add the gluten-free all-purpose flour, salt, ground mustard, onion powder, and black pepper. Whisk until a paste forms, about 1-2 minutes.",
            "Pour in the whole milk. Whisk until the mixture has thickened, about 3-5 minutes.",
            "Sprinkle in the shredded mozzarella cheese and parmesan cheese.",
            "Mix until the cheese is completely melted.",
            "Add the cooked pasta back into the pan.",
            "Fold the pasta into the cheese sauce.",
            "Top with fresh basil if desired. ",
            "Serve immediately.",
        ],
        rating: 3,
        review: "This macaroni and cheese is very tasty and is perfect for anyone who is not able to eat gluten, but still wants to partake in the delicousness of Macaroni and Cheese.",
        image: "images/gluten-free-mozzarella-mac-and-cheese.jpg"
    },

    {
        id: 2,
        name: "Instant Pot Mac and Cheese",
        categories: [
            "Fast",
            "Creamy"
        ],
        ingredients: [
            "1 pound (454g) elbow macaroni",
            "4 cups (1L) cold water",
            "4 tablespoons (60g) unsalted butter",
            "14 ounces (397g) sharp cheddar , freshly grated",
            "6 ounces (170g) mild cheddar or Velveeta cheese , freshly grated",
            "Kosher salt and ground black pepper",
            "2 large eggs , beaten",
            "1 teaspoon ground mustard",
            "12 ounces (355ml can) evaporated milk",
            "Optional: 1 teaspoon Sriracha sauce or Frank's hot sauce"
        ],
        directions: [
            "Pressure Cook Macaroni: Add 1lb (454g) elbow macaroni, 4 cups (1L) cold water, and a pinch of kosher salt in Instant Pot.",
            "Close the lid, then turn Venting Knob to Sealing Position. Pressure cook at High Pressure for 4 minutes, then Gradual Quick Release. Carefully open the lid.",
            "Mix Wet Ingredients: While the macaroni is pressure cooking, mix the wet ingredients in a medium mixing bowl. Beat 2 large eggs, then mix in 1 tsp ground mustard, 1 tsp Sriracha, and 12 ounces (355ml) evaporated milk. Mix well.",
            "Make Mac & Cheese: Use \"Keep Warm\" function. Give it a quick stir. If there's more than ¾ cup of water left in the pot, drain some of the liquid.",
            "Add 4 tbsp unsalted butter to the pressure cooked macaroni. Mix well with a silicone spatula and let the butter melt. Pour in the wet ingredients and mix well.",
            "Add grated cheese (⅓ portion at a time), then stir constantly until the cheese fully melt.",
            "Serve: Taste and season with kosher salt and ground black pepper. You'll likely need a couple pinches of kosher salt to brighten the dish."
        ],
        rating: 4,
        review: "The most classic examples of Macaroni and Cheese, this splendid concoction will bring your taste buds onto a holy pilgrimage.",
        image: "images/instant-pot-mac-and-cheese.jpg"
    },

    {
        id: 3,
        name: "Baked Macaroni and Cheese",
        categories: [
            "Baked",
            "Oven",
            "Many Cheese!"
        ],
        ingredients: [
            "250g / 8 oz macaroni (elbow pasta)",
            "1 tbsp (15g) unsalted butter (or 2 tsp oil)",
            "2/3 cup panko breadcrumbs (Note 1)",
            "2 tbsp (30g) unsalted butter , melted",
            "1/4 tsp salt",
            "4 tbsp (60g) unsalted butter",
            "1/3 cup flour , plain / all purpose",
            "3 cups milk , warmed (low or full fat)",
            "2 cups freshly shredded cheese, gruyere best (followed by cheddar and Colby)",
            "1 cup freshly shredded mozzarella cheese",
            "3/4 tsp salt",
            "1 tsp garlic powder",
            "1/2 tsp onion powder",
            "1/2 tsp mustard powder"
        ],
        directions: [
            "Cook pasta: Bring a large pot of water to the boil. Add macaroni and cook per packet directions MINUS 1 minute.",
            "Toss in butter: Drain, return pasta to pot, add butter and toss until melted." ,
            "Set aside to cool while making the Sauce",
            "Mix together Topping. Set aside.",
            "Preheat oven to 180°C/350°F (all oven types).",
            "Make roux: In a large saucepan or in an ovenproof skillet (I use my 26cm/9 Lodge cast iron skillet), melt butter over medium heat. Add flour and cook, stirring constantly, for 1 minute.",
            "Add milk: Add about 1 cup of the milk and mix to dissolve the paste into the milk.",
            "Then add remaining milk and mix until lump free (use whisk if required).",
            "Add Seasonings: Mix in salt and Seasonings if using.",
            "Thicken sauce: Cook, stirring/whisking regularly, for 5 - 8 minutes until thickened to a cream consistency. When the Sauce coats the back of a wooden spoon, you should be able to draw a path with your finger.",
            "Add cheese: Remove from stove, add cheese and stir - cheese doesn't need to melt.",
            "Check salt: Adjust salt to taste (if you use recommended cheeses, you won't need more).",
            "Assemble: Pour Sauce into pot with Macaroni. Stir quickly, then pour back into the skillet (I did this) or a baking dish (Note 4). Sprinkle with breadcrumb topping.",
            "Bake for 25 minutes or until top is light golden. Don't bake too long otherwise you'll bake away the Sauce!",
            "Serve: Serve immediately! I sprinkled mine with a bit of fresh parsley.",
        ],
        rating: 5,
        review: "Who doesn't love baked macaroni and cheese? This recipe makes arguably one of the best macaroni and cheese's divine. I love mac and cheese, but baked mac and cheese really just activates my tastbuds.",
        image: "images/baked-macaroni-and-cheese.webp"
    },

    {
        id: 4,
        name: "Creamy Baked Macaroni and Cheese",
        categories: [
            "Baked",
            "Oven",
            "Creamy"
        ],
        ingredients: [
            "1 lb. dried elbow pasta",
            "1/2 cup unsalted butter",
            "1/2 cup all purpose flour",
            "1 1/2 cups whole milk",
            "2 1/2 cups half and half ",
            "4 cups shredded medium cheddar cheese divided (measured after shredding)",
            "2 cups shredded Gruyere cheese divided (measured after shredding)",
            "1/2 Tbsp. salt",
            "1/2 tsp. black pepper",
            "1/4 tsp. paprika smoked paprika is our favorite!"
        ],
        directions: [
            "Preheat oven to 325 degrees F and grease a 3 qt baking dish (9x13). Set aside.",
            "Bring a large pot of salted water to a boil.", 
            "When boiling, add dried pasta and cook 1 minute less than the package directs for al dente.",
            "Drain and drizzle with a little bit of olive oil to keep from sticking.",
            "While water is coming up to a boil, shred cheeses and toss together to mix, then divide into three piles.  Approximately 3 cups for the sauce, 1 1/2 cups for the inner layer, and 1 1/2 cups for the topping.",
            "Melt butter in a large saucepan over MED heat.",
            "Sprinkle in flour and whisk to combine. Mixture will look like very wet sand.",
            "Cook for approximately 1 minute, whisking often.",
            "Slowly pour in about 2 cups or so of the half and half, while whisking constantly, until smooth.",
            "Slowly pour in the remaining half and half plus the whole milk, while whisking constantly, until combined and smooth.",
            "Continue to heat over MED heat, whisking very often, until thickened to a very thick consistency. It should almost be the consistency of a semi thinned out condensed soup.",
            "Remove from the heat and stir in spices and 1 1/2 cups of the cheeses, stirring to melt and combine.",
            "Stir in another 1 1/2 cups of cheese, and stir until completely melted and smooth.",
            "In a large mixing bowl, combine drained pasta with cheese sauce, stirring to combine fully.",
            "Pour half of the pasta mixture into the prepared baking dish.",
            "Top with 1 1/2 cups of shredded cheeses, then top that with the remaining pasta mixture.",
            "Sprinkle the top with the last 1 1/2 cups of cheese and bake for 15 minutes, until cheesy is bubbly and lightly golden brown.",
            "Serve."
        ],
        rating: 3,
        review: "While this recipe may not have the coveted top of all baked mac and cheese, it is still quite the treat. Your life will be blessed for trying out this baked macaroni and cheese and you won't regret it. You can never go wrong with baked mac and cheese!",
        image: "images/creamy-baked-mac-and-cheese.webp"
    }
]

export default recipes;
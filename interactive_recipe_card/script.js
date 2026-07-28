/* =========================================
   TASTYBITE - COMPLETE SCRIPT.JS
========================================= */


/* =========================================
   RECIPE DATA
========================================= */

const recipes = [
  {
    id: 1,

    name: "Classic Chocolate Cake",

    category: "Dessert",

    time: 45,

    servings: "6 People",

    difficulty: "Easy",

    image:
      "images/chocolate-cake.jpeg",

    description:
      "A rich and moist homemade chocolate cake with deep cocoa flavour, perfect for celebrations.",

    ingredients: [
      "2 cups all-purpose flour",
      "1½ cups granulated sugar",
      "¾ cup cocoa powder",
      "2 large eggs",
      "1 cup fresh milk",
      "½ cup melted butter",
      "1 teaspoon vanilla extract",
      "1½ teaspoons baking powder",
      "½ teaspoon salt"
    ],

    steps: [
      {
        title: "Preheat the oven",
        description:
          "Preheat your oven to 180°C and grease a cake pan with butter."
      },

      {
        title: "Mix dry ingredients",
        description:
          "Combine flour, sugar, cocoa powder, baking powder and salt."
      },

      {
        title: "Add wet ingredients",
        description:
          "Add eggs, milk, melted butter and vanilla extract."
      },

      {
        title: "Mix the batter",
        description:
          "Mix until the chocolate batter becomes smooth and free from lumps."
      },

      {
        title: "Prepare the pan",
        description:
          "Pour the batter evenly into the prepared cake pan."
      },

      {
        title: "Bake the cake",
        description:
          "Bake for around 30 minutes and check with a toothpick."
      }
    ]
  },


  {
    id: 2,

    name: "Chicken Biryani",

    category: "Main Course",

    time: 60,

    servings: "4 People",

    difficulty: "Medium",

    image:
      "images/chicken-biryani.jpeg",

    description:
      "A fragrant and flavourful chicken biryani layered with aromatic basmati rice, spices and herbs.",

    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "2 sliced onions",
      "2 chopped tomatoes",
      "½ cup curd",
      "1 tablespoon ginger garlic paste",
      "2 teaspoons biryani masala",
      "Mint leaves",
      "Coriander leaves",
      "Salt as required"
    ],

    steps: [
      {
        title: "Wash the rice",
        description:
          "Wash basmati rice thoroughly and soak it for 20 minutes."
      },

      {
        title: "Marinate chicken",
        description:
          "Mix chicken with curd, spices, ginger garlic paste and salt."
      },

      {
        title: "Cook the masala",
        description:
          "Fry onions, tomatoes and marinated chicken until aromatic."
      },

      {
        title: "Cook the rice",
        description:
          "Boil rice until it is approximately 70 percent cooked."
      },

      {
        title: "Layer biryani",
        description:
          "Layer rice over chicken masala and add mint and coriander."
      },

      {
        title: "Dum cooking",
        description:
          "Cover tightly and cook on low heat for 20 minutes."
      }
    ]
  },


  {
    id: 3,

    name: "Creamy Pasta",

    category: "Italian",

    time: 25,

    servings: "2 People",

    difficulty: "Easy",

    image:
      "images/creamy-pasta.jpeg",

    description:
      "Creamy, comforting pasta coated in a smooth garlic sauce with herbs and cheese.",

    ingredients: [
      "200g pasta",
      "1 cup fresh cream",
      "3 garlic cloves",
      "½ cup grated cheese",
      "1 tablespoon butter",
      "Black pepper",
      "Mixed herbs",
      "Salt as required"
    ],

    steps: [
      {
        title: "Boil pasta",
        description:
          "Cook pasta in salted boiling water until tender."
      },

      {
        title: "Prepare garlic",
        description:
          "Melt butter and sauté finely chopped garlic."
      },

      {
        title: "Make cream sauce",
        description:
          "Add fresh cream and cook gently over low heat."
      },

      {
        title: "Add cheese",
        description:
          "Mix grated cheese into the warm cream sauce."
      },

      {
        title: "Combine pasta",
        description:
          "Add cooked pasta and toss until evenly coated."
      },

      {
        title: "Season and serve",
        description:
          "Add herbs and black pepper, then serve warm."
      }
    ]
  },


  {
    id: 4,

    name: "Homemade Pizza",

    category: "Fast Food",

    time: 40,

    servings: "4 People",

    difficulty: "Medium",

    image:
      "images/pizza.jpeg",

    description:
      "A crispy homemade pizza topped with rich tomato sauce, vegetables and melted cheese.",

    ingredients: [
      "1 pizza base",
      "½ cup pizza sauce",
      "1 cup mozzarella cheese",
      "½ sliced onion",
      "½ sliced capsicum",
      "Sweet corn",
      "Olives",
      "Mixed herbs"
    ],

    steps: [
      {
        title: "Preheat oven",
        description:
          "Preheat your oven to 220°C."
      },

      {
        title: "Prepare base",
        description:
          "Place the pizza base on a baking tray."
      },

      {
        title: "Add sauce",
        description:
          "Spread pizza sauce evenly over the base."
      },

      {
        title: "Add toppings",
        description:
          "Arrange onion, capsicum, corn and olives."
      },

      {
        title: "Add cheese",
        description:
          "Cover the toppings with mozzarella cheese."
      },

      {
        title: "Bake pizza",
        description:
          "Bake until the crust is crisp and cheese has melted."
      }
    ]
  },


  {
    id: 5,

    name: "Fluffy Pancakes",

    category: "Breakfast",

    time: 20,

    servings: "3 People",

    difficulty: "Easy",

    image:
      "images/pancakes.jpeg",

    description:
      "Soft and fluffy breakfast pancakes served warm with honey, fruits or maple syrup.",

    ingredients: [
      "1½ cups flour",
      "2 tablespoons sugar",
      "1 teaspoon baking powder",
      "1 egg",
      "1 cup milk",
      "2 tablespoons melted butter",
      "Vanilla extract",
      "Pinch of salt"
    ],

    steps: [
      {
        title: "Mix dry ingredients",
        description:
          "Combine flour, sugar, baking powder and salt."
      },

      {
        title: "Mix wet ingredients",
        description:
          "Whisk egg, milk, butter and vanilla."
      },

      {
        title: "Prepare batter",
        description:
          "Combine wet and dry mixtures without overmixing."
      },

      {
        title: "Heat pan",
        description:
          "Heat a non-stick pan over medium-low heat."
      },

      {
        title: "Cook pancakes",
        description:
          "Pour batter and cook until bubbles appear."
      },

      {
        title: "Flip and serve",
        description:
          "Flip, cook the other side and serve warm."
      }
    ]
  },


  {
    id: 6,

    name: "Vegetable Fried Rice",

    category: "Main Course",

    time: 25,

    servings: "3 People",

    difficulty: "Easy",

    image:
      "images/fried-rice.jpeg",

    description:
      "Quick and colourful vegetable fried rice tossed with fresh vegetables and savoury sauces.",

    ingredients: [
      "3 cups cooked rice",
      "½ cup chopped carrot",
      "½ cup beans",
      "½ cup capsicum",
      "Spring onions",
      "2 tablespoons soy sauce",
      "1 teaspoon pepper",
      "2 tablespoons oil"
    ],

    steps: [
      {
        title: "Prepare rice",
        description:
          "Use cooled cooked rice and separate any lumps."
      },

      {
        title: "Heat the wok",
        description:
          "Heat oil in a large wok over high heat."
      },

      {
        title: "Cook vegetables",
        description:
          "Stir-fry vegetables until slightly tender."
      },

      {
        title: "Add rice",
        description:
          "Add cooked rice and toss well."
      },

      {
        title: "Add seasoning",
        description:
          "Mix soy sauce, pepper and required salt."
      },

      {
        title: "Finish and serve",
        description:
          "Add spring onions and serve immediately."
      }
    ]
  },


  {
    id: 7,

    name: "Hakka Noodles",

    category: "Chinese",

    time: 30,

    servings: "3 People",

    difficulty: "Easy",

    image:
      "images/noodles.jpeg",

    description:
      "Street-style Hakka noodles tossed with crunchy vegetables, sauces and aromatic seasonings.",

    ingredients: [
      "250g noodles",
      "½ cup cabbage",
      "½ cup carrot",
      "½ cup capsicum",
      "Spring onions",
      "1 tablespoon soy sauce",
      "1 teaspoon chilli sauce",
      "2 tablespoons oil"
    ],

    steps: [
      {
        title: "Boil noodles",
        description:
          "Cook noodles until just tender and drain them."
      },

      {
        title: "Cool noodles",
        description:
          "Rinse with cool water and toss with a little oil."
      },

      {
        title: "Heat wok",
        description:
          "Heat oil in a wok over high heat."
      },

      {
        title: "Stir-fry vegetables",
        description:
          "Quickly stir-fry all sliced vegetables."
      },

      {
        title: "Add noodles",
        description:
          "Add noodles, soy sauce and chilli sauce."
      },

      {
        title: "Toss and serve",
        description:
          "Toss everything on high heat and serve hot."
      }
    ]
  },


  {
    id: 8,

    name: "Gulab Jamun",

    category: "Dessert",

    time: 45,

    servings: "6 People",

    difficulty: "Medium",

    image:
      "images/gulab-jamun.jpeg",

    description:
      "Soft golden gulab jamuns soaked in warm aromatic sugar syrup for a classic Indian dessert.",

    ingredients: [
      "1 cup milk powder",
      "¼ cup flour",
      "¼ teaspoon baking soda",
      "2 tablespoons ghee",
      "Milk as required",
      "1½ cups sugar",
      "1½ cups water",
      "Cardamom powder"
    ],

    steps: [
      {
        title: "Make sugar syrup",
        description:
          "Boil sugar, water and cardamom until slightly sticky."
      },

      {
        title: "Prepare dough",
        description:
          "Mix milk powder, flour, baking soda and ghee."
      },

      {
        title: "Shape balls",
        description:
          "Add milk gradually and form smooth small balls."
      },

      {
        title: "Heat oil",
        description:
          "Heat oil or ghee over low to medium heat."
      },

      {
        title: "Fry jamuns",
        description:
          "Fry slowly until evenly golden brown."
      },

      {
        title: "Soak in syrup",
        description:
          "Add warm jamuns to syrup and rest before serving."
      }
    ]
  }
];


/* =========================================
   DOM ELEMENTS
========================================= */

const recipeGrid =
  document.getElementById("recipeGrid");

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");

const categoryButtons =
  document.querySelectorAll(".category-btn");

const recipeResultText =
  document.getElementById("recipeResultText");

const emptyState =
  document.getElementById("emptyState");

const clearSearchBtn =
  document.getElementById("clearSearchBtn");


/* MODAL */

const recipeModal =
  document.getElementById("recipeModal");

const closeModalBtn =
  document.getElementById("closeModalBtn");

const modalImage =
  document.getElementById("modalImage");

const modalCategory =
  document.getElementById("modalCategory");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalTime =
  document.getElementById("modalTime");

const modalServings =
  document.getElementById("modalServings");

const modalDifficulty =
  document.getElementById("modalDifficulty");

const modalIngredients =
  document.getElementById("modalIngredients");

const modalSteps =
  document.getElementById("modalSteps");

const toggleIngredientsBtn =
  document.getElementById("toggleIngredientsBtn");

const modalStepCounter =
  document.getElementById("modalStepCounter");

const modalProgressText =
  document.getElementById("modalProgressText");

const modalProgressBar =
  document.getElementById("modalProgressBar");

const startCookingBtn =
  document.getElementById("startCookingBtn");

const nextStepBtn =
  document.getElementById("nextStepBtn");

const timerDisplay =
  document.getElementById("timerDisplay");

const resetTimerBtn =
  document.getElementById("resetTimerBtn");

const completeMessage =
  document.getElementById("completeMessage");

const modalFavoriteBtn =
  document.getElementById("modalFavoriteBtn");


/* FAVORITES */

const favoriteNavBtn =
  document.getElementById("favoriteNavBtn");

const favoriteCount =
  document.getElementById("favoriteCount");

const favoritesPanel =
  document.getElementById("favoritesPanel");

const favoritesList =
  document.getElementById("favoritesList");

const closeFavoritesBtn =
  document.getElementById("closeFavoritesBtn");

const panelBackdrop =
  document.getElementById("panelBackdrop");


/* MOBILE MENU */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");


/* =========================================
   APPLICATION STATE
========================================= */

let selectedCategory = "All";

let currentRecipe = null;

let currentStep = 0;

let timerInterval = null;

let remainingSeconds = 0;

let timerRunning = false;


/* Load saved favorites */

let favorites = [];

try {
  favorites =
    JSON.parse(
      localStorage.getItem(
        "tastyBiteFavorites"
      )
    ) || [];
} catch (error) {
  favorites = [];
}


/* =========================================
   LOCAL STORAGE
========================================= */

function saveFavorites() {
  localStorage.setItem(
    "tastyBiteFavorites",
    JSON.stringify(favorites)
  );
}


/* =========================================
   RENDER RECIPES
========================================= */

function renderRecipes(recipeList) {

  recipeGrid.innerHTML = "";


  if (recipeList.length === 0) {

    recipeGrid.classList.add(
      "hidden"
    );

    emptyState.classList.remove(
      "hidden"
    );

    recipeResultText.textContent =
      "0 recipes found";

    return;
  }


  recipeGrid.classList.remove(
    "hidden"
  );

  emptyState.classList.add(
    "hidden"
  );


  recipeResultText.textContent =
    `Showing ${recipeList.length} recipe${
      recipeList.length !== 1
        ? "s"
        : ""
    }`;


  recipeList.forEach(
    function (recipe) {

      const isFavorite =
        favorites.includes(recipe.id);


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "recipe-card";


      card.innerHTML = `
        <div class="recipe-card-image">

          <img
            src="${recipe.image}"
            alt="${recipe.name}"
          >

          <span class="recipe-category-badge">
            ${recipe.category}
          </span>

          <button
            class="card-favorite-btn ${
              isFavorite
                ? "active"
                : ""
            }"
            data-favorite-id="${recipe.id}"
            type="button"
          >
            ${
              isFavorite
                ? "♥"
                : "♡"
            }
          </button>

        </div>


        <div class="recipe-card-content">

          <h3>
            ${recipe.name}
          </h3>

          <p>
            ${recipe.description}
          </p>


          <div class="recipe-meta">

            <span>
              ⏱️ ${recipe.time} min
            </span>

            <span>
              🍽️ ${recipe.servings}
            </span>

            <span>
              ⭐ ${recipe.difficulty}
            </span>

          </div>


          <button
            class="view-recipe-btn"
            data-recipe-id="${recipe.id}"
            type="button"
          >
            View Recipe →
          </button>

        </div>
      `;


      recipeGrid.appendChild(card);
    }
  );


  addRecipeCardEvents();
}


/* =========================================
   CARD EVENTS
========================================= */

function addRecipeCardEvents() {

  const viewButtons =
    document.querySelectorAll(
      ".view-recipe-btn"
    );


  viewButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const recipeId =
            Number(
              button.dataset.recipeId
            );


          openRecipeModal(recipeId);
        }
      );
    }
  );


  const favoriteButtons =
    document.querySelectorAll(
      ".card-favorite-btn"
    );


  favoriteButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const recipeId =
            Number(
              button.dataset.favoriteId
            );


          toggleFavorite(recipeId);
        }
      );
    }
  );
}


/* =========================================
   FILTER
========================================= */

function filterRecipes() {

  const searchTerm =
    searchInput.value
      .trim()
      .toLowerCase();


  const filteredRecipes =
    recipes.filter(
      function (recipe) {

        const matchesCategory =
          selectedCategory === "All"
          ||
          recipe.category ===
            selectedCategory;


        const matchesSearch =
          recipe.name
            .toLowerCase()
            .includes(searchTerm)

          ||

          recipe.category
            .toLowerCase()
            .includes(searchTerm)

          ||

          recipe.description
            .toLowerCase()
            .includes(searchTerm)

          ||

          recipe.ingredients.some(
            function (ingredient) {

              return ingredient
                .toLowerCase()
                .includes(searchTerm);
            }
          );


        return (
          matchesCategory
          &&
          matchesSearch
        );
      }
    );


  renderRecipes(filteredRecipes);
}


/* =========================================
   SEARCH EVENTS
========================================= */

searchBtn.addEventListener(
  "click",
  function () {

    filterRecipes();

    document
      .getElementById("recipes")
      .scrollIntoView({
        behavior: "smooth"
      });
  }
);


searchInput.addEventListener(
  "input",
  filterRecipes
);


searchInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      filterRecipes();

      document
        .getElementById("recipes")
        .scrollIntoView({
          behavior: "smooth"
        });
    }
  }
);


/* =========================================
   CATEGORY EVENTS
========================================= */

categoryButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        categoryButtons.forEach(
          function (item) {

            item.classList.remove(
              "active"
            );
          }
        );


        button.classList.add(
          "active"
        );


        selectedCategory =
          button.dataset.category;


        filterRecipes();


        document
          .getElementById("recipes")
          .scrollIntoView({
            behavior: "smooth"
          });
      }
    );
  }
);


/* =========================================
   CLEAR SEARCH
========================================= */

clearSearchBtn.addEventListener(
  "click",
  function () {

    searchInput.value = "";

    selectedCategory = "All";


    categoryButtons.forEach(
      function (button) {

        button.classList.remove(
          "active"
        );
      }
    );


    if (categoryButtons[0]) {

      categoryButtons[0]
        .classList
        .add("active");
    }


    renderRecipes(recipes);
  }
);


/* =========================================
   OPEN MODAL
========================================= */

function openRecipeModal(recipeId) {

  currentRecipe =
    recipes.find(
      function (recipe) {

        return (
          recipe.id === recipeId
        );
      }
    );


  if (!currentRecipe) {
    return;
  }


  currentStep = 0;


  clearInterval(timerInterval);

  timerRunning = false;


  remainingSeconds =
    currentRecipe.time * 60;


  modalImage.src =
    currentRecipe.image;

  modalImage.alt =
    currentRecipe.name;

  modalCategory.textContent =
    currentRecipe.category;

  modalTitle.textContent =
    currentRecipe.name;

  modalDescription.textContent =
    currentRecipe.description;

  modalTime.textContent =
    `${currentRecipe.time} min`;

  modalServings.textContent =
    currentRecipe.servings;

  modalDifficulty.textContent =
    currentRecipe.difficulty;


  renderModalIngredients();

  renderModalSteps();

  updateModalProgress();

  updateTimerDisplay();

  updateModalFavoriteButton();


  completeMessage.classList.add(
    "hidden"
  );


  nextStepBtn.disabled = false;

  nextStepBtn.textContent =
    "Next Step →";


  startCookingBtn.disabled = false;

  startCookingBtn.textContent =
    "▶ Start Cooking";


  recipeModal.classList.remove(
    "hidden"
  );


  document.body.classList.add(
    "modal-open"
  );


  recipeModal.scrollTop = 0;
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeRecipeModal() {

  recipeModal.classList.add(
    "hidden"
  );


  document.body.classList.remove(
    "modal-open"
  );


  clearInterval(timerInterval);

  timerRunning = false;
}


closeModalBtn.addEventListener(
  "click",
  closeRecipeModal
);


recipeModal.addEventListener(
  "click",
  function (event) {

    if (event.target === recipeModal) {

      closeRecipeModal();
    }
  }
);


/* =========================================
   INGREDIENTS
========================================= */

function renderModalIngredients() {

  modalIngredients.innerHTML = "";


  currentRecipe.ingredients.forEach(
    function (ingredient) {

      const item =
        document.createElement("li");


      item.innerHTML = `
        <span class="ingredient-check">
          ✓
        </span>

        <span>
          ${ingredient}
        </span>
      `;


      item.addEventListener(
        "click",
        function () {

          item.classList.toggle(
            "checked"
          );
        }
      );


      modalIngredients.appendChild(
        item
      );
    }
  );


  modalIngredients.classList.remove(
    "hidden"
  );


  toggleIngredientsBtn.textContent =
    "Hide Ingredients";
}


/* =========================================
   SHOW / HIDE INGREDIENTS
========================================= */

toggleIngredientsBtn.addEventListener(
  "click",
  function () {

    modalIngredients
      .classList
      .toggle("hidden");


    const isHidden =
      modalIngredients
        .classList
        .contains("hidden");


    toggleIngredientsBtn.textContent =
      isHidden
        ? "Show Ingredients"
        : "Hide Ingredients";
  }
);


/* =========================================
   STEPS
========================================= */

function renderModalSteps() {

  modalSteps.innerHTML = "";


  currentRecipe.steps.forEach(
    function (step, index) {

      const item =
        document.createElement("li");


      item.className =
        "modal-step-item";


      if (index === currentStep) {

        item.classList.add(
          "active"
        );
      }


      item.innerHTML = `
        <span class="modal-step-number">
          ${index + 1}
        </span>

        <div>

          <strong>
            ${step.title}
          </strong>

          <p>
            ${step.description}
          </p>

        </div>
      `;


      item.addEventListener(
        "click",
        function () {

          currentStep = index;

          renderModalSteps();

          updateModalProgress();

          updateNextButtonText();
        }
      );


      modalSteps.appendChild(item);
    }
  );
}


/* =========================================
   PROGRESS
========================================= */

function updateModalProgress() {

  if (!currentRecipe) {
    return;
  }


  const percentage =
    (
      (currentStep + 1)
      /
      currentRecipe.steps.length
    )
    *
    100;


  modalProgressBar.style.width =
    percentage + "%";


  modalProgressText.textContent =
    Math.round(percentage)
    +
    "%";


  modalStepCounter.textContent =
    `Step ${currentStep + 1} of ${
      currentRecipe.steps.length
    }`;
}


/* =========================================
   NEXT STEP
========================================= */

nextStepBtn.addEventListener(
  "click",
  function () {

    if (!currentRecipe) {
      return;
    }


    if (
      currentStep
      <
      currentRecipe.steps.length - 1
    ) {

      currentStep++;


      renderModalSteps();

      updateModalProgress();

      updateNextButtonText();


      const activeStep =
        modalSteps.querySelector(
          ".active"
        );


      if (activeStep) {

        activeStep.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }

    } else {

      completeRecipe();
    }
  }
);


/* =========================================
   NEXT BUTTON
========================================= */

function updateNextButtonText() {

  if (!currentRecipe) {
    return;
  }


  if (
    currentStep
    ===
    currentRecipe.steps.length - 1
  ) {

    nextStepBtn.textContent =
      "Finish Recipe ✓";

  } else {

    nextStepBtn.textContent =
      "Next Step →";
  }
}


/* =========================================
   COMPLETE RECIPE
========================================= */

function completeRecipe() {

  modalProgressBar.style.width =
    "100%";


  modalProgressText.textContent =
    "100%";


  modalStepCounter.textContent =
    "Completed";


  nextStepBtn.textContent =
    "Recipe Completed";


  nextStepBtn.disabled = true;


  completeMessage.classList.remove(
    "hidden"
  );


  completeMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });


  if (navigator.vibrate) {

    navigator.vibrate([
      150,
      100,
      150
    ]);
  }
}


/* =========================================
   TIMER
========================================= */

function formatTime(seconds) {

  const minutes =
    Math.floor(seconds / 60);


  const remaining =
    seconds % 60;


  return (
    String(minutes)
      .padStart(2, "0")
    +
    ":"
    +
    String(remaining)
      .padStart(2, "0")
  );
}


function updateTimerDisplay() {

  timerDisplay.textContent =
    formatTime(remainingSeconds);
}


/* =========================================
   START COOKING
========================================= */

startCookingBtn.addEventListener(
  "click",
  function () {

    if (!currentRecipe) {
      return;
    }


    if (timerRunning) {
      return;
    }


    timerRunning = true;


    startCookingBtn.disabled = true;

    startCookingBtn.textContent =
      "⏳ Cooking...";


    timerInterval =
      setInterval(
        function () {

          if (remainingSeconds > 0) {

            remainingSeconds--;

            updateTimerDisplay();

          } else {

            clearInterval(
              timerInterval
            );


            timerRunning = false;


            timerDisplay.textContent =
              "00:00";


            startCookingBtn.textContent =
              "✓ Time Completed";


            alert(
              "🍽️ Cooking time completed!"
            );


            if (navigator.vibrate) {

              navigator.vibrate([
                300,
                150,
                300
              ]);
            }
          }

        },
        1000
      );
  }
);


/* =========================================
   RESET TIMER
========================================= */

resetTimerBtn.addEventListener(
  "click",
  function () {

    if (!currentRecipe) {
      return;
    }


    clearInterval(timerInterval);


    timerRunning = false;


    remainingSeconds =
      currentRecipe.time * 60;


    updateTimerDisplay();


    startCookingBtn.disabled = false;


    startCookingBtn.textContent =
      "▶ Start Cooking";
  }
);


/* =========================================
   FAVORITES
========================================= */

function toggleFavorite(recipeId) {

  const index =
    favorites.indexOf(recipeId);


  if (index === -1) {

    favorites.push(recipeId);

  } else {

    favorites.splice(index, 1);
  }


  saveFavorites();

  updateFavoriteUI();

  filterRecipes();
}


/* =========================================
   UPDATE FAVORITE UI
========================================= */

function updateFavoriteUI() {

  favoriteCount.textContent =
    favorites.length;


  renderFavoritesPanel();


  if (currentRecipe) {

    updateModalFavoriteButton();
  }
}


/* =========================================
   MODAL FAVORITE
========================================= */

function updateModalFavoriteButton() {

  if (!currentRecipe) {
    return;
  }


  const isFavorite =
    favorites.includes(
      currentRecipe.id
    );


  modalFavoriteBtn.textContent =
    isFavorite
      ? "♥"
      : "♡";


  modalFavoriteBtn.style.color =
    isFavorite
      ? "#e53935"
      : "";
}


modalFavoriteBtn.addEventListener(
  "click",
  function () {

    if (currentRecipe) {

      toggleFavorite(
        currentRecipe.id
      );
    }
  }
);


/* =========================================
   FAVORITES PANEL
========================================= */

function renderFavoritesPanel() {

  favoritesList.innerHTML = "";


  if (favorites.length === 0) {

    favoritesList.innerHTML = `
      <div class="no-favorites">

        <div style="font-size: 40px;">
          ♡
        </div>

        <p>
          No favorite recipes yet.
        </p>

      </div>
    `;

    return;
  }


  favorites.forEach(
    function (recipeId) {

      const recipe =
        recipes.find(
          function (item) {

            return (
              item.id === recipeId
            );
          }
        );


      if (!recipe) {
        return;
      }


      const item =
        document.createElement(
          "div"
        );


      item.className =
        "favorite-list-item";


      item.innerHTML = `
        <img
          src="${recipe.image}"
          alt="${recipe.name}"
        >

        <div>

          <h4>
            ${recipe.name}
          </h4>

          <p>
            ${recipe.category}
            •
            ${recipe.time} min
          </p>

        </div>
      `;


      item.addEventListener(
        "click",
        function () {

          closeFavoritesPanel();

          openRecipeModal(
            recipe.id
          );
        }
      );


      favoritesList.appendChild(item);
    }
  );
}


/* =========================================
   OPEN / CLOSE FAVORITES
========================================= */

function openFavoritesPanel() {

  favoritesPanel.classList.add(
    "open"
  );


  panelBackdrop.classList.remove(
    "hidden"
  );
}


function closeFavoritesPanel() {

  favoritesPanel.classList.remove(
    "open"
  );


  panelBackdrop.classList.add(
    "hidden"
  );
}


favoriteNavBtn.addEventListener(
  "click",
  openFavoritesPanel
);


closeFavoritesBtn.addEventListener(
  "click",
  closeFavoritesPanel
);


panelBackdrop.addEventListener(
  "click",
  closeFavoritesPanel
);


/* =========================================
   MOBILE MENU
========================================= */

menuBtn.addEventListener(
  "click",
  function () {

    navLinks.classList.toggle(
      "open"
    );


    menuBtn.textContent =
      navLinks.classList.contains(
        "open"
      )
        ? "✕"
        : "☰";
  }
);


navLinks
  .querySelectorAll("a")
  .forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {

          navLinks.classList.remove(
            "open"
          );


          menuBtn.textContent =
            "☰";
        }
      );
    }
  );


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      if (
        !recipeModal
          .classList
          .contains("hidden")
      ) {

        closeRecipeModal();
      }


      closeFavoritesPanel();


      navLinks.classList.remove(
        "open"
      );


      menuBtn.textContent =
        "☰";
    }
  }
);


/* =========================================
   IMAGE FALLBACK
========================================= */

document.addEventListener(
  "error",
  function (event) {

    if (
      event.target.tagName === "IMG"
    ) {

      event.target.style.background =
        "#f3e8df";


      event.target.alt =
        "Recipe image not found";
    }
  },
  true
);


/* =========================================
   INITIALIZE
========================================= */

function initializeWebsite() {

  renderRecipes(recipes);

  updateFavoriteUI();


  console.log(
    "🍴 TastyBite Recipe Website Loaded Successfully!"
  );
}


initializeWebsite();
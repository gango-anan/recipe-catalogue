/* eslint-disable */

const initialState = { 
  categories: [
    {
      idCategory: '1',
      strCategory: 'Beef',
      strCategoryThumb: 'https:\/\/www.themealdb.com\/images\/category\/beef.png',
      strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    },
    {
      idCategory: '2',
      strCategory: 'Chicken',
      strCategoryThumb:
      'https:\/\/www.themealdb.com\/images\/category\/chicken.png',
      strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
    },
    {
      idCategory: '3',
      strCategory: 'Dessert',
      strCategoryThumb: 'https:\/\/www.themealdb.com\/images\/category\/dessert.png',
      strCategoryDescription: 'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.',
    },
    {
      idCategory: '4',
      strCategory: 'Lamb',
      strCategoryThumb: 'https:\/\/www.themealdb.com\/images\/category\/lamb.png',
      strCategoryDescription: 'Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n',
    },
    {
      idCategory: '5',
      strCategory: 'Miscellaneous',
      strCategoryThumb: 'https:\/\/www.themealdb.com\/images\/category\/miscellaneous.png',
      strCategoryDescription: "General foods that don't fit into another category",
    },
    {
      idCategory: '6',
      strCategory: 'Pasta',
      strCategoryThumb: 'https:\/\/www.themealdb.com\/images\/category\/pasta.png',
      strCategoryDescription: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).',
    },
  ],

  meals: [
        {
          strMeal: 'Baked salmon with fennel & tomatoes',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg',
          idMeal: '52959',
        },
        {
          strMeal: 'Cajun spiced fish tacos',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg',
          idMeal: '52819',
        },
        {
          strMeal: 'Escovitch Fish',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/1520084413.jpg',
          idMeal: '52944',
        },
        {
          strMeal: 'Fish fofos',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/a15wsa1614349126.jpg',
          idMeal: '53043',
        },
        {
          strMeal: 'Fish pie',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/ysxwuq1487323065.jpg',
          idMeal: '52802',
        },
        {
          strMeal: 'Fish Stew with Rouille',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/vptqpw1511798500.jpg',
          idMeal: '52918',
        },
        {
          strMeal: 'Garides Saganaki',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/wuvryu1468232995.jpg',
          idMeal: '52764',
        },
        {
          strMeal: 'Grilled Portuguese sardines',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/lpd4wy1614347943.jpg',
          idMeal: '53041',
        },
        {
          strMeal: 'Honey Teriyaki Salmon',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/xxyupu1468262513.jpg',
          idMeal: '52773',
        },
        {
          strMeal: 'Kedgeree',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/utxqpt1511639216.jpg',
          idMeal: '52887',
        },
        {
          strMeal: 'Kung Po Prawns',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/1525873040.jpg',
          idMeal: '52946',
        },
        {
          strMeal: 'Laksa King Prawn Noodles',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/rvypwy1503069308.jpg',
          idMeal: '52821',
        },
        {
          strMeal: 'Mediterranean Pasta Salad',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/wvqpwt1468339226.jpg',
          idMeal: '52777',
        },
        {
          strMeal: 'Mee goreng mamak',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/xquakq1619787532.jpg',
          idMeal: '53048',
        },
        {
          strMeal: 'Nasi lemak',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/wai9bw1619788844.jpg',
          idMeal: '53051',
        },
        {
          strMeal: 'Portuguese fish stew (Caldeirada de peixe)',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/do7zps1614349775.jpg',
          idMeal: '53045',
        },
        {
          strMeal: 'Recheado Masala Fish',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/uwxusv1487344500.jpg',
          idMeal: '52809',
        },
        {
          strMeal: 'Salmon Avocado Salad',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/1549542994.jpg',
          idMeal: '52960',
        },
        {
          strMeal: 'Salmon Prawn Risotto',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg',
          idMeal: '52823',
        },
        {
          strMeal: 'Saltfish and Ackee',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/vytypy1511883765.jpg',
          idMeal: '52936',
        },
        {
          strMeal: 'Seafood fideu\u00e0',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/wqqvyq1511179730.jpg',
          idMeal: '52836',
        },
        {
          strMeal: 'Shrimp Chow Fun',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/1529445434.jpg',
          idMeal: '52953',
        },
        {
          strMeal: 'Sledz w Oleju (Polish Herrings)',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/7ttta31593350374.jpg',
          idMeal: '53023',
        },
        {
          strMeal: 'Spring onion and prawn empanadas',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/1c5oso1614347493.jpg',
          idMeal: '53040',
        },
        {
          strMeal: 'Three Fish Pie',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg',
          idMeal: '52882',
        },
        {
          strMeal: 'Tuna and Egg Briks',
          strMealThumb: 'https:\/\/www.themealdb.com\/images\/media\/meals\/2dsltq1560461468.jpg',
          idMeal: '52975',
        },
        {
          strMeal: 'Tuna Nicoise',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg',
          idMeal: '52852',
        },
  ]
};

const recipeReducer = (state = initialState, action) => {
  if(action.type === 'ADD_RECIPE') {
    return {
      categories: [...state.categories, action.payload],
      recipes: [...state.recipes, action.payload]
    };
  }

  return state;
};

export default recipeReducer;
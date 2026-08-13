/**
 * Aero Calabria — Complete Interactive & Multilingual Application Code
 */

// Global state
let currentLang = 'sr';
let currentCategory = 'pizza';

// UI Strings for Localization
const translations = {
  sr: {
    nav_about: "O nama",
    nav_menu: "Jelovnik",
    nav_mozzarella: "Mocarela",
    nav_reviews: "Utisci",
    nav_contacts: "Kontakt",
    btn_glovo: "Dostava Glovo",
    hours_short: "Pon–Ned: 08:00 – 23:00",

    hero_reviews_count: "130+ ocjena",
    hero_title: "Ukus tradicije u toplom kamenom ambijentu",
    hero_subtitle: "Prave pice iz peći na drva, sočni specijaliteti sa roštilja i tradicija gostoprimstva u Podgorici.",
    hero_btn_menu: "Pogledaj Jelovnik",
    hero_btn_order: "Naruči Dostavu",
    meta_hours_title: "Otvoreno svakog dana",
    meta_phone_title: "Rezervacije i pozivi",

    about_tag: "Ambijent & Atmosfera",
    about_title: "Odmor od gradske gužve u autentičnom duhu",
    about_p1: "Smešten u mirnom okruženju Ćemovskog polja, Aero Calabria pruža oazu spokoja i tople domaće atmosfere. Masivni drveni detalji, kameni zidovi i diskretno osvetljenje stvaraju savršen ambijent za uživanje u hrani.",
    about_p2: "Od hrskave pice pripremljene po tradiciji do bogatih porcija roštilja i domaćih tjestenina — svaki tanjir sprema se sa pažnjom i poštenjem prema gostu.",
    about_badge_text: "Domaći ukus & toplina",
    feat_1_title: "Peć na drva",
    feat_1_desc: "Sveže pečene pice sa savršenom hrskavom koricom.",
    feat_2_title: "Domaći roštilj",
    feat_2_desc: "Vrhunski mesni specijaliteti sa lokalnim kajmakom.",

    showcase_pizzas: "Sveže pice iz peći na drva",
    showcase_grill: "Sočni roštilj i domaći specijaliteti",

    menu_tag: "Gurmanska ponuda",
    menu_title: "Naš Kompletan Jelovnik",
    menu_subtitle: "Cene su izražene u € (EUR). Knjiga utisaka se nalazi na šanku.",

    cat_pizza: "🍕 Pice",
    cat_alforno: "🍲 Zapečeno \"Al forno\"",
    cat_pancakes: "🥞 Zapečene palačinke",
    cat_grill: "🥩 Roštilj",
    cat_appetizers: "🧀 Predjela",
    cat_soups: "🥄 Na kašiku",
    cat_gourmet_salads: "🥗 Gurmanske salate",
    cat_salads: "🥗 Salate",
    cat_desserts: "🍰 Deserti",
    cat_drinks: "☕ Pića & Kafa",
    cat_juices: "🥤 Sokovi & Voda",
    cat_alcohol: "🍷 Alkohol & Pivo",

    mozzarella_tag: "Zanimljivosti iz kuhinje",
    mozzarella_title: "Priča o mocareli",

    reviews_tag: "Iskustva gostiju",
    reviews_title: "Šta kažu naši posetioci",
    reviews_based_on: "na osnovu 130+ recenzija",

    contacts_tag: "Pronađite nas",
    contacts_title: "Dobrodošli u Aero Calabria",
    contacts_desc: "Posetite nas u Podgorici ili naručite omiljena jela direktno na vašu adresu.",
    contact_addr_title: "Adresa",
    contact_phone_title: "Telefon za informacije",
    contact_hours_title: "Radno vreme",
    contact_hours_val: "Ponedeljak — Nedelja: 08:00 – 23:00",
    contact_glovo_title: "Brza dostava",
    map_hint: "Kliknite ispod za otvaranje tačne lokacije na Google Mapi",
    btn_open_maps: "Otvori u Google Maps",

    m_call: "Pozovi",
    m_menu: "Jelovnik",
    m_glovo: "Glovo",

    footer_sub: "Podgorica, Montenegro",
    pizza_large: "Velika 750g",
    pizza_medium: "Srednja 450g"
  },
  en: {
    nav_about: "About Us",
    nav_menu: "Menu",
    nav_mozzarella: "Mozzarella Story",
    nav_reviews: "Reviews",
    nav_contacts: "Contact",
    btn_glovo: "Glovo Delivery",
    hours_short: "Mon–Sun: 08:00 AM – 11:00 PM",

    hero_reviews_count: "130+ reviews",
    hero_title: "Authentic Flavors in a Warm Stone Atmosphere",
    hero_subtitle: "Traditional wood-fired pizzas, juicy barbecue specialties, and warm Montenegrin hospitality in Podgorica.",
    hero_btn_menu: "View Menu",
    hero_btn_order: "Order Delivery",
    meta_hours_title: "Open Daily",
    meta_phone_title: "Reservations & Calls",

    about_tag: "Ambience & Spirit",
    about_title: "A Peaceful Escape Near the City",
    about_p1: "Located in the serene area of Ćemovsko polje, Aero Calabria offers an oasis of calm and warm authentic atmosphere. Massive wooden furniture, textured stone walls, and soft lighting create the perfect setting for a great meal.",
    about_p2: "From crispy pizzas crafted by tradition to hearty grilled meat platters and pasta — every dish is prepared with passion and genuine care.",
    about_badge_text: "Authentic taste & warmth",
    feat_1_title: "Wood-fired Oven",
    feat_1_desc: "Freshly baked pizzas with a perfect crispy crust.",
    feat_2_title: "Traditional Barbecue",
    feat_2_desc: "Premium grilled meats with local kajmak and spices.",

    showcase_pizzas: "Fresh Wood-fired Pizzas",
    showcase_grill: "Juicy Grilled Specialties",

    menu_tag: "Gourmet Offerings",
    menu_title: "Our Full Menu",
    menu_subtitle: "Prices are in € (EUR). The complaint book is located at the bar.",

    cat_pizza: "🍕 Pizza",
    cat_alforno: "🍲 Baked \"Al forno\"",
    cat_pancakes: "🥞 Baked Pancakes",
    cat_grill: "🥩 Barbecue & Grill",
    cat_appetizers: "🧀 Appetizers",
    cat_soups: "🥄 Soups & Stews",
    cat_gourmet_salads: "🥗 Gourmet Salads",
    cat_salads: "🥗 Fresh Salads",
    cat_desserts: "🍰 Desserts",
    cat_drinks: "☕ Coffee & Warm Drinks",
    cat_juices: "🥤 Juices & Water",
    cat_alcohol: "🍷 Spirits & Beer",

    mozzarella_tag: "Kitchen Chronicles",
    mozzarella_title: "The Story of Mozzarella",

    reviews_tag: "Guest Feedback",
    reviews_title: "What Our Guests Say",
    reviews_based_on: "based on 130+ reviews",

    contacts_tag: "Find Us",
    contacts_title: "Welcome to Aero Calabria",
    contacts_desc: "Visit us in Podgorica or order your favorite dishes directly to your doorstep.",
    contact_addr_title: "Address",
    contact_phone_title: "Phone & Info",
    contact_hours_title: "Opening Hours",
    contact_hours_val: "Monday — Sunday: 08:00 AM – 11:00 PM",
    contact_glovo_title: "Fast Delivery",
    map_hint: "Click below to view exact location on Google Maps",
    btn_open_maps: "Open Google Maps",

    m_call: "Call",
    m_menu: "Menu",
    m_glovo: "Glovo",

    footer_sub: "Podgorica, Montenegro",
    pizza_large: "Large 750g",
    pizza_medium: "Medium 450g"
  },
  ru: {
    nav_about: "О нас",
    nav_menu: "Меню",
    nav_mozzarella: "О моцарелле",
    nav_reviews: "Отзывы",
    nav_contacts: "Контакты",
    btn_glovo: "Доставка Glovo",
    hours_short: "Пн–Вс: 08:00 – 23:00",

    hero_reviews_count: "130+ отзывов",
    hero_title: "Вкус традиции в уютной каменной атмосфере",
    hero_subtitle: "Настоящая пицца из дровяной печи, сочные блюда на гриле и искреннее черногорское гостеприимство.",
    hero_btn_menu: "Смотреть меню",
    hero_btn_order: "Заказать доставку",
    meta_hours_title: "Открыто ежедневно",
    meta_phone_title: "Бронирование и звонки",

    about_tag: "Атмосфера и уют",
    about_title: "Уютный уголок вдали от городской суеты",
    about_p1: "Расположенный в тихом районе Чемовско поле, ресторан Aero Calabria предлагает оазис спокойствия и душевной атмосферы. Массивная деревянная мебель, древняя каменная кладка и мягкий свет создают идеальный уют.",
    about_p2: "От хрустящей пиццы из печи до щедрых порций традиционного гриля и пасты — каждое блюдо готовится с любовью и вниманием.",
    about_badge_text: "Домашний вкус и тепло",
    feat_1_title: "Дровяная печь",
    feat_1_desc: "Свежевыпеченная пицца с румяной и хрустящей корочкой.",
    feat_2_title: "Блюда на гриле",
    feat_2_desc: "Сочное мясо с каймаком и традиционными соусами.",

    showcase_pizzas: "Пицца из дровяной печи",
    showcase_grill: "Сочный гриль и домашние блюда",

    menu_tag: "Гастрономия",
    menu_title: "Наше полное меню",
    menu_subtitle: "Цены указаны в € (EUR). Книга отзывов находится на барной стойке.",

    cat_pizza: "🍕 Пицца",
    cat_alforno: "🍲 Запечённое \"Al forno\"",
    cat_pancakes: "🥞 Запечённые блинчики",
    cat_grill: "🥩 Блюда на гриле",
    cat_appetizers: "🧀 Закуски",
    cat_soups: "🥄 Горячие блюда «на ложку»",
    cat_gourmet_salads: "🥗 Гурманские салаты",
    cat_salads: "🥗 Свежие салаты",
    cat_desserts: "🍰 Десерты",
    cat_drinks: "☕ Кофе и горячие напитки",
    cat_juices: "🥤 Соки и вода",
    cat_alcohol: "🍷 Алкоголь и пиво",

    mozzarella_tag: "Кулинарная история",
    mozzarella_title: "История моцареллы",

    reviews_tag: "Мнения гостей",
    reviews_title: "Что говорят наши посетители",
    reviews_based_on: "на основе 130+ отзывов",

    contacts_tag: "Как нас найти",
    contacts_title: "Добро пожаловать в Aero Calabria",
    contacts_desc: "Приезжайте к нам в Подгорице или заказывайте любимые блюда с доставкой.",
    contact_addr_title: "Адрес",
    contact_phone_title: "Телефон",
    contact_hours_title: "Часы работы",
    contact_hours_val: "Понедельник — Воскресенье: 08:00 – 23:00",
    contact_glovo_title: "Быстрая доставка",
    map_hint: "Нажмите ниже, чтобы открыть точно местоположение на Google Картах",
    btn_open_maps: "Открыть в Google Maps",

    m_call: "Позвонить",
    m_menu: "Меню",
    m_glovo: "Glovo",

    footer_sub: "Подгорица, Черногория",
    pizza_large: "Большая 750г",
    pizza_medium: "Средняя 450г"
  }
};

// Mozzarella Feature Story Data
const mozzarellaStoryData = {
  sr: [
    "Mocarela, kako pišu Italijani, veoma je ukusan, hranljiv i kaloričan sir. Bogata je proteinima koji gode mišićima, nezasićenim masnim kiselinama koje štite srce, kao i vitaminom D i kalcijumom za jačanje kostiju.",
    "Legende kažu da u Italiji postoji odvajkada. Još u starom Rimu, u 1. veku nove ere, pripremali su sličan sir od ovčijeg mleka. Zahvaljujući mocareli, u istoriju su ušli i monasi samostana San Lorenco di Kapua iz 3. veka.",
    "Svakoj gladnoj duši koja bi pokucala na njihova vrata odsecali su i davali komad sira i hleba. Sir se tada skraćeno zvao „mozza“, od italijanske reči „mozzare“ što znači — odseći. Iako ima dugu istoriju, najkvalitetniji tip počeo je da se pravi u 16. veku."
  ],
  en: [
    "Mozzarella, as written by Italians, is a very tasty, nutritious, and calorie-rich cheese. Rich in proteins that benefit muscles, unsaturated fatty acids that protect the heart, and vitamin D and calcium to strengthen bones.",
    "Legends say that it has been in Italy forever. Even in ancient Rome, in the 1st century AD, they prepared a similar cheese from sheep's milk. Monks of the monastery of San Lorenzo di Capua in the 3rd century also entered history thanks to mozzarella.",
    "Every hungry soul who knocked on their door was given a freshly cut piece of cheese and bread. The cheese was then called “mozza”, coming from the Italian word “mozzare”, which means to cut. Although it has a long history, the highest quality type began to be made in the 16th century."
  ],
  ru: [
    "Моцарелла, как пишут итальянцы, — это очень вкусный, питательный и калорийный сыр. Он богат белком для мышц, ненасыщенными жирными кислотами для защиты сердца и сосудов, а также витамином D и кальцием для укрепления костей.",
    "Легенды гласят, что в Италии этот сыр делали всегда. Еще в Древнем Риме в I веке нашей эры готовили похожий сыр из овечьего молока. А в III веке благодаря моцарелле в историю вошли монахи монастыря Сан-Лоренцо-ди-Капуа.",
    "Каждому голодному страннику, постучавшемуся в их двери, отрезали по куску сыра и хлеба. Сыр тогда коротко называли «mozza», от итальянского глагола «mozzare» — отрезать. И хотя история сыра уходит в древность, самый ценимый вид моцареллы начали производить в XVI веке."
  ]
};

// Reviews Data
const reviewsData = [
  {
    author: "Kateryna Vasylchenko",
    stars: "★★★★★",
    sr: "Bilo je tako spontano, došli smo iz Budve samo da probamo picu u prelepom ambijentu i našli smo tačno ono što smo tražili! Preukusno, neverovatan pogled! Hvala na gostoprimstvu!",
    en: "It was so spontaneous, we come from Budva just to try pizza in beautiful place, and found what we were looking for!!!!! So tasty, incredibly nice view!!!! Thank you for hospitality!!!!!",
    ru: "Всё получилось так спонтанно, мы приехали из Будвы специально попробовать пиццу в красивом месте и нашли именно то, что искали! Невероятно вкусно, потрясающий вид! Спасибо за гостеприимство!"
  },
  {
    author: "Bojana Malinovska",
    stars: "★★★★☆",
    sr: "Nije bilo gužve, što je učinilo celo iskustvo veoma prijatnim. Iako je malo van grada, imate osećaj kao da ste miljama daleko od Podgorice — što je za mene veliki plus. Mirna atmosfera je savršen beg od gradske gužve.",
    en: "There wasn’t too much crowd, which made the whole experience very pleasant. Although it’s a bit outside the city, it feels like you’re miles away from Podgorica — and for me, that’s definitely a plus. The peaceful atmosphere really makes it a perfect escape...",
    ru: "Людей было немного, что сделало визит очень приятным. Хотя ресторан находится немного за городом, кажется, будто ты вдали от городской суеты — для меня это огромный плюс. Тихая атмосфера — идеальное место для отдыха."
  },
  {
    author: "kyle savage",
    stars: "★★★★★",
    sr: "Ovo mesto je fantastično! Hrana je bila ukusna (probali smo pice i dimljenu kobasicu), cene veoma razumne, Patrick je bio izuzetno ljubazan sa odličnim engleskim i pružio nam savršenu uslugu. Hvala na toploj dobrodošlici!",
    en: "This place is amazing! Food was delicious (had pizza's and smoked sausage) very reasonable prices, Patrick was extremely nice, very chatty with amazing English and gave perfect service throughout... warm welcome to Montenegro!",
    ru: "Потрясающее место! Еда очень вкусная (брали пиццу и копчёные колбаски), цены крайне разумные, Патрик был невероятно вежлив, отлично говорит по-английски и обеспечил великолепный сервис!"
  },
  {
    author: "Isabel",
    stars: "★★★★★",
    sr: "Stigli smo u Crnu Goru kamprom... Dobili smo najtopliju dobrodošlicu i nekij od najboljih obroka u poslednje vreme! Pice su sveže i neverovatne, a dimljena kobasica sa krompirom je bila čisto oduševljenje. Najbolje stajalište na našem putu!",
    en: "Came into Montenegro in our campervan... we have had the warmest welcome and some of the best food we have had in ages.. pizzas are fresh and just incredible and the smoked sausage and potatoes were a taste sensation!",
    ru: "Приехали в Черногорию на автодоме... Получили самый тёплый приём и вкуснейшую еду за долгое время! Пицца свежайшая и невероятная, а копчёная колбаса с картофелем — просто восторг!"
  },
  {
    author: "Halcyon Sailor",
    stars: "★★★★★",
    sr: "Parkirao sam se ovde na 2 noći tokom putovanja. Srdačna dobrodošlica, a pica koju sam pojeo bila je ubedljivo najbolja. Cene više nego korektne, osoblje prijateljski nastrojeno i odlična kafa.",
    en: "I parked here for 2 nights on my travels. Very warm welcome and the pizza I had was the best by far, prices were very fair as well. Friendly staff and great coffee!",
    ru: "Останавливался здесь на 2 ночи во время путешествия. Очень тёплый приём, а пицца — лучшая из всех! Цены отличные, дружелюбный персонал и прекрасный кофе."
  }
];

// Comprehensive Menu Database
const menuData = {
  pizza: [
    {
      title: "Margherita",
      desc: {
        sr: "paradajz, sir, origano",
        en: "tomato, cheese, oregano",
        ru: "томатный соус, сыр, орегано"
      },
      priceL: "6.90", priceM: "5.00"
    },
    {
      title: "Napoletana",
      desc: {
        sr: "paradajz, sir, origano, šunka",
        en: "tomato, cheese, oregano, ham",
        ru: "томатный соус, сыр, орегано, ветчина"
      },
      priceL: "7.50", priceM: "5.50"
    },
    {
      title: "Capricciosa",
      desc: {
        sr: "paradajz, sir, origano, šunka, pečurke",
        en: "tomato, cheese, oregano, ham, mushrooms",
        ru: "томат, сыр, орегано, ветчина, шампиньоны"
      },
      priceL: "7.80", priceM: "5.80"
    },
    {
      title: "Quattro formaggi",
      desc: {
        sr: "paradajz, četiri vrste sira",
        en: "tomato, four kinds of cheese",
        ru: "томатный соус, 4 вида сыра"
      },
      priceL: "7.90", priceM: "5.90"
    },
    {
      title: "Quattro stagioni",
      desc: {
        sr: "paradajz, sir, origano, šunka, tuna, pečurke, pavlaka",
        en: "tomato, cheese, oregano, ham, tuna, mushrooms, sour cream",
        ru: "томат, сыр, орегано, ветчина, тунец, грибы, сметана"
      },
      priceL: "7.90", priceM: "5.90"
    },
    {
      title: "Calzone",
      desc: {
        sr: "paradajz, sir, šunka, pečurke (preklopljena)",
        en: "tomato, cheese, ham, mushrooms (folded)",
        ru: "томат, сыр, ветчина, грибы (закрытая пицца)"
      },
      priceL: "7.70", priceM: "5.70"
    },
    {
      title: "Calabrese",
      desc: {
        sr: "paradajz, 2 vrste sira, origano, njeguški pršut, pečurke, masline",
        en: "tomato, 2 types of cheese, oregano, montenegrin prosciutto, mushrooms, olives",
        ru: "томат, 2 вида сыра, негушский пршут, грибы, оливки"
      },
      priceL: "8.00", priceM: "6.00"
    },
    {
      title: "Diavola",
      desc: {
        sr: "paradajz, sir, kulen, ljuti sos, feferoni, pečurke",
        en: "tomato, cheese, pepperoni, chili sauce, pepperoni, mushrooms",
        ru: "томат, сыр, пикантные пепперони, острый соус, грибы"
      },
      priceL: "7.90", priceM: "5.90"
    },
    {
      title: "Frutti di mare",
      desc: {
        sr: "paradajz, sir, origano, morski plodovi, pečurke, masline",
        en: "tomato, cheese, oregano, seafood, mushrooms, olives",
        ru: "томат, сыр, морепродукты, грибы, оливки"
      },
      priceL: "8.00", priceM: "6.00"
    },
    {
      title: "Mozzarella",
      desc: {
        sr: "paradajz, mocarela, rukola",
        en: "tomato, mozzarella, rocket salad",
        ru: "томат, свежая моцарелла, рукола"
      },
      priceL: "7.90", priceM: "5.90"
    },
    {
      title: "Sandrina",
      desc: {
        sr: "paradajz, 2 vrste sira, slanina, pečurke",
        en: "tomato, 2 types of cheese, bacon, mushrooms",
        ru: "томат, 2 вида сыра, бекон, грибы"
      },
      priceL: "7.80", priceM: "5.80"
    },
    {
      title: "Funggi",
      desc: {
        sr: "paradajz, sir, pečurke, origano",
        en: "tomato, cheese, mushrooms, oregano",
        ru: "томатный соус, сыр, грибы, орегано"
      },
      priceL: "7.50", priceM: "5.50"
    },
    {
      title: "Aero pizza folded",
      desc: {
        sr: "paradajz, čeri paradajz, sir, piletina",
        en: "tomato, cherry tomatoes, cheese, chicken fillet",
        ru: "томат, черри, сыр, куриное филе (закрытая)"
      },
      priceL: "8.00", priceM: "6.00"
    },
    {
      title: "Nutella pizza",
      desc: {
        sr: "nutela, orasi, šlag",
        en: "nutella, walnuts, whipped cream",
        ru: "нутелла, грецкие орехи, взбитые сливки"
      },
      priceL: "7.80", priceM: "5.60"
    }
  ],
  alforno: [
    {
      title: "Pasta 'Pasticciata'",
      desc: {
        sr: "pene, mleveno juneće meso, sir",
        en: "penne, minced beef meat, cheese",
        ru: "пенне, говяжий фарш, запечённый сыр"
      },
      price: "6.20", gram: "400g"
    },
    {
      title: "Pasta 'Vegetariana'",
      desc: {
        sr: "pene, povrće, sir",
        en: "penne, vegetables, cheese",
        ru: "пенне, овощи, запечённый сыр"
      },
      price: "5.90", gram: "400g"
    },
    {
      title: "Chicken pasta",
      desc: {
        sr: "pene, piletina, pečurke, sir",
        en: "penne, chicken, mushrooms, cheese",
        ru: "пенне, курица, грибы, сыр"
      },
      price: "6.50", gram: "400g"
    },
    {
      title: "Aero pasta",
      desc: {
        sr: "tuna, crveni sos, listići parmezana",
        en: "tuna, red sauce, parmesan leaves",
        ru: "тунец, томатный соус, токие ломтики пармезана"
      },
      price: "6.50", gram: "400g"
    },
    {
      title: "Pasta Carbonara",
      desc: {
        sr: "pene, sos, slanina, sir",
        en: "penne, sauce, bacon, cheese",
        ru: "пенне, сливочный соус, бекон, сыр"
      },
      price: "6.40", gram: "400g"
    },
    {
      title: "Pasta 4 vrste sira",
      desc: {
        sr: "pene, bogati sos od 4 vrste sira",
        en: "penne, 4 types of cheese sauce",
        ru: "пенне, 4 вида сыра"
      },
      price: "6.60", gram: "400g"
    },
    {
      title: "Zapečena Piletina",
      desc: {
        sr: "pileći file, povrće, sir",
        en: "chicken fillet, vegetables, cheese",
        ru: "куриное филе, овощи, запечённый сыр"
      },
      price: "8.20", gram: "400g"
    },
    {
      title: "Zapečeni Biftek",
      desc: {
        sr: "biftek, povrće, sir",
        en: "beefsteak, vegetables, cheese",
        ru: "бифштекс, овощи, сыр"
      },
      price: "19.00", gram: "400g"
    },
    {
      title: "Svinjska rebra",
      desc: {
        sr: "svinjska rebra, krompir, kajmak",
        en: "pork ribs, potato, kajmak",
        ru: "свиные рёбрышки, картофель, каймак"
      },
      price: "9.30", gram: "400g"
    },
    {
      title: "Kobasice al forno",
      desc: {
        sr: "dimljena kobasica, krompir",
        en: "smoked sausage, potato",
        ru: "копчёные колбаски, картофель"
      },
      price: "8.20", gram: "400g"
    }
  ],
  pancakes: [
    {
      title: "Palačinke sa šunkom",
      desc: { sr: "sir, prešana šunka, sos", en: "cheese, pressed ham, sauce", ru: "сыр, ветчина, соус" },
      price: "4.00"
    },
    {
      title: "Palačinke sa kulenom",
      desc: { sr: "sir, kulen, sos", en: "cheese, pepperoni, sauce", ru: "сыр, пикантные пепперони, соус" },
      price: "4.50"
    },
    {
      title: "Palačinke sa pršutom",
      desc: { sr: "sir, Njeguški pršut, sos", en: "cheese, Njegusi prosciutto, sauce", ru: "сыр, негушский пршут, соус" },
      price: "4.60"
    },
    {
      title: "Palačinke sa piletinom",
      desc: { sr: "piletina, pečurke, parmezan, sos", en: "chicken, mushrooms, parmesan, sauce", ru: "курица, грибы, пармезан, соус" },
      price: "4.80"
    }
  ],
  grill: [
    { title: "Pileći file", desc: { sr: "pileći file na žaru", en: "grilled chicken fillet", ru: "куриное филе на гриле" }, price: "6.90", gram: "300-350g" },
    { title: "Pileći medaljoni sa pečurkama", desc: { sr: "piletina u sosu od pečuraka", en: "chicken medallions with mushroom sauce", ru: "куриные медальоны с грибным соусом" }, price: "7.20", gram: "300-350g" },
    { title: "Piletina u gorgonzola sosu", desc: { sr: "pileći file u kremoznom sosu od gorgonzole", en: "chicken fillet in gorgonzola sauce", ru: "куриное филе в соусе горгонзола" }, price: "7.40", gram: "300-350g" },
    { title: "Pileći ražnjići", desc: { sr: "sočni ražnjići sa roštilja", en: "grilled chicken brochettes", ru: "куриный шашлычок" }, price: "7.00", gram: "300-350g" },
    { title: "Pileći batak", desc: { sr: "sočni batak na žaru", en: "grilled chicken leg", ru: "куриное бедро на гриле" }, price: "6.90", gram: "300-350g" },
    { title: "Punjen pileći batak", desc: { sr: "punjen šunkom i sirom", en: "stuffed chicken leg with ham and cheese", ru: "фаршированное бедро ветчиной и сыром" }, price: "7.50", gram: "300-350g" },
    { title: "Ćevapi (juneći)", desc: { sr: "tradicionalni juneći ćevapi", en: "beef kebabs", ru: "традиционные чевапи из говядины" }, price: "7.00", gram: "300-350g" },
    { title: "Svinjski krmenadle", desc: { sr: "sočni krmenadli sa roštilja", en: "grilled pork chops", ru: "свиные отбивные на гриле" }, price: "9.00", gram: "400g" },
    { title: "Pljeskavica", desc: { sr: "tradicijalni juneći burger sa grila", en: "traditional grilled meat patty", ru: "традиционная плескавица" }, price: "6.90", gram: "300-350g" },
    { title: "Punjena pljeskavica", desc: { sr: "punjena šunkom i sirom", en: "stuffed with ham and cheese", ru: "плескавица с начинкой из ветчины и сыра" }, price: "7.20", gram: "300-350g" },
    { title: "Gurmanska pljeskavica", desc: { sr: "slanina, sir i tucana ljuta paprika unutra", en: "bacon, cheese and chilli inside", ru: "гурманская с беконом, сыром и чили" }, price: "7.00", gram: "300-350g" },
    { title: "Uštipci", desc: { sr: "roštiljski uštipci sa sirom", en: "grilled meatballs with cheese", ru: "сербские уштипцы с сыром" }, price: "7.00", gram: "300-350g" },
    { title: "Juneća kobasica", desc: { sr: "sočna roštiljska kobasica", en: "grill beef sausage", ru: "говяжья колбаска на гриле" }, price: "7.30", gram: "300-350g" },
    { title: "Dimljena kobasica", desc: { sr: "aromatična dimljena kobasica", en: "smoked sausage", ru: "копчёная колбаска на гриле" }, price: "7.30", gram: "300-350g" },
    { title: "Punje ražnjići", desc: { sr: "punjeni sir i šunka", en: "stuffed skewers with ham and cheese", ru: "шашлычки с начинкой из сыра и ветчины" }, price: "7.70", gram: "300-350g" },
    { title: "Biftek", desc: { sr: "vrhunski juneci biftek", en: "prime beefsteak", ru: "сочный говяжий бифштекс" }, price: "19.00", gram: "300-350g" },
    { title: "Biftek sa pečurkama", desc: { sr: "biftek u sosu od pečuraka", en: "beefsteak with mushrooms", ru: "бифштекс с грибным соусом" }, price: "19.50", gram: "300-350g" },
    { title: "Velji Pjat (Meso na mešano)", desc: { sr: "razni roštiljski specijaliteti za više osoba", en: "various grilled meat platter", ru: "большое мясное ассорти на гриле" }, price: "15.90", gram: "1000g!" },
    { title: "Povrće na žaru", desc: { sr: "sezonsko povrće sa roštilja", en: "grilled seasonal vegetables", ru: "овощи на гриле" }, price: "4.50" },
    { title: "Pečurke na žaru", desc: { sr: "sveži šampinjoni na žaru", en: "grilled mushrooms", ru: "грибы на гриле" }, price: "4.20" },
    { title: "Aero piletina", desc: { sr: "specijalitet kuće sa piletinom", en: "house specialty chicken", ru: "фирменная курица Aero" }, price: "7.50" }
  ],
  appetizers: [
    { title: "Njeguški pršut", desc: { sr: "autentični crnogorski pršut", en: "authentic Montenegrin prosciutto", ru: "негушский пршут" }, price: "4.50", gram: "150g" },
    { title: "Goveđi pršut", desc: { sr: "sušeno goveđe meso", en: "beef prosciutto", ru: "говяжий пршут" }, price: "5.00", gram: "150g" },
    { title: "Njeguški sir", desc: { sr: "tradicionalni punomasni sir", en: "traditional Montenegrin cheese", ru: "негушский сыр" }, price: "4.00", gram: "150g" },
    { title: "Selekcija sira", desc: { sr: "odabrani domaći sirevi", en: "cheese selection", ru: "сырное ассорти" }, price: "7.50", gram: "250g" },
    { title: "Masline", desc: { sr: "porcija odabranih maslina", en: "olives portion", ru: "оливки" }, price: "2.50", gram: "100g" },
    { title: "Crnogorski predjelo", desc: { sr: "masline, sir, njeguški pršut", en: "olives, cheese, Njegushi prosciutto", ru: "черногорское преддверие (оливки, сыр, пршут)" }, price: "8.50", gram: "250g" }
  ],
  soups: [
    { title: "Čorba", desc: { sr: "sveža domaća kuvana čorba", en: "fresh homemade broth", ru: "домашний суп / шорба" }, price: "3.00" },
    { title: "Dnevno jelo", desc: { sr: "domaće jelo dana po receptu šefa", en: "daily cooked dish", ru: "дневное домашнее блюдо" }, price: "5.20" }
  ],
  gourmet_salads: [
    { title: "Urnebes salata", desc: { sr: "pikirani sir sa paprikom", en: "spicy cheese with paprika", ru: "урнебес (острый сырный салат)" }, price: "3.60", gram: "200g" },
    { title: "Tuna-kukuruz salata", desc: { sr: "tuna, kukuruz šećerac, dresing", en: "tuna, sweet corn, dressing", ru: "салат с тунцом и кукурузой" }, price: "4.00", gram: "200g" },
    { title: "Goveđa salata", desc: { sr: "komadići govedine sa povrćem", en: "beef salad with fresh ingredients", ru: "салат с говядиной" }, price: "4.20", gram: "200g" },
    { title: "Njeguška salata", desc: { sr: "sa pršutom i sirom", en: "with local prosciutto and cheese", ru: "салат с пршутом и сыром" }, price: "4.20", gram: "200g" },
    { title: "Salata mix", desc: { sr: "mešano povrće sa dodacima", en: "fresh mix salad", ru: "салатный микс" }, price: "5.20", gram: "250g" }
  ],
  salads: [
    { title: "Grčka salata", desc: { sr: "paradajz, krastavac, feta, masline", en: "tomato, cucumber, feta, olives", ru: "греческий салат" }, price: "4.60", gram: "150g" },
    { title: "Tuna Bašta", desc: { sr: "sveža salata sa tunjevinom", en: "Tuna Garden salad", ru: "салат с тунцом и зеленью" }, price: "4.90", gram: "150g" },
    { title: "Sezonska salata", desc: { sr: "sveže sezonsko povrće", en: "seasonal salad", ru: "сезонный салат" }, price: "2.30", gram: "150g" },
    { title: "Cezar salata", desc: { sr: "piletina, zelena salata, krutoni, dresing", en: "chicken, lettuce, croutons, dressing", ru: "салат Цезарь" }, price: "5.90", gram: "150g" },
    { title: "Vitamin salata", desc: { sr: "rendana šargarepa, cvekla, kupus", en: "carrot, beetroot, cabbage mix", ru: "витаминный салат" }, price: "4.00", gram: "150g" },
    { title: "Biftek salata", desc: { sr: "sočni trakice bifteka na svežoj salati", en: "beefsteak strips on fresh salad", ru: "салат с ломтиками бифштекса" }, price: "8.20", gram: "250g" },
    { title: "Rukola salata", desc: { sr: "svježa rukola, parmezan, maslinovo ulje", en: "fresh rocket salad, parmesan, olive oil", ru: "салат из руколы" }, price: "4.00", gram: "100g" },
    { title: "Šopska salata", desc: { sr: "paradajz, krastavac, luk, ribani sir", en: "tomato, cucumber, onion, grated cheese", ru: "шопский салат" }, price: "2.90", gram: "200g" }
  ],
  desserts: [
    { title: "Žito sa šlagom", desc: { sr: "tradicionalna pšenica sa orasima i šlagom", en: "sweet wheat berry with whipped cream", ru: "десерт из пшеницы с орехами и сливками" }, price: "2.70", gram: "300g" },
    { title: "Slatke palačinke", desc: { sr: "eurokrem, nutela ili džem", en: "pancakes with chocolate or jam", ru: "сладкие блинчики" }, price: "3.00", gram: "200g" },
    { title: "Kolač kuće", desc: { sr: "sveži dnevni kolač", en: "house cake slice", ru: "домашний торт" }, price: "2.50", gram: "150g" },
    { title: "Kugla sladoleda", desc: { sr: "razni ukusi", en: "ice cream scoop", ru: "шарик мороженого" }, price: "1.10", gram: "50g" }
  ],
  drinks: [
    { title: "Espresso kafa", price: "1.20" },
    { title: "Dojč kafa", price: "1.60" },
    { title: "Kapućino", price: "1.60" },
    { title: "Kafa sa šlagom", price: "1.60" },
    { title: "Nescafe", price: "1.70" },
    { title: "Nescafe sa šlagom", price: "1.80" },
    { title: "Mleko 0.2 l", price: "1.20" },
    { title: "Čokoladno mleko 0.2 l", price: "1.20" },
    { title: "Čaj", price: "1.60" }
  ],
  juices: [
    { title: "Voćni sok 0.20 l", price: "2.30" },
    { title: "Cedevita 0.20 l", price: "1.90" },
    { title: "Ice Tea 0.25 l", price: "2.20" },
    { title: "Coca Cola 0.33 l", price: "2.30" },
    { title: "Bitter Lemon 0.33 l", price: "2.30" },
    { title: "Orangina 0.25 l", price: "2.90" },
    { title: "Limunada 0.25 l", price: "2.20" },
    { title: "Mineralna voda (gazirana) 0.20 l", price: "1.50" },
    { title: "Mineralna voda (negazirana) 0.25 l", price: "1.50" }
  ],
  alcohol: [
    { title: "Nikšićko točeno 0.25 l", price: "2.00" },
    { title: "Nikšićko točeno 0.33 l", price: "2.30" },
    { title: "Nikšićko točeno 0.50 l", price: "3.30" },
    { title: "Nikšićko flaširano 0.33 l", price: "2.70" },
    { title: "Heineken 0.25 l", price: "2.80" },
    { title: "Hoegaarden točeno 0.25 l", price: "2.20" },
    { title: "Jameson 0.03 l", price: "2.50" },
    { title: "Jack Daniel's 0.03 l", price: "3.50" },
    { title: "Chivas Regal 12 y.o. 0.03 l", price: "3.50" },
    { title: "Loza Rajković 0.03 l", price: "2.00" },
    { title: "Pelinkovac 0.03 l", price: "2.00" },
    { title: "Old Pilot's Gin 0.03 l", price: "4.00" }
  ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  renderMenu();
  renderMozzarellaStory();
  renderReviews();
  initScrollAnimations();
});

// Switch Language
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // Toggle active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Translate static UI elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Re-render dynamic sections
  renderMenu();
  renderMozzarellaStory();
  renderReviews();
}

function initLanguage() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setLanguage(e.target.dataset.lang);
    });
  });
}

// Mobile Navigation Toggle
function initNavigation() {
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Tabs for Menu Category
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderMenu();
    });
  });
}

// Render Categorized Menu Items
function renderMenu() {
  const container = document.getElementById('menu-container');
  if (!container) return;

  const items = menuData[currentCategory] || [];
  const t = translations[currentLang];

  if (items.length === 0) {
    container.innerHTML = `<p class="text-center" style="grid-column: 1/-1;">No items in this category.</p>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const descText = item.desc ? (item.desc[currentLang] || item.desc.sr || '') : '';
    
    // Check if item is pizza with dual pricing
    if (item.priceL && item.priceM) {
      return `
        <div class="menu-item">
          <div>
            <div class="menu-item__header">
              <h3 class="menu-item__title">${item.title}</h3>
              <div class="menu-item__price menu-item__price--multi">
                <span>${t.pizza_large}: <strong>€${item.priceL}</strong></span>
                <span>${t.pizza_medium}: <strong>€${item.priceM}</strong></span>
              </div>
            </div>
            ${descText ? `<p class="menu-item__desc">${descText}</p>` : ''}
          </div>
        </div>
      `;
    }

    return `
      <div class="menu-item">
        <div>
          <div class="menu-item__header">
            <h3 class="menu-item__title">${item.title}</h3>
            <span class="menu-item__price">€${item.price}</span>
          </div>
          ${descText ? `<p class="menu-item__desc">${descText}</p>` : ''}
          ${item.gram ? `<span class="menu-item__gram">${item.gram}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Render Mozzarella Story
function renderMozzarellaStory() {
  const container = document.getElementById('mozzarella-text');
  if (!container) return;

  const paragraphs = mozzarellaStoryData[currentLang] || mozzarellaStoryData.sr;
  container.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
}

// Render Reviews
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;

  container.innerHTML = reviewsData.map(rev => {
    const reviewText = rev[currentLang] || rev.sr;
    return `
      <div class="review-card">
        <div class="review-card__header">
          <span class="review-card__author">${rev.author}</span>
          <span class="review-card__stars">${rev.stars}</span>
        </div>
        <p class="review-card__text">"${reviewText}"</p>
      </div>
    `;
  }).join('');
}

// Scroll IntersectionObserver for animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}
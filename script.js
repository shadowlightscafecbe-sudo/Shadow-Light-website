/* ============================================
   SHADOW LIGHTS CAFE — script.js
   Vanilla JS. Clean. Beginner-readable.
   ============================================ */

'use strict';

/* ===== MENU DATA — Full menu from Shadow Lights Cafe ===== */
const MENU_ITEMS = [

  // ── SIGNATURES (Coimbatore Firsts) ──────────────────────────────
  { name: 'Sealed Burger with Crispy Chicken', emoji: '🍔', desc: 'CBE\'s first sealed burger — crispy chicken patty pressed and sealed to lock in smoky, juicy flavour.', price: '₹200', cat: 'signatures', badge: 'first' },
  { name: 'Sealed Burger with Pulled Chicken', emoji: '🍔', desc: 'Tender pulled chicken inside our signature sealed burger. A Coimbatore exclusive.', price: '₹200', cat: 'signatures', badge: 'first' },
  { name: 'Sealed Burger with Grilled Chicken', emoji: '🍔', desc: 'Flame-grilled chicken in our iconic sealed burger format. First in CBE.', price: '₹220', cat: 'signatures', badge: 'first' },
  { name: 'Bubble Waffle — Belgian Milk Chocolate', emoji: '🧇', desc: 'CBE\'s first bubble waffle! Crispy Hong Kong-style egg waffle with Belgian milk chocolate.', price: '₹220', cat: 'signatures', badge: 'first' },
  { name: 'Bubble Waffle — Triple Chocolate', emoji: '🧇', desc: 'Three layers of chocolate bliss in our signature bubble waffle. Add ice cream for ₹40 more.', price: '₹250', cat: 'signatures', badge: 'first' },
  { name: 'Bubble Waffle — Hazelnut', emoji: '🧇', desc: 'Bubble waffle loaded with rich hazelnut spread. A crowd favourite. Add ice cream for ₹40.', price: '₹250', cat: 'signatures', badge: 'first' },
  { name: 'Ice Cream Mini Pops Platter', emoji: '🍦', desc: 'CBE\'s first ice pops — five delightful varieties on one platter. Perfect for sharing!', price: '₹100', cat: 'signatures', badge: 'first' },
  { name: 'SL Special Chicken Pizza', emoji: '🍕', desc: 'Shadow Lights\' very own special chicken pizza — the most popular pizza on our menu.', price: '₹280', cat: 'signatures', badge: 'popular' },
  { name: 'Chicken Pearls', emoji: '🍗', desc: 'Our special fried chicken in bite-sized pearl form. Crispy outside, juicy inside.', price: '₹190', cat: 'signatures', badge: 'popular' },

  // ── BITES ───────────────────────────────────────────────────────
  { name: 'Smilyes',              emoji: '😊', desc: 'Fun smiley-face potato snacks — crispy and perfect for all ages. Veg.', price: '₹100', cat: 'bites', badge: '' },
  { name: 'Veg Cheese Balls',     emoji: '🧀', desc: 'Golden fried cheese balls stuffed with a melty veg filling. Veg.', price: '₹100', cat: 'bites', badge: '' },
  { name: 'Veg Poppers',          emoji: '🟡', desc: 'Crunchy bite-sized veg poppers — great as a snack or starter. Veg.', price: '₹100', cat: 'bites', badge: '' },
  { name: 'Chicken Kieves',       emoji: '🍗', desc: 'Juicy chicken filled with herbed butter, fried to golden perfection.', price: '₹140', cat: 'bites', badge: '' },
  { name: 'Chicken Nuggets',      emoji: '🍗', desc: 'Classic crispy chicken nuggets — a timeless favourite.', price: '₹140', cat: 'bites', badge: '' },

  // ── FRIED CHICKEN ───────────────────────────────────────────────
  { name: 'Peri Peri Chicken',    emoji: '🌶️', desc: 'Fiery peri-peri marinated fried chicken. Hot & flavourful.', price: '₹190', cat: 'fried', badge: '' },
  { name: 'Cube Chicken',         emoji: '🍗', desc: 'Tender chicken cubes, fried in our special seasoning blend.', price: '₹190', cat: 'fried', badge: '' },
  { name: 'Cajun Cubes',          emoji: '🍗', desc: 'Smoky Cajun-spiced chicken cubes with a bold Southern kick.', price: '₹190', cat: 'fried', badge: '' },
  { name: 'Chicken Strips',       emoji: '🍗', desc: 'Long crispy chicken strips — great for dipping in your favourite sauce.', price: '₹180', cat: 'fried', badge: '' },
  { name: 'Peri-Peri Wings',      emoji: '🌶️', desc: 'Crunchy wings tossed in peri-peri sauce. For the spice lovers.', price: '₹190', cat: 'fried', badge: '' },
  { name: 'Chilli Garlic Wings',  emoji: '🧄', desc: 'Crunchy wings in a bold chilli-garlic glaze. Addictive!', price: '₹190', cat: 'fried', badge: '' },
  { name: 'BBQ Wings',            emoji: '🍗', desc: 'Saucy BBQ wings with a rich, smoky-sweet glaze.', price: '₹200', cat: 'fried', badge: '' },
  { name: 'Spicy Wings',          emoji: '🌶️', desc: 'Saucy wings with a serious spice level. Not for the faint-hearted!', price: '₹200', cat: 'fried', badge: '' },

  // ── FRIES ───────────────────────────────────────────────────────
  { name: 'Salted Fries',         emoji: '🍟', desc: 'Classic crispy salted fries. Simple and satisfying.', price: '₹100', cat: 'fries', badge: '' },
  { name: 'Peri-Peri Fries',      emoji: '🌶️', desc: 'Seasoned fries tossed in tangy peri-peri spice. A bestseller.', price: '₹110', cat: 'fries', badge: 'popular' },
  { name: 'Smoky Garlic Fries',   emoji: '🧄', desc: 'Fries seasoned with smoky garlic — bold and flavourful.', price: '₹110', cat: 'fries', badge: '' },
  { name: 'Cajun Fries',          emoji: '🍟', desc: 'Southern-style Cajun seasoned fries with a smoky kick.', price: '₹110', cat: 'fries', badge: '' },
  { name: 'Cheese Overloaded Fries', emoji: '🧀', desc: 'Crispy fries drowned in rich cheese sauce. Absolutely indulgent.', price: '₹220', cat: 'fries', badge: 'popular' },
  { name: 'Paneer Overloaded Fries', emoji: '🧀', desc: 'Loaded fries topped with spiced paneer and cheese. Veg.', price: '₹220', cat: 'fries', badge: '' },
  { name: 'Chicken Overloaded Fries', emoji: '🍗', desc: 'Fries piled high with juicy chicken chunks and melted cheese.', price: '₹220', cat: 'fries', badge: '' },

  // ── PIZZA ───────────────────────────────────────────────────────
  { name: 'Margherita Pizza',     emoji: '🍕', desc: 'Classic tomato, mozzarella, and fresh herbs. Simple, perfect. Veg.', price: '₹200', cat: 'pizza', badge: '' },
  { name: 'Mexican Mushroom Cheese Pizza', emoji: '🍕', desc: 'Mexican spiced mushrooms with generous cheese. Veg.', price: '₹220', cat: 'pizza', badge: '' },
  { name: 'Paneer Pizza',         emoji: '🍕', desc: 'Spiced paneer tikka on a cheesy pizza base. Veg.', price: '₹250', cat: 'pizza', badge: '' },
  { name: 'BBQ Chicken Pizza',    emoji: '🍕', desc: 'Smoky BBQ chicken with mozzarella and caramelised onion.', price: '₹250', cat: 'pizza', badge: '' },
  { name: 'Chicken Pizza',        emoji: '🍕', desc: 'Classic chicken pizza with our signature tomato sauce and cheese.', price: '₹250', cat: 'pizza', badge: '' },

  // ── PASTA ───────────────────────────────────────────────────────
  { name: 'Penne Pasta — Bechamel (Veg)', emoji: '🍝', desc: 'Creamy white Bechamel sauce penne pasta. Vegetarian.', price: '₹220', cat: 'pasta', badge: '' },
  { name: 'Penne Pasta — Arrabbiata (Veg)', emoji: '🍝', desc: 'Spicy tomato Arrabbiata sauce penne. Vegetarian.', price: '₹220', cat: 'pasta', badge: '' },
  { name: 'Penne Pasta — Bechamel (Chicken)', emoji: '🍝', desc: 'Creamy Bechamel penne with tender chicken pieces.', price: '₹250', cat: 'pasta', badge: '' },
  { name: 'Penne Pasta — Arrabbiata (Chicken)', emoji: '🍝', desc: 'Spicy Arrabbiata penne with chicken. Bold and satisfying.', price: '₹250', cat: 'pasta', badge: '' },
  { name: 'Double Cheese Pasta (Veg)', emoji: '🧀', desc: 'Extra cheese bechamel or arrabbiata penne. Pure comfort. Veg.', price: '₹250', cat: 'pasta', badge: '' },
  { name: 'Double Cheese Pasta (Chicken)', emoji: '🧀', desc: 'Double cheese pasta with chicken. Bechamel or Arrabbiata.', price: '₹280', cat: 'pasta', badge: 'popular' },
  { name: 'Spaghetti — Bechamel (Veg)', emoji: '🍝', desc: 'Classic spaghetti in rich white Bechamel sauce. Vegetarian.', price: '₹230', cat: 'pasta', badge: '' },
  { name: 'Spaghetti — Arrabbiata (Veg)', emoji: '🍝', desc: 'Spaghetti in spicy tomato Arrabbiata. Vegetarian.', price: '₹230', cat: 'pasta', badge: '' },
  { name: 'Spaghetti — Bechamel (Chicken)', emoji: '🍝', desc: 'Spaghetti in creamy Bechamel with chicken.', price: '₹250', cat: 'pasta', badge: '' },
  { name: 'Spaghetti — Arrabbiata (Chicken)', emoji: '🍝', desc: 'Spaghetti in spicy tomato sauce with chicken.', price: '₹250', cat: 'pasta', badge: '' },
  { name: 'Double Cheese Spaghetti (Veg)', emoji: '🧀', desc: 'Extra-cheesy spaghetti, bechamel or arrabbiata. Veg.', price: '₹250', cat: 'pasta', badge: '' },
  { name: 'Double Cheese Spaghetti (Chicken)', emoji: '🧀', desc: 'Cheesy chicken spaghetti — bechamel or arrabbiata.', price: '₹280', cat: 'pasta', badge: '' },

  // ── SANDWICH ────────────────────────────────────────────────────
  { name: 'Veg Classic Sandwich', emoji: '🥪', desc: 'A simple, fresh classic veg grilled sandwich. Veg.', price: '₹130', cat: 'sandwich', badge: '' },
  { name: 'Butter Sandwich (Veg)', emoji: '🥪', desc: 'Buttery grilled veg sandwich. Warm and comforting. Veg.', price: '₹150', cat: 'sandwich', badge: '' },
  { name: 'Butter Sandwich (Non-Veg)', emoji: '🥪', desc: 'Buttery grilled sandwich with non-veg filling.', price: '₹190', cat: 'sandwich', badge: '' },
  { name: 'Tikka Sandwich (Veg)', emoji: '🥪', desc: 'Tikka-spiced veg filling in a toasted sandwich. Veg.', price: '₹150', cat: 'sandwich', badge: '' },
  { name: 'Tikka Sandwich (Non-Veg)', emoji: '🥪', desc: 'Tikka chicken sandwich — smoky, spiced and toasted.', price: '₹190', cat: 'sandwich', badge: '' },
  { name: 'Peri-Peri Sandwich (Veg)', emoji: '🌶️', desc: 'Tangy peri-peri flavoured veg sandwich. Veg.', price: '₹150', cat: 'sandwich', badge: '' },
  { name: 'Peri-Peri Sandwich (Non-Veg)', emoji: '🌶️', desc: 'Peri-peri chicken sandwich with a fiery kick.', price: '₹190', cat: 'sandwich', badge: '' },
  { name: 'Paneer Sandwich (Veg)', emoji: '🧀', desc: 'Paneer-filled grilled sandwich. Rich and satisfying. Veg.', price: '₹150', cat: 'sandwich', badge: '' },
  { name: 'Paneer Sandwich (Non-Veg)', emoji: '🧀', desc: 'Paneer and chicken combo grilled sandwich.', price: '₹190', cat: 'sandwich', badge: '' },
  { name: 'Veg Club Sandwich',   emoji: '🥪', desc: 'Triple-layered loaded veg club sandwich. Veg. Special.', price: '₹180', cat: 'sandwich', badge: 'popular' },
  { name: 'Chicken Club Sandwich', emoji: '🥪', desc: 'Triple-layered loaded chicken club sandwich. A meal in itself.', price: '₹200', cat: 'sandwich', badge: 'popular' },

  // ── MOMOS ───────────────────────────────────────────────────────
  { name: 'Veg Momos',           emoji: '🥟', desc: 'Steamed veg dumplings with a fresh filling. Veg.', price: '₹130', cat: 'momos', badge: '' },
  { name: 'Mushroom Momos',      emoji: '🥟', desc: 'Steamed momos with earthy mushroom filling. Veg.', price: '₹140', cat: 'momos', badge: '' },
  { name: 'Paneer Tikka Momos',  emoji: '🥟', desc: 'Tikka-spiced paneer stuffed momos. Veg.', price: '₹140', cat: 'momos', badge: '' },
  { name: 'Corn Momos',          emoji: '🌽', desc: 'Sweet corn-filled steamed momos. Light and delicious. Veg.', price: '₹140', cat: 'momos', badge: '' },
  { name: 'Schezwan Veg Momos',  emoji: '🌶️', desc: 'Spicy Schezwan sauce veg momos. Bold flavours. Veg.', price: '₹140', cat: 'momos', badge: '' },
  { name: 'Chicken Momos',       emoji: '🥟', desc: 'Juicy steamed chicken dumplings with dipping sauce.', price: '₹180', cat: 'momos', badge: 'popular' },
  { name: 'Schezwan Chicken Momos', emoji: '🌶️', desc: 'Chicken momos tossed in spicy Schezwan sauce.', price: '₹180', cat: 'momos', badge: '' },
  { name: 'Chicken Cheese / Tikka Momos', emoji: '🥟', desc: 'Chicken momos with a cheese or tikka twist. Indulgent!', price: '₹180', cat: 'momos', badge: '' },
  { name: 'Peri-Peri Chicken Momos', emoji: '🌶️', desc: 'Chicken momos with fiery peri-peri coating.', price: '₹180', cat: 'momos', badge: '' },

  // ── BURGERS ─────────────────────────────────────────────────────
  { name: 'Kids Mini Burger (Veg)', emoji: '🍔', desc: 'A small, delicious veg burger — perfect for kids. Veg.', price: '₹80', cat: 'burgers', badge: '' },
  { name: 'Meatless Burger',     emoji: '🍔', desc: 'A satisfying plant-based meatless burger patty. Veg.', price: '₹130', cat: 'burgers', badge: '' },
  { name: 'Veg Tikka Burger',    emoji: '🍔', desc: 'Tikka spiced veg burger with fresh toppings. Veg.', price: '₹140', cat: 'burgers', badge: '' },
  { name: 'Veg Peri-Peri Burger', emoji: '🌶️', desc: 'Peri-peri flavoured veg burger with a spicy kick. Veg.', price: '₹140', cat: 'burgers', badge: '' },
  { name: 'Kids Mini Burger (Chicken)', emoji: '🍔', desc: 'A small chicken burger perfect for little ones.', price: '₹100', cat: 'burgers', badge: '' },
  { name: 'Crispy Chicken Burger', emoji: '🍔', desc: 'Classic golden crispy fried chicken burger. A crowd favourite.', price: '₹180', cat: 'burgers', badge: 'popular' },
  { name: 'Pulled Chicken Burger', emoji: '🍔', desc: 'Tender slow-pulled chicken burger with smoky sauces.', price: '₹190', cat: 'burgers', badge: '' },
  { name: 'Grilled Chicken Burger', emoji: '🍔', desc: 'Healthy grilled chicken burger — lighter but full of flavour.', price: '₹190', cat: 'burgers', badge: '' },
  { name: 'Sealed Meatless Burger', emoji: '🍔', desc: 'Our iconic sealed format with a meatless patty. CBE First! Veg.', price: '₹150', cat: 'burgers', badge: 'first' },
  { name: 'Sealed Veg Tikka Burger', emoji: '🍔', desc: 'Tikka veg patty in a sealed burger. CBE First! Veg.', price: '₹160', cat: 'burgers', badge: 'first' },
  { name: 'Sealed Veg Peri-Peri Burger', emoji: '🌶️', desc: 'Peri-peri sealed veg burger. Only at Shadow Lights! Veg.', price: '₹160', cat: 'burgers', badge: 'first' },

  // ── WRAPS ───────────────────────────────────────────────────────
  { name: 'Veg Wrap',            emoji: '🌯', desc: 'Fresh vegetable wrap — light and healthy. Veg.', price: '₹120', cat: 'wraps', badge: '' },
  { name: 'Mushroom Wrap',       emoji: '🌯', desc: 'Earthy mushroom filling in a soft wrap. Veg.', price: '₹140', cat: 'wraps', badge: '' },
  { name: 'Paneer Tikka Wrap',   emoji: '🌯', desc: 'Grilled tikka paneer wrapped with fresh veggies. Veg.', price: '₹150', cat: 'wraps', badge: '' },
  { name: 'Butter Paneer Wrap',  emoji: '🌯', desc: 'Rich buttery paneer filling in a soft tortilla wrap. Veg.', price: '₹170', cat: 'wraps', badge: '' },
  { name: 'Chicken Tikka Wrap',  emoji: '🌯', desc: 'Flame-grilled chicken tikka wrap with mint chutney.', price: '₹170', cat: 'wraps', badge: 'popular' },
  { name: 'Peri-Peri Chicken Wrap', emoji: '🌶️', desc: 'Spicy peri-peri chicken in a soft wrap. Great kick of heat.', price: '₹170', cat: 'wraps', badge: '' },
  { name: 'Fried Chicken Wrap',  emoji: '🌯', desc: 'Crispy fried chicken wrapped with fresh slaw and sauce.', price: '₹170', cat: 'wraps', badge: '' },
  { name: 'Butter Chicken Wrap', emoji: '🌯', desc: 'Rich butter chicken curry wrapped in a soft tortilla.', price: '₹180', cat: 'wraps', badge: '' },

  // ── BELGIAN WAFFLES ─────────────────────────────────────────────
  { name: 'Belgian Milk Chocolate Waffle', emoji: '🧇', desc: 'Classic Belgian waffle drizzled with smooth milk chocolate. Add ice cream for ₹40.', price: '₹150', cat: 'waffles', badge: '' },
  { name: 'Belgian Dark Chocolate Waffle', emoji: '🧇', desc: 'Rich Belgian waffle with intense dark chocolate. Add ice cream for ₹40.', price: '₹150', cat: 'waffles', badge: '' },
  { name: 'Belgian White Chocolate Waffle', emoji: '🧇', desc: 'Creamy white chocolate drizzled on a golden Belgian waffle.', price: '₹150', cat: 'waffles', badge: '' },
  { name: 'Triple Chocolate Waffle', emoji: '🍫', desc: 'Milk, dark & white chocolate all at once on a crispy waffle.', price: '₹180', cat: 'waffles', badge: 'popular' },
  { name: 'Hazelnut Waffle',     emoji: '🧇', desc: 'Belgian waffle generously spread with hazelnut. A must-try!', price: '₹180', cat: 'waffles', badge: '' },

  // ── BROWNIES ────────────────────────────────────────────────────
  { name: 'Biscoff Brownie',     emoji: '🍫', desc: 'Fudgy brownie with a Biscoff cookie spread swirl. Heavenly!', price: '₹190', cat: 'desserts', badge: '' },
  { name: 'Nutella Brownie',     emoji: '🍫', desc: 'Classic fudgy brownie swirled with creamy Nutella.', price: '₹190', cat: 'desserts', badge: 'popular' },
  { name: 'Sizzler Brownie',     emoji: '🔥', desc: 'Warm brownie served on a sizzling plate. Dramatic and delicious!', price: '₹200', cat: 'desserts', badge: '' },
  { name: 'Triple Chocolate Brownie with Ice Cream', emoji: '🍨', desc: 'Triple chocolate brownie served warm with a scoop of ice cream.', price: '₹250', cat: 'desserts', badge: 'popular' },

  // ── HOT TEA ─────────────────────────────────────────────────────
  { name: 'Lemon Tea',           emoji: '🍋', desc: 'Light and refreshing hot lemon tea. A perfect pick-me-up.', price: '₹50', cat: 'drinks', badge: '' },
  { name: 'Green Tea',           emoji: '🍵', desc: 'Soothing hot green tea — healthy and aromatic.', price: '₹50', cat: 'drinks', badge: '' },
  { name: 'Milk Tea',            emoji: '☕', desc: 'Comforting hot milk tea, brewed to perfection.', price: '₹50', cat: 'drinks', badge: '' },
  { name: 'Masala Tea',          emoji: '☕', desc: 'Spiced Indian masala chai with ginger, cardamom and more.', price: '₹60', cat: 'drinks', badge: '' },

  // ── HOT COFFEE ──────────────────────────────────────────────────
  { name: 'Classic Coffee',      emoji: '☕', desc: 'A perfect, simple hot coffee to kickstart your evening.', price: '₹60', cat: 'drinks', badge: '' },
  { name: 'Caffè Latte',         emoji: '☕', desc: 'Espresso with steamed milk — smooth and comforting.', price: '₹60', cat: 'drinks', badge: '' },
  { name: 'Hot Chocolate Coffee', emoji: '☕', desc: 'A rich blend of hot chocolate and coffee. Best of both worlds.', price: '₹120', cat: 'drinks', badge: '' },
  { name: 'Hot Chocolate (Compound)', emoji: '🍫', desc: 'Thick, rich hot chocolate drink. Warm and indulgent.', price: '₹150', cat: 'drinks', badge: '' },

  // ── COLD COFFEE ─────────────────────────────────────────────────
  { name: 'Classic Cold Coffee', emoji: '🥤', desc: 'Chilled blended coffee — smooth and refreshing.', price: '₹100', cat: 'drinks', badge: '' },
  { name: 'Irish Cold Coffee',   emoji: '🥤', desc: 'A special Irish-style cold coffee blend. Rich and creamy.', price: '₹120', cat: 'drinks', badge: 'popular' },

  // ── MOCKTAILS ───────────────────────────────────────────────────
  { name: 'Lemon & Mint Mocktail', emoji: '🍋', desc: 'Zesty lemon with fresh mint — a refreshing classic.', price: '₹100', cat: 'drinks', badge: '' },
  { name: 'Avatar Mocktail',     emoji: '🍹', desc: 'Our signature special mocktail. Mysterious and delicious.', price: '₹100', cat: 'drinks', badge: 'popular' },
  { name: 'Blueberry Mocktail',  emoji: '🫐', desc: 'Refreshing blueberry mocktail — fruity and beautiful.', price: '₹100', cat: 'drinks', badge: '' },
  { name: 'Cranberry Mocktail',  emoji: '🍹', desc: 'Tart and tangy cranberry mocktail over ice.', price: '₹100', cat: 'drinks', badge: '' },
  { name: 'Lichi Mocktail',      emoji: '🍹', desc: 'Delicate, floral lychee mocktail — tropical and refreshing.', price: '₹100', cat: 'drinks', badge: '' },
  { name: 'Lemon Ice Tea',       emoji: '🍋', desc: 'Chilled lemon iced tea — sweet, tangy, and perfect.', price: '₹100', cat: 'drinks', badge: '' },

  // ── MILKSHAKES ──────────────────────────────────────────────────
  { name: 'Brownie Milkshake',   emoji: '🥤', desc: 'Thick milkshake blended with real brownie pieces.', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Oreo Milkshake',      emoji: '🥤', desc: 'Creamy Oreo milkshake — a classic favourite.', price: '₹150', cat: 'drinks', badge: 'popular' },
  { name: 'KitKat Milkshake',    emoji: '🥤', desc: 'KitKat blended into a thick, indulgent shake.', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Butterscotch Milkshake', emoji: '🥤', desc: 'Sweet butterscotch milkshake — smooth and nostalgic.', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Vanilla Milkshake',   emoji: '🥤', desc: 'Classic cold vanilla milkshake — simple and perfect.', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Chocolate Milkshake', emoji: '🍫', desc: 'Rich chocolate milkshake — thick and deeply chocolatey.', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Tiramisu Milkshake',  emoji: '🥤', desc: 'Coffee-flavoured tiramisu in milkshake form. Decadent!', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Strawberry Milkshake', emoji: '🍓', desc: 'Fresh strawberry milkshake — fruity and refreshing.', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Mango Milkshake',     emoji: '🥭', desc: 'Thick, tropical mango milkshake. Summer in a glass!', price: '₹150', cat: 'drinks', badge: '' },
  { name: 'Biscoff Milkshake',   emoji: '🥤', desc: 'Biscoff cookie blended into a luxurious milkshake.', price: '₹200', cat: 'drinks', badge: '' },
  { name: 'Apple Cappuccino Shake', emoji: '🍎', desc: 'Our special apple cappuccino milkshake — uniquely Shadow Lights.', price: '₹200', cat: 'drinks', badge: 'popular' },

  // ── FALOODA ─────────────────────────────────────────────────────
  { name: 'Royal Falooda',       emoji: '🌸', desc: 'Layered rose-flavoured falooda with basil seeds, vermicelli, and ice cream. Royal indeed!', price: '₹150', cat: 'drinks', badge: 'popular' },
];

/* ===== RENDER MENU ===== */
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const items = filter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.cat === filter);

  grid.innerHTML = items.map(item => {
    const badge = item.badge
      ? `<span class="menu-card__badge badge--${item.badge}">${item.badge === 'first' ? '🏆 CBE First' : item.badge === 'new' ? '✨ New' : '🔥 Popular'}</span>`
      : '';
    return `
      <article class="menu-card reveal" aria-label="${item.name}">
        <div class="menu-card__emoji" aria-hidden="true">${item.emoji}</div>
        <div class="menu-card__info">
          <div class="menu-card__name">${item.name}${badge}</div>
          <div class="menu-card__desc">${item.desc}</div>
        </div>
        <div class="menu-card__price">${item.price}</div>
      </article>
    `;
  }).join('');

  // Trigger reveal animation for newly injected cards
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

/* ===== MENU TABS ===== */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderMenu(tab.dataset.cat);
    });
  });
}

/* ===== NAV ===== */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  const header = document.getElementById('header');

  // Hamburger
  toggle?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  menu?.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Scroll header
  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe static elements
  document.querySelectorAll('.reveal, .first-card, .review-card, .contact-item, .gallery__item, .about__grid > *').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ===== PARTICLES ===== */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  // Respect reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const colors = ['#f5c842', '#ff9a3c', '#ff6b8a', '#9b6dff', '#00d4aa'];

  function createParticle() {
    const p = document.createElement('span');
    p.className = 'particle';

    const size  = Math.random() * 5 + 2;
    const x     = Math.random() * 100;
    const delay = Math.random() * 4;
    const dur   = Math.random() * 5 + 4;
    const dx    = (Math.random() - 0.5) * 120;
    const dy    = -(Math.random() * 100 + 50);
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x}%;
      bottom:${Math.random() * 30}%;
      background:${color};
      opacity:0;
      --dx:${dx}px; --dy:${dy}px;
      animation: particle-drift ${dur}s ${delay}s ease-out infinite;
    `;
    container.appendChild(p);
  }

  // Create 25 particles
  for (let i = 0; i < 25; i++) createParticle();
}

/* ===== MENU SEARCH ===== */
function initMenuSearch() {
  const input = document.getElementById('menuSearch');
  if (!input) return;

  let currentCat = 'all';

  // Store current category so search respects it
  document.querySelectorAll('.menu__tab').forEach(tab => {
    tab.addEventListener('click', () => { currentCat = tab.dataset.cat; input.value = ''; });
  });

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (!query) { renderMenu(currentCat); return; }

    const results = MENU_ITEMS.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.cat.toLowerCase().includes(query)
    );

    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    if (results.length === 0) {
      grid.innerHTML = `<div class="menu__empty">😔 No items found for "<strong>${input.value}</strong>". Try another word!</div>`;
      return;
    }

    grid.innerHTML = results.map(item => {
      const badge = item.badge
        ? `<span class="menu-card__badge badge--${item.badge}">${item.badge === 'first' ? '🏆 CBE First' : item.badge === 'new' ? '✨ New' : '🔥 Popular'}</span>`
        : '';
      return `
        <article class="menu-card reveal visible" aria-label="${item.name}">
          <div class="menu-card__emoji" aria-hidden="true">${item.emoji}</div>
          <div class="menu-card__info">
            <div class="menu-card__name">${item.name}${badge}</div>
            <div class="menu-card__desc">${item.desc}</div>
          </div>
          <div class="menu-card__price">${item.price}</div>
        </article>
      `;
    }).join('');
  });
}


document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderMenu('all');
  initMenuTabs();
  initMenuSearch();
  initParticles();
  // Small delay so DOM is painted before reveal observer fires
  setTimeout(initScrollReveal, 100);

  console.log('%c☽ Shadow Lights Cafe', 'font-size:18px; color:#f5c842; font-weight:bold;');
  console.log('%cBuilt with ❤️ in Coimbatore', 'color:#9e8f7a;');
});

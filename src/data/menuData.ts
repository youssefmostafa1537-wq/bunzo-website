import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // --- SMASH BURGERS ---
  {
    id: 'double-smash-classic',
    nameAr: 'دبل سماش كلاسيك',
    nameEn: 'Double Smash Classic',
    descriptionAr: 'قطعتين لحم بقري بلدي طازج مشوي ومفرود على الصاج الساخن مع أطراف مقرمشة مكرملة، دبل جبنة شيدر أمريكية ذائبة، خيار مخلل، وصوص بنزو السري في خبز بريوش طازج.',
    descriptionEn: 'Two freshly ground 100% Egyptian beef patties smashed on searing steel with lacy caramelized crust, double melted American cheese, crisp house pickles, and Bunzo secret sauce on toasted brioche.',
    price: 185,
    category: 'smash',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    calories: 780,
    ingredientsAr: ['لحم بقري بلدي 100%', 'شيدر أمريكي', 'صوص بنزو السري', 'خيار مخلل', 'خبز بريوش بالزبدة'],
    ingredientsEn: ['100% Fresh Beef', 'Melted American Cheddar', 'Bunzo Secret Sauce', 'House Pickles', 'Butter Brioche Bun'],
    options: {
      sizes: [
        { nameAr: 'دبل (قطعتين لحم)', nameEn: 'Double (2 Patties)', priceDiff: 0 },
        { nameAr: 'تريبل (3 قطع لحم)', nameEn: 'Triple (3 Patties)', priceDiff: 60 }
      ],
      extras: [
        { id: 'bacon', nameAr: 'بيكون بقري مدخن', nameEn: 'Smoked Beef Bacon', price: 35 },
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'jalapeno', nameAr: 'هالبينو حار', nameEn: 'Pickled Jalapeños', price: 15 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'triple-beast-smash',
    nameAr: 'تريبل بيست سماش',
    nameEn: 'Triple Beast Smash',
    descriptionAr: 'الوحش الحقيقي! 3 قطع لحم بقري سماش بطبقات ثلاثية من الشيدر الأمريكي، بصل مكرمل مشوي على الجريل، صوص السماش الخاص، ولمسة صوص مدخن غني.',
    descriptionEn: 'The ultimate monster! 3 smash patties with triple layers of American cheese, grilled caramelized onions, house smash spread, and smoky glaze in a golden brioche.',
    price: 245,
    category: 'smash',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    calories: 1040,
    ingredientsAr: ['3 قطع لحم بقري سماش', 'جبنة شيدر ثلاثية', 'بصل مكرمل مشوي', 'صوص سماش بيست', 'خبز بريوش طازج'],
    ingredientsEn: ['3 Smashed Beef Patties', 'Triple Melted Cheddar', 'Grilled Caramelized Onions', 'Smash Beast Sauce', 'Brioche Bun'],
    options: {
      extras: [
        { id: 'bacon', nameAr: 'بيكون بقري مدخن', nameEn: 'Smoked Beef Bacon', price: 35 },
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'jalapeno', nameAr: 'هالبينو حار', nameEn: 'Pickled Jalapeños', price: 15 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'truffle-smash',
    nameAr: 'ترافل سماش جورميه',
    nameEn: 'Truffle Smash Gourmet',
    descriptionAr: 'قطعتين سماش مقرمشة مع صوص ترافل أسود غني محضر يدويًا، مشروم طازج سوتيه، جبنة جودا هولندية مدخنة، وبصل مكرمل ناعم.',
    descriptionEn: 'Double crispy smash patties crowned with house-made black truffle aioli, sautéed fresh brown mushrooms, smoked gouda cheese, and soft caramelized onions.',
    price: 220,
    category: 'smash',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    isNew: true,
    calories: 820,
    ingredientsAr: ['لحم سماش بلدي', 'صوص الترافل الأسود', 'مشروم بني سوتيه', 'جبنة جودا مدخنة', 'خبز بريوش خفيف'],
    ingredientsEn: ['Double Smashed Beef', 'Black Truffle Aioli', 'Sautéed Brown Mushrooms', 'Smoked Gouda Cheese', 'Brioche Bun'],
    options: {
      extras: [
        { id: 'extra-mushrooms', nameAr: 'مشروم سوتيه إضافي', nameEn: 'Extra Sautéed Mushrooms', price: 30 },
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },

  // --- GOURMET FLAME-GRILLED ---
  {
    id: 'bunzo-signature',
    nameAr: 'ساندوتش بنزو المميز (Bunzo Burger)',
    nameEn: 'Bunzo Signature Burger',
    descriptionAr: 'الأشهر والأكثر طلبًا! برجر لحم مشوي على اللهب، شرائح ستيك لحم متبلة، بصل مكرمل ذهبي، شيدر سائل وفير، وصوص بنزو السري الخاص.',
    descriptionEn: 'The iconic bestseller! Bunzo flame-grilled beef patty layered with tender marinated steak strips, golden caramelized onions, molten cheddar, and signature Bunzo house sauce.',
    price: 235,
    category: 'flame',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    calories: 920,
    ingredientsAr: ['برجر مشوي على الفحم', 'شرائح ستيك مشوية', 'بصل مكرمل', 'جبنة شيدر غنية', 'صوص بنزو الخاص'],
    ingredientsEn: ['Flame-Grilled Beef Patty', 'Tender Steak Strips', 'Caramelized Onions', 'Rich Melted Cheddar', 'Signature Bunzo Sauce'],
    options: {
      extras: [
        { id: 'double-patty', nameAr: 'قطعة برجر إضافية', nameEn: 'Extra Beef Patty', price: 65 },
        { id: 'bacon', nameAr: 'بيكون بقري مدخن', nameEn: 'Smoked Beef Bacon', price: 35 },
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'fayro-burger',
    nameAr: 'فايرو برجر (Fayro Burger)',
    nameEn: 'Fayro Fiery Burger',
    descriptionAr: 'لعشاق الإثارة والحرارة! برجر مشوي على اللهب، أصابع شيدر مقلية مقرمشة، شرائح هالبينو حارة، صوص حار ملتهب، خس طازج ومايونيز خفيف.',
    descriptionEn: 'For heat seekers! Signature flame-grilled patty, crunchy fried cheddar sticks, pickled fiery jalapeños, Bunzo hot glaze, crisp iceberg lettuce, and cool mayo.',
    price: 215,
    category: 'flame',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80',
    isSpicy: true,
    calories: 890,
    ingredientsAr: ['برجر لحم مشوي', 'أصابع شيدر مقلية', 'هالبينو حار', 'صوص فايرو الحار', 'خس ومايونيز', 'خبز بريوش'],
    ingredientsEn: ['Flame-Grilled Beef Patty', 'Fried Cheddar Sticks', 'Fiery Jalapeños', 'Bunzo Hot Glaze', 'Lettuce & Mayo', 'Brioche Bun'],
    options: {
      extras: [
        { id: 'extra-jalapeno', nameAr: 'هالبينو إضافي ناري', nameEn: 'Extra Fiery Jalapeños', price: 15 },
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'cheeso-burger',
    nameAr: 'تشيزو برجر (Cheeso Burger)',
    nameEn: 'Cheeso Lava Burger',
    descriptionAr: 'انفجار من الجبن! برجر مشوي على اللهب، أصابع موتزاريلا مقلية تشد لآخر اللقمة، صوص شيدر ذهبي ساخن، خس، خيار مخلل، وبصل طازج.',
    descriptionEn: 'A cheese lover\'s dream! Flame-grilled beef patty crowned with golden crispy mozzarella sticks, warm molten cheddar cheese sauce, crisp pickles, lettuce, and onions.',
    price: 210,
    category: 'flame',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    calories: 910,
    ingredientsAr: ['برجر مشوي على اللهب', 'أصابع موتزاريلا مقلية', 'صوص شيدر ذهبي', 'خس وطماطم ومخلل', 'خبز بريوش محمص'],
    ingredientsEn: ['Flame-Grilled Patty', 'Crunchy Mozzarella Sticks', 'Golden Cheddar Lava', 'Pickles, Lettuce & Onion', 'Toasted Brioche'],
    options: {
      extras: [
        { id: 'extra-mozzarella', nameAr: 'أصابع موتزاريلا إضافية (2 قطعة)', nameEn: 'Extra Mozzarella Sticks (2 pcs)', price: 35 },
        { id: 'bacon', nameAr: 'بيكون بقري مدخن', nameEn: 'Smoked Beef Bacon', price: 35 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'oro-burger',
    nameAr: 'أورو برجر (Oro Burger)',
    nameEn: 'Oro Gold Burger',
    descriptionAr: 'النكهة المتوازنة الأصلية! برجر مشوي على اللهب مغطى بصوص أورو الذهبي السري، خس طازج، طماطم، بصل مقرمش، وخيار مخلل متبل.',
    descriptionEn: 'The refined original taste! Flame-grilled beef patty generously coated in golden secret Oro sauce, crisp lettuce, fresh tomato slices, crunchy onions, and seasoned pickles.',
    price: 195,
    category: 'flame',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80',
    calories: 760,
    ingredientsAr: ['برجر مشوي', 'صوص أورو الذهبي', 'خس وطماطم طازجة', 'بصل مقرمش', 'خيار مخلل'],
    ingredientsEn: ['Grilled Beef Patty', 'Golden Oro Secret Sauce', 'Crisp Lettuce & Tomato', 'Crunchy Onions', 'House Pickles'],
    options: {
      extras: [
        { id: 'double-patty', nameAr: 'قطعة لحم إضافية', nameEn: 'Extra Beef Patty', price: 65 },
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'demo-mushroom',
    nameAr: 'ديمو مشروم برجر (Demo Burger)',
    nameEn: 'Demo Mushroom & Swiss',
    descriptionAr: 'برجر مشوي غارق في صوص المشروم الكريمي الطازج، جبنة سويسرية ذائبة، وبصل مكرمل ببطء ليعطي طعمًا استثنائيًا غنيًا.',
    descriptionEn: 'Flame-grilled beef drenched in rich creamy sautéed mushroom sauce, melted Swiss cheese, and slow-caramelized onions on a toasted artisan bun.',
    price: 215,
    category: 'flame',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80',
    calories: 840,
    ingredientsAr: ['برجر مشوي على الفحم', 'صوص مشروم كريمي طازج', 'جبنة سويسرية', 'بصل مكرمل', 'خبز بريوش'],
    ingredientsEn: ['Flame-Grilled Beef', 'Creamy Sautéed Mushroom Gravy', 'Melted Swiss Cheese', 'Caramelized Onions', 'Brioche Bun'],
    options: {
      extras: [
        { id: 'bacon', nameAr: 'بيكون بقري مدخن', nameEn: 'Smoked Beef Bacon', price: 35 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },

  // --- CRISPY CHICKEN ---
  {
    id: 'cheezo-chicken',
    nameAr: 'تشيزو تشيكن بنزو',
    nameEn: 'Cheezo Crispy Chicken',
    descriptionAr: 'صدر دجاج مقلي ضخم ومقرمش بتتبيلة بنزو السرية، أصابع موتزاريلا مقلية، شلال من صوص الشيدر الساخن، وصوص الرانش المدخن.',
    descriptionEn: 'Jumbo hand-breaded buttermilk crispy chicken breast, golden fried mozzarella sticks, cascading warm cheddar cheese, and smoky herb ranch sauce.',
    price: 205,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    calories: 880,
    ingredientsAr: ['صدر دجاج مقرمش طازج', 'أصابع موتزاريلا', 'صوص شيدر ساخن', 'صوص رانش', 'خس طازج'],
    ingredientsEn: ['Fresh Hand-Breaded Chicken Breast', 'Mozzarella Sticks', 'Warm Cheddar Sauce', 'Herb Ranch', 'Crisp Iceberg Lettuce'],
    options: {
      extras: [
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'jalapeno', nameAr: 'هالبينو حار', nameEn: 'Pickled Jalapeños', price: 15 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'buffalo-fire-chicken',
    nameAr: 'بافلو فاير تشيكن',
    nameEn: 'Buffalo Fire Chicken',
    descriptionAr: 'صدر دجاج مقرمش مغطس في صوص البافلو الحار المعتّق، هالبينو حار، صوص بلو تشيز رانش البارد، وشرائح خس مقرمشة تكسر الحدة.',
    descriptionEn: 'Ultra-crispy fried chicken dipped in tangy aged buffalo glaze, jalapeño rings, cool blue cheese ranch, and shredded crisp iceberg lettuce.',
    price: 195,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80',
    isSpicy: true,
    calories: 830,
    ingredientsAr: ['دجاج كريسبي مقلي', 'صوص بافلو حار', 'هالبينو', 'صوص بلو تشيز رانش', 'خس مقرمش'],
    ingredientsEn: ['Crispy Chicken Fillet', 'Spicy Buffalo Glaze', 'Jalapeño Slices', 'Blue Cheese Ranch', 'Crisp Slaw Lettuce'],
    options: {
      extras: [
        { id: 'extra-sauce', nameAr: 'صوص بافلو إضافي', nameEn: 'Extra Buffalo Sauce', price: 20 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },
  {
    id: 'classic-crunch-chicken',
    nameAr: 'كلاسيك كرانش تشيكن',
    nameEn: 'Classic Crunch Chicken',
    descriptionAr: 'البساطة في أروع صورها! قطعة دجاج مقرمشة بخلطة البانكو المقرمشة، كول سلو فريش ومقرمش، مايونيز بالثوم والأعشاب، وخيار مخلل.',
    descriptionEn: 'Golden buttermilk crispy chicken fillet topped with fresh crunchy house slaw, garlic herb mayonnaise, and crunchy dill pickles in soft brioche.',
    price: 180,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80',
    calories: 720,
    ingredientsAr: ['دجاج مقرمش ذهبي', 'كول سلو طازج', 'مايونيز بالأعشاب', 'خيار مخلل', 'خبز بريوش'],
    ingredientsEn: ['Crispy Chicken Cutlet', 'Fresh House Slaw', 'Herb Mayo', 'Dill Pickles', 'Soft Brioche Bun'],
    options: {
      extras: [
        { id: 'cheese-sauce', nameAr: 'صوص شيدر إضافي', nameEn: 'Extra Cheddar Lava', price: 25 },
        { id: 'combo', nameAr: 'كومبو (بطاطس ومشروب)', nameEn: 'Make it a Combo (Fries + Soda)', price: 55 }
      ]
    }
  },

  // --- SIDES & APPETIZERS ---
  {
    id: 'bunzo-loaded-fries',
    nameAr: 'بطاطس بنزو المحملة (Loaded Fries)',
    nameEn: 'Bunzo Signature Loaded Fries',
    descriptionAr: 'طبق البطاطس الأسطوري! بطاطس ذهبية مقرمشة محملة بقطع لحم سماش مشوية، صوص شيدر بركاني، هالبينو، بصل مقلي مقرمش، وصوص بنزو السري.',
    descriptionEn: 'The legendary crowd-pleaser! Crispy golden fries loaded with smashed beef crumbles, volcanic molten cheddar, pickled jalapeños, crispy fried onions, and Bunzo signature sauce.',
    price: 135,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    calories: 690,
    ingredientsAr: ['بطاطس مقلية ذهبية', 'لحم سماش بلدي مفروم', 'صوص شيدر سائل', 'هالبينو وبصل مقلي', 'صوص بنزو'],
    ingredientsEn: ['Crisp French Fries', 'Smashed Beef Bits', 'Warm Cheddar Lava', 'Jalapeños & Crispy Onions', 'Bunzo Secret Sauce']
  },
  {
    id: 'cheddar-mozzarella-sticks',
    nameAr: 'أصابع الشيدر والموتزاريلا المقلية (6 قطع)',
    nameEn: 'Crispy Cheese Sticks Platter (6 pcs)',
    descriptionAr: 'مزيج من أصابع الشيدر والموتزاريلا الذهبية المقرمشة مع صوص المارينارا المتبل وصوص الهوني ماسترد.',
    descriptionEn: 'Six crispy golden cheddar and mozzarella sticks served with marinara herb dip and sweet tangy honey mustard.',
    price: 110,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=900&q=80',
    calories: 520,
    ingredientsAr: ['شيدر وموتزاريلا طبيعية', 'بقسماط متبل مقرمش', 'صوص مارينارا بالأعشاب', 'هوني ماسترد'],
    ingredientsEn: ['Real Cheddar & Mozzarella', 'Seasoned Panko Coating', 'Herb Marinara Dip', 'Honey Mustard']
  },
  {
    id: 'crispy-chicken-tenders',
    nameAr: 'أصابع دجاج كريسبي (4 قطع)',
    nameEn: 'Crispy Chicken Tenders (4 pcs)',
    descriptionAr: 'أصابع صدور دجاج طازجة مقرمشة ولذيذة تقدم مع صوص باربكيو مدخن وصوص رانش.',
    descriptionEn: 'Four jumbo tender chicken breast strips seasoned and fried golden crisp, served with smoky BBQ and ranch dips.',
    price: 125,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80',
    calories: 490,
    ingredientsAr: ['صدور دجاج طازجة 100%', 'تتبيلة بنزو المقرمشة', 'صوص باربكيو مدخن', 'صوص رانش'],
    ingredientsEn: ['100% Fresh Chicken Breast', 'Crispy Golden Breading', 'Smoky BBQ Dip', 'Creamy Herb Ranch']
  },
  {
    id: 'golden-french-fries',
    nameAr: 'بطاطس مقلية ذهبية',
    nameEn: 'Golden Crisp French Fries',
    descriptionAr: 'بطاطس مقلية رفيعة ومقرمشة متبلة ببهارات بنزو الخاصة.',
    descriptionEn: 'Classic thin-cut golden crispy fries seasoned with our house spiced salt blend.',
    price: 55,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80',
    calories: 340,
    ingredientsAr: ['بطاطس طازجة', 'بهارات بنزو الخاصة'],
    ingredientsEn: ['Fresh Potatoes', 'Bunzo House Spiced Salt']
  },

  // --- DRINKS & SHAKES ---
  {
    id: 'lotus-biscoff-shake',
    nameAr: 'شيك لوتس بيسكوف فاخر',
    nameEn: 'Lotus Biscoff Thick Shake',
    descriptionAr: 'ميلك شيك غني وفاخر محضر من آيس كريم فانيليا بلدي ناعم، زبدة لوتس أصلية، وبسكويت لوتس مطحون.',
    descriptionEn: 'Decadent thick milkshake crafted with real vanilla bean ice cream, Belgian Lotus Biscoff spread, and crushed biscuit crumb.',
    price: 95,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    calories: 580,
    ingredientsAr: ['آيس كريم فانيليا', 'زبدة لوتس بيسكوف', 'بسكويت لوتس مطحون', 'كريمة خفق'],
    ingredientsEn: ['Vanilla Ice Cream', 'Lotus Biscoff Spread', 'Crushed Lotus Biscuits', 'Whipped Cream']
  },
  {
    id: 'salted-caramel-shake',
    nameAr: 'شيك سالتد كراميل كريمي',
    nameEn: 'Salted Caramel Cream Shake',
    descriptionAr: 'مزيج لا يقاوم من الكراميل المملح الغني، آيس كريم الحليب الطازج، ولمسة بسكويت خفيف مع كريمة.',
    descriptionEn: 'A lush blend of house salted caramel sauce, artisan milk ice cream, and a light salted crumble with whipped cream.',
    price: 90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=80',
    calories: 540,
    ingredientsAr: ['آيس كريم حليب طازج', 'صوص كراميل مملح', 'كريمة مخفوقة'],
    ingredientsEn: ['Fresh Milk Ice Cream', 'Artisan Salted Caramel Sauce', 'Whipped Cream']
  },
  {
    id: 'oreo-shake',
    nameAr: 'شيك أوريو أوفرلود',
    nameEn: 'Oreo Overload Shake',
    descriptionAr: 'عشاق الشوكولاتة والأوريو! آيس كريم كريمي مع بسكويت أوريو مكسر وصوص شوكولاتة فدج ساخن.',
    descriptionEn: 'The classic favorite: rich vanilla ice cream blended with crushed crunchy Oreos and chocolate fudge drizzle.',
    price: 85,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    calories: 520,
    ingredientsAr: ['بسكويت أوريو أصلي', 'آيس كريم فانيليا', 'صوص شوكولاتة غني'],
    ingredientsEn: ['Authentic Oreo Cookies', 'Creamy Vanilla Ice Cream', 'Rich Chocolate Drizzle']
  },
  {
    id: 'soft-drink',
    nameAr: 'مشروب غازي مثلج (كانز)',
    nameEn: 'Chilled Soft Drink (Can)',
    descriptionAr: 'اختر المشروب المفضل لديك: كوكاكولا، سبرايت، فانتا، أو كوكاكولا زيرو.',
    descriptionEn: 'Ice-cold canned beverage: Coca-Cola, Sprite, Fanta, or Coca-Cola Zero.',
    price: 30,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80',
    calories: 140,
    ingredientsAr: ['مشروب غازي 330 مل'],
    ingredientsEn: ['330ml Chilled Soda Can']
  }
];

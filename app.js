const STORAGE_KEY = "farm-resource-atlas-plan-v1";

const animals = [
  {
    id: "chicken",
    name: "Chicken",
    summary:
      "A compact poultry atlas for planning food, feathers, soil inputs, and educational stewardship uses without graphic detail.",
    imageAsset: "assets/farm-atlas/chicken.png",
    stewardshipNotes: [
      "Keep edible and non-edible streams separated for safety.",
      "Plan feather, shell, and compost pathways before processing day.",
      "Check local rules before selling any edible or rendered products."
    ],
    regions: [
      {
        id: "breast",
        label: "Breast and frame",
        marker: "1",
        position: { x: 54, y: 51 },
        focusPosition: { x: 54, y: 51 },
        wasteReductionTip: "Separate prime cuts, trim, and frame so each stream has a clear next use.",
        uses: [
          {
            title: "Primary food cuts",
            category: "Food",
            description: "Use breast meat and larger pieces for fresh meals, value-added prepared foods, or freezer planning.",
            resourceRespectNote: "Label batches by date and intended use to reduce freezer loss."
          },
          {
            title: "Stock and broth base",
            category: "Food",
            description: "Use frames, necks, and clean bones for rich stock that can support soups, sauces, and farm kitchen meals.",
            resourceRespectNote: "A stock plan turns small pieces into a high-value staple."
          },
          {
            title: "Pet-food ingredient review",
            category: "Feed/byproduct",
            description: "Discuss clean trim options with a qualified feed or veterinary advisor before any animal-feed use.",
            resourceRespectNote: "Safety review prevents a waste-saving idea from becoming a health risk."
          }
        ]
      },
      {
        id: "feathers",
        label: "Feathers",
        marker: "2",
        position: { x: 36, y: 36 },
        focusPosition: { x: 36, y: 38 },
        wasteReductionTip: "Keep feathers dry and clean if they may be used for craft, insulation trials, or compost research.",
        uses: [
          {
            title: "Craft and education kits",
            category: "Craft/material",
            description: "Clean feathers can support classroom displays, farm tours, seasonal crafts, or natural material samples.",
            resourceRespectNote: "Small educational uses help people see value beyond the main food product."
          },
          {
            title: "Nitrogen-rich compost input",
            category: "Compost/soil",
            description: "Feathers break down slowly but can add nitrogen when mixed with active compost and balanced carbon material.",
            resourceRespectNote: "Shred or mix well so feathers do not mat and slow the pile."
          },
          {
            title: "Material experiment log",
            category: "Farm inputs",
            description: "Track feather quantities for future bedding, insulation, or local maker partnerships.",
            resourceRespectNote: "Measurement is the first step toward a reliable reuse channel."
          }
        ]
      },
      {
        id: "eggshells",
        label: "Eggshells and feet",
        marker: "3",
        position: { x: 55, y: 82 },
        focusPosition: { x: 55, y: 78 },
        wasteReductionTip: "Collect small parts separately so they are not lost in general waste.",
        uses: [
          {
            title: "Calcium soil amendment",
            category: "Compost/soil",
            description: "Clean, dried, crushed eggshells can be used in compost or soil planning where calcium is useful.",
            resourceRespectNote: "Apply based on soil needs rather than habit."
          },
          {
            title: "Gelatin-rich stock",
            category: "Food",
            description: "Feet can be used for stock where local rules and kitchen standards allow.",
            resourceRespectNote: "Clear handling procedures help make small parts usable."
          },
          {
            title: "Farm lesson sample",
            category: "Education",
            description: "Eggshells show nutrient cycling in a simple, visual way for farm visitors or students.",
            resourceRespectNote: "A visible cycle reinforces why planning matters."
          }
        ]
      }
    ]
  },
  {
    id: "cow",
    name: "Cow",
    summary:
      "A whole-animal planning view for major food cuts, hide, bones, fats, organs, manure, and learning materials.",
    imageAsset: "assets/farm-atlas/cow.png",
    stewardshipNotes: [
      "Use licensed processors and local compliance guidance for any edible product.",
      "Confirm buyers or community uses before creating hard-to-store byproducts.",
      "Map cold storage, rendering, hide, and compost channels in advance."
    ],
    regions: [
      {
        id: "muscle",
        label: "Muscle cuts",
        marker: "1",
        position: { x: 58, y: 44 },
        focusPosition: { x: 58, y: 44 },
        wasteReductionTip: "Plan premium, ground, trim, and stock streams before the animal is processed.",
        uses: [
          {
            title: "Fresh and frozen cuts",
            category: "Food",
            description: "Use steaks, roasts, stew meat, and ground products according to customer demand and storage capacity.",
            resourceRespectNote: "A cut sheet aligned to real demand prevents unsold inventory."
          },
          {
            title: "Value-added prepared items",
            category: "Food",
            description: "Turn trim and less familiar cuts into sausages, broth packs, stew bundles, or ready-to-cook farm shares where allowed.",
            resourceRespectNote: "Value-added planning honors cuts that are often overlooked."
          },
          {
            title: "Community freezer program",
            category: "Farm inputs",
            description: "Package mixed boxes for families, farm crews, or local food access partners.",
            resourceRespectNote: "Balanced boxes make use of the whole animal, not just headline cuts."
          }
        ]
      },
      {
        id: "hide",
        label: "Hide and hair",
        marker: "2",
        position: { x: 52, y: 35 },
        focusPosition: { x: 52, y: 35 },
        wasteReductionTip: "Line up hide preservation or pickup quickly because quality drops if timing slips.",
        uses: [
          {
            title: "Leather or rawhide channel",
            category: "Craft/material",
            description: "Send hides to an appropriate tannery or craft partner when scale, quality, and rules make sense.",
            resourceRespectNote: "A pre-arranged partner keeps a large material stream from becoming waste."
          },
          {
            title: "Educational material sample",
            category: "Education",
            description: "Use approved samples to teach fiber, leather, and food-system resource cycles.",
            resourceRespectNote: "Education helps customers understand the full resource story."
          },
          {
            title: "Compost contingency",
            category: "Compost/soil",
            description: "If reuse is not practical, route unsuitable material through approved compost or disposal channels.",
            resourceRespectNote: "A respectful fallback is still part of a good plan."
          }
        ]
      },
      {
        id: "bones-fat-organs",
        label: "Bones, fat, and organs",
        marker: "3",
        position: { x: 73, y: 58 },
        focusPosition: { x: 73, y: 58 },
        wasteReductionTip: "Separate edible offal, bones, and fat by use case instead of treating them as one stream.",
        uses: [
          {
            title: "Bones for stock",
            category: "Food",
            description: "Offer soup bones, marrow bones, and broth packs to customers who want traditional kitchen uses.",
            resourceRespectNote: "Clear labeling makes unfamiliar parts easier to use."
          },
          {
            title: "Tallow and soap making",
            category: "Craft/material",
            description: "Rendered fat can support cooking, candles, soaps, or salves where regulations and facilities allow.",
            resourceRespectNote: "Small-batch trials reveal which products your farm can maintain responsibly."
          },
          {
            title: "Organ meat education",
            category: "Food",
            description: "Use recipe cards or farm-share notes to help customers cook liver, heart, tongue, and other edible organs.",
            resourceRespectNote: "Education can turn avoided cuts into valued nutrition."
          }
        ]
      },
      {
        id: "manure",
        label: "Manure",
        marker: "4",
        position: { x: 88, y: 44 },
        focusPosition: { x: 88, y: 48 },
        wasteReductionTip: "Treat manure as a planned fertility stream with timing, storage, and runoff controls.",
        uses: [
          {
            title: "Composted fertility",
            category: "Compost/soil",
            description: "Compost manure with bedding and carbon material to support fields, gardens, or pasture improvement.",
            resourceRespectNote: "Good composting turns a liability into soil health."
          },
          {
            title: "Pasture nutrient map",
            category: "Farm inputs",
            description: "Track where nutrients are produced and where they are needed to reduce purchased inputs.",
            resourceRespectNote: "Mapping prevents both shortage and overload."
          },
          {
            title: "Bedding cycle review",
            category: "Waste prevention",
            description: "Pair manure planning with bedding choices so the whole barn cleanout has a destination.",
            resourceRespectNote: "A bedding plan makes compost more predictable."
          }
        ]
      }
    ]
  },
  {
    id: "sheep",
    name: "Sheep",
    summary:
      "A sheep resource atlas for wool, meat, bones, lanolin, manure, and small-farm education pathways.",
    imageAsset: "assets/farm-atlas/sheep.png",
    stewardshipNotes: [
      "Sort wool by quality before it is mixed or contaminated.",
      "Plan freezer, fiber, and compost channels around seasonal farm rhythms.",
      "Use clear customer education for less familiar cuts and fiber grades."
    ],
    regions: [
      {
        id: "wool",
        label: "Wool fleece",
        marker: "1",
        position: { x: 56, y: 42 },
        focusPosition: { x: 56, y: 42 },
        wasteReductionTip: "Skirt and sort wool early so clean fleece, seconds, and compost-grade fiber do not mix.",
        uses: [
          {
            title: "Yarn, batting, and roving",
            category: "Craft/material",
            description: "Send quality fleece to a mill or local fiber artist for yarn, roving, felt, or batting.",
            resourceRespectNote: "Sorting protects the value of the best fiber."
          },
          {
            title: "Garden mulch trials",
            category: "Farm inputs",
            description: "Lower-grade wool can be tested as mulch, weed suppression, or moisture-retention material.",
            resourceRespectNote: "Trial small areas first and record results."
          },
          {
            title: "Compost carbon balance",
            category: "Compost/soil",
            description: "Waste wool can enter compost slowly when mixed with active material and enough moisture.",
            resourceRespectNote: "Slow breakdown still has value when planned."
          }
        ]
      },
      {
        id: "meat",
        label: "Meat cuts",
        marker: "2",
        position: { x: 58, y: 55 },
        focusPosition: { x: 58, y: 55 },
        wasteReductionTip: "Use cut sheets that balance roasts, chops, stew meat, trim, and bones.",
        uses: [
          {
            title: "Fresh and frozen lamb or mutton",
            category: "Food",
            description: "Plan retail cuts, mixed boxes, or family shares based on local demand and freezer capacity.",
            resourceRespectNote: "Demand-based cutting reduces slow-moving inventory."
          },
          {
            title: "Stew and ground bundles",
            category: "Food",
            description: "Group trim and tougher cuts into practical meal bundles with simple cooking notes.",
            resourceRespectNote: "Useful instructions make every cut more likely to be eaten."
          },
          {
            title: "Bones for stock",
            category: "Food",
            description: "Package bones for broth, soups, or traditional recipes where customers want them.",
            resourceRespectNote: "A clear label can turn bones into a requested product."
          }
        ]
      },
      {
        id: "lanolin-hide",
        label: "Lanolin and hide",
        marker: "3",
        position: { x: 33, y: 40 },
        focusPosition: { x: 34, y: 39 },
        wasteReductionTip: "Identify whether fiber, hide, or lanolin recovery makes sense at your scale before committing storage space.",
        uses: [
          {
            title: "Lanolin learning pathway",
            category: "Craft/material",
            description: "Track greasy wool quantities for possible lanolin, soap, or salve partnerships.",
            resourceRespectNote: "Partnerships can make small streams viable."
          },
          {
            title: "Sheepskin partner",
            category: "Craft/material",
            description: "Arrange a qualified hide or sheepskin processor if quality, timing, and regulations allow.",
            resourceRespectNote: "The best use is the one you can handle well and consistently."
          },
          {
            title: "Fiber system display",
            category: "Education",
            description: "Use wool grades and samples to explain the path from animal care to finished material.",
            resourceRespectNote: "Visual learning reinforces resource respect."
          }
        ]
      },
      {
        id: "manure",
        label: "Manure and bedding",
        marker: "4",
        position: { x: 79, y: 55 },
        focusPosition: { x: 79, y: 57 },
        wasteReductionTip: "Plan bedding, manure, and compost as one nutrient-management stream.",
        uses: [
          {
            title: "Composted pasture fertility",
            category: "Compost/soil",
            description: "Combine manure and bedding into compost for pasture, orchard, or garden fertility planning.",
            resourceRespectNote: "Compost connects animal care to soil care."
          },
          {
            title: "Nutrient cycling record",
            category: "Farm inputs",
            description: "Track bedding volume, pile temperature, and field application timing.",
            resourceRespectNote: "Records help avoid both nutrient waste and over-application."
          },
          {
            title: "Farm tour example",
            category: "Education",
            description: "Show how shelter bedding becomes compost and returns to the farm landscape.",
            resourceRespectNote: "A simple loop is often the clearest sustainability lesson."
          }
        ]
      }
    ]
  }
];

function pathway(title, category, description, resourceRespectNote) {
  return { title, category, description, resourceRespectNote };
}

function setProfessionalAtlas() {
  const chicken = animals.find((animal) => animal.id === "chicken");
  chicken.summary =
    "A professional poultry planning atlas for retail cuts, secondary parts, edible byproducts, feathers, shells, and nutrient streams.";
  chicken.stewardshipNotes = [
    "Separate retail cuts, trim, edible byproducts, and compost streams before processing starts.",
    "Use inspected processors and local compliance guidance for any product entering commerce.",
    "Build customer education around unfamiliar cuts so high-value food is not left behind."
  ];
  chicken.regions = [
    {
      id: "breast",
      label: "Breast",
      position: { x: 54, y: 50 },
      focusPosition: { x: 54, y: 50 },
      zone: { width: 25, height: 14, rotate: -4 },
      wasteReductionTip: "Split premium breast packs from tenders and trim so each stream has a clear sale or kitchen use.",
      uses: [
        pathway("Boneless breast packs", "Retail cut", "Merchandise whole, split, or portioned breast packs for direct sale or farm kitchen production.", "Portion consistency helps chefs and customers use the product before quality declines."),
        pathway("Tenders", "Retail cut", "Separate tenderloins for quick-cook packs, kids' meals, or prepared foods where allowed.", "Naming smaller pieces clearly prevents them from disappearing into trim."),
        pathway("Breast trim", "Value-added", "Route clean trim into sausage, ground poultry, dumpling filling, or prepared meals where regulation allows.", "Trim should be planned as a product, not treated as a leftover."),
        pathway("Yield tracking", "Operations", "Record breast yield by flock, weight class, and processor to improve future cut sheets.", "Better records help farmers choose the most respectful sales mix.")
      ]
    },
    {
      id: "wings",
      label: "Wings",
      position: { x: 37, y: 42 },
      focusPosition: { x: 37, y: 42 },
      zone: { width: 22, height: 16, rotate: -20 },
      wasteReductionTip: "Decide ahead whether wings sell whole, split, or bundled so small parts are not underpriced.",
      uses: [
        pathway("Whole wings", "Retail cut", "Sell whole wings for grilling, roasting, or restaurant packs.", "Whole-wing packs keep handling simple and reduce small-piece loss."),
        pathway("Drumette and flat split", "Retail cut", "Split wings into drumettes and flats for premium party packs or food service.", "Splitting only makes sense when labor and demand justify it."),
        pathway("Wing tips", "Stock", "Save wing tips for stock, broth kits, or sauce bases.", "Tips carry flavor even when they are not a centerpiece cut."),
        pathway("Menu bundle", "Sales planning", "Bundle wings with sauces, farm vegetables, or recipe cards.", "A use suggestion helps customers move from purchase to meal.")
      ]
    },
    {
      id: "legs",
      label: "Legs and thighs",
      position: { x: 59, y: 67 },
      focusPosition: { x: 59, y: 67 },
      zone: { width: 30, height: 18, rotate: 10 },
      wasteReductionTip: "Use leg quarters, drums, thighs, bones, and trim as distinct inventory groups.",
      uses: [
        pathway("Leg quarters", "Retail cut", "Pack leg quarters for roasting, braising, barbecue, or value boxes.", "Value cuts help customers use the whole bird economically."),
        pathway("Drumsticks", "Retail cut", "Separate drumsticks for family packs, school meals, or food service where demand exists.", "Clear pack sizes prevent awkward leftover inventory."),
        pathway("Bone-in thighs", "Retail cut", "Offer thighs as high-flavor braising or grilling cuts.", "Cooking guidance helps customers appreciate darker meat."),
        pathway("Deboned thigh trim", "Value-added", "Use deboned trim for ground poultry, kebab pieces, or prepared foods where allowed.", "Labor-heavy cuts should be matched to a real sales channel.")
      ]
    },
    {
      id: "frame",
      label: "Frame and neck",
      position: { x: 66, y: 48 },
      focusPosition: { x: 66, y: 48 },
      zone: { width: 19, height: 20, rotate: 6 },
      wasteReductionTip: "Keep frames, backs, and necks clean and labeled so broth customers can find them.",
      uses: [
        pathway("Soup frames", "Stock", "Package backs, frames, and necks for broth and soup customers.", "Broth packs convert bones into a familiar kitchen product."),
        pathway("Necks", "Specialty cut", "Offer necks for traditional recipes, stock, or pet-food programs reviewed by a qualified advisor.", "Specialty parts need clear labels and safe-use guidance."),
        pathway("Rendered stock base", "Value-added", "Use inspected kitchens to make stock or demi-style bases where permitted.", "Processing can turn low-demand parts into stable staples."),
        pathway("Freezer rotation", "Inventory", "Track bone-pack age separately from premium cuts.", "Lower-priced products still need active inventory discipline.")
      ]
    },
    {
      id: "giblets",
      label: "Giblets and feet",
      position: { x: 47, y: 78 },
      focusPosition: { x: 47, y: 78 },
      zone: { width: 24, height: 14, rotate: 4 },
      wasteReductionTip: "Separate edible giblets, feet, and non-edible material immediately for food safety and value.",
      uses: [
        pathway("Liver and heart packs", "Edible byproduct", "Package edible giblets for pate, gravy, skewers, or traditional dishes where allowed.", "Education turns unfamiliar parts into usable nutrition."),
        pathway("Feet for gelatin stock", "Specialty food", "Offer clean feet for collagen-rich stocks in markets where customers request them.", "Specific labeling prevents customers from overlooking a valuable part."),
        pathway("Gizzard packs", "Specialty food", "Sell gizzards for braising, frying, or cultural recipes.", "Respect includes supporting diverse cooking traditions."),
        pathway("Compliance sort", "Operations", "Document which byproducts are edible, non-edible, compost, or rendering streams.", "A clear sort protects both safety and value.")
      ]
    },
    {
      id: "feathers-shells",
      label: "Feathers and shells",
      position: { x: 35, y: 31 },
      focusPosition: { x: 35, y: 31 },
      zone: { width: 28, height: 16, rotate: -12 },
      wasteReductionTip: "Keep feathers dry and shells clean if they are intended for material, education, or soil pathways.",
      uses: [
        pathway("Feather meal partner", "Farm input", "Track feather volume for potential composting, feather meal, or local research partnerships.", "Volume records show whether a reuse path is viable."),
        pathway("Craft and education kits", "Material", "Use clean feathers for farm education, natural material displays, or local maker projects.", "Small uses still communicate whole-resource respect."),
        pathway("Crushed eggshell calcium", "Soil", "Dry and crush shells for compost or soil planning where calcium is needed.", "Apply based on soil need rather than habit."),
        pathway("Compost balance", "Compost", "Mix slow-breakdown feathers with active compost and carbon material.", "A managed pile prevents reuse from becoming a nuisance.")
      ]
    }
  ];

  const cow = animals.find((animal) => animal.id === "cow");
  cow.summary =
    "A professional beef and dairy resource atlas for primal cuts, retail cut planning, organs, fat, hide, hair, milk, manure, and processor coordination.";
  cow.stewardshipNotes = [
    "Use licensed processors and inspection guidance for all edible products.",
    "Build cut sheets from real customer demand, cold-storage capacity, and processor capability.",
    "Plan hide, hair, bones, fat, offal, milk, and manure channels before harvest or production peaks."
  ];
  cow.regions = [
    {
      id: "chuck-neck",
      label: "Chuck and neck",
      position: { x: 35, y: 43 },
      focusPosition: { x: 35, y: 43 },
      zone: { width: 20, height: 18, rotate: -8 },
      wasteReductionTip: "Separate roasts, flat iron opportunities, grind trim, neck bones, and stew cuts before the cut sheet is finalized.",
      uses: [
        pathway("Chuck roasts", "Beef cut", "Plan chuck roast, arm roast, shoulder roast, or pot-roast packs for slow cooking.", "Clear cooking notes help customers value working-muscle cuts."),
        pathway("Flat iron and shoulder steaks", "Beef cut", "Where processor skill allows, pull flat iron, ranch steak, or shoulder tender cuts.", "Skilled seam butchery can raise value without wasting trim."),
        pathway("Neck bones and stew", "Beef cut", "Package neck bones, stew meat, and braising pieces for soups and traditional recipes.", "Specific naming prevents these parts from being hidden in anonymous trim."),
        pathway("Ground beef trim", "Ground/value", "Use chuck trim to balance lean-to-fat ratios in ground beef or patties.", "Ground programs should have target ratios and pack sizes.")
      ]
    },
    {
      id: "rib-loin",
      label: "Rib and loin",
      position: { x: 55, y: 41 },
      focusPosition: { x: 55, y: 41 },
      zone: { width: 25, height: 16, rotate: 2 },
      wasteReductionTip: "Protect premium cuts with exact specs for thickness, aging, bone-in choices, and packaging.",
      uses: [
        pathway("Ribeye and rib roast", "Premium cut", "Specify ribeye steaks, standing rib roasts, back ribs, or boneless rib sections based on buyer demand.", "Premium decisions should avoid creating slow-moving luxury inventory."),
        pathway("Strip loin and T-bone", "Premium cut", "Choose strip steaks, T-bones, porterhouse, or boneless loin options depending on processor capability.", "One loin choice affects several downstream cuts, so decide deliberately."),
        pathway("Tenderloin", "Premium cut", "Track tenderloin as a small, high-value inventory item with careful allocation.", "Limited cuts need fair, transparent sales planning."),
        pathway("Back ribs and trim", "Secondary cut", "Route ribs and loin trim into barbecue packs, stew trim, or ground blend.", "Premium areas still produce valuable secondary pieces.")
      ]
    },
    {
      id: "round-sirloin",
      label: "Round and sirloin",
      position: { x: 75, y: 48 },
      focusPosition: { x: 75, y: 48 },
      zone: { width: 21, height: 18, rotate: 8 },
      wasteReductionTip: "Plan lean cuts with cooking guidance so they do not become unwanted freezer inventory.",
      uses: [
        pathway("Top round and London broil", "Beef cut", "Offer top round steaks, London broil, or thin-sliced roast packs.", "Lean cuts sell better when their best cooking methods are explicit."),
        pathway("Sirloin steaks", "Beef cut", "Cut sirloin steaks, sirloin tip, or tri-tip where appropriate.", "Regional naming should match what customers recognize."),
        pathway("Rump and eye round roasts", "Roast", "Use eye round, rump, and bottom round for roast programs or deli-style slicing.", "Roast cuts need portion sizes that fit household demand."),
        pathway("Jerky and thin slice", "Value-added", "Route lean trim into jerky, minute steaks, or stir-fry packs where permitted.", "Value-added lean programs reduce pressure on ground beef.")
      ]
    },
    {
      id: "brisket-plate-flank",
      label: "Brisket, plate, and flank",
      position: { x: 54, y: 61 },
      focusPosition: { x: 54, y: 61 },
      zone: { width: 30, height: 12, rotate: 0 },
      wasteReductionTip: "Give thin and fatty cuts clear identities: brisket, skirt, flank, short ribs, plate trim, and grind.",
      uses: [
        pathway("Brisket", "Beef cut", "Sell whole, point/flat, or smaller brisket packs for smoking and braising.", "Right-sized brisket packs prevent customers from skipping a large cut."),
        pathway("Skirt and flank", "Specialty cut", "Identify skirt, flank, flap, or bavette-style options when the processor can separate them.", "Specialty cuts need accurate naming and fast sales channels."),
        pathway("Short ribs", "Beef cut", "Offer English-cut, flanken, or plate short ribs based on market preference.", "Cut style should follow customer cooking habits."),
        pathway("Fatty trim blend", "Ground/value", "Use plate and brisket trim to enrich ground beef, sausage, or burger blends where allowed.", "Fat is a resource when measured and blended intentionally.")
      ]
    },
    {
      id: "organs-bones-fat",
      label: "Organs, bones, and fat",
      position: { x: 67, y: 66 },
      focusPosition: { x: 67, y: 66 },
      zone: { width: 18, height: 9, rotate: 4 },
      wasteReductionTip: "Sort edible offal, bones, suet, trim fat, and non-edible material into separate labeled streams.",
      uses: [
        pathway("Liver, heart, tongue, and oxtail", "Offal", "Plan edible organ and specialty packs with recipe support and customer education.", "Unfamiliar parts need guidance to become meals."),
        pathway("Soup and marrow bones", "Bones", "Package knuckle, marrow, neck, and soup bones for broth customers.", "Bone packs honor flavor and minerals that would otherwise be lost."),
        pathway("Suet and tallow", "Fat/rendering", "Route suet and trim fat to tallow, soap, candles, cooking fat, or processor-approved rendering.", "Fat streams need temperature control and quick decisions."),
        pathway("Pet or feed review", "Byproduct compliance", "Only consider pet-food or feed channels with qualified regulatory and veterinary guidance.", "Low-waste planning cannot outrun safety rules.")
      ]
    },
    {
      id: "hide-hair",
      label: "Hide and hair",
      position: { x: 52, y: 28 },
      focusPosition: { x: 52, y: 28 },
      zone: { width: 46, height: 12, rotate: 2 },
      wasteReductionTip: "Line up hide preservation, salt, tannery pickup, or disposal before quality degrades.",
      uses: [
        pathway("Leather or hide-on tanning", "Material", "Send quality hides to a tannery or hide processor when economics and timing work.", "A confirmed partner keeps a large material stream from becoming waste."),
        pathway("Hair-on educational samples", "Education", "Use approved samples to teach customers about animal, fiber, leather, and food-system cycles.", "Education builds respect for non-meat resources."),
        pathway("Rawhide or craft channel", "Material", "Explore rawhide, drum, dog-chew, or craft channels only where compliant and practical.", "Material uses need both legality and consistent handling."),
        pathway("Compost/disposal fallback", "Contingency", "Plan approved fallback routes for hides that cannot be preserved or sold.", "A fallback is part of professional resource planning.")
      ]
    },
    {
      id: "milk-dairy",
      label: "Milk and dairy",
      position: { x: 59, y: 82 },
      focusPosition: { x: 59, y: 82 },
      zone: { width: 15, height: 8, rotate: 0 },
      wasteReductionTip: "For dairy animals, plan fluid milk, cream, whey, colostrum rules, and rejected milk streams separately.",
      uses: [
        pathway("Fluid milk planning", "Dairy", "Track production, cooling, testing, and sales windows for fluid milk where licensed.", "Milk waste drops when demand and cold chain are planned daily."),
        pathway("Cream, butter, yogurt, cheese", "Value-added dairy", "Route surplus into value-added dairy only with proper facilities and permits.", "Value-added dairy protects surplus from becoming loss."),
        pathway("Whey and skim streams", "Byproduct", "Plan whey, skim, or wash-water streams for approved feed, compost, or disposal pathways.", "Secondary dairy streams can carry nutrient value and environmental risk."),
        pathway("Quality holds", "Compliance", "Separate milk that cannot enter food channels because of treatment, testing, or quality issues.", "Clear holds protect customers and the farm brand.")
      ]
    },
    {
      id: "manure-bedding",
      label: "Manure and bedding",
      position: { x: 88, y: 44 },
      focusPosition: { x: 88, y: 48 },
      zone: { width: 17, height: 14, rotate: 4 },
      wasteReductionTip: "Treat manure, bedding, runoff, and field application as one nutrient-management system.",
      uses: [
        pathway("Composted fertility", "Compost/soil", "Compost manure with bedding and carbon material for pasture, garden, or field fertility.", "Composting turns a liability into soil health when managed well."),
        pathway("Nutrient application map", "Farm input", "Map where nutrients are produced, stored, and applied to reduce purchased fertility and runoff risk.", "Good maps prevent both shortage and overload."),
        pathway("Bedding stream design", "Operations", "Choose bedding with the final compost or land-application pathway in mind.", "A bedding decision is also a soil decision."),
        pathway("Odor and runoff controls", "Risk control", "Track pile location, cover, drainage, and timing to respect neighbors and waterways.", "Professional stewardship includes the land around the barn.")
      ]
    }
  ];

  const sheep = animals.find((animal) => animal.id === "sheep");
  sheep.summary =
    "A professional sheep atlas for lamb and mutton cuts, wool grades, lanolin, hide, bones, offal, manure, and processor planning.";
  sheep.stewardshipNotes = [
    "Sort wool before contamination removes value.",
    "Use cut sheets that match lamb size, customer cooking habits, and freezer capacity.",
    "Plan edible byproducts, bones, hides, lanolin, and manure as separate streams."
  ];
  sheep.regions = [
    {
      id: "shoulder-neck",
      label: "Shoulder and neck",
      position: { x: 35, y: 47 },
      focusPosition: { x: 35, y: 47 },
      zone: { width: 25, height: 20, rotate: -6 },
      wasteReductionTip: "Give shoulder, neck, stew, and ground programs clear names and recipes.",
      uses: [
        pathway("Shoulder roasts", "Lamb cut", "Cut shoulder roasts, blade chops, or diced shoulder for braising and roasting.", "Cooking guidance moves economical cuts faster."),
        pathway("Neck slices", "Specialty cut", "Offer neck slices for braises, soups, or traditional recipes.", "Specific labels keep specialty pieces visible."),
        pathway("Stew meat", "Value cut", "Package shoulder trim into stew packs with herbs or recipe cards.", "Meal framing helps customers use tougher cuts."),
        pathway("Ground lamb or mutton", "Ground/value", "Blend trim into ground packs, patties, or sausage where allowed.", "Ground programs should not erase higher-value specialty cuts.")
      ]
    },
    {
      id: "rack-loin",
      label: "Rack and loin",
      position: { x: 54, y: 48 },
      focusPosition: { x: 54, y: 48 },
      zone: { width: 30, height: 19, rotate: 2 },
      wasteReductionTip: "Protect rack and loin value with clear chop thickness, bone-in choices, and packaging specs.",
      uses: [
        pathway("Rib chops and rack", "Premium cut", "Sell rib chops, hotel racks, or frenched racks based on customer and processor capability.", "Premium specs should be set before cutting begins."),
        pathway("Loin chops", "Premium cut", "Package loin chops, saddle, or boneless loin for quick-cook retail packs.", "Small premium inventory needs deliberate allocation."),
        pathway("Tenderloin", "Premium cut", "Track tenderloin separately if processor separation is feasible.", "Tiny high-value cuts disappear without a plan."),
        pathway("Trim and bones", "Stock/value", "Route rack and loin trim, ribs, and bones into broth or ground programs.", "Premium areas still produce useful secondary parts.")
      ]
    },
    {
      id: "leg",
      label: "Leg",
      position: { x: 77, y: 54 },
      focusPosition: { x: 77, y: 54 },
      zone: { width: 25, height: 22, rotate: 7 },
      wasteReductionTip: "Offer leg cuts in household-friendly sizes so large roasts do not stall sales.",
      uses: [
        pathway("Whole or half leg", "Lamb cut", "Sell whole leg, half leg, or boneless roast according to household size.", "Right-sizing honors the cut and the buyer."),
        pathway("Leg steaks", "Retail cut", "Cut leg steaks for quick-cook packs or grilling.", "Alternative formats keep leg meat from being only a holiday item."),
        pathway("Shanks", "Specialty cut", "Separate hind shanks for braising packs.", "Shanks sell well when customers understand low-and-slow cooking."),
        pathway("Lean trim", "Value-added", "Use lean leg trim for kebab, jerky, stew, or sausage programs where allowed.", "Lean trim deserves a product path before it becomes generic grind.")
      ]
    },
    {
      id: "wool-lanolin",
      label: "Wool and lanolin",
      position: { x: 56, y: 31 },
      focusPosition: { x: 56, y: 31 },
      zone: { width: 55, height: 20, rotate: 1 },
      wasteReductionTip: "Skirt, grade, and store wool quickly so clean fleece, seconds, tags, and compost-grade fiber do not mix.",
      uses: [
        pathway("Fine fleece", "Fiber", "Route quality fleece to yarn, roving, batting, felt, or local fiber artists.", "Sorting protects the value of the best fiber."),
        pathway("Lanolin stream", "Material", "Track greasy wool volume for possible lanolin, soap, salve, or maker partnerships.", "Partnerships can make small streams viable."),
        pathway("Seconds and tags", "Farm input", "Use lower-grade wool for mulch, erosion control trials, or compost where appropriate.", "Low-grade fiber still has land-based value."),
        pathway("Fiber education", "Education", "Show wool grades, staple length, and processing stages to visitors or buyers.", "Visible grading teaches why careful handling matters.")
      ]
    },
    {
      id: "hide-bones-offal",
      label: "Hide, bones, and offal",
      position: { x: 45, y: 66 },
      focusPosition: { x: 45, y: 66 },
      zone: { width: 33, height: 17, rotate: 4 },
      wasteReductionTip: "Separate edible offal, soup bones, hides, and non-edible streams immediately.",
      uses: [
        pathway("Liver, heart, kidney", "Offal", "Package edible organs with cooking notes for customers who want traditional uses.", "Education protects valuable nutrition from being ignored."),
        pathway("Bones for stock", "Bones", "Offer neck, shank, and soup bones for broth and sauces.", "Bones carry flavor and should be named as a product."),
        pathway("Sheepskin partner", "Material", "Arrange qualified sheepskin or hide processing before timing reduces quality.", "Hide value depends on fast handling."),
        pathway("Compliance sort", "Operations", "Document edible, rendering, compost, and disposal streams separately.", "A professional sort protects safety and value.")
      ]
    },
    {
      id: "manure-bedding",
      label: "Manure and bedding",
      position: { x: 79, y: 71 },
      focusPosition: { x: 79, y: 71 },
      zone: { width: 24, height: 14, rotate: 8 },
      wasteReductionTip: "Plan bedding, manure, and pasture application as one nutrient-management stream.",
      uses: [
        pathway("Composted pasture fertility", "Compost/soil", "Combine manure and bedding into compost for pasture, orchard, or garden fertility.", "Compost connects animal care to soil care."),
        pathway("Nutrient cycling record", "Farm input", "Track bedding volume, pile temperature, curing time, and field application timing.", "Records reduce nutrient waste and over-application."),
        pathway("Bedding selection", "Operations", "Choose straw, wood, or other bedding with final compost use in mind.", "Inputs and outputs should be planned together."),
        pathway("Farm tour example", "Education", "Show how shelter bedding becomes compost and returns to fields.", "A simple loop makes sustainability visible.")
      ]
    }
  ];
}

setProfessionalAtlas();

const elements = {
  animalGrid: document.querySelector("#animalGrid"),
  atlasTitle: document.querySelector("#atlasTitle"),
  animalImage: document.querySelector("#animalImage"),
  animalSummary: document.querySelector("#animalSummary"),
  regionMarkers: document.querySelector("#regionMarkers"),
  regionKey: document.querySelector("#regionKey"),
  detailPanel: document.querySelector(".detail-panel"),
  regionTitle: document.querySelector("#regionTitle"),
  regionTip: document.querySelector("#regionTip"),
  useList: document.querySelector("#useList"),
  planList: document.querySelector("#planList"),
  savedCount: document.querySelector("#savedCount"),
  toast: document.querySelector("#toast"),
  viewPlanBtn: document.querySelector("#viewPlanBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  copyPlanBtn: document.querySelector("#copyPlanBtn"),
  clearPlanBtn: document.querySelector("#clearPlanBtn"),
  printBtn: document.querySelector("#printBtn")
};

let selectedAnimalId = animals[0].id;
let selectedRegionId = animals[0].regions[0].id;
let savedUses = restoreSavedUses();

function getAnimal(id = selectedAnimalId) {
  return animals.find((animal) => animal.id === id) || animals[0];
}

function getRegion(animal = getAnimal(), id = selectedRegionId) {
  return animal.regions.find((region) => region.id === id) || animal.regions[0];
}

function useKey(animalId, regionId, title) {
  return `${animalId}:${regionId}:${title}`;
}

function regionFocusStyle(region) {
  const focus = region.focusPosition || region.position;
  return `--focus-x:${focus.x}%; --focus-y:${focus.y}%`;
}

function markerStyle(region) {
  const zone = region.zone || { width: 24, height: 16, rotate: 0 };
  return [
    `left:${region.position.x}%`,
    `top:${region.position.y}%`,
    `--zone-w:${zone.width}%`,
    `--zone-h:${zone.height}%`,
    `--zone-rotate:${zone.rotate || 0}deg`
  ].join("; ");
}

function restoreSavedUses() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return new Set();
  }
}

function persistSavedUses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedUses]));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("show"), 1700);
}

function renderAnimalGrid() {
  elements.animalGrid.innerHTML = animals
    .map((animal) => {
      const savedForAnimal = [...savedUses].filter((key) => key.startsWith(`${animal.id}:`)).length;
      return `
        <button class="animal-card ${animal.id === selectedAnimalId ? "active" : ""}" type="button" data-animal-id="${animal.id}">
          <span class="animal-image-wrap">
            <img src="${animal.imageAsset}" alt="Illustrated ${animal.name.toLowerCase()}" />
          </span>
          <span class="animal-card-copy">
            <span>
              <strong>${animal.name}</strong>
              <small>${animal.regions.length} zones · ${savedForAnimal} saved</small>
            </span>
            <em>Open atlas</em>
          </span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-animal-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAnimalId = button.dataset.animalId;
      selectedRegionId = getAnimal().regions[0].id;
      render();
    });
  });
}

function renderAtlas() {
  const animal = getAnimal();
  const region = getRegion(animal);
  elements.atlasTitle.textContent = animal.name;
  elements.animalImage.src = animal.imageAsset;
  elements.animalImage.alt = `Illustrated ${animal.name.toLowerCase()}`;
  elements.animalSummary.textContent = animal.summary;

  elements.regionMarkers.innerHTML = animal.regions
    .map(
      (item) => `
        <button
          class="region-marker ${item.id === region.id ? "active" : ""}"
          type="button"
          style="${markerStyle(item)}"
          data-region-id="${item.id}"
          aria-label="Open ${item.label}"
        >
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  if (elements.regionKey) {
    elements.regionKey.innerHTML = animal.regions
      .map(
        (item) => `
          <button class="region-key-item ${item.id === region.id ? "active" : ""}" type="button" data-key-region-id="${item.id}">
            <span>${item.label}</span>
          </button>
        `
      )
      .join("");
  }

  document.querySelectorAll("[data-region-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRegionId = button.dataset.regionId;
      render();
    });
  });

  document.querySelectorAll("[data-key-region-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRegionId = button.dataset.keyRegionId;
      render();
    });
  });

  elements.regionTitle.textContent = region.label;
  elements.regionTip.textContent = region.wasteReductionTip;
  elements.detailPanel.classList.remove("pop");
  void elements.detailPanel.offsetWidth;
  elements.detailPanel.classList.add("pop");
  elements.useList.innerHTML = `
    <div class="assistant-bubble">
      <span>Professional atlas</span>
      <p>${region.label} is selected and glowing on the atlas. Review the cut, byproduct, compliance, and resource pathways below, then save the options that fit your farm or butcher plan.</p>
    </div>
  ` + region.uses
    .map((use) => {
      const key = useKey(animal.id, region.id, use.title);
      const isSaved = savedUses.has(key);
      return `
        <article class="use-card" style="${regionFocusStyle(region)}">
          <div class="use-card-top">
            <span class="category">${use.category}</span>
            <button class="save-button ${isSaved ? "saved" : ""}" type="button" data-use-key="${key}">
              ${isSaved ? "Added" : "Add"}
            </button>
          </div>
          <h4>${use.title}</h4>
          <p>${use.description}</p>
          <small>${use.resourceRespectNote}</small>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-use-key]").forEach((button) => {
    button.addEventListener("click", () => {
      if (savedUses.has(button.dataset.useKey)) {
        savedUses.delete(button.dataset.useKey);
        showToast("Removed from plan");
      } else {
        savedUses.add(button.dataset.useKey);
        showToast("Saved to plan");
      }
      persistSavedUses();
      render();
    });
  });
}

function getSavedPlanItems() {
  const items = [];
  animals.forEach((animal) => {
    animal.regions.forEach((region) => {
      region.uses.forEach((use) => {
        const key = useKey(animal.id, region.id, use.title);
        if (savedUses.has(key)) {
          items.push({
            key,
            animal: animal.name,
            region: region.label,
            title: use.title,
            category: use.category,
            description: use.description,
            note: use.resourceRespectNote,
            wasteReductionTip: region.wasteReductionTip
          });
        }
      });
    });
  });
  return items;
}

function renderPlan() {
  const items = getSavedPlanItems();
  elements.savedCount.textContent = `${items.length} saved`;

  if (!items.length) {
    elements.planList.innerHTML = `
      <div class="empty-plan">
        <strong>No saved uses yet.</strong>
        <p>Tap glowing body zones and save the pathways that fit your farm or butcher shop.</p>
      </div>
    `;
    return;
  }

  elements.planList.innerHTML = items
    .map(
      (item) => `
        <article class="plan-item">
          <div>
            <span class="category">${item.animal} · ${item.region}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <small>${item.note}</small>
          </div>
          <button class="remove-button" type="button" data-remove-key="${item.key}" aria-label="Remove ${item.title}">Remove</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-remove-key]").forEach((button) => {
    button.addEventListener("click", () => {
      savedUses.delete(button.dataset.removeKey);
      persistSavedUses();
      showToast("Removed from plan");
      render();
    });
  });
}

function planSummaryText() {
  const items = getSavedPlanItems();
  if (!items.length) return "Farm Resource Atlas plan: no saved pathways yet.";
  return [
    "Farm Resource Atlas resource plan",
    `Saved pathways: ${items.length}`,
    "",
    ...items.map(
      (item, index) =>
        `${index + 1}. ${item.animal} - ${item.region} - ${item.title}\nCategory: ${item.category}\nUse: ${item.description}\nRespect note: ${item.note}`
    )
  ].join("\n\n");
}

function exportPlan() {
  const payload = {
    product: "Farm Resource Atlas",
    exportedAt: new Date().toISOString(),
    savedUseCases: getSavedPlanItems(),
    stewardshipNotes: animals.map((animal) => ({
      animal: animal.name,
      notes: animal.stewardshipNotes
    }))
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "farm-resource-plan.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast("Plan exported");
}

async function copyPlanSummary() {
  const summary = planSummaryText();
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(summary);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = summary;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
  showToast("Plan summary copied");
}

function render() {
  renderAnimalGrid();
  renderAtlas();
  renderPlan();
}

elements.viewPlanBtn.addEventListener("click", () => {
  document.querySelector("#planPanel").scrollIntoView({ behavior: "smooth", block: "start" });
});
elements.exportBtn.addEventListener("click", exportPlan);
elements.copyPlanBtn.addEventListener("click", copyPlanSummary);
elements.clearPlanBtn.addEventListener("click", () => {
  savedUses = new Set();
  persistSavedUses();
  showToast("Plan cleared");
  render();
});
elements.printBtn.addEventListener("click", () => window.print());

render();

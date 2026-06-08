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
        position: { x: 55, y: 58 },
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
        position: { x: 33, y: 43 },
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
        position: { x: 60, y: 82 },
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
        position: { x: 58, y: 47 },
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
        position: { x: 46, y: 35 },
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
        position: { x: 73, y: 62 },
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
        position: { x: 84, y: 76 },
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
        position: { x: 55, y: 42 },
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
        position: { x: 64, y: 58 },
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
        position: { x: 38, y: 38 },
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
        position: { x: 76, y: 77 },
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

const elements = {
  animalGrid: document.querySelector("#animalGrid"),
  atlasTitle: document.querySelector("#atlasTitle"),
  animalImage: document.querySelector("#animalImage"),
  animalSummary: document.querySelector("#animalSummary"),
  regionMarkers: document.querySelector("#regionMarkers"),
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
  return `--focus-x:${region.position.x}%; --focus-y:${region.position.y}%`;
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
              <small>${animal.regions.length} regions · ${savedForAnimal} saved</small>
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
          style="left:${item.position.x}%; top:${item.position.y}%"
          data-region-id="${item.id}"
          aria-label="Open ${item.label}"
        >
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  document.querySelectorAll("[data-region-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRegionId = button.dataset.regionId;
      render();
    });
  });

  elements.regionTitle.textContent = region.label;
  elements.regionTip.textContent = region.wasteReductionTip;
  elements.useList.innerHTML = `
    <div class="assistant-bubble">
      <span>Atlas assistant</span>
      <p>I found ${region.uses.length} practical pathways for ${animal.name.toLowerCase()} ${region.label.toLowerCase()}. Start with the visual focus, then add the options that fit your farm plan.</p>
    </div>
    <figure class="region-visual" style="${regionFocusStyle(region)}">
      <img src="${animal.imageAsset}" alt="${animal.name} visual focus on ${region.label.toLowerCase()}" />
      <figcaption>
        <span>${animal.name}</span>
        <strong>${region.label}</strong>
      </figcaption>
      <i aria-hidden="true"></i>
    </figure>
  ` + region.uses
    .map((use) => {
      const key = useKey(animal.id, region.id, use.title);
      const isSaved = savedUses.has(key);
      return `
        <article class="use-card" style="${regionFocusStyle(region)}">
          <div class="use-visual" aria-hidden="true">
            <img src="${animal.imageAsset}" alt="" />
            <span>${region.label}</span>
          </div>
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
        <p>Tap animal regions and save the pathways that fit your farm.</p>
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
  if (!items.length) return "Farm Resource Atlas plan: no saved use cases yet.";
  return [
    "Farm Resource Atlas resource plan",
    `Saved use cases: ${items.length}`,
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

const solutions = [
  {
    id: "mangroves",
    name: "Mangrove Belt",
    icon: "MG",
    type: "Nature-based",
    description: "Restores intertidal tree habitat that reduces wave energy and creates blue-carbon value.",
    costPerKm: 8,
    maintenance: 0.22,
    protection: 7.2,
    biodiversity: 9.4,
    carbon: 8.8,
    equity: 7.5,
    speed: 4.2
  },
  {
    id: "oysters",
    name: "Oyster Reef",
    icon: "OR",
    type: "Nature-based",
    description: "Living breakwater that attenuates waves, improves water quality, and supports fisheries.",
    costPerKm: 11,
    maintenance: 0.32,
    protection: 6.8,
    biodiversity: 8.7,
    carbon: 4.8,
    equity: 7.1,
    speed: 6.3
  },
  {
    id: "dunes",
    name: "Dune System",
    icon: "DN",
    type: "Hybrid",
    description: "Sand dunes and native vegetation that buffer surge while preserving beach access.",
    costPerKm: 6,
    maintenance: 0.38,
    protection: 5.9,
    biodiversity: 6.1,
    carbon: 3.2,
    equity: 8.2,
    speed: 7.6
  },
  {
    id: "wetlands",
    name: "Tidal Wetland",
    icon: "TW",
    type: "Nature-based",
    description: "Marsh restoration that stores floodwater, filters runoff, and expands coastal habitat.",
    costPerKm: 9,
    maintenance: 0.24,
    protection: 6.4,
    biodiversity: 9.1,
    carbon: 7.6,
    equity: 7.7,
    speed: 5.1
  },
  {
    id: "seawall",
    name: "Adaptive Seawall",
    icon: "SW",
    type: "Gray infrastructure",
    description: "Hard defense for dense asset zones where immediate flood protection is the priority.",
    costPerKm: 22,
    maintenance: 0.72,
    protection: 9.3,
    biodiversity: 1.8,
    carbon: 1.1,
    equity: 4.8,
    speed: 8.2
  }
];

const controls = {
  projectName: document.querySelector("#projectName"),
  region: document.querySelector("#region"),
  horizon: document.querySelector("#horizon"),
  coastline: document.querySelector("#coastline"),
  population: document.querySelector("#population"),
  assetValue: document.querySelector("#assetValue"),
  stormRisk: document.querySelector("#stormRisk"),
  seaRise: document.querySelector("#seaRise"),
  budget: document.querySelector("#budget"),
  weightProtection: document.querySelector("#weightProtection"),
  weightEcology: document.querySelector("#weightEcology"),
  weightCost: document.querySelector("#weightCost")
};

const outputs = {
  coastlineOut: document.querySelector("#coastlineOut"),
  populationOut: document.querySelector("#populationOut"),
  assetValueOut: document.querySelector("#assetValueOut"),
  stormRiskOut: document.querySelector("#stormRiskOut"),
  seaRiseOut: document.querySelector("#seaRiseOut"),
  budgetOut: document.querySelector("#budgetOut"),
  totalCost: document.querySelector("#totalCost"),
  budgetStatus: document.querySelector("#budgetStatus"),
  protectionGain: document.querySelector("#protectionGain"),
  naturalCapital: document.querySelector("#naturalCapital"),
  avoidedLoss: document.querySelector("#avoidedLoss"),
  payback: document.querySelector("#payback"),
  budgetBadge: document.querySelector("#budgetBadge"),
  mapTitle: document.querySelector("#mapTitle"),
  tileLayer: document.querySelector("#tileLayer"),
  coordinateChip: document.querySelector("#coordinateChip"),
  bleachOverlay: document.querySelector("#bleachOverlay"),
  statusPill: document.querySelector("#statusPill"),
  recommendationList: document.querySelector("#recommendationList"),
  solutionGrid: document.querySelector("#solutionGrid"),
  tradeoffText: document.querySelector("#tradeoffText"),
  briefText: document.querySelector("#briefText")
};

const formatter = new Intl.NumberFormat("en-US");
let selected = new Set(["mangroves", "wetlands", "dunes"]);
let mapState = {
  zoom: 8,
  lat: 25.7617,
  lon: -80.1918
};

const regionCenters = {
  "Gulf Coast": { lat: 25.7617, lon: -80.1918, zoom: 8 },
  "Atlantic Coast": { lat: 34.6851, lon: -76.621, zoom: 8 },
  "Pacific Coast": { lat: 37.7749, lon: -122.4194, zoom: 8 },
  "Great Lakes": { lat: 41.8781, lon: -87.6298, zoom: 8 },
  "Island Community": { lat: 18.2208, lon: -66.5901, zoom: 8 }
};

function money(value) {
  return `$${Math.round(value).toLocaleString("en-US")}M`;
}

function lonToTile(lon, zoom) {
  return Math.floor(((lon + 180) / 360) * 2 ** zoom);
}

function latToTile(lat, zoom) {
  const radians = lat * Math.PI / 180;
  return Math.floor(((1 - Math.log(Math.tan(radians) + 1 / Math.cos(radians)) / Math.PI) / 2) * 2 ** zoom);
}

function renderTiles() {
  if (!outputs.tileLayer) return;
  const centerX = lonToTile(mapState.lon, mapState.zoom);
  const centerY = latToTile(mapState.lat, mapState.zoom);
  const columns = 5;
  const rows = 4;
  const tiles = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const x = centerX + column - Math.floor(columns / 2);
      const y = centerY + row - Math.floor(rows / 2);
      tiles.push(`<img class="map-tile" alt="" src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${mapState.zoom}/${y}/${x}" />`);
    }
  }

  outputs.tileLayer.innerHTML = tiles.join("");
  outputs.coordinateChip.textContent = `${mapState.lat.toFixed(4)}, ${mapState.lon.toFixed(4)} · z${mapState.zoom}`;
}

function renderBleachOverlay(state) {
  if (!outputs.bleachOverlay) return;
  const intensity = Math.min(1, (state.stormRisk / 35 + state.seaRise / 120) / 1.55);
  const points = [
    [218, 512, 0.38], [271, 455, 0.52], [355, 407, 0.72], [492, 365, 0.44],
    [621, 315, 0.66], [753, 279, 0.88], [833, 271, 0.61], [930, 218, 0.92],
    [1003, 162, 0.8], [902, 458, 0.57], [762, 548, 0.46], [588, 617, 0.71],
    [424, 548, 0.54], [314, 615, 0.86], [1028, 383, 0.64]
  ];

  outputs.bleachOverlay.innerHTML = points.map(([x, y, base], index) => {
    const risk = Math.min(1, base * 0.55 + intensity * 0.65);
    const color = risk > 0.75 ? "#df1f2d" : risk > 0.55 ? "#ff7b22" : "#f7e84a";
    const radius = Math.round(7 + risk * 17 + (index % 3) * 2);
    return `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" opacity="${0.34 + risk * 0.4}" />`;
  }).join("");
}

function getState() {
  return {
    projectName: controls.projectName.value,
    region: controls.region.value,
    horizon: Number(controls.horizon.value),
    coastline: Number(controls.coastline.value),
    population: Number(controls.population.value),
    assetValue: Number(controls.assetValue.value),
    stormRisk: Number(controls.stormRisk.value),
    seaRise: Number(controls.seaRise.value),
    budget: Number(controls.budget.value),
    weightProtection: Number(controls.weightProtection.value),
    weightEcology: Number(controls.weightEcology.value),
    weightCost: Number(controls.weightCost.value),
    selected: [...selected]
  };
}

function modelPortfolio(state) {
  const active = solutions.filter((solution) => selected.has(solution.id));
  const lengthFactor = Math.max(0.35, Math.min(1, state.coastline / 18));
  const cost = active.reduce((sum, solution) => sum + solution.costPerKm * state.coastline * lengthFactor, 0);
  const maintenance = active.reduce((sum, solution) => sum + solution.maintenance * state.coastline, 0);
  const rawProtection = active.reduce((sum, solution) => sum + solution.protection, 0);
  const protection = Math.min(86, rawProtection * 5.4 * (1 - state.seaRise / 260));
  const biodiversity = active.length ? active.reduce((sum, solution) => sum + solution.biodiversity, 0) / active.length : 0;
  const carbon = active.reduce((sum, solution) => sum + solution.carbon * state.coastline * 0.42, 0);
  const equity = active.length ? active.reduce((sum, solution) => sum + solution.equity, 0) / active.length : 0;
  const annualRisk = state.assetValue * (state.stormRisk / 100) * (1 + state.seaRise / 160);
  const avoidedLoss = annualRisk * (protection / 100) * state.horizon;
  const paybackYears = avoidedLoss > 0 ? cost / (avoidedLoss / state.horizon) : null;
  const naturalCapital = Math.round(biodiversity * 7 + carbon / 3 + equity * 2);

  return {
    active,
    cost,
    maintenance,
    protection,
    biodiversity,
    carbon,
    equity,
    avoidedLoss,
    paybackYears,
    naturalCapital
  };
}

function scoreSolution(solution, state) {
  const affordability = Math.max(0, 10 - (solution.costPerKm * state.coastline * 0.8) / Math.max(1, state.budget) * 10);
  const ecology = (solution.biodiversity + solution.carbon) / 2;
  const maintenanceEase = 10 - solution.maintenance * 10;
  const weighted =
    solution.protection * state.weightProtection +
    ecology * state.weightEcology +
    affordability * state.weightCost +
    solution.equity * 1.4 +
    maintenanceEase;

  return Math.round((weighted / (Number(state.weightProtection) + Number(state.weightEcology) + Number(state.weightCost) + 2.4)) * 10);
}

function renderSolutions(state) {
  outputs.solutionGrid.innerHTML = solutions
    .map((solution) => {
      const isSelected = selected.has(solution.id);
      return `
        <article class="solution-card ${isSelected ? "selected" : ""}">
          <div class="card-top">
            <div class="solution-icon">${solution.icon}</div>
            <button class="toggle ${isSelected ? "on" : ""}" data-id="${solution.id}" aria-label="Toggle ${solution.name}"></button>
          </div>
          <div>
            <h4>${solution.name}</h4>
            <p>${solution.description}</p>
          </div>
          <div class="solution-meta">
            <span><b>${solution.type}</b></span>
            <span>Capital cost: <b>${money(solution.costPerKm)}/km</b></span>
            <span>Protection: <b>${solution.protection.toFixed(1)}/10</b></span>
            <span>Ecology: <b>${solution.biodiversity.toFixed(1)}/10</b></span>
            <span>Fit score: <b>${scoreSolution(solution, state)}/100</b></span>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      if (selected.has(id)) {
        selected.delete(id);
      } else {
        selected.add(id);
      }
      render();
    });
  });
}

function renderRecommendations(state) {
  const ranked = [...solutions]
    .map((solution) => ({ ...solution, score: scoreSolution(solution, state) }))
    .sort((a, b) => b.score - a.score);

  outputs.recommendationList.innerHTML = ranked
    .slice(0, 5)
    .map((solution, index) => `
      <article class="recommendation">
        <div class="rank">${index + 1}</div>
        <div>
          <h4>${solution.name}</h4>
          <p>${solution.type} option with ${solution.protection.toFixed(1)}/10 protection and ${solution.biodiversity.toFixed(1)}/10 biodiversity value.</p>
        </div>
        <div class="score">${solution.score}</div>
      </article>
    `)
    .join("");
}

function renderBrief(state, model) {
  const names = model.active.map((solution) => solution.name).join(", ") || "no interventions selected";
  const budgetLine = model.cost <= state.budget
    ? `The selected portfolio is within the available ${money(state.budget)} capital budget.`
    : `The selected portfolio exceeds the ${money(state.budget)} capital budget by ${money(model.cost - state.budget)}.`;

  outputs.tradeoffText.textContent =
    `This portfolio leans ${model.biodiversity >= 7 ? "strongly toward nature-positive resilience" : "toward hard protection"} with ${Math.round(model.protection)}% modeled protection gain, ${Math.round(model.carbon)} blue-carbon index points, and ${money(model.maintenance)} in annual maintenance.`;

  outputs.briefText.innerHTML = `
    <p><b>${state.projectName}</b> evaluates ${state.coastline} km of coastline in the ${state.region} over a ${state.horizon}-year planning horizon.</p>
    <p>The current portfolio includes ${names}. It is modeled to deliver <b>${Math.round(model.protection)}%</b> flood-risk reduction, <b>${model.naturalCapital}</b> natural-capital index points, and <b>${money(model.avoidedLoss)}</b> in avoided losses across the planning period.</p>
    <p>${budgetLine} Annual maintenance is estimated at <b>${money(model.maintenance)}</b>, with an implied payback of <b>${model.paybackYears ? model.paybackYears.toFixed(1) + " years" : "not available"}</b>.</p>
    <p>Recommended next step: commission parcel-level feasibility for the top-ranked nature-based options, then reserve hard infrastructure for dense asset zones where immediate protection needs exceed habitat-based performance.</p>
  `;
}

function renderMetrics(state, model) {
  outputs.coastlineOut.value = `${state.coastline} km`;
  outputs.populationOut.value = formatter.format(state.population);
  outputs.assetValueOut.value = money(state.assetValue);
  outputs.stormRiskOut.value = `${state.stormRisk}%`;
  outputs.seaRiseOut.value = `${state.seaRise} cm`;
  outputs.budgetOut.value = money(state.budget);
  outputs.totalCost.textContent = money(model.cost);
  outputs.budgetStatus.textContent = model.cost <= state.budget ? "Within budget" : `${money(model.cost - state.budget)} over budget`;
  outputs.protectionGain.textContent = `${Math.round(model.protection)}%`;
  outputs.naturalCapital.textContent = model.naturalCapital;
  outputs.avoidedLoss.textContent = money(model.avoidedLoss);
  outputs.payback.textContent = model.paybackYears ? `${model.paybackYears.toFixed(1)} year payback` : "Payback not available";
  outputs.budgetBadge.textContent = `${money(model.cost)} selected`;
  outputs.mapTitle.textContent = state.projectName.split(" ").slice(0, 3).join(" ");
  renderBleachOverlay(state);
}

function render() {
  const state = getState();
  const model = modelPortfolio(state);
  renderMetrics(state, model);
  renderSolutions(state);
  renderRecommendations(state);
  renderBrief(state, model);
  persist(false);
}

function persist(showStatus = true) {
  localStorage.setItem("tidewise-state", JSON.stringify(getState()));
  if (showStatus) {
    outputs.statusPill.textContent = "Saved locally";
    setTimeout(() => {
      outputs.statusPill.textContent = "Autosave on";
    }, 1600);
  }
}

function restore() {
  const saved = localStorage.getItem("tidewise-state");
  if (!saved) return;
  try {
    const state = JSON.parse(saved);
    Object.entries(controls).forEach(([key, control]) => {
      if (state[key] !== undefined) control.value = state[key];
    });
    selected = new Set(state.selected || [...selected]);
  } catch {
    localStorage.removeItem("tidewise-state");
  }
}

function exportJson() {
  const state = getState();
  const model = modelPortfolio(state);
  const payload = {
    exportedAt: new Date().toISOString(),
    product: "Tidewise Resilience Studio",
    state,
    model
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tidewise-scenario.json";
  link.click();
  URL.revokeObjectURL(url);
}

Object.values(controls).forEach((control) => {
  control.addEventListener("input", render);
  control.addEventListener("change", render);
});

controls.region.addEventListener("change", () => {
  mapState = { ...mapState, ...regionCenters[controls.region.value] };
  renderTiles();
});

document.querySelectorAll("[data-layer]").forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const layer = document.querySelector(`#${toggle.dataset.layer}`);
    if (layer) layer.classList.toggle("hidden-layer", !toggle.checked);
  });
});

document.querySelector("#zoomInBtn").addEventListener("click", () => {
  mapState.zoom = Math.min(12, mapState.zoom + 1);
  renderTiles();
});

document.querySelector("#zoomOutBtn").addEventListener("click", () => {
  mapState.zoom = Math.max(5, mapState.zoom - 1);
  renderTiles();
});

document.querySelector("#saveBtn").addEventListener("click", () => persist(true));
document.querySelector("#exportBtn").addEventListener("click", exportJson);
document.querySelector("#printBtn").addEventListener("click", () => window.print());
document.querySelector("#copyBriefBtn").addEventListener("click", async () => {
  const text = outputs.briefText.textContent.trim().replace(/\s+/g, " ");
  await navigator.clipboard.writeText(text);
  outputs.statusPill.textContent = "Brief copied";
});

restore();
mapState = { ...mapState, ...regionCenters[controls.region.value] };
renderTiles();
render();

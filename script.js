document.getElementById("year").textContent = new Date().getFullYear();

/* Mobile sidebar toggle */
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

/* ---------- Data-driven grid content (keeps HTML minimal, JS builds the grid) ---------- */

const stats = [
  { icon: "fa-solid fa-sack-dollar", color: "#4f46e5", value: "$24,560", label: "Revenue this month" },
  { icon: "fa-solid fa-user-group", color: "#06b6d4", value: "1,284", label: "Active users" },
  { icon: "fa-solid fa-cart-shopping", color: "#f59e0b", value: "312", label: "Orders" },
  { icon: "fa-solid fa-star", color: "#ef4444", value: "4.8 / 5", label: "Avg. rating" },
];

const projects = [
  { name: "Grid Redesign", color: "#4f46e5", pct: "82%" },
  { name: "API Migration", color: "#06b6d4", pct: "64%" },
  { name: "Mobile App", color: "#f59e0b", pct: "41%" },
  { name: "Design System", color: "#ef4444", pct: "95%" },
];

const bars = [40, 65, 50, 80, 55, 90, 35].map((h, i) => ({
  height: h,
  label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
}));

const tiles = [
  { color: "#4f46e5", title: "Grid Template Areas", text: "Named regions laid out in one readable block." },
  { color: "#06b6d4", title: "auto-fit / auto-fill", text: "Cards reflow automatically, no media queries needed." },
  { color: "#f59e0b", title: "minmax()", text: "Columns never shrink below a usable size." },
  { color: "#ef4444", title: "Gap", text: "Consistent spacing without margin hacks." },
  { color: "#10b981", title: "Implicit rows", text: "New items simply flow onto new rows." },
  { color: "#8b5cf6", title: "Responsive by default", text: "Resize the window — everything reflows." },
];

document.getElementById("statsGrid").innerHTML = stats
  .map(
    (s) => `
    <div class="stat-card">
      <div class="icon" style="background:${s.color}"><i class="${s.icon}"></i></div>
      <div>
        <div class="value">${s.value}</div>
        <div class="label">${s.label}</div>
      </div>
    </div>`
  )
  .join("");

document.getElementById("projectList").innerHTML = projects
  .map(
    (p) => `
    <li>
      <span><span class="dot" style="background:${p.color}"></span>${p.name}</span>
      <span class="pct">${p.pct}</span>
    </li>`
  )
  .join("");

document.getElementById("barsChart").innerHTML = bars
  .map((b) => `<div class="bar" style="height:${b.height}%"><span>${b.label}</span></div>`)
  .join("");

document.getElementById("galleryGrid").innerHTML = tiles
  .map(
    (t) => `
    <div class="tile">
      <div class="tile-color" style="background:${t.color}"></div>
      <div class="tile-body">
        <h3>${t.title}</h3>
        <p>${t.text}</p>
      </div>
    </div>`
  )
  .join("");

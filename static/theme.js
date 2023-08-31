//Prevent FOUC related to theme (light & dark mode)

/* sets class = dark (Use with Tailwind) */
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else if (
  !localStorage.getItem("theme") &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

/* sets data-theme = dark | light | other */
// const saved_theme = localStorage.getItem("theme");
// if (saved_theme) {
//   document.body.setAttribute("data-theme", saved_theme);
// } else {
//   const prefers_dark = window.matchMedia(
//     "(prefers-color-scheme: dark)"
//   ).matches;
//   const theme = prefers_dark ? "dark" : "light";
//   document.body.setAttribute("data-theme", theme);
// }

/* Simpler code with default theme = dark */
// document.documentElement.setAttribute(
//   "data-theme",
//   localStorage.getItem("theme") || "dark"
// );

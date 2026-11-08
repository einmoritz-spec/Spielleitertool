/* ---------- map modal ---------- */
function openMap(){
  const img = document.getElementById("mapImg");
  if(!img.src) img.src = DALES_MAP_SRC;
  document.getElementById("mapScroll").classList.remove("zoomed");
  document.getElementById("mapModal").classList.add("open");
}
function closeMap(){
  document.getElementById("mapModal").classList.remove("open");
}
function toggleMapZoom(e){
  document.getElementById("mapScroll").classList.toggle("zoomed");
}

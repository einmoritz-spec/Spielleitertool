/* Umschalten zwischen den beiden Tools (Wake of the Oldways <-> Local Legends).
   Die letzte Wahl liegt in localStorage und wird beim Start der App gelesen. */
const TOOL_MODE_KEY = "gm_tool_mode_v1";
function switchTool(mode){
  try{ localStorage.setItem(TOOL_MODE_KEY, mode); }catch(e){}
  location.href = mode === "locallegends" ? "locallegends/" : (location.pathname.includes("/locallegends/") ? "../" : "./");
}

/* Umschalten zwischen den Tools. Die letzte Wahl liegt in localStorage und wird beim Start der App gelesen. */
const TOOL_MODE_KEY = "gm_tool_mode_v1";
const TOOL_PATHS = { wake:"../", locallegends:"./", paynetown:"../nights/", otherscape:"../otherscape/", cityofmist:"../cityofmist/", etr:"../etr/" };
function switchTool(mode){
  try{ localStorage.setItem(TOOL_MODE_KEY, mode); }catch(e){}
  location.href = TOOL_PATHS[mode] || "../";
}

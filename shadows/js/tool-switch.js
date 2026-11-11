const TOOL_MODE_KEY = "gm_tool_mode_v1";
const TOOL_PATHS = { wake:"../", locallegends:"../locallegends/", paynetown:"../nights/", otherscape:"../otherscape/", shadows:"./", etr:"../etr/" };
function switchTool(mode){
  try{ localStorage.setItem(TOOL_MODE_KEY, mode); }catch(e){}
  location.href = TOOL_PATHS[mode] || "../";
}

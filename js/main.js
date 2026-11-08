loadPersistedState();
loadPersistedFavorites();
state.profileOverlays = loadProfileOverlays();
CUSTOM_PROFILES = loadCustomProfiles();
HIDDEN_PARTY = loadHiddenParty();
topbarPrefs = loadTopbarPrefs();
render();

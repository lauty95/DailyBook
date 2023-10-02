export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, data) => {
    const index = state.entries.findIndex(entry => entry.id === data.id)
    state.entries[index] = data
    state.isLoading = false
}

export const addEntry = (/*state*/) => {

}

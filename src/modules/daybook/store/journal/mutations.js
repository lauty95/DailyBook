export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, data) => {
    const index = state.entries.findIndex(entry => entry.id === data.id)
    state.entries[index] = data
    state.isLoading = false
}

export const addEntry = (state, data) => {
    state.entries = [data, ...state.entries]
    state.isLoading = false
}

export const deleteEntry = (state, id) => {
    state.entries = state.entries.filter(entry => entry.id !== id)
    state.isLoading = false
}

export const clearEntry = (state) => {
    state.entries = []
}

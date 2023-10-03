import journalApi from "@/api/journalApi"

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    if (!data) {
        commit("setEntries", [])
        return
    }
    const entries = [];
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit("setEntries", entries)
}

export const updateEntry = async ({ commit }, entry) => {
    const { id, ...body } = entry
    const { data } = await journalApi.put(`/entries/${id}.json`, body)
    commit("updateEntry", { ...data, id })
}

export const createEntry = async ({ commit }, entry) => {
    const body = { text: entry.text, date: entry.date, picture: entry.picture }
    const { data } = await journalApi.post(`/entries.json`, body)
    commit("addEntry", { ...body, id: data.name })
    return data.name
}

export const deleteEntry = async ({ commit }, id) => {
    const { data } = await journalApi.delete(`/entries/${id}.json`)
    if (data === null) commit("deleteEntry", id)
}
// export const myAction = async ({ commit }) => {

import authApi from "@/api/authApi";

// }
export const createUser = async (/*{ commit }*/ _, user) => {
    const { email, password } = user;

    try {
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        console.log({ data })
        return { ok: true }
    } catch (err) {
        console.log({ err })
        return { ok: false, message: err?.response.data.error.message }
    }
}
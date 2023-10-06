import axios from 'axios'

const uploadImage = async (file) => {
    if (!file) return
    try {
        const formData = new FormData()
        formData.append("upload_preset", "p19xcsrl")
        formData.append("file", file)
        const url = "https://api.cloudinary.com/v1_1/dy5vhsdba/image/upload/"
        const { data } = await axios.post(url, formData)
        return data.secure_url
    } catch (err) {
        return null
    }
}

export default uploadImage
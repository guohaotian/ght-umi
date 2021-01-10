
import axios from "axios"

export const post = async (options) => {
    let response
    try {
        response = await axios({
            method: 'post',
            ...options
        })
        return response
    } catch (err) {
        return response
    }
}
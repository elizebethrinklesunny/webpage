import axios from 'axios'
import { key, whetherbase } from '../views/config/config'


class adminservice {
	constructor(callback) {
		this.callback = callback
	}

    
	async weather(payload) {
		const response = await axios
			.post(
				`${whetherbase}weather?q=${payload.city}&units=metric&APPID=${key}`
			)
			.then((response) => {
				return response.data
			})
			.catch((error) => { return error.request.status })
		return response
	}
}

export default new adminservice()
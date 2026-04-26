import router from "@/router"
import { createResource } from "intrakore-ui"

export const userResource = createResource({
	url: "intrakore.auth.get_logged_user",
	cache: "User",
	onError(error) {
		if (error && error.exc_type === "AuthenticationError") {
			router.push({ name: "LoginPage" })
		}
	},
})

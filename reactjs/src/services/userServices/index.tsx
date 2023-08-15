import api from "../api";

export default{
    async getUsers(){
        try {
            const response = api.get("/User");
            return response;
        } catch (e) {
            console.log(e)
        }
    },
}
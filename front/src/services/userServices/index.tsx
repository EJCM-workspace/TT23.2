import api from "../api";

interface dadosLogin {
    email: string;
    password: string;
  }

export default{
    async login(data : dadosLogin){
        try {
            const response = api.post("/Login", data);
            return response;
        } catch (e) {
            console.log(e)
        }
    },
}
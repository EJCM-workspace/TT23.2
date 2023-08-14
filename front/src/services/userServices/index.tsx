import api from "../api";

interface dadosLogin {
    usuario: string;
    senha: string;
  }

export default{
    async login(data : dadosLogin){
        try {
            const response = api.post("/login", data);
            return response;
        } catch (e) {
            console.log(e)
        }
    },
}
import api from "../api";

export default{
    async getTweets(){
        try {
            const response = api.get("/post");
            return response;
        } catch (e) {
            console.log(e)
        }
    },
}
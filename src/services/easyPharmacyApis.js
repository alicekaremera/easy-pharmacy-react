import axios from "axios";

const Base_URL = "http://localhost:4040";

var config = {
  headers: {
    "Content-Type": "application/json",
  },
};

class Application {
    async createAccount(data) {
        try{
            const response = await axios.post(
                Base_URL + "/user/register",
                data,
                config
            );
            return response;
        }
        catch (error){
            console.log(error.response);
            return error.response;
        }
    }
  
  async getAllUsers() {
    try {
      const response = await axios.get(
        Base_URL + "/user/all",
        config
      );

      return response;
    } catch (error) {}
  }
}

export default new Application();
import axios from "axios";
import store from "store"



const Base_URL = "https://easy-pharmacy.herokuapp.com/";


var config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": `${store.get("x-auth-token")}`,
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


    async signinAccount(data) {
      try {
        const response = await axios.post(
          Base_URL + "/user/login",
          data,
          config
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    }



    async getAllOrderByUserId(){
      try{
          const response = await axios.get(
              Base_URL + "/order/one/:id", config

          );
          return response;

      } catch(error){
          console.log(error);
      }
  }

    async getAllDrugs(){
      try{
          const response = await axios.get(
            Base_URL + "/drug/all",
              config 

          );

          
          return response;

      } catch (error){
          console.log(error);
      }
  }

  async getAllOrders(){
    try{
        const response = await axios.get(
            Base_URL + "/order/all", config

        );
        return response;

    } catch(error){
        console.log(error);
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
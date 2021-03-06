import axios from "axios";

const EASY_PHARMACY_APIS_URL = "https://easy-pharmacy.herokuapp.com/";

var config ={
    headers:{
        "Content-Type":"application/json",
    },

};

class Application{
   

    async getAllUsers(){
        try{
            const response = await axios.get(
                EASY_PHARMACY_APIS_URL + "/user/all", config

            );
            return response;

        } catch(error){
            console.log(error);
        }
    }

    

    async getAllOrderByUserId(){
        try{
            const response = await axios.get(
                EASY_PHARMACY_APIS_URL + "/order/one/:id", config

            );
            return response;

        } catch(error){
            console.log(error);
        }
    }
}

export default new Application();
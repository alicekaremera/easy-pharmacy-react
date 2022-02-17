import axios from "axios";

const EASY_PHARMACY_APIS_URL = "http://localhost:6060";

var config ={
    headers:{
        "Content-Type":"application/json",
    },

};

class Application{
    async getAllDrugs(){
        try{
            const response = await axios.get(
                EASY_PHARMACY_APIS_URL + "/drug/all",
                config 

            );

            // console.log(response);
            return response;

        } catch (error){
            console.log(error);
        }
    }

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

    async getAllOrders(){
        try{
            const response = await axios.get(
                EASY_PHARMACY_APIS_URL + "/order/all", config

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
import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "3e44214706eb43d88af7c276eccd72c8"
    }
})
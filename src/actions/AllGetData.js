import {useQuery} from "react-query";
import axios from "axios";

const fetchAllParameterData=(url,param)=>{
    return axios.get(url,{
        params:param
    })
}

export const AllGetData=(url,param,key,id)=>{
    return useQuery(['key',id],()=>fetchAllParameterData(url,param))
}
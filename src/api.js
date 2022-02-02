import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'
const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
        latitude: '41.34557',
        longitude: '69.284599',

    },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '474c75b5b1msh950f201e5db9827p1882e5jsn9092f04a861b'
    }
};

export const getPlacesData= async  ()=> {
    try {
        const {data : {data}} = await axios.get(URL, options);

        return data;
    }catch (error) {
        console.log("API folder"+error)
    }
};


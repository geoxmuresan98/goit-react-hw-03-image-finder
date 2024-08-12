import axios from "axios";

const imagesaApi = axios.create({baseURL: 'https://pixabay.com/api'})

export const getImages = async (query, page, perPage) => {
     const { data } = await imagesaApi.get(`/`, {
          params: {
            key: '43582333-b71aa2f7f7d4d82dcec6d74cc',
            q: query,
            imageType: 'photo',
            orientation: 'horizontal',
            page,
            perPage,
        }});
    return  data;
}
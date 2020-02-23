import axios from "axios";

const fetchCards = async () => {
    const response = await axios.get(`http://localhost:3004/cards`)
    if (response.status >= 400) {
        throw new Error(response.errors);
    }
    return response.data;
};

export { fetchCards };
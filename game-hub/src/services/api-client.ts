import axios from "axios";

export default axios.create ({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key:'6df0e6229832468381e8cee5e304bf2a'
  }
})
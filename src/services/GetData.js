import axios from 'axios'

export const getData = async (_url) => {
  try {
    const { data: response } = await axios.get(_url)
    return response
  }
  catch (error) {
    console.log(error);
  }
}
import axios from "axios"

export const getCatFact = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact")
    return response.data
  } catch (error) {
    throw (error)
  }
}

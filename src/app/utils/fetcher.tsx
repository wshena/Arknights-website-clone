import axios from "axios"

export const GetOperatorFromAffiliation = async (param: string, affiliation:string) => {
  try {
    const respone = await axios.get(`${process.env.NEXT_PUBLIC_API}/operator/search?${param}=${affiliation}`);
    return respone.data
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const GetOperatorImage = async (id:string) => {
  try {
    const respone = await axios.get(`${process.env.NEXT_PUBLIC_API}/art/${id}`);
    return respone.data
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const GetOperatorDetailFromName = async (name:string) => {
  try {
    const respone = await axios.get(`${process.env.NEXT_PUBLIC_API}/operator/${name}`);
    return respone.data
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const GetOperatorDetailFromNameFromRhodesAPI = async (name:string) => {
  try {
    const respone = await axios.get(`${process.env.NETX_PUBLIC_RHODES_API}/operator/${name}`);
    return respone.data
  } catch (error) {
    console.log(error)
    return null;
  }
}
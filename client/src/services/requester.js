export const request = async (url) => {
  try{
      const responce = await fetch(url)

      const result = await responce.json()

      return result;
  }catch(error){
    console.log(error);
  }
}
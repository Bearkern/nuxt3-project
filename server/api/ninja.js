export default defineEventHandler(async (event) => {
  
  // // handle query params
  // const { name } = getQuery(event)

  // // handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=DAUxV6umMN4HcBquFyxpx1S8wyImEJh6AHp68Lpg')
  
  return data
})
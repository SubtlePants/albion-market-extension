
const testUrl = (itemId: string) => { 
  return `https://west.albion-online-data.com/api/v2/stats/prices/${itemId}.json?locations=Caerleon,Bridgewatch&qualities=2`
}

export const fetchItemInfo = (itemId: string) => {
    return fetch(testUrl(itemId)).then(response => response.json()).then(data => JSON.stringify(data))
}
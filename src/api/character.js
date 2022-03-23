const URL = "https://gateway.marvel.com:443/v1/public/characters?series=19&ts=1&apikey=84c9afc670217a09f2566ca3189177f9&hash=273ddb932eb9647e18e21c589d55f000"
/*
export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}`);
        const response = await request.json();
        return response.results;
    } catch (err) {
        throw Error(err);
    }
}*/


/*export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}${id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

export async function getEpisodeName(url){
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name;
    }catch (err){
        throw Error(err);
    }
}
*/
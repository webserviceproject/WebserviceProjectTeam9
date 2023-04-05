import axios from 'axios'

const PLAYERS_REST_API_URL = 'http://localhost:8010/KSUAPI/helplinenmbrs';

 export class MatchingPlayersInfoService {

    getUsers(){
        return axios.get(PLAYERS_REST_API_URL);
    }
}

//export default new MatchingPlayersInfoService();
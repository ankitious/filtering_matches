import axios from 'axios';
import { MATCHES_ENDPOINT } from './constants';

export function fetchMatches() {
    return axios({
        method: 'get',
        url: MATCHES_ENDPOINT,
    });
}

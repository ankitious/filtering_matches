import axios from 'axios';
import {FILTER_MATCHES_ENDPOINT} from './constants';

export function fetchFilterData(filters) {
    return axios({
        method: 'post',
        url: FILTER_MATCHES_ENDPOINT,
        data : filters,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

import axios from 'axios';

import { API_ENDPOINTS } from '@constants/api_endpoints';

export const GET_ENTRIES = () => axios.get(API_ENDPOINTS.pokedex_endpoint);

import axios from 'axios';

import { getTriviaApiUrl } from '../../env';

const api = axios.create({
  baseURL: getTriviaApiUrl(),
});

export default api;

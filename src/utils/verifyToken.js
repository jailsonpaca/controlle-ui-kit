import jwtDecode from 'jwt-decode';
import moment from 'moment';

export const verifyToken = token => {
    if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken && moment(new Date(decodedToken.exp * 1000)).isAfter(moment(), 'hour');
    }
    return false;
};

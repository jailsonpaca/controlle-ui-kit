import { getStore, setStore, removeStore } from './funcs';

const USER_STORE = 'user';

export const getUser = () => getStore(USER_STORE);
export const setUser = user => setStore(USER_STORE, user);
export const removeUser = () => removeStore(USER_STORE);

export const updateUser = updatedUser =>
    getUser().then(user =>
        setUser({
            ...user,
            ...updatedUser,
        }),
    );

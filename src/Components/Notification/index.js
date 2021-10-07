import { notification } from 'antd';

const key = 'updatable';

const error = (message, title = 'Atenção') => {
    return notification.error({
        key,
        placement: 'topRight',
        message: title,
        description: message,
    });
};

const success = (message, title = 'Atenção') => {
    notification.success({
        key,
        placement: 'bottomRight',
        message: title,
        description: message,
    });
};

const Notification = {};

Notification.error = error;
Notification.success = success;

export default Notification;

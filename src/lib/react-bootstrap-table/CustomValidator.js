export default class CustomValidator {
    static validateNotEmpty(value, row) {
        const response = {isValid: true, notification: {type: 'success', msg: '', title: ''}};
        if (!value) {
            response.isValid = false;
            response.notification.type = 'error';
            response.notification.msg = 'Value must be inserted';
            response.notification.title = 'Requested Value';
        } else if (value.length <= 0) {
            response.isValid = false;
            response.notification.type = 'error';
            response.notification.msg = 'Value is required';
            response.notification.title = 'Invalid Value';
        }
        return response;
    }

    static validateAbove10Length(value, row) {
        const response = {isValid: true, notification: {type: 'success', msg: '', title: ''}};
        if (!value) {
            response.isValid = false;
            response.notification.type = 'error';
            response.notification.msg = 'Value must be inserted';
            response.notification.title = 'Requested Value';
        } else if (value.length < 10) {
            response.isValid = false;
            response.notification.type = 'error';
            response.notification.msg = 'Value must have 10+ characters';
            response.notification.title = 'Invalid Value';
        }
        return response;
    }
}
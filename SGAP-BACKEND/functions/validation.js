module.exports = {
    isEmpty: function(value) {
        return ((typeof value == 'undefined') || (value == null));
    },

    err: function(response, numberError, message, err) {
        var error = {
            ok: false,
            mensaje: message
        };
        if (err) {
            error.exception = err;
        }
        return response.status(numberError).json(error);
    },

    ok: function(response, numberStatus, data) {
        var status = {
            ok: true
        };
        if (data) {
            status.data = data;
        }
        return response.status(numberStatus).json(status);
    },

    HTTP_RESPONSES: {
        INTERNAL_SERVER: 500,
        SUCCESS: 200
    }
    
}
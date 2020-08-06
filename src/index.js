'use strict';
exports.main_handler = async (event, context, callback) => {
    console.log("event:")
    console.log(event)
    console.log("context:")
    console.log(context)
    return event.a * event.b
};


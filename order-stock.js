exports.handler = async (event) => {
    var response;
    console.log('Function loaded successfully');
    try {
        var orderID = event.Order;
        var tempStr = 'Order ' + orderID + ': has stock ordered...';   
        response = {
            Order: orderID, 
            Message: tempStr
        };
        console.log('Returning response ' + JSON.stringify(response));
        return response;
    } catch (error) {
        console.log('Error creating response');
        console.log(error);
        response = {
            error: 'Error creating response'
        }
        return response;
    }
};

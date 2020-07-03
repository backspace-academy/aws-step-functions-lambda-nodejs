exports.handler = async (event) => {
    var response;
    console.log('Function loaded successfully');
    try {
        var tempStr
        var orderID = event.Order;        
        console.log('Checking stock');
        // Generate a random number to determine there is stock of the products.
        var min = 0;
        var max = 1;  
        var stockStatus = Math.floor(Math.random() * (max - min + 1)) + min;
        if (stockStatus == 1) {
            tempStr = 'Products are in stock';
        } else if (stockStatus == 0) {
            tempStr = 'Products are out of stock';
        } 
        response = {
            Order: orderID,
            Status: stockStatus,
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

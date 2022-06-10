//Middleware function
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(`Method used: ${method} \nUrl: ${url}\nTime: ${time}`);
    //* You can end the response in this middleware function or even you can pass to the next middleware function
    //? res.send() to end and send the response
    res.send('Ending with middleware function.');
    //? next() to pass to the next function
    // next();
};

module.exports = logger;
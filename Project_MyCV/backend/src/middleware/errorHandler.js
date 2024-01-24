const errorHandler = (err, req, res, next) => {
    // console.log(err.message);
    res.status(415).json({ error: err.message });
};

export default errorHandler;

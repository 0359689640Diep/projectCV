const errorHandler = (err, req, res, next) => {
    res.status(415).json({ error: err.message });
};

export default errorHandler;

function validateForm(req, res, next) {


    // Nếu dữ liệu hợp lệ, tiếp tục sang middleware hoặc controller tiếp theo
    next();
}

export default validateForm;

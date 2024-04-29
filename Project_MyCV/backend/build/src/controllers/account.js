"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAccount = exports.signOut = exports.signIn = exports.getAccountForClient = exports.getAccountByRequest = exports.getAccount = exports.deleteAccount = exports.CreateAccount = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _dateFns = require("date-fns");
var _account = _interopRequireDefault(require("../model/account.js"));
var _account2 = require("../validation/account.js");
var _image = require("../helpers/image.js");
var _JWTAction = require("../middleware/JWTAction.js");
var _crypto = require("../helpers/crypto.js");
var _excluded = ["Job", "Language", "Phone", "Password"],
  _excluded2 = ["Job", "Language", "Phone", "Password"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
_dotenv["default"].config();
var baseUrl = process.env.baseUrl;
var CreateAccount = exports.CreateAccount = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _CreateAccountValidat, error, errors, Images, CV, IconLogo, Logo, userExist, _req$body, Job, Language, Phone, Password, body, JobArr, LanguageArr, PhoneArr, password, hashePassword, newData, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _CreateAccountValidat = _account2.CreateAccountValidator.validate(req.body, {
            abortEarly: false
          }), error = _CreateAccountValidat.error;
          if (!error) {
            _context.next = 6;
            break;
          }
          // Nếu có lỗi, xóa các file ảnh đã được tải lên
          (0, _image.deleteUploadedImages)(req.files);
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 6:
          if (!(req.files && req.files.CV && req.files.CV.length < 0)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "CV cannot be empty"
          }));
        case 8:
          if (!(req.files && req.files.Images && req.files.Images.length < 0)) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "Images cannot be empty"
          }));
        case 10:
          if (!(req.files && req.files.IconLogo && req.files.IconLogo.length < 0)) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "Icon Logo cannot be empty"
          }));
        case 12:
          if (!(req.files && req.files.Logo && req.files.Logo.length < 0)) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "Logo cannot be empty"
          }));
        case 14:
          Images = req.files.Image.map(function (file) {
            return file.filename;
          });
          CV = req.files.CV[0].filename;
          IconLogo = req.files.IconLogo[0].filename;
          Logo = req.files.Logo[0].filename;
          _context.next = 20;
          return _account["default"].findOne({
            Email: req.body.Email
          });
        case 20:
          userExist = _context.sent;
          if (!userExist) {
            _context.next = 24;
            break;
          }
          // Nếu có lỗi, xóa các file ảnh đã được tải lên
          (0, _image.deleteUploadedImages)(req.files);
          return _context.abrupt("return", res.status(400).json({
            message: "This email has been registered. Would you like to log in?"
          }));
        case 24:
          _req$body = req.body, Job = _req$body.Job, Language = _req$body.Language, Phone = _req$body.Phone, Password = _req$body.Password, body = (0, _objectWithoutProperties2["default"])(_req$body, _excluded);
          JobArr = Job.split(",");
          LanguageArr = Language.split(",");
          PhoneArr = Phone.split(",");
          password = Password;
          hashePassword = (0, _crypto.encrypt)(password);
          if (!(hashePassword === false)) {
            _context.next = 33;
            break;
          }
          // Nếu có lỗi, xóa các file ảnh đã được tải lên
          (0, _image.deleteUploadedImages)(req.files);
          return _context.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 33:
          newData = _objectSpread(_objectSpread({}, body), {}, {
            Language: LanguageArr,
            Phone: PhoneArr,
            Job: JobArr,
            CV: CV,
            IconLogo: IconLogo,
            Logo: Logo,
            Image: Images,
            Password: hashePassword
          });
          _context.next = 36;
          return _account["default"].create(newData);
        case 36:
          result = _context.sent;
          result.Password = undefined;
          return _context.abrupt("return", res.status(200).json({
            message: "Create account success"
          }));
        case 41:
          _context.prev = 41;
          _context.t0 = _context["catch"](0);
          // Nếu có lỗi, xóa các file ảnh đã được tải lên
          (0, _image.deleteUploadedImages)(req.files);
          return _context.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 45:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 41]]);
  }));
  return function CreateAccount(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var deleteAccount = exports.deleteAccount = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return _account["default"].findOneAndDelete({
            _id: Object(id)
          });
        case 4:
          result = _context2.sent;
          if (!(result !== null)) {
            _context2.next = 13;
            break;
          }
          (0, _image.deleteImage)(result.Image);
          (0, _image.deleteImage)(result.CV);
          (0, _image.deleteImage)(result.IconLogo);
          (0, _image.deleteImage)(result.Logo);
          return _context2.abrupt("return", res.status(200).json({
            message: "Account deletion was successful"
          }));
        case 13:
          return _context2.abrupt("return", res.status(404).json({
            message: "The requested account could not be found"
          }));
        case 14:
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 16]]);
  }));
  return function deleteAccount(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateAccount = exports.updateAccount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _CreateAccountValidat2, error, errors, _req$body2, Job, Language, Phone, Password, body, id, hashePassword, newData, oldPassword, decryptPasswordOld, newToken, getImageByIdAccount, _req$files, CV, IconLogo, Logo, Image;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _CreateAccountValidat2 = _account2.CreateAccountValidator.validate(req.body, {
            abortEarly: false
          }), error = _CreateAccountValidat2.error;
          if (!error) {
            _context3.next = 6;
            break;
          }
          // Nếu có lỗi, xóa các file ảnh đã được tải lên
          (0, _image.deleteUploadedImages)(req.files);
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context3.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 6:
          _req$body2 = req.body, Job = _req$body2.Job, Language = _req$body2.Language, Phone = _req$body2.Phone, Password = _req$body2.Password, body = (0, _objectWithoutProperties2["default"])(_req$body2, _excluded2);
          id = req.params.id; // mã hóa password
          _context3.next = 10;
          return (0, _crypto.encrypt)(Password);
        case 10:
          hashePassword = _context3.sent;
          if (!(hashePassword === false)) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 13:
          newData = _objectSpread(_objectSpread({}, body), {}, {
            Language: Language.split(","),
            Phone: Phone.split(","),
            Job: Job.split(","),
            Password: hashePassword
          }); // kiểm tra xem người dùng có cập nhật mật khẩu mới không
          _context3.next = 16;
          return _account["default"].findById({
            _id: Object(id)
          }, {
            Password: 1
          });
        case 16:
          oldPassword = _context3.sent;
          _context3.next = 19;
          return (0, _crypto.decrypt)(oldPassword.Password);
        case 19:
          decryptPasswordOld = _context3.sent;
          if (decryptPasswordOld !== false && decryptPasswordOld !== Password) {
            newToken = (0, _JWTAction.createJWT)({
              _id: oldPassword._id
            });
            newData["Token"] = [{
              "accessToken": newToken,
              "signeAt": Date.now().toString()
            }];
          }

          // kiểm tra xem có được up ảnh lên hay không
          if (!(Object.keys(req.files).length > 0)) {
            _context3.next = 30;
            break;
          }
          _context3.next = 24;
          return _account["default"].findById({
            _id: Object(id)
          }, {
            CV: 1,
            Image: 1,
            IconLogo: 1,
            Logo: 1
          });
        case 24:
          getImageByIdAccount = _context3.sent;
          _req$files = req.files, CV = _req$files.CV, IconLogo = _req$files.IconLogo, Logo = _req$files.Logo, Image = _req$files.Image;
          if (CV && CV !== undefined) {
            newData["CV"] = CV[0].filename;
            (0, _image.deleteImage)(getImageByIdAccount.CV);
          }
          if (Image && Image !== undefined) {
            newData["Image"] = Image.map(function (file) {
              return file.filename;
            });
            (0, _image.deleteImage)(getImageByIdAccount.Image);
          }
          if (IconLogo && IconLogo !== undefined) {
            newData["IconLogo"] = IconLogo[0].filename;
            (0, _image.deleteImage)(getImageByIdAccount.IconLogo);
          }
          if (Logo && Logo !== undefined) {
            newData["Logo"] = Logo[0].filename;
            (0, _image.deleteImage)(getImageByIdAccount.Logo);
          }
        case 30:
          _context3.next = 32;
          return _account["default"].findByIdAndUpdate(id, _objectSpread({}, newData));
        case 32:
          return _context3.abrupt("return", res.status(201).json({
            message: "Update successful"
          }));
        case 35:
          _context3.prev = 35;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 38:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 35]]);
  }));
  return function updateAccount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var signIn = exports.signIn = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _signInValidator$vali, error, errors, user, decodePassword, accessToken;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _signInValidator$vali = _account2.signInValidator.validate(req.body, {
            abortEarly: false
          }), error = _signInValidator$vali.error;
          if (!error) {
            _context4.next = 5;
            break;
          }
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context4.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 5:
          _context4.next = 7;
          return _account["default"].findOne({
            Email: req.body.email
          });
        case 7:
          user = _context4.sent;
          if (user) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(401).json({
            message: "Login failed, please review your account"
          }));
        case 10:
          decodePassword = (0, _crypto.decrypt)(user.Password);
          if (!(req.body.password !== decodePassword)) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(401).json({
            message: "Login failed, please review your account"
          }));
        case 13:
          // Tạo token
          accessToken = (0, _JWTAction.createJWT)({
            _id: user._id
          }); // Xóa mật khẩu trước khi gửi thông tin người dùng và token về
          user.Password = undefined;

          // cập nhật token của tài khoản đó
          _context4.next = 17;
          return _account["default"].findByIdAndUpdate(user._id, {
            Token: [{
              accessToken: accessToken,
              signeAt: Date.now().toString()
            }]
          });
        case 17:
          return _context4.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            accessToken: accessToken
          }));
        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: "500 Server not found"
          }));
        case 23:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 20]]);
  }));
  return function signIn(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var signOut = exports.signOut = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var token, decode, user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(req.headers && req.headers.authorization)) {
            _context5.next = 21;
            break;
          }
          _context5.prev = 1;
          token = req.headers.authorization.split(" ")[1];
          decode = (0, _JWTAction.verifyToken)(token);
          if (!(token === false || decode === false)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            message: "Sign out successfully"
          }));
        case 6:
          _context5.next = 8;
          return _account["default"].findById(decode._id);
        case 8:
          user = _context5.sent;
          if (user) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(300).json({
            message: "Unauthorized access!"
          }));
        case 11:
          if (!token) {
            res.status(404).json({
              message: 'Authorization fail'
            });
          }
          _context5.next = 14;
          return _account["default"].findByIdAndUpdate(user._id, {
            Token: []
          });
        case 14:
          return _context5.abrupt("return", res.status(200).json({
            message: "Sign out successfully"
          }));
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 17]]);
  }));
  return function signOut(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getAccountByRequest = exports.getAccountByRequest = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var request, dataAccount;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          request = req.params.request;
          _context6.next = 4;
          return _account["default"].find().select(request);
        case 4:
          dataAccount = _context6.sent;
          if (!(dataAccount.length === 0)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: "No Account"
          }));
        case 7:
          dataAccount.forEach(function (obj) {
            // format dữ liệu
            switch (request) {
              case "Password":
                var password = obj.Password;
                obj.Password = (0, _crypto.decrypt)(password);
                break;
              case "CV":
                obj.CV = baseUrl + obj.CV;
                break;
              case "IconLogo":
                obj.IconLogo = baseUrl + obj.IconLogo;
                break;
              case "Logo":
                obj.Logo = baseUrl + obj.Logo;
                break;
              case "dateFormat":
                var dateFormat = (0, _dateFns.format)(new Date(obj.Birthday), "yyyy-MM-dd");
                obj.Birthday = dateFormat;
                break;
              case "Image":
                if (obj.Image.length !== 0) {
                  obj.Image.forEach(function (field, key) {
                    obj.Image[key] = baseUrl + field;
                  });
                }
                break;
              default:
                console.error("errr");
                break;
            }
          });
          return _context6.abrupt("return", res.status(200).json({
            dataAccount: dataAccount
          }));
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function getAccountByRequest(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getAccountForClient = exports.getAccountForClient = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var dataAccount;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _account["default"].find();
        case 3:
          dataAccount = _context7.sent;
          if (!(dataAccount.length === 0)) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "No Account"
          }));
        case 6:
          dataAccount.forEach(function (obj) {
            // format dữ liệu
            var dateFormat = (0, _dateFns.format)(new Date(obj.Birthday), "yyyy-MM-dd");
            obj.Password = "";
            obj.Token = [];
            obj.CV = baseUrl + obj.CV;
            obj.IconLogo = baseUrl + obj.IconLogo;
            obj.Logo = baseUrl + obj.Logo;
            obj.Birthday = dateFormat;
            if (obj.Image.length !== 0) {
              obj.Image.forEach(function (field, key) {
                obj.Image[key] = baseUrl + field;
              });
            }
          });
          return _context7.abrupt("return", res.status(200).json({
            dataAccount: dataAccount
          }));
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function getAccountForClient(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getAccount = exports.getAccount = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var dataAccount;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _account["default"].find();
        case 3:
          dataAccount = _context8.sent;
          if (!(dataAccount.length === 0)) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "No Account"
          }));
        case 6:
          dataAccount.forEach(function (obj) {
            // format dữ liệu
            var password = obj.Password;
            var dateFormat = (0, _dateFns.format)(new Date(obj.Birthday), "yyyy-MM-dd");
            obj.Password = (0, _crypto.decrypt)(password);
            obj.CV = baseUrl + obj.CV;
            obj.IconLogo = baseUrl + obj.IconLogo;
            obj.Logo = baseUrl + obj.Logo;
            obj.Birthday = dateFormat;
            if (obj.Image.length !== 0) {
              obj.Image.forEach(function (field, key) {
                obj.Image[key] = baseUrl + field;
              });
            }
          });
          return _context8.abrupt("return", res.status(200).json({
            dataAccount: dataAccount
          }));
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return function getAccount(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
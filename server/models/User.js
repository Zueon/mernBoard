const mongoose = require("mongoose");

// schema
const userSchema = mongoose.Schema(
  {
    userid: { type: String, required: true, unique: true },
    // select : false -> DB에서 데이터 읽어올 떄 password는 읽어오지 않는다.
    password: { type: String, required: true, select: false },
    name: { type: String, required: true },
    email: { type: String },
  },
  {
    toObject: { virtuals: true },
  }
);

// virtuals : DB에 실제로 저장되지는 않지만 필요한 값들. DB에 존재하는 값들로부터 만들어낼 수 있는 정보들. (회원가입이나 정보수정을 위해 새로운 password나 현재 패스워드가 필요하지만 저장할 필요는 없는 것처럼..)
userSchema
  .virtual("pwConfirm")
  .get(function () {
    return this._pwConfirm;
  })
  .set(function (value) {
    this._pwConfirm = value;
  });

userSchema
  .virtual("originPw")
  .get(function () {
    return this._originPw;
  })
  .set(function (value) {
    this._originPw = value;
  });

userSchema
  .virtual("currPw")
  .get(function () {
    return this._currPw;
  })
  .set(function (value) {
    this._currPw = value;
  });

userSchema
  .virtual("newPw")
  .get(function () {
    return this._newPw;
  })
  .set(function (value) {
    this._newPw = value;
  });

// password validation
userSchema.path("password").validate(function (value) {
  // this 는 유저 모델
  const user = this;

  // 유저 생성
  if (user.isNew) {
    // user가 새로운 document인 경우 -> 생성
    if (!user.pwConfirm) {
      // 모댈.invalidate : 첫번쨰로 인자 항목이름, 두번쨰로 인자 에러메세지
      user.invalidate("pwConfirm", "Password Confirmation is required.");
    }

    if (user.password !== user.pwConfirm) {
      user.invalidate("pwConfirm", "Password Confirmation does not matched!");
    }

    // 기존 유저 정보 수정
  } else {
    if (!user.currPw) {
      user.invalidate("currPw", "Current Password is required!");
    } else if (user.currentPw != user.orginPw) {
      user.invalidate("currPw", "Current Password is invalid!");
    }

    if (user.newPw !== user.pwConfirm) {
      user.invalidate("pwConfirm", "Password Confirmation does not matched!");
    }
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;

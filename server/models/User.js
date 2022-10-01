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

// virtuals
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
  const user = this;

  // 유저 생성
  if (user.isNew) {
    // user가 새로운 document인 경우 -> 생성
    if (!user.pwConfirm) {
      user.invalidate(
        "passwordConfirmation",
        "Password Confirmation is required."
      );
    }

    if (user.password !== user.pwConfirm) {
      user.invalidate(
        "passwordConfirmation",
        "Password Confirmation does not matched!"
      );
    }
  } else {
    if (!user.currPw) {
      user.invalidate("currentPassword", "Current Password is required!");
    } else if (user.currentPw != user.orginPw) {
      user.invalidate("currentPassword", "Current Password is invalid!");
    }

    if (user.newPw !== user.pwConfirm) {
      user.invalidate(
        "passwordConfirmation",
        "Password Confirmation does not matched!"
      );
    }
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;

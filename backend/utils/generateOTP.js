const crypto = require('crypto');

const generateOTP = () => {
  // Generates a random 6-digit number between 100000 and 999999
  const otp = crypto.randomInt(100000, 999999);
  return otp.toString();
};

module.exports = generateOTP;

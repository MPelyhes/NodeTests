const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
}

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw)
  if(result){
    console.log('Logged you in!')
  } else {
    console.log('Incorrect!')
  }
}
// hashPassword('monkey');

login('monkey', '$2b$12$1auEb8q22avHI.ukGYhTxuWhi/pio5aipDDJnRtQ9RJ/XhHqwhw/6');
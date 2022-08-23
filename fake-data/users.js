// const bcrypt = require('bcrypt')
/*
Fake users database
user => { userid: stirng, password: string, name: string }
*/

let users = [
  { userid: 'ungmo2@gmail.com', password: '111111', name: '이웅모' },
  { userid: 'test@test.com', password: '123456', name: 'test' },
];
const findUserByUserid = userid => users.find(user => user.userid === userid);
const findUser = (userid, password) =>
  // users.find(user => user.userid === userid && bcrypt.compareSync(password, user.password));
  users.find(user => user.userid === userid && user.password === password);
const createUser = (userid, password, age) => {
  // users = [...users, { userid, password: bcrypt.hashSync(password, 10) }];
  users = [...users, { userid, password, age }];
  console.log(users);
};
const getUsers = () => users;
module.exports = { createUser, findUserByUserid, findUser, getUsers };

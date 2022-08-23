// const bcrypt = require('bcrypt')
/*
Fake users database
user => { userid: stirng, password: string, name: string }
*/

let users = [
  { userId: 'zerobase', password: '111111', birth: '2010', email: 'cotaku@test.com' },
  { userId: 'test', password: '111111', birth: '1999', email: 'test@test.com' },
];

const findUserByUserid = userid => users.find(user => user.userId === userid);

const findUser = (userid, password) =>
  // users.find(user => user.userid === userid && bcrypt.compareSync(password, user.password));
  users.find(user => user.userId === userid && user.password === password);

const createUser = (userid, password, birth) => {
  // users = [...users, { userid, password: bcrypt.hashSync(password, 10) }];
  users = [...users, { userid, password, birth }];
  console.log(users);
};

const getUsers = () => users;

module.exports = { createUser, findUserByUserid, findUser, getUsers };

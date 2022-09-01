let users = [
  { userId: 'kids', password: '123456', birth: '2010', email: 'kids@test.com' },
  { userId: 'adult', password: '123456', birth: '1999', email: 'adult@test.com' },
];

const findUserByUserid = userid => users.find(user => user.userId === userid);

const findUser = (userid, password) =>
  // users.find(user => user.userid === userid && bcrypt.compareSync(password, user.password));
  users.find(user => user.userId === userid && user.password === password);

const createUser = (userId, password, birth, email) => {
  // users = [...users, { userid, password: bcrypt.hashSync(password, 10) }];
  users = [...users, { userId, password, birth, email }];
  console.log(users);
};

const getUsers = () => users;

module.exports = { createUser, findUserByUserid, findUser, getUsers };

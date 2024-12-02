// dao/Users.dao.js
import userModel from './models/User.js';

export default class Users {
  get = (params) => {
    return userModel.find(params).populate('pets');
  };

  getBy = (params) => {
    return userModel.findOne(params).populate('pets');
  };

  save = (doc) => {
    return userModel.create(doc);
  };

  update = (id, doc) => {
    return userModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  delete = (id) => {
    return userModel.findByIdAndDelete(id);
  };
}

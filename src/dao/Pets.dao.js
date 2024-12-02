// dao/Pets.dao.js
import petModel from './models/Pet.js';

export default class Pets {
  get = (params) => {
    return petModel.find(params).populate('owner');
  };

  getBy = (params) => {
    return petModel.findOne(params).populate('owner');
  };

  save = (doc) => {
    return petModel.create(doc);
  };

  update = (id, doc) => {
    return petModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  delete = (id) => {
    return petModel.findByIdAndDelete(id);
  };
}

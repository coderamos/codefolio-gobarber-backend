import Sequelize from 'sequelize';

import { FileModel, UserModel } from '../app/models';
import { databaseConfig } from '../config';

const models = [FileModel, UserModel];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

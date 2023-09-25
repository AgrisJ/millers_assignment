import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../sequalize';

class Sizes extends Model {
  public id!: number;
  public color_id!: number;
  public size_name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Sizes.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size_name: {
    type: new DataTypes.STRING(10),
    allowNull: false,
  }
}, {
  tableName: 'sizes',
  sequelize: sequelize, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export { Sizes };

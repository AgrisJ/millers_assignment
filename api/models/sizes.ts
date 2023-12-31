import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../startup/sequalize';

class Sizes extends Model {
  public id!: number;
  public parent_id!: number;
  public size_name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Sizes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    size_name: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    parent_id: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
  },
  {
    tableName: 'sizes',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { Sizes };

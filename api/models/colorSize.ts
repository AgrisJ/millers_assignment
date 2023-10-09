import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../startup/sequalize';

class ColorSize extends Model {
  public id!: number;
  public color_id!: number;
  public size_id!: number;
  public parent_color_size_id!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ColorSize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    parent_color_size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'color_sizes',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { ColorSize };

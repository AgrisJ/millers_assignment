import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../startup/sequalize';

class Availabilities extends Model {
  public id!: number;
  public color_size_id!: number;
  public volume!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Availabilities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color_size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'availability',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { Availabilities };

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../sequalize';

class Lengths extends Model {
  public id!: number;
  public size_id!: number;
  public length_name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Lengths.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    length_name: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: 'lengths',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { Lengths };

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../startup/sequalize';

class Categories extends Model {
  public id!: number;
  public category_name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'categories',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { Categories };

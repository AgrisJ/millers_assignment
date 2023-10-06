import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../startup/sequalize';

class Styles extends Model {
  public id!: number;
  public category_id!: number;
  public style_name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Styles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    style_name: {
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
    tableName: 'styles',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { Styles };

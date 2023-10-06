import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../startup/sequalize';

class Colors extends Model {
  public id!: number;
  public style_id!: number;
  public color_name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Colors.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    style_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color_name: {
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
    tableName: 'colors',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { Colors };

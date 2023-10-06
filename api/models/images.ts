import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../startup/sequalize';

class Images extends Model {
  public id!: number;
  public color_id!: number;
  public image_url!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Images.init(
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
    image_url: {
      type: new DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    tableName: 'images',
    sequelize: sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export { Images };

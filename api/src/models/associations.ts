import { Styles } from './styles';
import { Colors } from './colors';
import { Sizes } from './sizes';
import { Availabilities } from './availabilities';
import { Images } from './images';
import { ColorSize } from './colorSize';

export function getAssociations() {
  // Styles Associations
  Styles.hasMany(Colors, { foreignKey: 'style_id' });

  // Colors Associations
  Colors.belongsToMany(Sizes, { through: ColorSize, foreignKey: 'color_id', otherKey: 'size_id' });
  Colors.hasOne(Images, { foreignKey: 'color_id' });
  Colors.hasMany(ColorSize, { foreignKey: 'color_id' });
  Colors.belongsTo(Styles, { foreignKey: 'style_id' });

  // Sizes Associations
  Sizes.belongsToMany(Availabilities, { through: ColorSize, foreignKey: 'size_id', otherKey: 'id' });
  Sizes.hasMany(ColorSize, { foreignKey: 'size_id' });
  Sizes.hasMany(Sizes, { as: 'Children', foreignKey: 'parent_id' });
  Sizes.belongsTo(Sizes, { as: 'Parent', foreignKey: 'parent_id' });

  // ColorSize Associations
  ColorSize.belongsTo(Colors, { foreignKey: 'color_id' });
  ColorSize.belongsTo(Sizes, { foreignKey: 'size_id' });
  ColorSize.hasMany(Availabilities, { foreignKey: 'color_size_id' });

  // Availabilities Associations
  Availabilities.belongsTo(ColorSize, { foreignKey: 'color_size_id' });

  // Images Associations
  Images.belongsTo(Colors, { foreignKey: 'color_id' });
}

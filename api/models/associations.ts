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
  Colors.hasMany(Images, { foreignKey: 'color_id' });
  Colors.hasMany(ColorSize, { foreignKey: 'color_id' });
  Colors.belongsTo(Styles, { foreignKey: 'style_id' });

  // ColorSize Associations
  ColorSize.belongsToMany(ColorSize, { as: 'ColorSizeEntries', through: ColorSize, foreignKey: 'parent_color_size_id', otherKey: 'id' });
  ColorSize.belongsToMany(Sizes, { as: 'Subsizes', through: ColorSize, foreignKey: 'id', otherKey: 'parent_color_size_id' });
  ColorSize.belongsTo(Availabilities, { foreignKey: 'parent_color_size_id' });

  // Sizes Associations
  Sizes.hasMany(ColorSize, { as: 'Children', foreignKey: 'size_id' });
  Sizes.belongsToMany(Availabilities, { through: ColorSize, foreignKey: 'size_id', otherKey: 'id' });

  // Images Associations
  Images.belongsTo(Colors, { foreignKey: 'color_id' });
}

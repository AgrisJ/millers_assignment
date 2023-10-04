import { Styles } from './styles';
import { Colors } from './colors';
import { Sizes } from './sizes';
import { Availabilities } from './availabilities';
import { Images } from './images';
import { ColorSize } from './colorSize';

export function getAssociations() {
  Styles.hasMany(Colors, { foreignKey: 'style_id' });
  Colors.belongsToMany(Sizes, { through: ColorSize, foreignKey: 'color_id', otherKey: 'size_id' });
  Sizes.belongsToMany(Colors, { through: ColorSize, foreignKey: 'size_id', otherKey: 'color_id' });
  Colors.hasOne(Images, { foreignKey: 'color_id' });

  Colors.hasMany(ColorSize, { foreignKey: 'color_id' });
  ColorSize.belongsTo(Colors, { foreignKey: 'color_id' });

  ColorSize.hasMany(Availabilities, { foreignKey: 'color_size_id' });
  Availabilities.belongsTo(ColorSize, { foreignKey: 'color_size_id' });

  Colors.belongsTo(Styles, { foreignKey: 'style_id' });
  Images.belongsTo(Colors, { foreignKey: 'color_id' });
}

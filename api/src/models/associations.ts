import { Styles } from './styles';
import { Colors } from './colors';
import { Sizes } from './sizes';
import { Availabilities } from './availabilities';
import { Images } from './images';

export function getAssociations() {
  Styles.hasMany(Colors, { foreignKey: 'style_id' });
  Colors.hasMany(Sizes, { foreignKey: 'color_id' });
  Colors.hasOne(Images, { foreignKey: 'color_id' });
  Sizes.hasMany(Availabilities, { foreignKey: 'size_id' });

  Colors.belongsTo(Styles, { foreignKey: 'style_id' });
  Sizes.belongsTo(Colors, { foreignKey: 'color_id' });
  Images.belongsTo(Colors, { foreignKey: 'color_id' });
  Availabilities.belongsTo(Sizes, { foreignKey: 'size_id' });
}

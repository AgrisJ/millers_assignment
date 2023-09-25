import { Styles } from './styles';
import { Colors } from './colors';
import { Sizes } from './sizes';
import { Availabilities } from './availabilities';
import { Lengths } from './lengths';

export function getAssociations() {
  Styles.hasMany(Colors, { foreignKey: 'style_id' });
  Colors.hasMany(Sizes, { foreignKey: 'color_id' });
  Sizes.hasMany(Availabilities, { foreignKey: 'size_id' });
  Sizes.hasMany(Lengths, { foreignKey: 'size_id' });
  Lengths.hasMany(Availabilities, { foreignKey: 'length_id' });

  Colors.belongsTo(Styles, { foreignKey: 'style_id' });
  Sizes.belongsTo(Colors, { foreignKey: 'color_id' });
  Availabilities.belongsTo(Sizes, { foreignKey: 'size_id' });
  Availabilities.belongsTo(Lengths, { foreignKey: 'length_id' });
  Lengths.belongsTo(Sizes, { foreignKey: 'size_id' });
}

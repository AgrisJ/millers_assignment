import * as express from 'express';
import { Styles } from '../models/styles';
import { Availabilities } from '../models/availabilities';
import { Images } from '../models/images';
import { Colors } from '../models/colors';
import { Sizes } from '../models/sizes';
import { error } from '../middleware/error';
import { ColorSize } from '../models/colorSize';

const router = express.Router();

// Routes
router.get('/', async (req, res) => {
  try {
    const styles = await Styles.findAll({});
    res.json(styles);
  } catch (err) {
    error(err, req, res);
  }
});

router.get('/:styleId', async (req, res) => {
  try {
    const style = (await Styles.findOne({
      where: {
        id: req.params.styleId,
      },
      include: [
        {
          model: Colors,
          attributes: ['id', 'color_name'],
          include: [
            {
              model: Images,
              attributes: ['image_url'],
            },
            {
              model: Sizes,
              through: { as: 'color_sizes' },
              attributes: ['id', 'size_name'],
              include: [
                {
                  model: Availabilities,
                  attributes: ['id', 'volume'],
                },
              ],
            },
          ],
        },
      ],
    })) as IStyle;

    // After getting the style, sizes and colors,
    // run a separate query to get the subsizes for each color_size

    type IStyle = Styles & { Colors: IColor[] };
    type IColor = Colors & { color_sizes: IColorSize[]; Sizes: ISize[] };
    type IColorSize = ColorSize & { Subsizes: Sizes[]; Availabilities: Availabilities[] };
    type ISize = Sizes & { color_sizes: ColorSize };

    for (let color of style.Colors ?? []) {
      for (let size of color.Sizes ?? []) {
        const sizeColorSizes = size.color_sizes.dataValues;

        const colorSizeDetails = await ColorSize.findOne({
          where: { parent_color_size_id: sizeColorSizes.id },
          include: [
            {
              model: Sizes,
              as: 'Subsizes',
              attributes: ['id', 'size_name'],
            },
            {
              model: Availabilities,
              attributes: ['id', 'volume'],
            },
          ],
        });
        size.setDataValue('Subsizes', (colorSizeDetails as IColorSize)?.Subsizes);
      }
    }
    res.json(style);
  } catch (err) {
    error(err, req, res);
  }
});

export default router;

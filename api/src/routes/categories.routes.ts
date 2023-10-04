import express from 'express';
import { Styles } from '../models/styles';
import { Colors } from '../models/colors';
import { Sizes } from '../models/sizes';
import { Availabilities } from '../models/availabilities';
import { handleError } from './styles.routes';
import { Categories } from '../models/categories';
import { Images } from '../models/images';
import { ColorSize } from '../models/colorSize';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await Categories.findAll({});
    res.json(categories);
  } catch (err) {
    handleError(err, res);
  }
});

router.get('/:categoryId/styles', async (req, res) => {
  try {
    const styles = await Styles.findAll({
      where: {
        category_id: req.params.categoryId,
      },
      include: [
        {
          model: Colors,
          required: true,
          attributes: ['color_name'],
          include: [
            {
              model: Sizes,
              required: true,
              through: { as: 'color_sizes' },
              attributes: ['id', 'size_name'],
              include: [
                {
                  model: Availabilities,
                  required: false,
                  attributes: ['id', 'volume'],
                },
                // Child Sizes
                {
                  model: Sizes,
                  as: 'Children',
                  required: false,
                  attributes: ['id', 'size_name'],
                  include: [
                    {
                      model: Availabilities,
                      required: false,
                      attributes: ['id', 'volume'],
                    },
                  ],
                },
              ],
            },
            {
              model: Images,
              required: false,
              attributes: ['image_url'],
            },
            {
              model: ColorSize,
              required: false,
              attributes: ['id'],
            },
          ],
        },
      ],
    });
    res.json(styles);
  } catch (err) {
    handleError(err, res);
  }
});

export default router;

import express from 'express';
import { Styles } from '../models/styles';
import { Availabilities } from '../models/availabilities';
import { Images } from '../models/images';
import { Colors } from '../models/colors';
import { Sizes } from '../models/sizes';
import { error } from '../middleware/error';

const router = express.Router();

// Routes
router.get('/', async (req, res) => {
  try {
    const styles = await Styles.findAll({});
    res.json(styles);
  } catch (err) {
    error(err, res);
  }
});

router.get('/:styleId', async (req, res) => {
  try {
    const style = await Styles.findOne({
      where: {
        id: req.params.styleId,
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
              where: { parent_id: null }, // Only include 'parent' sizes
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
          ],
        },
      ],
    });
    res.json(style);
  } catch (err) {
    error(err, res);
  }
});

// router.post('/', async (req, res) => {
//   try {
//     const style = await Styles.create(req.body);
//     res.json(style);
//   } catch (err) {
//     handleError(err, res);
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const updatedStyle = await Styles.update(req.body, { where: { id: req.params.id } });
//     res.json(updatedStyle);
//   } catch (err) {
//     handleError(err, res);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     await Styles.destroy({ where: { id: req.params.id } });
//     res.json({ message: 'Style deleted successfully' });
//   } catch (err) {
//     handleError(err, res);
//   }
// });

export default router;

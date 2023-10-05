import express from 'express';
import { Styles } from '../models/styles';
import { Colors } from '../models/colors';
import { Categories } from '../models/categories';
import { error } from '../middleware/error';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await Categories.findAll({});
    res.json(categories);
  } catch (err) {
    error(err, res);
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
        },
      ],
    });
    res.json(styles);
  } catch (err) {
    error(err, res);
  }
});

export default router;

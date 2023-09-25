import express from 'express';
import { Availabilities } from './models/availabilities';
import { Categories }  from './models/categories';
import { Styles }  from './models/styles';
import { Colors }  from './models/colors';
import { Sizes }  from './models/sizes';
import { Lengths } from './models/lengths';
const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
      const categories = await Categories.findAll();
      res.json(categories);
    } catch(err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while retrieving categories' });
    }
});

router.get('/styles/:categoryId', async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const styles = await Styles.findAll({
        where: {
          category_id: categoryId
        },
        include: [{
            model: Colors,
            required: true,
            attributes: ['color_name'],
            include: [{ // Include Sizes under each Color
                model: Sizes,
                required: true, // TODO: throw error if no sizes
                attributes: ['id', 'size_name'],
                include: [{ // Include Availabilities under each Size
                    model: Availabilities,
                    required: false,
                    attributes: ['id','volume']
                },
                {
                    model: Lengths,
                    required: false,
                    attributes: ['id','length_name'],
                    include: [{ // Include Availabilities under each Length
                        model: Availabilities,
                        required: false,
                        attributes: ['id','volume']
                    }]
                }]
            }]
        }]
      });
      res.json(styles);
    } catch(err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while retrieving styles' });
    }
});

export default router;

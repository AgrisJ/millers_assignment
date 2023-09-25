import express from 'express';
import { Styles } from '../models/styles';

const router = express.Router();

// Error handling middleware
export const handleError = (err: unknown, res: express.Response) => {
  console.error(err);
  res.status(500).json({ message: 'An error occurred' });
};

// Routes
router.get('/styles', async (req, res) => {
  try {
    const styles = await Styles.findAll({});
    res.json(styles);
  } catch (err) {
    handleError(err, res);
  }
});

router.get('/styles/:id', async (req, res) => {
  try {
    const styles = await Styles.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(styles);
  } catch (err) {
    handleError(err, res);
  }
});

// router.post('/style', async (req, res) => {
//   try {
//     const style = await Styles.create(req.body);
//     res.json(style);
//   } catch (err) {
//     handleError(err, res);
//   }
// });

// router.put('/style/:id', async (req, res) => {
//   try {
//     const updatedStyle = await Styles.update(req.body, { where: { id: req.params.id } });
//     res.json(updatedStyle);
//   } catch (err) {
//     handleError(err, res);
//   }
// });

// router.delete('/style/:id', async (req, res) => {
//   try {
//     await Styles.destroy({ where: { id: req.params.id } });
//     res.json({ message: 'Style deleted successfully' });
//   } catch (err) {
//     handleError(err, res);
//   }
// });

export default router;

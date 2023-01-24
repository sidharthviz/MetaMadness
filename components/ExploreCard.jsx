'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { fadeIn } from '../utils/motion';


const ExploreCard = ({id, imgUrl, title, index, active, handleClick}) => (
  <motion.div variants={fadeIn('right', 'spring', index *0.5)}
  >
   Explore Card
  </motion.div> 
);

export default ExploreCard;

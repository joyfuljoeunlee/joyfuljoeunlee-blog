import { motion } from "framer-motion"
import React from "react"

const UpwardsInViewContainer = ({ children, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
export default UpwardsInViewContainer

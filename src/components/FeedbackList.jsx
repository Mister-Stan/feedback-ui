import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No feedback available</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            key={item.id}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList

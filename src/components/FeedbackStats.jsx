import React from "react"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // Calculate ratings average
  let average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, cur) => {
          console.log(`Current rating: ${cur.rating}, Accumulator: ${acc}`)
          return acc + Number(cur.rating)
        }, 0) / feedback.length

  // Format the average to one decimal place
  average = Number(average.toFixed(1)).toString()

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats

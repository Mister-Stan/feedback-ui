import React from "react"
import Card from "../components/shared/Card"

const AboutPage = () => {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>
        This project is a simple feedback form that allows users to submit
        feedback and view feedback statistics. The project is built using React
        and React Router. The feedback data is stored in the browser's local
        storage.
      </p>
      <p>Version: 1.0.0</p>

      <p>
        <a href="/">Back To Home</a>
      </p>
    </Card>
  )
}

export default AboutPage

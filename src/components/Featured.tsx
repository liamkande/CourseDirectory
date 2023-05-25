import React from "react"
import { RouteComponentProps } from "react-router-dom"

interface MatchParams {
  name: string
  topic: string
}

const Featured: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { name, topic } = match.params

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p>
    </div>
  )
}

export default Featured

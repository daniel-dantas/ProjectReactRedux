import React from 'react'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
})

export default connect(
  mapStateToProps
)(function Video({ activeModule, activeLesson }) {
  return (
    <div id="video">
      <h1>Video!</h1>
      {(activeModule !== null || activeLesson !== null) ? (
        <p>{`Modulo: ${activeModule.title} | Lesson: ${activeLesson.title}`}</p>
      ) : (
        <p>Nenhum video sendo reproduzido!</p>
      )}
    </div>
  )
})

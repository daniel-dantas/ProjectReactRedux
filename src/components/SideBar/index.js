import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CourseActions from '../../store/actions/course'

const mapStateToProps = state => ({
  modules: state.course.modules
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function SideBar({ modules, toggleLesson }) {
  return (
    <aside>
      {modules.map(module => (
        <div id="modules" key={module.id} >
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() =>toggleLesson(module, lesson)}>Escolher</button>  
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
})

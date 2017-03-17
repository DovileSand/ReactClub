import React from 'react';
import MinionButton from './MinionButton';

export default (props) => {
  if (props.courses.length < 1) {
    return (
      <div>
        {props.children}
      </div>
    )
  }
  return (
    <div>
      {props.courses.map((course) => {
      return (
        <div key={course.uuid} className='grid-item'>
          <img src={course.image_url} alt='course'></img>
          <h3>{course.name}</h3>
          <p>{course.introduction}</p>
          <MinionButton text="Delete" onClick={ () => props.onDismiss(course.uuid) }/>
          <MinionButton text="Alert" onClick={ () => alert(course.uuid) }/>
        </div>
        )
      })}
    </div>
  )
}

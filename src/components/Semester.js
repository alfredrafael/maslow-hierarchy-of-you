import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  RootRef
} from '@material-ui/core';
import Course from './Course';
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddCourseButton from '../views/components/AddCourseButton';

const useStyles = makeStyles(() => ({
  root: {
    width: '350px',
  },
  cardHeaderStyle: {
    textAlign: 'center',
    padding: 7,
  },
  addCourse: {
    textTransform: 'none',
    padding: 0,
  },
  testing: {
    textAlign: 'center',
    padding: 7,
    color: 'red',
    background: 'yellow'
  },
  testing_2: {
    background: 'lightgrey'
    
  }
}));

const Semester = (props) => {
  const { semesterName, courses, semesterId, yearIndex, semesterIndex } = props;
  const classes = useStyles();
console.log(props);
  return (
    <Card
      className={classes.root}
    >
        <CardHeader
            className={(semesterName === 'Health')? classes.testing : classes.cardHeaderStyle}
            title={semesterName}
            titleTypographyProps={{ variant: 'h6' }}
            
        />
        <Divider />

        <Droppable droppableId={semesterId} type={`droppableSemester`}>
            {provided => (
                <RootRef rootRef={provided.innerRef}>
                    <CardContent className={(semesterName === "Day's Priority")? classes.testing_2: ''}>
                        {courses.map((course, index) => (
                            <Draggable key={course.id} draggableId={course.id} index={index}>
                                {provided => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Course
                                            courseName={course.courseName}
                                            yearIndex={yearIndex}
                                            semesterIndex={semesterIndex}
                                            courseIndex={index}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </CardContent>
                </RootRef>
            )}
            
        </Droppable>
    
        <Divider />

        <CardActions>
            <AddCourseButton
              yearIndex={yearIndex}
              semesterIndex={semesterIndex}
            />
        </CardActions>

    </Card>
  );
};

export default Semester;
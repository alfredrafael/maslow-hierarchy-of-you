import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
//  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  RootRef
} from '@material-ui/core';
import Course from './Course';
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddCourseButton from '../views/components/AddCourseButton';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'



const MyTest = styled.div`
  color: red;
  background: blue;
`

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


 
  priorityCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'purple',
    '&::after': {
      content: '"some content"',
      display: 'block',
      height: 60,
      marginTop: -60
    }
  },
  priorityCardBackground: {
    background: 'plum' 
  },


  healthCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'indigo'
  },
  healthCardBackground: {
    background: '#9500ff' 
  },


  workCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'Blue'
  },
  workCardBackground: {
    background: 'lightskyblue' 
  },


  relationshipsCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'green'
  },
  relationshipsCardBackground: {
    background: 'lightgreen' 
  },


  networkingCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'black',
    background: 'yellow'
  },
  networkingCardBackground: {
    background: 'lemonchiffon' 
  },


  projectsCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'orange'
  }, 
  projectsCardBackground: {
    background: 'moccasin' 
  },

  choresCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'red'
  },
  choresCardBackground: {
    background: 'lightpink' 
  },


/*
  priorityCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'red'
  },
  priorityCardBackground: {
    background: 'lightpink' 
  },


  healthCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'orange'
  },
  healthCardBackground: {
    background: 'plum' 
  },


  workCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'red',
    background: 'yellow'
  },
  workCardBackground: {
    background: 'lightgrey' 
  },


  relationshipsCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'black',
    background: 'yellow'
  },
  relationshipsCardBackground: {
    background: 'lightgrey' 
  },


  networkingCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'red',
    background: 'yellow'
  },
  networkingCardBackground: {
    background: 'lightgrey' 
  },
  projectsCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'red',
    background: 'yellow'
  },

  choresCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'red',
    background: 'yellow'
  }
*/


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
            className={(semesterName === "Day's Priority") ? classes.priorityCardHeader : 
                          (semesterName === 'Health') ? classes.healthCardHeader :
                          (semesterName === 'Work') ? classes.workCardHeader :
                          (semesterName === 'Relationships') ? classes.relationshipsCardHeader :
                          (semesterName === 'Networking') ? classes.networkingCardHeader :
                          (semesterName === 'Chores') ? classes.choresCardHeader :
                          (semesterName === 'Projects') ? classes.projectsCardHeader : classes.cardHeaderStyle }

            title={semesterName}
            titleTypographyProps={{ variant: 'h6' }}
            
        />
        <Divider />

        <Droppable droppableId={semesterId} type={`droppableSemester`}>
            {provided => (
                <RootRef rootRef={provided.innerRef}>
                    <CardContent className={(semesterName === "Day's Priority")? classes.priorityCardBackground : 
                    (semesterName === 'Health') ? classes.healthCardBackground:
                    (semesterName === 'Work') ? classes.workCardBackground :
                    (semesterName === 'Relationships') ? classes.relationshipsCardBackground :
                    (semesterName === 'Networking') ? classes.networkingCardBackground :
                    (semesterName === 'Chores') ? classes.choresCardBackground :
                    (semesterName === 'Projects') ? classes.projectsCardBackground : '' }>

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
                                        <MyTest>Hello</MyTest>
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
        <Card.Footer>
            <AddCourseButton
              yearIndex={yearIndex}
              semesterIndex={semesterIndex}
            />
            </Card.Footer>
        </CardActions>

    </Card>
  );
};

export default Semester;
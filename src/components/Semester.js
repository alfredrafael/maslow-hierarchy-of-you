import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
//  Card,
  CardHeader,
  CardContent,
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
    width: '310px',
    // transition: 'all .25s cubic-bezier(.02, .01, .47, 1)',
    // '&:hover': {
    //   boxShadow: '0 15px 15px rgba(0, 0, 0, .16)',
    //   transform: 'translate(0, -5px)',
    // }
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
    // '&::after': {
    //   content: '"some content"',
    //   display: 'block',
    //   height: 60,
    //   marginTop: -60
    // }
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  priorityCardBackground: {
    background: 'plum' 
  },




  healthCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'indigo',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  healthCardBackground: {
    background: '#9500ff', 
  },




  workCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'Blue',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  workCardBackground: {
    background: 'lightskyblue' 
  },




  relationshipsCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'green',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  relationshipsCardBackground: {
    background: 'lightgreen' 
  },




  networkingCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'black',
    background: 'yellow',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  networkingCardBackground: {
    background: 'lemonchiffon' 
  },





  projectsCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'black',
    background: 'orange',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  }, 
  projectsCardBackground: {
    background: 'moccasin' 
  },




  
  choresCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'black',
    background: 'red',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  choresCardBackground: {
    background: 'lightpink' 
  },





  otherCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'black',
    background: 'grey',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  otherCardBackground: {
    background: 'darkgrey' 
  },
}));

const Semester = (props) => {
  const { semesterName, courses, semesterId, yearIndex, semesterIndex } = props;
  const classes = useStyles();
//console.log('props.semesterName');
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
                          (semesterName === 'Projects') ? classes.projectsCardHeader :
                          (semesterName === 'Other') ? classes.otherCardHeader : classes.cardHeaderStyle }

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
                    (semesterName === 'Projects') ? classes.projectsCardBackground :
                    (semesterName === 'Other') ? classes.otherCardBackground : '' }>

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
                                        <MyTest></MyTest>
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

      
        <Card.Footer style={{alignItems: 'right'}}>
            <AddCourseButton
              yearIndex={yearIndex}
              semesterIndex={semesterIndex}
            />
            </Card.Footer>
        

    </Card>
  );
};

export default Semester;
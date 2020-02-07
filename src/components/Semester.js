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




 
  priorityCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'purple'
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
    background: 'darkslateblue' 
  },


  workCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'Blue'
  },
  workCardBackground: {
    background: 'azure' 
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
    background: 'khaki' 
  },


  projectsCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'red'
  }, 
  projectsCardBackground: {
    background: 'lightpink' 
  },

  choresCardHeader: {
    textAlign: 'center',
    padding: 7,
    color: 'white',
    background: 'grey'
  },  
  choresCardBackground: {
    background: 'lightgrey' 
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
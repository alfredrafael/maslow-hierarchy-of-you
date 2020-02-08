import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Semester from './Semester';
import { Button } from 'react-bootstrap';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  
  semester: {
    userSelect: 'none',
    padding: '0px',
    margin: `0 10px 0 0`,
  }
}));

const Year = (props) => {
  const classes = useStyles();
  const { semesters, yearIndex } = props;

  return (
    <div className={classes.root}>
      {semesters.map((semester, index) => (
        <div className={classes.semester} key={semester.id}>
          <Semester
            semesterName={semester.semesterName}
            courses={semester.courses}
            semesterId={semester.id}
            yearIndex={yearIndex}
            semesterIndex={index}
          />
        </div>
      ))}
      <Button>Hello</Button>
    </div>
  );
}

export default Year;
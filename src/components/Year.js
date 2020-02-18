import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Semester from './Semester';
import { Button, Row, Col} from 'react-bootstrap';


// const useStyles = makeStyles(() => ({
//   root: {
//     display: 'flex',
//   },
  
//   semester: {
//     userSelect: 'none',
//     padding: '0px',
//     margin: `0 10px 0 0`,
//   }
// }));

const Year = (props) => {
  // const classes = useStyles();
  const { semesters, yearIndex } = props;

  return (
    <Row>
      {semesters.map((semester, index) => (
        <div key={semester.id}>
        <Col>
          <Semester
            semesterName={semester.semesterName}
            courses={semester.courses}
            semesterId={semester.id}
            yearIndex={yearIndex}
            semesterIndex={index}
          />
          </Col>
        </div>
      ))}
    </Row>
  );
}

export default Year;
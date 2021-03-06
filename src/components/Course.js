import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader } from "@material-ui/core";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import { connect } from "react-redux";
import { deleteCourse } from "../actions/courseActions";

const useStyles = makeStyles(() => ({
  root: {
    padding: '3px',
    cursor: 'pointer'
  },
  highlightCourseName: { //before the task item
    color: '#00863f',
    fontWeight: 700,
    display: 'inline',
  },

  showDelete: {
    display: 'block',
    width: 4,
    opacity: 0.6,
    // '&:hover': {
    //   opacity: 0.9,
    // },
    marginRight: 17,
    marginTop: 7,
    marginLeft: 5,
  },
  // hideDelete: {
  //   display: 'none',
  // }
}));

const Course = (props) => {
  let { dispatch, courseName, yearIndex, semesterIndex, courseIndex } = props;
  const classes = useStyles();
  const [state, setState] = useState({isHovering: false});

  const handleHover = () => {
    setState({
      ...state,
      isHovering: !state.isHovering
    });
  };

  const handleDelete = () => {
    dispatch(deleteCourse(yearIndex, semesterIndex, courseIndex));
  };

  const sayHello = () => {
    alert('hello');
  };

  let coursePrefix = "";
  const pattern = new RegExp(/[A-Z]+ \d{4}|\d{3} Core Course/);

  if (pattern.test(courseName)) {
    coursePrefix = courseName.match(pattern);
    courseName = courseName.split(coursePrefix)[1];
  }

  return (
    <div className={classes.root}>
      <Card
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        elevation={3}
      >
        <CardHeader
          title={
            <>

              <div className={classes.highlightCourseName}> {/* Before the Task Item*/}
                  
              </div>
              
                  {courseName} {/* Main text */}
              
              <ListIcon // after the text
                      style={{float: 'right' }} 
                      fontSize={'medium'} 
                      onClick={sayHello}
              />

              <div>{/* Under the text*/}</div>

              
            </>

          }
          titleTypographyProps={{ variant:'body1' }}
          
          action={
            <>
              <div className={classes.showDelete} onClick={handleDelete}>
                <DeleteSharpIcon fontSize={'small'} style={{}}/>
              </div>
            </>
          }
          style={{padding: 10}}
        >
        </CardHeader>
      </Card>
    </div>
  );
}

export default connect()(Course);
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card, Icon
} from '@material-ui/core';
import TextArea from "react-textarea-autosize";
import { connect } from 'react-redux';
import { addCourse } from "../../actions/courseActions";
import { Button } from 'react-bootstrap';
import styled from 'styled-components';


const CustomButton = styled.button`
  display: block;
  width: 30%;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  color: purple;
  background-color: azure;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  margin-right: -4%;
  }
`

const useStyles = makeStyles(() => ({
  root: {
    textTransform: 'none', 
    padding: 0,
  },
  test: {
    background: 'black',
    display: 'none'
  },
  addCourseForm: {
    textTransform: 'none',
    padding: 0,
    backgroundColor: '#5aac44',
    color: 'white',
    paddingRight: 6,
    paddingLeft: 6,
    '&:hover': {
      backgroundColor: '#72c45c',
    },
  },
  closeIcon: {
    '&:hover': {
      backgroundColor: '#ebebeb',
    },
  },
  cardStyle: {
    overflow: 'visible',
    minHeight: 30,
    minWidth: 202,
    padding: '6px 8px 2px',
  },
  textAreaStyle: {
    resize: 'none',
    width: '100%',
    overflow: 'hidden',
    outline: 'none',
    border: 'none',
  }
}));

const AddCourseButton = (props) => {
  const { dispatch, yearIndex, semesterIndex } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    isOpen: false,
    text: ''
  });

  const handleOpenForm = () => {
    setState({
      ...state,
      isOpen: !state.isOpen
    });
  };

  // Clicked outside while add course form is open
  const handleClickOutside = () => {
    const courseName = state.text.trim();

    setState({
      isOpen: !state.isOpen,
      text: ''
    });

    if (!courseName) return;

    dispatch(addCourse(courseName, yearIndex, semesterIndex));
  }

  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      handleClickOutside();
    }
  }

  const handleTextChange = (e) => {
    setState({
      ...state,
      text: e.target.value
    });
  };

  const handleAddCourseClick = () => {
    if (state.text) {
      setState({
        ...state, 
        text: ''
      })
    }
  };

  const renderButton = () => {
    return (
      <CustomButton className={classes.root} onClick={handleOpenForm} style={{float: 'right'}}>
        <span style={{fontSize: '169%', fontWeight: 'bold'}}>&nbsp; + &nbsp;</span>
      </CustomButton>
    );
  };

  const renderForm = () => {
    return (
      <>
        <Card
          className={classes.cardStyle}
          onBlur={handleClickOutside}
        >
          <TextArea
            className={classes.textAreaStyle}
            autoFocus
            placeholder={'Enter item'}
            value={state.text}
            onChange={handleTextChange}
            onKeyPress={handleKeyEnter}
           />
        </Card>
        <Button className={classes.addCourseForm} onClick={handleAddCourseClick}>Add Item</Button>
        <Icon className={classes.closeIcon} onClick={handleOpenForm}>close</Icon>
      </>
    );
  };

  return (
    <>
      {state.isOpen ? renderForm() : renderButton()}
    </>
  );
};

export default connect()(AddCourseButton);
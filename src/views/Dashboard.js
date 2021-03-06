import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CssBaseline } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { handleDrag } from '../actions/semesterActions';
import Topbar from "../layout/Topbar";
import Footer from "../layout/Footer";
import Year from "../components/Year";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%' // final changed that did the 4 cards per row trick 
  },
  content: {
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  verticalYearLabel: {
    writingMode: 'vertical-lr',
    textOrientation: 'upright',
    textAlign: 'center',
    marginRight: '15px',
    padding: 4,
    fontWeight: 700,
  },
  firstYearRow: {
    // Prevents an excessive gap at the top
    display: 'flex',
  },
  yearRow: {
    display: 'flex',
    marginTop: '30px',
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const { dispatch, board } = props;

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    dispatch(handleDrag(result));
  }


  return (
    <div className={classes.root}>
      <CssBaseline />

      <Topbar
      />

  

      <main className={classes.content}>
        <div className={classes.toolbar} />


        <DragDropContext onDragEnd={onDragEnd}>
          {board.map((item, index) => (
            <div key={index} 
                 className={(index === 0) ? classes.firstYearRow : classes.yearRow}>
             
            {console.log('hello')} {/* loops 4 times*/}

              <Year
                semesters={item.semesters}
                yearIndex={index}
              />
            </div>
          ))}
          
          <Footer />
        </DragDropContext>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  board: state.board
});

export default connect(mapStateToProps)(Dashboard);
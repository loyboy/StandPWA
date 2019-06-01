import React from 'react';

export default class learnteachingModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,learnteaching,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Learning Envirionment >> Teaching Aids </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Teaching Aids? </label>
          <p className=" help">
Is there audio visual facility in each classroom for slides and or video based instruction? Is it in a special purpose common theater? Or something in the line of whiteboard?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {learnteaching !== null ? learnteaching.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>All classrooms</option>
              <option value='2'>Some classrooms</option>
              <option value='1'>Some facilities</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Usage? </label>
          <p className=" help">Evidence of usage: as in integration in mainstream instruction timetable?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {learnteaching !== null ? learnteaching.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Currency ? </label>
          <p className=" help"> Is it of modern technologies (HDMI, USB, WI-fi etc)? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {learnteaching !== null ? learnteaching.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Adequacy? </label>
          <p className=" help"> For the population of the school, would the experience easily go round? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {learnteaching !== null ? learnteaching.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Relevance? </label>
          <p className=" help"> Is the range of utilization within the mainstream training (curriculum delivery) of the school? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {learnteaching !== null ? learnteaching.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>


        </section>
        <footer className="modal-card-foot">
          <button className="button is-success is-small" onClick={saveform} >Save changes</button>
          <button className="button is-small" onClick={handleClose}>Cancel</button>
        </footer>
      </div>
    </div>
    );
  }

}

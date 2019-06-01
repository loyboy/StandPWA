import React from 'react';

export default class SusTechnologyModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,sustain,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  Sustainability >> Technology </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Education Processes? </label>
          <p className=" help"> To what extent is IT adopted for teaching, lessons note, attendance, M&E and Capacity development? (not school administration) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {sustain !== null ? sustain.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>Excellent</option>
              <option value='4'>Very Good</option>
              <option value='3'>Good</option>
              <option value='2'>Poor</option>
              <option value='1'>Bad</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Administration & Finance </label>
          <p className=" help"> To what extent is IT adopted for administration?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {sustain !== null ? sustain.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>

              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Scope </label>
          <p className=" help"> What is the scope of usage of IT in the departments that they are adopted?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {sustain !== null ? sustain.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>Transformation</option>
              <option value='2'>Tools</option>
              <option value='1'>Typewriter Sub</option>

              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Quality ? </label>
          <p className=" help"> What is the quality of ICT equipment, packages and implementations? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {sustain !== null ? sustain.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Excellent</option>
              <option value='2'>Good</option>
              <option value='1'>Bad</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Integration ? </label>
          <p className=" help"> What is the extent of integration of IT asset? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {sustain !== null ? sustain.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Training ? </label>
          <p className=" help"> What is the staff training program like, if any? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {sustain !== null ? sustain.att_6 : ''}>
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

import React from 'react';

export default class AcaInternalModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,academic,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  Academic Performance >> Internal </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label">  Class Work Score </label>
          <p className=" help"> Aggregate scores and average them for a single figure of performance? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {academic !== null ? academic.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Excellent</option>
              <option value='2'>Good</option>
              <option value='1'>Bad</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Home Work Score  </label>
          <p className=" help"> Aggregate scores and average them for a single figure of performance </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {academic !== null ? academic.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Excellent</option>
              <option value='2'>Good</option>
              <option value='1'>Bad</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label">  Test Score </label>
          <p className=" help"> Aggregate scores and average them for a single figure of performance </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {academic !== null ? academic.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Excellent</option>
              <option value='2'>Good</option>
              <option value='1'>Bad</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Mid Term ? </label>
          <p className=" help"> There should be a mid-term test for every full term </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {academic !== null ? academic.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Excellent</option>
              <option value='2'>Good</option>
              <option value='1'>Bad</option>
            </select>
          </div>
          </div>
        </div>



        <div className="field">
          <label className="label">Terminal Exam ? </label>
          <p className=" help"> There should be terminal exam for every completed term </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {academic !== null ? academic.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Excellent</option>
              <option value='2'>Good</option>
              <option value='1'>Bad</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Terminal Exam Score ? </label>
          <p className=" help"> Aggregate scores and average them for a single figure of performance </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {academic !== null ? academic.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Excellent</option>
              <option value='2'>Good</option>
              <option value='1'>Bad</option>
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

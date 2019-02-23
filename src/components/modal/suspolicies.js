import React from 'react';

export default class SusPolicyModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,sustain,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  Sustainability >> Policies </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Admission? </label>
          <p className=" help"> Is there a policy and or guideline in admission? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {sustain !== null ? sustain.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Staff recruitment? </label>
          <p className=" help"> Is there a policy and or guideline in staff recruitment? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {sustain !== null ? sustain.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> General Punishment ? </label>
          <p className=" help"> Is there a policy and or guideline in general punishment? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {sustain !== null ? sustain.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Rustication? </label>
          <p className=" help"> Is there a policy and or guideline in rustication? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {sustain !== null ? sustain.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Lesson note? </label>
          <p className=" help"> Is there a policy and or guideline in lessons note? </p>
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
          <label className="label"> Attendance ? </label>
          <p className=" help"> Is there a policy and or guideline in attendance? </p>
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

        <div className="field">
          <label className="label"> Exam/Promotion of students ? </label>
          <p className=" help"> Is there a policy and or guideline in exam/promotion of students? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {sustain !== null ? sustain.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Capacity Development </label>
          <p className=" help"> Is there a policy and or guideline in capacity development? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {sustain !== null ? sustain.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Promotion of teachers? </label>
          <p className=" help"> Is there a policy and or guideline in promotion of teachers? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {sustain !== null ? sustain.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> M&E? </label>
          <p className=" help"> Is there a policy and or guideline in M&E? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {sustain !== null ? sustain.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> M&E? </label>
          <p className=" help"> Is there a policy and or guideline in M&E? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_11" onChange={handleInputChange} value= {sustain !== null ? sustain.att_11 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Policies & Guidelines Communication </label>
          <p className=" help"> Is there a policy and or guideline in policies & guidelines communication? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_12" onChange={handleInputChange} value= {sustain !== null ? sustain.att_12 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Organogram </label>
          <p className=" help"> Is there a policy and or guideline in organogram? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_13" onChange={handleInputChange} value= {sustain !== null ? sustain.att_13 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Academic year schedules </label>
          <p className=" help"> Is there a policy and or guideline in academic year schedule? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_14" onChange={handleInputChange} value= {sustain !== null ? sustain.att_14 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Manuals </label>
          <p className=" help">  Is there a policy and or guideline in manuals? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_15" onChange={handleInputChange} value= {sustain !== null ? sustain.att_15 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Succession Plans </label>
          <p className=" help">  Is there a policy and or guideline in succession plan? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_16" onChange={handleInputChange} value= {sustain !== null ? sustain.att_16 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Student government </label>
          <p className=" help">  Is there a policy and or guideline in student government? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_17" onChange={handleInputChange} value= {sustain !== null ? sustain.att_17 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> SHE policy </label>
          <p className=" help"> Is there a policy and or guideline in SHE policy? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_18" onChange={handleInputChange} value= {sustain !== null ? sustain.att_18 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">  Development Plan </label>
          <p className=" help"> Is there a policy and or guideline in development plan? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_19" onChange={handleInputChange} value= {sustain !== null ? sustain.att_19 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">  Manuals and records Review, update or replacement </label>
          <p className=" help"> Is there a policy and or guideline in Manuals and records Review, update or replacement? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_20" onChange={handleInputChange} value= {sustain !== null ? sustain.att_20 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">  Application </label>
          <p className=" help"> Is there a policy and or guideline in application? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_21" onChange={handleInputChange} value= {sustain !== null ? sustain.att_21 : ''}>
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

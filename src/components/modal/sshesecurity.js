import React from 'react';

export default class SsheSecuritylModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,safety,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  SSHE >> Security </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label">  Perimeter </label>
          <p className=" help"> Perimeter protection? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {safety !== null ? safety.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Outer Access (Gates)  </label>
          <p className=" help"> Is there a gate at every access to the school grounds? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {safety !== null ? safety.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Functional Quality </label>
          <p className=" help">  Strictly functionally, is the gate fit for purpose? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {safety !== null ? safety.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Inner Access (Doors) </label>
          <p className=" help"> Do classroom and other students work space equipped for lock-down, as in protective doors?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {safety !== null ? safety.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Functional Quality </label>
          <p className=" help"> Strictly functionally, are the doors fit for purpose? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {safety !== null ? safety.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Access control to classroom and students workspaces </label>
          <p className=" help"> Is access into classroom and student work spaces controlled as in swipe card or locked doors during when classes are in session? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {safety !== null ? safety.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Student and Teachers Identification </label>
          <p className=" help"> Is identify card display mandatory within the school? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {safety !== null ? safety.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>



        <div className="field">
          <label className="label"> Visits </label>
          <p className=" help"> Is visit to the school grounds regulated and enforced, especially during ‘school in session’? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {safety !== null ? safety.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Visitors Identification </label>
          <p className=" help"> Are visitors clearly identified through display of identity cards during visits? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {safety !== null ? safety.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Pick-ups </label>
          <p className=" help"> Is there a student pick-up procedure and enforced? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_11" onChange={handleInputChange} value= {safety !== null ? safety.att_11 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> In-house Security </label>
          <p className=" help"> Is there in-house security staff? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_12" onChange={handleInputChange} value= {safety !== null ? safety.att_12 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Plan </label>
          <p className=" help"> Does the school have a formal security emergency plan? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_13" onChange={handleInputChange} value= {safety !== null ? safety.att_13 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Safety Plan Communications </label>
          <p className=" help"> Is there evidence of pervasive communication of security plans and ‘gates’ in the school, and evidence of security drills and drills time-table? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_14" onChange={handleInputChange} value= {safety !== null ? safety.att_14 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Support </label>
          <p className=" help"> Is there a functional arrangement with external support to call in if necessary? (communication numbers to the police would suffice) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_15" onChange={handleInputChange} value= {safety !== null ? safety.att_15 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Functional Quality </label>
          <p className=" help"> Strictly functionally, are the doors fit for purpose? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {safety !== null ? safety.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Excellent</option>
              <option value='1'>Average</option>
              <option value='0'>None</option>
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

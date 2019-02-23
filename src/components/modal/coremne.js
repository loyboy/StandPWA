import React from 'react';

export default class CoreMneModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,coreprocess3,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Core Processes >> M&E</p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>
        <section className="modal-card-body">

        <div class="field">
          <label class="label">Operation? </label>
          <p class=" help">Does the school operate lesson note?</p>
          <div class="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes for both</option>
              <option value='1'>Yes for students</option>
              <option value='1'>Yes for teachers</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Consistency ? </label>
          <p class="help">Take from the last complete term, was there a consistent, predictable M&E regime?</p>
          <div class="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Consistent</option>
              <option value='0'>Not Consistent</option>
            </select>
          </div>
          </div>
        </div>


        <div class="field">
          <label class="label">Scope ? </label>
          <p class="help">For students – classwork, assignment, weekly, mid-term & terminal; attendance; instructors – attendance, lesson notes operation and lesson notes performance; head – supervision of processes, timing and efficiency thereof, application of processes policy</p>
          <div class="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_3 : ''}>
              <option value='0'>Choose---</option>
              <option value='3'>Comprehensive</option>
              <option value='2'>Not Comprehensive</option>
              <option value='1'>Lean</option>

            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Security ? </label>
          <p class="help"> M&E operation vulnerability and susceptibility to rigging? </p>
          <div class="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_4 : ''}>
              <option value='0'>Choose---</option>
              <option value='2'>Good</option>
              <option value='1'>Fair</option>

            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Transparency ? </label>
          <p class="help">Is the M&E system transparent and predictable to students, instructors and parents? </p>
          <div class="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Standard ? </label>
          <p class="help">Are units of measurement conventional and popular standards of pass, fail, excellent (>=50 as pass)? </p>
          <div class="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Record Keeping? </label>
          <p class="help">Is record of M&E diligently kept, at least during the former term? </p>
          <div class="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_7 : ''}>
            <option value=''>Choose---</option>
            <option value='1'>Yes</option>
            <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label"> Preservation ? </label>
          <p class="help"> Archives maintained in a reliable, recoverable and sustainable manner? </p>
          <div class="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='1'>Not quite</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Supervision? </label>
          <p class="help">Evidence of supervision of M&E operation? </p>
          <div class="control">
          <div className="select is-large">

            <select name="att_9" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Application? </label>
          <p class="help">Evidence of M&E record being used to enforce policy, QA and QC </p>
          <div class="control">
          <div className="select is-large">

          <select name="att_10" onChange={handleInputChange} value= {coreprocess3 !== null ? coreprocess3.att_10 : ''}>
          <option value=''>Choose---</option>
          <option value='2'>Yes</option>
          <option value='0'>No</option>
          </select>
          </div>
          </div>
        </div>



        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={saveform} >Save changes</button>
          <button className="button" onClick={handleClose}>Cancel</button>
        </footer>
      </div>
    </div>
    );
  }

}

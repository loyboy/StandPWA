import React from 'react';

export default class CoreLsnModal extends React.PureComponent {
 // //abbreviation - lsn_
  render() {
    const { active,handleClose,handleInputChange,coreprocess2,saveform  } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Core Processes >> Lessonnote</p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>
        <section className="modal-card-body">

        <div className="field">
          <label className="label">Operation? </label>
          <p className=" help">Does the school operate lesson note?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Consistency ? </label>
          <p className="help">Was lesson note operated consistently during the last term over the last term?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label">Frequency ? </label>
          <p className="help">What is the lessons note cycle practiced by the school?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>Weekly</option>
              <option value='3'>Fortnitely</option>
              <option value='2'>Three-weekly</option>
              <option value='1'>Monthly</option>
              <option value='0'>1 Month/Not clear</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Implementation ? </label>
          <p className="help">Access implementation as in functional, sustainable, professional? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Record ? </label>
          <p className="help">Is lessons note kept for reference and possible reuse? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Supervision ? </label>
          <p className="help">Evidence of supervision of lessons note operation? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Performance? </label>
          <p className="help">How good is the performance of this school? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>Excellent</option>
              <option value='4'>Very Good</option>
              <option value='3'>Good</option>
              <option value='2'>Fair</option>
              <option value='1'>Bad</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Timing ? </label>
          <p className="help">Are submissions and approvals within the stipulated days by school policy or tradition? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Quality? </label>
          <p className="help">Average cycle of 4 LNs </p>
          <div className="control">
          <div className="select is-large">

            <select name="att_9" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>1 cycle</option>
              <option value='3'>2 cycles</option>
              <option value='2'>3 cycles</option>
              <option value='1'>4 cycles</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Completion? </label>
          <p className="help">Are completion within times? </p>
          <div className="control">
          <div className="select is-large">

          <select name="att_10" onChange={handleInputChange} value= {coreprocess2 !== null ? coreprocess2.att_10 : ''}>
          <option value=''>Choose---</option>
          <option value='4'>Yes</option>
          <option value='0'>No</option>
          </select>
          </div>
          </div>
        </div>



        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={saveform}>Save changes</button>
          <button className="button" onClick={handleClose}>Cancel</button>
        </footer>
      </div>
    </div>
    );
  }

}

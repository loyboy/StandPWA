import React from 'react';


export default class CoreAttModal extends React.PureComponent {
  //abbreviation - att_
  //value={ coreprocess1.att1 !== null ? coreprocess1.att1 : ''}
  render() {
    const { active,handleClose,handleInputChange,coreprocess1,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Core Processes >> Attendance</p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>
        <section className="modal-card-body">

        <div className="field">
          <label className="label">Taking ? </label>
          <p className=" help">Does the school take class attendance?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_1 : ''} >
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Consistency ? </label>
          <p className="help">Is attendance taken daily for the last one term (school days)? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_2 : ''} >
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label">Frequency ? </label>
          <p className="help">How many times is attendance taken on a school day? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>3</option>
              <option value='2'>2</option>
              <option value='1'>1</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Timing ? </label>
          <p className="help">Is the policy roll-call time adhered to? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label">Implementation ? </label>
          <p className="help">Is there a dedicated attendance register or app and the formality professionally observed? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Record ? </label>
          <p className="help">Is attendance record kept? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Preservation ? </label>
          <p className="help">Is attendance record archiving reliable, sustainable & recoverable? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Supervision ? </label>
          <p className="help">Is there evidence of supervision of the process? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Application ? </label>
          <p className="help"> Is there evidence of attendance information being used to enforce policy & QA? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {coreprocess1 !== null ? coreprocess1.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>



        </section>
        <footer className="modal-card-foot">
          <button className="button is-success is-small" onClick={saveform}>Save changes</button>
          <button className="button is-warning is-small" onClick={handleClose}>Cancel</button>
        </footer>
      </div>
    </div>
    );
  }

}

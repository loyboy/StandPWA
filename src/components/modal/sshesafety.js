import React from 'react';

export default class SsheSafetylModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,safety,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  SSHE >>  Safety </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label">  Seperation </label>
          <p className=" help"> Any provision for Perimeter separation and access limiting? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {safety !== null ? safety.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Access  </label>
          <p className=" help"> Any provision for Potential of dangerous intrusion? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {safety !== null ? safety.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Grounds </label>
          <p className=" help"> Are there Potentials of accidents and injury? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {safety !== null ? safety.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Buildings </label>
          <p className=" help"> Are there Potentials of accidents and injury; are there makings for guidance for safe evacuation?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {safety !== null ? safety.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Classroom Fixed </label>
          <p className=" help"> Are there Potentials of accidents and injury </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {safety !== null ? safety.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Furniture </label>
          <p className=" help"> Are there Potentials of accidents and injury </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {safety !== null ? safety.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Plan </label>
          <p className=" help"> Any Emergency plan and guidelines including fire, flood, storm and structure collapse; and supporting facilities including well serviced fire extinguishers? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {safety !== null ? safety.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Support </label>
          <p className=" help"> Formal arrangement for support that could be called in during safety emergency? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {safety !== null ? safety.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Organisation </label>
          <p className=" help"> Is there evidence of SSHE communication, orientation and drills? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {safety !== null ? safety.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Staff </label>
          <p className=" help"> Is there any dedicated safety staff? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {safety !== null ? safety.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='1'>Some</option>
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

import React from 'react';

export default class SsheHealthylModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,safety,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  SSHE >>  Health </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label">  Portable Water Supply </label>
          <p className=" help">
Is there provision for potable water and is provided for the students use? If yes, is there management for safe scoop? Or a requirement for students to come to classes with their supply? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {safety !== null ? safety.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes Good</option>
              <option value='1'>Yes Some</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> General Water Supply  </label>
          <p className=" help"> Is there water supply around the school for hand-washing and sanitary use? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {safety !== null ? safety.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Grounds and Spaces </label>
          <p className=" help"> Is there sufficient green grounds and spaces for pleasant and healthy occupation? Numbers should be taken into consideration</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {safety !== null ? safety.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes Good</option>
              <option value='1'>Yes some</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Convenience </label>
          <p className=" help"> Is there sanitary provision for urinating and evacuation? Is it maintained and serviced with water and tissue paper? Is it adequate for the population?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {safety !== null ? safety.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes Good</option>
              <option value='1'>Yes some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Atmosphere </label>
          <p className=" help"> Is the atmosphere clean by your visual and smell assessment? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {safety !== null ? safety.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Classroom Furniture </label>
          <p className=" help">
Is there Ease of reading the board or screen and moving aroundIs there Ease of reading the board or screen and moving around? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {safety !== null ? safety.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Classroom Sitting </label>
          <p className=" help"> Are seats ergonomic and spaced for extended sitting in a classroom?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {safety !== null ? safety.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Classroom Ventilation </label>
          <p className=" help"> Is natural cross ventilation in place for free air exchange? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {safety !== null ? safety.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Classroom Lighting </label>
          <p className=" help"> Is the lighting situation healthy for children? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {safety !== null ? safety.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Classroom (Temperature Control) </label>
          <p className=" help"> Is the temperature ambience of the classroom good enough for children to spend long hours in and learning? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {safety !== null ? safety.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Plan </label>
          <p className=" help"> Do we have health emergency plan that covers child health emergencies?? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_11" onChange={handleInputChange} value= {safety !== null ? safety.att_11 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Support Internal </label>
          <p className=" help"> Is there a well serviced first-aid box and a staff, either dedicated professional of delegated officer in charge </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_12" onChange={handleInputChange} value= {safety !== null ? safety.att_12 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes good</option>
              <option value='1'>Yes some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Support External </label>
          <p className=" help"> Does the school have call-up understanding with a health service provider, public or private? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_13" onChange={handleInputChange} value= {safety !== null ? safety.att_13 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Support </label>
          <p className=" help">Is there evidence of health program communication in the school premises? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_14" onChange={handleInputChange} value= {safety !== null ? safety.att_14 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes good</option>
              <option value='1'>Yes some</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Support External </label>
          <p className=" help">
Does the school have call-up understanding with a health service provider, public or private? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_14" onChange={handleInputChange} value= {safety !== null ? safety.att_14 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes good</option>
              <option value='1'>Yes some</option>
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

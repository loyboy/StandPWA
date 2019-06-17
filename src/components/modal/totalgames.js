import React from 'react';

export default class TotalGamesModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,totalgames,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Total Human Development >> Games and Sports </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Formalization? </label>
          <p className=" help"> Is there a time slot allocated to ‘games & sports’ and a guideline that is binding for students to be involved?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {totalgames !== null ? totalgames.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Organization? </label>
          <p className=" help"> Is there a games master or trainer with some professional qualification Ideally?

Is there a program for the year that is formalized?

Is there fulltime officer in charge of sports and games, not just delegated teacher?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {totalgames !== null ? totalgames.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Facility Count ? </label>
          <p className=" help"> Are there dedicated facilities for sports and games? (Rented facility would do) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {totalgames !== null ? totalgames.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>Yes</option>
              <option value='2'>Some</option>
              <option value='1'>Weak</option>
              <option value='0'>Poor</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Facility Adequacy ? </label>
          <p className=" help"> How many sports and games facilities relative to student population (2 soccer fields = 2 facilities for this particular purpose)? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {totalgames !== null ? totalgames.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Quality? </label>
          <p className=" help"> Are any of the facilities standard? Are they maintained? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {totalgames !== null ? totalgames.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Competition? </label>
          <p className=" help"> How many competitions established and practiced internally relative to student population within the school? </p>
          <div className="control">
            <input className="input is-focused" name="att_6" type="number"
            placeholder="Enter figure to set Internal Competiton" onChange={handleInputChange}
            value= {totalgames !== null ? totalgames.att_6 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Competitors? </label>
          <p className=" help"> How many participants in internal sports and games competitions relative to school population interschool as in ‘school group’?</p>
          <div className="control">
              <input className="input is-focused" name="att_7" type="number"
              placeholder="Enter figure to set Internal Competitors" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_7 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Trophies? </label>
          <p className=" help"> How many trophies are sponsored for internal competitions relative to school population? Trophy is not in terms of material value but symbolic value </p>
          <div className="control">
              <input className="input is-focused" name="att_8" type="number"
              placeholder="Enter figure to set Internal Trophies" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_8 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> Local Competitions? </label>
          <p className=" help"> How many local sports and games competitions participation relative to school population? </p>
          <div className="control">
             <input className="input is-focused" name="att_9" type="number"
              placeholder="Enter figure to set Local Competitions" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_9 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> Local Competitiors? </label>
          <p className=" help">How many participants in local sports and games competitions relative to school population? </p>
          <div className="control">
             <input className="input is-focused" name="att_10" type="number"
              placeholder="Enter figure to set Local Competitiors" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_10 : ''}/>

          </div>
        </div>

        <div className="field">
          <label className="label"> Local Trophies? </label>
          <p className=" help"> How many trophies won in local sports and games competitions relative to school population? </p>
          <div className="control">
              <input className="input is-focused" name="att_11" type="number"
              placeholder="Enter figure to set Local Trophies" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_11 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> External Competitions? </label>
          <p className=" help"> How many external sports and games competitions participation relative to school population (state level up) </p>
          <div className="control">
              <input className="input is-focused" name="att_12" type="number"
              placeholder="Enter figure to set External Competitions" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_12 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> External Competitors? </label>
          <p className=" help"> How many participants in external sports and games competitions relative to school population? </p>
          <div className="control">
              <input className="input is-focused" name="att_13" type="number"
              placeholder="Enter figure to set External Competitors" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_13 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> External Trophies? </label>
          <p className=" help"> How many trophies are won in external sports and games competitions relative to school population (last one year)? </p>
          <div className="control">
             <input className="input is-focused" name="att_14" type="number"
              placeholder="Enter figure to set External Trophies" onChange={handleInputChange}
              value= {totalgames !== null ? totalgames.att_14 : ''}/>
          </div>
        </div>

        <div className="field">
          <label className="label"> Overall Quality? </label>
          <p className=" help"> What level would you rate the school sports and games activities and the trophies won? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_15" onChange={handleInputChange} value= {totalgames !== null ? totalgames.att_15 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>High</option>
              <option value='0'>Weak</option>
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

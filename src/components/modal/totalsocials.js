import React from 'react';

export default class TotalSocialsModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,totalsocials,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Total Human Development >> Socials </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Theater? </label>
          <p className=" help"> Theater or event hall? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= { totalsocials !== null ? totalsocials.att_1 : '' }>
              <option value=''>Choose---</option>
              <option value='1'>Yes </option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Adequacy ? </label>
          <p className=" help"> Relative to population, can it seat 75% </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Clubs ? </label>
          <p className=" help"> Number of established and functional clubs? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Activity Count ? </label>
          <p className=" help"> Non-games/sports competitions promoted and active in school calendar? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Trophy Count ? </label>
          <p className=" help">Number of trophies for internal?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Local Activity Count ? </label>
          <p className=" help"> Non-games/sports activities promoted and active</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Local Trophy Count ? </label>
          <p className=" help"> Number of trophies local </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> External Activity Count ? </label>
          <p className=" help"> Non-games/sports activities promoted and active </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> External Trophy Count ? </label>
          <p className=" help"> Number of trophies external </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Overall Quality ? </label>
          <p className=" help"> Assessment of the caliber of trophies and numbers </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {totalsocials !== null ? totalsocials.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>OK</option>
              <option value='1'>Low</option>
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

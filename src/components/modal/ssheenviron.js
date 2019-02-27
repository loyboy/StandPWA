import React from 'react';

export default class SsheEnvironlModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,safety,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  SSHE >>  Environment </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label">  Air Pollution </label>
          <p className=" help">Any observable pollution of the air, possibly from industrial activities in the immediate vicinity?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {safety !== null ? safety.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Free</option>
              <option value='1'>Some</option>
              <option value='0'>Polluted</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Noise Pollution?  </label>
          <p className=" help"> Any observable noise pollution, possibly from commercial activities, industrial activities or traffic in the immediate vicinity? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {safety !== null ? safety.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Free</option>
              <option value='1'>Some</option>
              <option value='0'>Polluted</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Environmental Pollution ? </label>
          <p className=" help">
Any observable environmental pollution in the grounds of the school, possibly from commercial activities, industrial activities or natural phenomenon / incident? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {safety !== null ? safety.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Free</option>
              <option value='1'>Some</option>
              <option value='0'>Polluted</option>

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

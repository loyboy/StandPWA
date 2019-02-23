import React from 'react';

export default class SusGovernModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,sustain,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  Sustainability >> Governance </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Board? </label>
          <p className=" help"> Is there a constituted board with terms of reference?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {sustain !== null ? sustain.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>

              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Constitution of Board </label>
          <p className=" help"> Is the board constituted along professional lines? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {sustain !== null ? sustain.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>

              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Active (Calendar) </label>
          <p className=" help"> Is the board active accordingly to its calendar? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {sustain !== null ? sustain.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>

              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Active (Mandate) ? </label>
          <p className=" help"> Is the board output effective? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {sustain !== null ? sustain.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Transition Track ? </label>
          <p className=" help"> It there a clear provision for transition of board member tenures?Was there ever a transition in these terms (if there were expiries) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {sustain !== null ? sustain.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
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

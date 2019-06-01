import React from 'react';

export default class SusNonAcademicModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,sustain,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title">  Sustainability >> Non-Academic </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Calendar? </label>
          <p className=" help"> Is there a credible capacity development calendar? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {sustain !== null ? sustain.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Development Hours in calendar program actually accomplished? </label>
          <p className=" help"> How many development hours? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {sustain !== null ? sustain.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>75% up</option>
              <option value='2'>50% - 74%</option>
              <option value='1'>30% - 49%</option>
              <option value='0'>less than 30%</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Beneficiaries Count ? </label>
          <p className=" help"> How many personnel are involved? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {sustain !== null ? sustain.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>75% up</option>
              <option value='2'>50% - 74%</option>
              <option value='1'>30% - 49%</option>
              <option value='0'>less than 30%</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Non-calendar programs beneficiaries count ? </label>
          <p className=" help"> How many beneficiaries? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {sustain !== null ? sustain.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>75% up</option>
              <option value='2'>50% - 74%</option>
              <option value='1'>30% - 49%</option>
              <option value='0'>less than 30%</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Non-calendar programs dev hrs? </label>
          <p className=" help"> How many development hours? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {sustain !== null ? sustain.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>75% up</option>
              <option value='2'>50% - 74%</option>
              <option value='1'>30% - 49%</option>
              <option value='0'>less than 30%</option>


            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Budget for period? </label>
          <p className=" help"> Budget for capacity development? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {sustain !== null ? sustain.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>20% up</option>
              <option value='2'>10% - 19%</option>
              <option value='1'>7% - 18%</option>
              <option value='0'>less than 6%</option>


            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Calendar program slip hours? </label>
          <p className=" help"> How many calendar programs fell through in terms of total hours planned? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {sustain !== null ? sustain.att_7 : ''}>
              <option value=''>Choose---</option>

              <option value='2'>less than 30%</option>
              <option value='1'>more than 30%</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Calendar program slip affected numbers? </label>
          <p className=" help"> How many beneficiaries were affected by the slip? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {sustain !== null ? sustain.att_8 : ''}>
              <option value=''>Choose---</option>

              <option value='2'>less than 30%</option>
              <option value='1'>more than 30%</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Budget Slip? </label>
          <p className=" help"> How much of the budget was not spent due to lack of funds? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {sustain !== null ? sustain.att_9 : ''}>
              <option value=''>Choose---</option>

              <option value='2'>less than 30%</option>
              <option value='1'>approx. 30%</option>
              <option value='0'>more than 30%</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Quality overall of programs done? </label>
          <p className=" help"> View abstracts, program reputation and providers? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {sustain !== null ? sustain.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>High</option>
              <option value='2'>Good</option>
              <option value='1'>Less</option>
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

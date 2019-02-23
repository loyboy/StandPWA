import React from 'react';

export default class TotalOthersModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,totalother,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Total Human Development >> Other Competition </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Competitions? </label>
          <p className=" help"> Does the school engage in internal, local and external competitions?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= { totalother !== null ? totalother.att_1 : '' }>
              <option value=''>Choose---</option>
              <option value='3'>Yes for all</option>
              <option value='2'>Yes for internal and local</option>
              <option value='1'>Yes for internal</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Competition? </label>
          <p className=" help"> How many established competitions does the school run (formalized)?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {totalother !== null ? totalother.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Competitors? </label>
          <p className=" help"> How many students competed in them last year? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {totalother !== null ? totalother.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Internal Trophies? </label>
          <p className=" help"> How many, if any, trophies are dedicated for these competitions (check list of winners) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {totalother !== null ? totalother.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Local Competition? </label>
          <p className=" help"> How many established competitions does the school participate locally (LGA; formalized) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {totalother !== null ? totalother.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Local Competitors? </label>
          <p className=" help"> How many students competed in them last year? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {totalother !== null ? totalother.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Local Trophies? </label>
          <p className=" help"> How many, if any, trophies did the school win in these competitions (check)? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {totalother !== null ? totalother.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> External competition? </label>
          <p className=" help"> How many established competitions does the school participate (formalized)?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {totalother !== null ? totalother.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> External competitors? </label>
          <p className=" help"> How many students competed in them last year?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {totalother !== null ? totalother.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> External trophies? </label>
          <p className=" help"> How many, if any, trophies were won in these competitions last year (check)? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {totalother !== null ? totalother.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Greater than 2</option>
              <option value='0'>Less than 2</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Overall Quality? </label>
          <p className=" help"> Assess the quality of trophies and competitions mix and make a quality statement </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_11" onChange={handleInputChange} value= {totalother !== null ? totalother.att_11 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>High</option>
              <option value='2'>OK</option>
              <option value='1'>Weak</option>
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

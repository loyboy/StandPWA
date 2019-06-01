import React from 'react';

export default class learningOutModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,learnoutdoor,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Learning Envirionment >> Outdoor </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Farm? </label>
          <p className=" help"> Is there a school farm where student soil their hands in practical farming (size is not relevant)? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {learnoutdoor !== null ? learnoutdoor.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Botanical Garden? </label>
          <p className=" help">Is there a botanical farm dedicated to agriculture and biology?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {learnoutdoor !== null ? learnoutdoor.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Geographical Garden ? </label>
          <p className=" help"> Is there a geographical garden? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {learnoutdoor !== null ? learnoutdoor.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Garden? </label>
          <p className=" help"> Is there a garden (differentiate garden from farm) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {learnoutdoor !== null ? learnoutdoor.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Green Grounds? </label>
          <p className=" help"> Is there reasonable green ground and trees? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {learnoutdoor !== null ? learnoutdoor.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='2'>Yes</option>
              <option value='0'>No</option>

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

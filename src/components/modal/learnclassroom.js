import React from 'react';

export default class LearnClassroomModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,learnclassroom,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Learning Envirionment >> Classroom </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Classroom? </label>
          <p className=" help">Is there a ‘known’ classroom for each class?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Labeling? </label>
          <p className=" help">Can a new student or teacher find their way around the school from classroom labeling?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Class size? </label>
          <p className=" help"> Count </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>less than or equal to 25</option>
              <option value='2'>less than or equal to 30</option>
              <option value='1'>less than or equal to 35</option>
              <option value='0'>greather than or equal to 35 and above</option>
              <option value='0'>None</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Space? </label>
          <p className=" help"> Dimensions (Space per students meter squared)</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='4'> >= 0.89 meter squared</option>
              <option value='2'> >= 62.3 and less than 0.89 meter squared</option>
              <option value='1'> less than 62.3 meter squared</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Comfort? </label>
          <p className=" help"> What is the overall feel of the seat to the pupil? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>Okay</option>
              <option value='1'>Not quite</option>

            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label"> Natural Ventilation? </label>
          <p className=" help"> Adequate and good fresh air supply and circulation? (artificial alternative is ok) </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>Okay</option>
              <option value='1'>Not quite</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Aritificial Ventilation? </label>
          <p className=" help"> Fan or air-conditioner provided? (in the absence of good artificial ventilations) adequacy: Enough power for the need relative to numbers and space</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_7 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>Okay</option>
              <option value='1'>Not quite</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Natural Lightning? </label>
          <p className=" help"> Lighting of classroom from nature? Daylight quality lighting across classroom space</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_8" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_8 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>Okay</option>

              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Artificial Lightning? </label>
          <p className=" help"> Any alternative lighting to poor or unavailable natural lighting? With brightness and color equivalent to daylight across classroome</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_9" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_9 : ''}>
              <option value=''>Choose---</option>
              <option value='4'>Yes</option>
              <option value='2'>Fairly</option>
              <option value='0'>Not quite</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Furniture? </label>
          <p className=" help"> Safe and ergonomic? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_10" onChange={handleInputChange} value= {learnclassroom !== null ? learnclassroom.att_10 : ''}>
              <option value=''>Choose---</option>
              <option value='3'>Yes</option>
              <option value='2'>Okay</option>
              <option value='1'>Not quite</option>

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

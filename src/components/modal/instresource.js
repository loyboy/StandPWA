import React from 'react';

export default class InstrResourceModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,instructor,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Instructor Resource </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Quantity? </label>
          <p className=" help">What is the ratio of teacher number to student number (tn/sn)?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= {instructor !== null ? instructor.att_1 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>0.8 : 1.0</option>
              <option value='4'>0.65 : 0.79</option>
              <option value='3'>0.50 : 0.64</option>
              <option value='2'>0.35 : 0.49</option>
              <option value='0'> less than 0.35</option>
            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Quality ? </label>
          <p className="help">What is the ratio of teachers collective quality weight to student number (tw/sn)?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= {instructor !== null ? instructor.att_2 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>0.8 : 1.0</option>
              <option value='4'>0.65 : 0.79</option>
              <option value='3'>0.50 : 0.64</option>
              <option value='2'>0.35 : 0.49</option>
              <option value='0'> less than 0.35</option>
            </select>
          </div>
          </div>
        </div>


        <div className="field">
          <label className="label">Discipline Quantity? </label>
          <p className="help">What is the ratio of art teacher number to art student number?</p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= {instructor !== null ? instructor.att_3 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>0.8 : 1.0</option>
              <option value='4'>0.65 : 0.79</option>
              <option value='3'>0.50 : 0.64</option>
              <option value='2'>0.35 : 0.49</option>
              <option value='0'> less than 0.35</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Discipline Quality ?</label>
          <p className="help"> What is the ratio of science teacher number to science student number? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= {instructor !== null ? instructor.att_4 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>0.8 : 1.0</option>
              <option value='4'>0.65 : 0.79</option>
              <option value='3'>0.50 : 0.64</option>
              <option value='2'>0.35 : 0.49</option>
              <option value='0'> less than 0.35</option>


            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Experience ? </label>
          <p className="help">What percentage of teachers numbers have >= 5 years’ experience as teacher </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= {instructor !== null ? instructor.att_5 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>0.8 : 1.0</option>
              <option value='4'>0.65 : 0.79</option>
              <option value='3'>0.50 : 0.64</option>
              <option value='2'>0.35 : 0.49</option>
              <option value='0'> less than 0.35</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Employee/Part-time ? </label>
          <p className="help"> How of the teaching staff are fulltime employees and are adjunct too? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= {instructor !== null ? instructor.att_6 : ''}>
              <option value=''>Choose---</option>
              <option value='5'>less than 10%</option>
              <option value='4'>less than equal to 20%</option>
              <option value='3'>less than equal to 30%</option>
              <option value='2'>greater than 30%</option>
              <option value='0'> None </option>
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

import React from 'react';

export default class TotalDomainModal extends React.PureComponent {
 //abbreviation - mne_
  render() {
    const { active,handleClose,handleInputChange,totaldomain,saveform } = this.props;
    return (
      <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title"> Total Human Development >> Domains </p>
          <button className="delete" aria-label="close" onClick={handleClose}> </button>
        </header>

        <section className="modal-card-body">

        <div className="field">
          <label className="label"> Relationship? </label>
          <p className=" help"> Any formal relations with other schools? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_1" onChange={handleInputChange} value= { totaldomain !== null ? totaldomain.att_1 : '' }>
              <option value=''>Choose---</option>
              <option value='1'>Yes </option>
              <option value='0'>No</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Sports & Games? </label>
          <p className=" help"> Count? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_2" onChange={handleInputChange} value= { totaldomain !== null ? totaldomain.att_2 : '' }>
              <option value=''>Choose---</option>
              <option value='2'>Both</option>
              <option value='1'>One</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Clubs? </label>
          <p className=" help"> Count? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_3" onChange={handleInputChange} value= { totaldomain !== null ? totaldomain.att_3 : '' }>
              <option value=''>Choose---</option>
              <option value='2'>Both</option>
              <option value='1'>One</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Socials? </label>
          <p className=" help"> Count? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_4" onChange={handleInputChange} value= { totaldomain !== null ? totaldomain.att_4 : '' }>
              <option value=''>Choose---</option>
              <option value='2'>Both</option>
              <option value='1'>One</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Academic? </label>
          <p className=" help"> Count? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_5" onChange={handleInputChange} value= { totaldomain !== null ? totaldomain.att_5 : '' }>
              <option value=''>Choose---</option>
              <option value='2'>Both</option>
              <option value='1'>One</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Community? </label>
          <p className=" help"> Count? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_6" onChange={handleInputChange} value= { totaldomain !== null ? totaldomain.att_6 : '' }>
              <option value=''>Choose---</option>
              <option value='2'>Both</option>
              <option value='1'>One</option>
              <option value='0'>None</option>

            </select>
          </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> Exposure?  </label>
          <p className=" help"> How far out is your domain relationship: across city, states, international? </p>
          <div className="control">
          <div className="select is-large">
            <select name="att_7" onChange={handleInputChange} value= { totaldomain !== null ? totaldomain.att_7 : '' }>
              <option value=''>Choose---</option>
              <option value='1'>Across City</option>
              <option value='2'>Across State</option>
              <option value='3'>National</option><option value='0'>None</option>

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

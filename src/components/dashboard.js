import React from 'react';
import Protected from './protected';
import UserLayout from './user-layout';
import CoreAttModal from './modal/coreattendance'
import CoreLsnModal from './modal/corelessonnote'
import CoreMneModal from './modal/coremne'
import InstrResourceModal from './modal/instresource'
import LearnClassroomModal from './modal/learnclassroom'
import LearnLaboratoryModal from './modal/learnlaboratory'
import LearnTeachingModal from './modal/learnteachingaids'
import LearnOutdoorModal from './modal/learnoutdoor'
import TotalGamesModal from './modal/totalgames'
import TotalOtherModal from './modal/totalothers'
import TotalDomainModal from './modal/totaldomain'
import TotalSocialModal from './modal/totalsocials'
import SusAcademicModal from './modal/susacademic'
import SusNonAcademicModal from './modal/susnonacademic'
import SusGovernModal from './modal/susgovern'
import SusPolicyModal from './modal/suspolicies'
import SusRecordModal from './modal/susrecords'
import SusTechModal from './modal/sustechnology'
import AlertModal from './alert'
import Parent from './parent'
import {Container,Row,Col,Form} from 'react-bootstrap';
import StarRating from '../resources/img/StarRating.png'
import cookie from '../libs/cookie';

export default class Dashboard extends React.PureComponent {

constructor(props) {
    super(props);
    this.state = {
      coreprocess1: { }, //Core attendance attendance
      coreprocess2: { }, //Core lessonnote
      coreprocess3: { }, //Core mne
      instructor: { }, //instructor
      learn1: { }, //learn classroom
      learn2: { }, //learn laboratory
      learn3: { }, //teaching aids
      learn4: { }, //learn outdoor
      student1: { }, //total games & sports
      student2: { }, //total other comp
      student3: { }, //total other socials
      student4: { }, //total domain relationships
      sustain1: { }, //total games & sports
      sustain2: { }, //
      sustain3: { }, //
      sustain4: { }, //
      sustain5: { },
      sustain6: { },
      academic: null,
      sshe: null,
      job_id:'',
      modalcore:'',
      modalcoree:'',
      modalcoreee:'',
      modalinst:'',
      modallearn1:'',
      modallearn2:'',
      modallearn3:'',
      modallearn4:'',
      modaltotal1:'',
      modaltotal2:'',
      modaltotal3:'',
      modaltotal4:'',
      modalsus1:'',
      modalsus2:'',
      modalsus3:'',
      modalsus4:'',
      modalsus5:'',
      modalsus6:'',
      atttotal1: 0,
      showalert: false,
      showothers: false
    };

}

//Onchange Job Combo box

handleSelect(e) {
  if (e && e.preventDefault) e.preventDefault();

  const job_id = e.target.value;
  console.log("The Job ID: "+ job_id)
  if (job_id !== "#" ){

  this.setState({ job_id: job_id });//current job ID
  this.setState({ showothers: true });
  //core processes
  let first = job_id + "#core#coreattendance";
  let coreprocess1 = JSON.parse(cookie.getItem(first));
  this.setState({ coreprocess1: coreprocess1 });

  let first2 = job_id + "#core#corelessonnote";
  let coreprocess2 = JSON.parse(cookie.getItem(first2));
  this.setState({ coreprocess2: coreprocess2 });

  let first3 = job_id + "#core#coremne";
  let coreprocess3 = JSON.parse(cookie.getItem(first3));
  this.setState({ coreprocess3: coreprocess3 });

  //instructor resource
  let second = job_id + "#instructor";
  let instructor = JSON.parse(cookie.getItem(second));
  this.setState({ instructor: instructor });

  //learning environment
  let third = job_id + "#learn#classroom";
  let learn = JSON.parse(cookie.getItem(third));
  this.setState({ learn: learn });

  let third2 = job_id + "#learn#laboratory";
  let learn2 = JSON.parse(cookie.getItem(third2));
  this.setState({ learn: learn2 });

  let third3 = job_id + "#learn#teachingaid";
  let learn3 = JSON.parse(cookie.getItem(third3));
  this.setState({ learn: learn3 });

  let third4 = job_id + "#learn#outdoor";
  let learn4 = JSON.parse(cookie.getItem(third4));
  this.setState({ learn: learn4 });

   //student dev
   let forth = job_id + "#total#games";
   let student = JSON.parse(cookie.getItem(forth));
   this.setState({ student: student });

   let forth2 = job_id + "#total#others";
   let student2 = JSON.parse(cookie.getItem(forth2));
   this.setState({ student: student2 });

   let forth3 = job_id + "#total#socials";
   let student3 = JSON.parse(cookie.getItem(forth3));
   this.setState({ student: student3 });

   let forth4 = job_id + "#total#domain";
   let student4 = JSON.parse(cookie.getItem(forth4));
   this.setState({ student: student4 });

   //sustainabilty
   let fifth = job_id + "#sustain";
   let sustain = JSON.parse(cookie.getItem(fifth));
   this.setState({ sustain: sustain });

   //academic
   let sixth = job_id + "#academic";
   let academic = JSON.parse(cookie.getItem(sixth));
   this.setState({ academic: academic });

   //sshe
   let seventh = job_id + "#sshe";
   let sshe = JSON.parse(cookie.getItem(seventh));
   this.setState({ sshe: sshe });
  }
  else if ( job_id === "#"){
    this.setState({ showothers: false });
    console.log("Show others false")
  }

}

///Core Processes------------------------------------------------------------
handleCore(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Core values");
  this.setState({ modalcore: 'is-active' });
}

handleCore2(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Core values 2");
  this.setState({ modalcoree: 'is-active' });
}

handleCore3(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Core values 3");
  this.setState({ modalcoreee: 'is-active' });
}

handleClose = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Core values Changed");
  this.setState({ modalcore: '', modalcoree: '',  modalcoreee: '', showalert: false,  modalinst: '', modallearn1: '', modallearn2: '', modallearn3: '', modallearn4: '',
      modaltotal1:'',
      modaltotal2:'',
      modaltotal3:'',
      modaltotal4:'',
      modalsus1:'',
      modalsus2:'',
      modalsus3:'',
      modalsus4:'',
      modalsus5:'',
      modalsus6:'',
});

}

handleInputChangeCore = (event) => {
 const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  this.setState({
    coreprocess1: {
       ...this.state.coreprocess1,
       [name]: value
    }
});
console.log(this.state.coreprocess1)
}

handleInputChangeCore2 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     coreprocess2: {
        ...this.state.coreprocess2,
        [name]: value
     }
 });
 console.log(this.state.coreprocess2)
 }

 handleInputChangeCore3 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     coreprocess3: {
        ...this.state.coreprocess3,
        [name]: value
     }
 });
 console.log(this.state.coreprocess3)
 }

saveCoreAttendance = (e) => {
let name = this.state.job_id + "#core#coreattendance";

let att1, att2 , att3, att4, att5, att6, att7, att8, att9 = 0;
let total = 0;

if(this.state.coreprocess1 && this.state.coreprocess1.att_1 !== undefined ) {
     att1 = parseInt(this.state.coreprocess1.att_1)
}
   else { att1 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_2 !== undefined) {
     att2 = parseInt(this.state.coreprocess1.att_2)
}
    else { att2 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_3 !== undefined) {
     att3 = parseInt(this.state.coreprocess1.att_3)
    }
    else { att3 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_4 !== undefined) {
      att4 = parseInt(this.state.coreprocess1.att_4)
    }
    else { att4 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_5 !== undefined) {
      att5 = parseInt(this.state.coreprocess1.att_5)
      }
    else { att5 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_6 !== undefined) {
      att6 = parseInt(this.state.coreprocess1.att_6)
      }
    else { att6 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_7 !== undefined) {
      att7 = parseInt(this.state.coreprocess1.att_7)
      }
    else { att7 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_8 !== undefined) {
      att8 = parseInt(this.state.coreprocess1.att_8)
      }
    else { att8 = 0; }
if(this.state.coreprocess1 && this.state.coreprocess1.att_9 !== undefined) {
      att9 = parseInt(this.state.coreprocess1.att_9)
      }
    else { att9 = 0; }

total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9);
console.log('The Total: ' + total);

let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6, att_7: att7 , att_8: att8, att_9: att9 };
let coreval = JSON.stringify(corearray);

cookie.setItem(name,coreval);//for cookie
this.setState({ coreprocess1: corearray });//for state
//this.setState({ showalert: true });//alert show
alert("Core Attendance Data has been saved... :-) ")
}

saveCoreLessonnote = (e) => {
  let name = this.state.job_id + "#core#corelessonnote";

  let att1, att2 , att3, att4, att5, att6, att7, att8, att9, att10 = 0;
  let total = 0;

  if(this.state.coreprocess2 && this.state.coreprocess2.att_1 !== undefined ) {
       att1 = parseInt(this.state.coreprocess2.att_1)
  }
     else { att1 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_2 !== undefined) {
       att2 = parseInt(this.state.coreprocess2.att_2)
  }
      else { att2 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_3 !== undefined) {
       att3 = parseInt(this.state.coreprocess2.att_3)
      }
      else { att3 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_4 !== undefined) {
        att4 = parseInt(this.state.coreprocess2.att_4)
      }
      else { att4 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_5 !== undefined) {
        att5 = parseInt(this.state.coreprocess2.att_5)
        }
      else { att5 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_6 !== undefined) {
        att6 = parseInt(this.state.coreprocess2.att_6)
        }
      else { att6 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_7 !== undefined) {
        att7 = parseInt(this.state.coreprocess2.att_7)
        }
      else { att7 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_8 !== undefined) {
        att8 = parseInt(this.state.coreprocess2.att_8)
        }
      else { att8 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_9 !== undefined) {
        att9 = parseInt(this.state.coreprocess2.att_9)
        }
      else { att9 = 0; }
  if(this.state.coreprocess2 && this.state.coreprocess2.att_10 !== undefined) {
        att10 = parseInt(this.state.coreprocess2.att_10)
        }
      else { att10 = 0; }

  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10);
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6, att_7: att7 , att_8: att8, att_9: att9, att_10: att10 };
  let coreval = JSON.stringify(corearray);

  cookie.setItem(name,coreval);//for cookie
  this.setState({ coreprocess2: corearray });//for state
  //this.setState({ showalert: true });//alert show
  alert("Core Lessonnote Data has been saved... :-) ")
  }

  saveCoreMne = (e) => {
    let name = this.state.job_id + "#core#coremne";

    let att1, att2 , att3, att4, att5, att6, att7, att8, att9, att10 = 0;
    let total = 0;

    if(this.state.coreprocess3 && this.state.coreprocess3.att_1 !== undefined ) {
         att1 = parseInt(this.state.coreprocess3.att_1)
    }
       else { att1 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_2 !== undefined) {
         att2 = parseInt(this.state.coreprocess3.att_2)
    }
        else { att2 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_3 !== undefined) {
         att3 = parseInt(this.state.coreprocess3.att_3)
        }
        else { att3 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_4 !== undefined) {
          att4 = parseInt(this.state.coreprocess3.att_4)
        }
        else { att4 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_5 !== undefined) {
          att5 = parseInt(this.state.coreprocess3.att_5)
          }
        else { att5 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_6 !== undefined) {
          att6 = parseInt(this.state.coreprocess3.att_6)
          }
        else { att6 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_7 !== undefined) {
          att7 = parseInt(this.state.coreprocess3.att_7)
          }
        else { att7 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_8 !== undefined) {
          att8 = parseInt(this.state.coreprocess3.att_8)
          }
        else { att8 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_9 !== undefined) {
          att9 = parseInt(this.state.coreprocess3.att_9)
          }
        else { att9 = 0; }
    if(this.state.coreprocess3 && this.state.coreprocess3.att_10 !== undefined) {
          att10 = parseInt(this.state.coreprocess3.att_10)
          }
        else { att10 = 0; }

    total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10);
    console.log('The Total: ' + total);

    let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6, att_7: att7 , att_8: att8, att_9: att9, att_10: att10 };
    let coreval = JSON.stringify(corearray);

    cookie.setItem(name,coreval);//for cookie
    this.setState({ coreprocess3: corearray });//for state
    //this.setState({ showalert: true });//alert show
    alert("Core MNE Data has been saved... :-) ")
    }
//End Core Processes ----------------------------------------------------------------

//Instructor Resource---------------------------------
handleInputChangeInstr = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     instructor: {
        ...this.state.instructor,
        [name]: value
     }
 });
 console.log(this.state.instructor)
 }

 handleInst(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal inst jus ran");
  this.setState({ modalinst: 'is-active' });
}

 saveInstResr = (e) => {
  let name = this.state.job_id + "#instructor";

  let att1, att2 , att3, att4, att5, att6 = 0;
  let total = 0;

  if(this.state.instructor && this.state.instructor.att_1 !== undefined ) {
       att1 = parseInt(this.state.instructor.att_1)
  }
     else { att1 = 0; }
  if(this.state.instructor && this.state.instructor.att_2 !== undefined) {
       att2 = parseInt(this.state.instructor.att_2)
  }
      else { att2 = 0; }
  if(this.state.instructor && this.state.instructor.att_3 !== undefined) {
       att3 = parseInt(this.state.instructor.att_3)
      }
      else { att3 = 0; }
  if(this.state.instructor && this.state.instructor.att_4 !== undefined) {
        att4 = parseInt(this.state.instructor.att_4)
      }
      else { att4 = 0; }
  if(this.state.instructor && this.state.instructor.att_5 !== undefined) {
        att5 = parseInt(this.state.instructor.att_5)
        }
      else { att5 = 0; }
  if(this.state.instructor && this.state.instructor.att_6 !== undefined) {
        att6 = parseInt(this.state.instructor.att_6)
        }
      else { att6 = 0; }


  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) ;
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6 };
  let coreval = JSON.stringify(corearray);

  cookie.setItem(name,coreval);//for cookie
  this.setState({ instructor: corearray });//for state
  //this.setState({ showalert: true });//alert show
  alert("Instructor Data has been saved... :-) ")
  }
//end Instructor -----------------------------------------

//Learn Classroom------------
handleInputChangeLearn1 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     learn1: {
        ...this.state.learn1,
        [name]: value
     }
 });
 console.log(this.state.learn1)
 }

 handleInputChangeLearn2 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   this.setState({
    learn2: {
        ...this.state.learn2,
        [name]: value
     }
 });
 console.log(this.state.learn2)
 }

 handleInputChangeLearn3 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   this.setState({
    learn3: {
        ...this.state.learn3,
        [name]: value
     }
 });
 console.log(this.state.learn3)
 }

 handleInputChangeLearn4 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   this.setState({
    learn4: {
        ...this.state.learn4,
        [name]: value
     }
 });
 console.log(this.state.learn4)
 }

 handleLearn1(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Learn 1 jus ran");
  this.setState({ modallearn1: 'is-active' });
}

handleLearn2(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Learn 2 jus ran");
  this.setState({ modallearn2: 'is-active' });
}

handleLearn3(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Learn 3 jus ran");
  this.setState({ modallearn3: 'is-active' });
}

handleLearn4(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Learn 4 jus ran");
  this.setState({ modallearn4: 'is-active' });
}

 saveLearn1 = (e) => {
  let name = this.state.job_id + "#learn#classroom";

  let att1, att2 , att3, att4, att5, att6 , att7 , att8, att9, att10 = 0;
  let total = 0;

  if(this.state.learn1 && this.state.learn1.att_1 !== undefined ) {
       att1 = parseInt(this.state.learn1.att_1)
  }
     else { att1 = 0; }
  if(this.state.learn1 && this.state.learn1.att_2 !== undefined) {
       att2 = parseInt(this.state.learn1.att_2)
  }
      else { att2 = 0; }
  if(this.state.learn1 && this.state.learn1.att_3 !== undefined) {
       att3 = parseInt(this.state.learn1.att_3)
      }
      else { att3 = 0; }
  if(this.state.learn1 && this.state.learn1.att_4 !== undefined) {
        att4 = parseInt(this.state.learn1.att_4)
      }
      else { att4 = 0; }
  if(this.state.learn1 && this.state.learn1.att_5 !== undefined) {
        att5 = parseInt(this.state.learn1.att_5)
        }
      else { att5 = 0; }
  if(this.state.learn1 && this.state.learn1.att_6 !== undefined) {
        att6 = parseInt(this.state.learn1.att_6)
        }
      else { att6 = 0; }

  if(this.state.learn1 && this.state.learn1.att_7 !== undefined) {
        att7 = parseInt(this.state.learn1.att_7)
        }
  else { att7 = 0; }

  if(this.state.learn1 && this.state.learn1.att_8 !== undefined) {
    att8 = parseInt(this.state.learn1.att_8)
    }
else { att8 = 0; }

if(this.state.learn1 && this.state.learn1.att_9 !== undefined) {
  att9 = parseInt(this.state.learn1.att_9)
  }
else { att9 = 0; }

if(this.state.learn1 && this.state.learn1.att_10 !== undefined) {
  att10 = parseInt(this.state.learn1.att_10)
  }
else { att10 = 0; }


  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10) ;
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10 };
  let coreval = JSON.stringify(corearray);

  cookie.setItem(name,coreval);//for cookie
  this.setState({ learn1: corearray });//for state
  //this.setState({ showalert: true });//alert show
  alert("Learn classroom Data has been saved... :-) ")
  }

  saveLearn2 = (e) => {
    let name = this.state.job_id + "#learn#laboratory";

    let att1, att2 , att3, att4, att5, att6 = 0;
    let total = 0;

    if(this.state.learn2 && this.state.learn2.att_1 !== undefined ) {
         att1 = parseInt(this.state.learn2.att_1)
    }
       else { att1 = 0; }
    if(this.state.learn2 && this.state.learn2.att_2 !== undefined) {
         att2 = parseInt(this.state.learn2.att_2)
    }
        else { att2 = 0; }
    if(this.state.learn2 && this.state.learn2.att_3 !== undefined) {
         att3 = parseInt(this.state.learn2.att_3)
        }
        else { att3 = 0; }
    if(this.state.learn2 && this.state.learn2.att_4 !== undefined) {
          att4 = parseInt(this.state.learn2.att_4)
        }
        else { att4 = 0; }
    if(this.state.learn2 && this.state.learn2.att_5 !== undefined) {
          att5 = parseInt(this.state.learn2.att_5)
          }
        else { att5 = 0; }
    if(this.state.learn2 && this.state.learn2.att_6 !== undefined) {
          att6 = parseInt(this.state.learn2.att_6)
          }
        else { att6 = 0; }

    total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6);
    console.log('The Total: ' + total);

    let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6 };
    let coreval = JSON.stringify(corearray);

    cookie.setItem(name,coreval);//for cookie
    this.setState({ learn2: corearray });//for state

    alert("Learn outdoor Data has been saved... :-) ")
    }

    saveLearn3 = (e) => {
      let name = this.state.job_id + "#learn#teachingaids";

      let att1, att2 , att3, att4, att5 = 0;
      let total = 0;

      if(this.state.learn3 && this.state.learn3.att_1 !== undefined ) {
           att1 = parseInt(this.state.learn3.att_1)
      }
         else { att1 = 0; }
      if(this.state.learn3 && this.state.learn3.att_2 !== undefined) {
           att2 = parseInt(this.state.learn3.att_2)
      }
          else { att2 = 0; }
      if(this.state.learn3 && this.state.learn3.att_3 !== undefined) {
           att3 = parseInt(this.state.learn3.att_3)
          }
          else { att3 = 0; }
      if(this.state.learn3 && this.state.learn3.att_4 !== undefined) {
            att4 = parseInt(this.state.learn3.att_4)
          }
          else { att4 = 0; }
      if(this.state.learn3 && this.state.learn3.att_5 !== undefined) {
            att5 = parseInt(this.state.learn3.att_5)
            }
          else { att5 = 0; }

      total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) ;
      console.log('The Total: ' + total);

      let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5 };
      let coreval = JSON.stringify(corearray);

      cookie.setItem(name,coreval);//for cookie
      this.setState({ learn3: corearray });//for state

      alert("Learn Teaching aids Data has been saved... :-) ")
      }

      saveLearn4 = (e) => {
        let name = this.state.job_id + "#learn#outdoor";

        let att1, att2 , att3, att4, att5 = 0;
        let total = 0;

        if(this.state.learn4 && this.state.learn4.att_1 !== undefined ) {
             att1 = parseInt(this.state.learn4.att_1)
        }
           else { att1 = 0; }
        if(this.state.learn4 && this.state.learn4.att_2 !== undefined) {
             att2 = parseInt(this.state.learn4.att_2)
        }
            else { att2 = 0; }
        if(this.state.learn4 && this.state.learn4.att_3 !== undefined) {
             att3 = parseInt(this.state.learn4.att_3)
            }
            else { att3 = 0; }
        if(this.state.learn4 && this.state.learn4.att_4 !== undefined) {
              att4 = parseInt(this.state.learn4.att_4)
            }
            else { att4 = 0; }
        if(this.state.learn4 && this.state.learn4.att_5 !== undefined) {
              att5 = parseInt(this.state.learn4.att_5)
              }
            else { att5 = 0; }

        total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) ;
        console.log('The Total: ' + total);

        let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5 };
        let coreval = JSON.stringify(corearray);

        cookie.setItem(name,coreval);//for cookie
        this.setState({ learn4: corearray });//for state

        alert("Learn Teaching aids Data has been saved... :-) ")
        }
//End Learn classroom

//Total Human Dev
handleInputChangeTotal1 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     student1: {
        ...this.state.student1,
        [name]: value
     }
 });
 console.log(this.state.student1)
 }

 handleInputChangeTotal2 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     student2: {
        ...this.state.student2,
        [name]: value
     }
 });
 console.log(this.state.student2)
 }

 handleInputChangeTotal3 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     student3: {
        ...this.state.student3,
        [name]: value
     }
 });
 console.log(this.state.student3)
 }

 handleInputChangeTotal4 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     student4: {
        ...this.state.student4,
        [name]: value
     }
 });
 console.log(this.state.student4)
 }

 handleTotal1(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Total 1 jus ran");
  this.setState({ modaltotal1: 'is-active' });
}

handleTotal2(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Total 2 jus ran");
  this.setState({ modaltotal2: 'is-active' });
}

handleTotal3(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Total 3 jus ran");
  this.setState({ modaltotal3: 'is-active' });
}

handleTotal4(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Total 4 jus ran");
  this.setState({ modaltotal4: 'is-active' });
}

saveTotal1 = (e) => {
  let name = this.state.job_id + "#total#games";

  let att1, att2 , att3, att4, att5, att6, att7 , att8, att9, att10 , att11, att12, att13 , att14, att15 = 0;
  let total = 0;

  if(this.state.student1 && this.state.student1.att_1 !== undefined ) {
       att1 = parseInt(this.state.student1.att_1)
  }
     else { att1 = 0; }
  if(this.state.student1 && this.state.student1.att_2 !== undefined) {
       att2 = parseInt(this.state.student1.att_2)
  }
      else { att2 = 0; }
  if(this.state.student1 && this.state.student1.att_3 !== undefined) {
       att3 = parseInt(this.state.student1.att_3)
      }
      else { att3 = 0; }
  if(this.state.student1 && this.state.student1.att_4 !== undefined) {
        att4 = parseInt(this.state.student1.att_4)
      }
      else { att4 = 0; }
  if(this.state.student1 && this.state.student1.att_5 !== undefined) {
        att5 = parseInt(this.state.student1.att_5)
        }
      else { att5 = 0; }
  if(this.state.student1 && this.state.student1.att_6 !== undefined) {
        att6 = parseInt(this.state.student1.att_6)
        }
      else { att6 = 0; }
  if(this.state.student1 && this.state.student1.att_7 !== undefined) {
        att7 = parseInt(this.state.student1.att_7)
        }
  else { att7 = 0; }
  if(this.state.student1 && this.state.student1.att_8 !== undefined) {
    att8 = parseInt(this.state.student1.att_8)
    }
   else { att8 = 0; }
   if(this.state.student1 && this.state.student1.att_9 !== undefined) {
    att9 = parseInt(this.state.student1.att_9)
    }
   else { att9 = 0; }

   if(this.state.student1 && this.state.student1.att_10 !== undefined) {
    att10 = parseInt(this.state.student1.att_10)
    }
   else { att10 = 0; }

   if(this.state.student1 && this.state.student1.att_11 !== undefined) {
    att11 = parseInt(this.state.student1.att_11)
    }
   else { att11 = 0; }

   if(this.state.student1 && this.state.student1.att_12 !== undefined) {
    att12 = parseInt(this.state.student1.att_12)
    }
   else { att12 = 0; }

   if(this.state.student1 && this.state.student1.att_13 !== undefined) {
    att13 = parseInt(this.state.student1.att_13)
    }
   else { att13 = 0; }

   if(this.state.student1 && this.state.student1.att_14 !== undefined) {
    att14 = parseInt(this.state.student1.att_14)
    }
   else { att14 = 0; }

   if(this.state.student1 && this.state.student1.att_15 !== undefined) {
    att15 = parseInt(this.state.student1.att_15)
    }
   else { att15 = 0; }

  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10) + parseInt(att11) + parseInt(att12) + parseInt(att13) + parseInt(att14) + parseInt(att15) ;
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10, att_11: att11 , att_12: att12 , att_13: att13 , att_14: att14 , att_15: att15 };
  let coreval = JSON.stringify(corearray);

  cookie.setItem(name,coreval);//for cookie
  this.setState({ student1: corearray });//for state

  alert("Total Human Dev. games & sports Data has been saved... :-) ")
  }

  saveTotal2 = (e) => {
    let name = this.state.job_id + "#total#others";

    let att1, att2 , att3, att4, att5, att6, att7 , att8, att9, att10 , att11 = 0;
    let total = 0;

    if(this.state.student2 && this.state.student2.att_1 !== undefined ) {
         att1 = parseInt(this.state.student2.att_1)
    }
       else { att1 = 0; }
    if(this.state.student2 && this.state.student2.att_2 !== undefined) {
         att2 = parseInt(this.state.student2.att_2)
    }
        else { att2 = 0; }
    if(this.state.student2 && this.state.student2.att_3 !== undefined) {
         att3 = parseInt(this.state.student2.att_3)
        }
        else { att3 = 0; }
    if(this.state.student2 && this.state.student2.att_4 !== undefined) {
          att4 = parseInt(this.state.student2.att_4)
        }
        else { att4 = 0; }
    if(this.state.student2 && this.state.student2.att_5 !== undefined) {
          att5 = parseInt(this.state.student2.att_5)
          }
        else { att5 = 0; }
    if(this.state.student2 && this.state.student2.att_6 !== undefined) {
          att6 = parseInt(this.state.student2.att_6)
          }
        else { att6 = 0; }
    if(this.state.student2 && this.state.student2.att_7 !== undefined) {
          att7 = parseInt(this.state.student2.att_7)
          }
    else { att7 = 0; }
    if(this.state.student2 && this.state.student2.att_8 !== undefined) {
      att8 = parseInt(this.state.student2.att_8)
      }
     else { att8 = 0; }
     if(this.state.student2 && this.state.student2.att_9 !== undefined) {
      att9 = parseInt(this.state.student2.att_9)
      }
     else { att9 = 0; }

     if(this.state.student2 && this.state.student2.att_10 !== undefined) {
      att10 = parseInt(this.state.student2.att_10)
      }
     else { att10 = 0; }

     if(this.state.student2 && this.state.student2.att_11 !== undefined) {
      att11 = parseInt(this.state.student2.att_11)
      }
     else { att11 = 0; }


    total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10) + parseInt(att11) ;
    console.log('The Total: ' + total);

    let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10, att_11: att11  };
    let coreval = JSON.stringify(corearray);

    cookie.setItem(name,coreval);//for cookie
    this.setState({ student2: corearray });//for state

    alert("Total Human Dev. Others Data has been saved... :-) ")
    }

    saveTotal3 = (e) => {
      let name = this.state.job_id + "#total#socials";

      let att1, att2 , att3, att4, att5, att6, att7 , att8, att9, att10 = 0;
      let total = 0;

      if(this.state.student3 && this.state.student3.att_1 !== undefined ) {
           att1 = parseInt(this.state.student3.att_1)
      }
         else { att1 = 0; }
      if(this.state.student3 && this.state.student3.att_2 !== undefined) {
           att2 = parseInt(this.state.student3.att_2)
      }
          else { att2 = 0; }
      if(this.state.student3 && this.state.student3.att_3 !== undefined) {
           att3 = parseInt(this.state.student3.att_3)
          }
          else { att3 = 0; }
      if(this.state.student3 && this.state.student3.att_4 !== undefined) {
            att4 = parseInt(this.state.student3.att_4)
          }
          else { att4 = 0; }
      if(this.state.student3 && this.state.student3.att_5 !== undefined) {
            att5 = parseInt(this.state.student3.att_5)
            }
          else { att5 = 0; }
      if(this.state.student3 && this.state.student3.att_6 !== undefined) {
            att6 = parseInt(this.state.student3.att_6)
            }
          else { att6 = 0; }
      if(this.state.student3 && this.state.student3.att_7 !== undefined) {
            att7 = parseInt(this.state.student3.att_7)
            }
      else { att7 = 0; }
      if(this.state.student3 && this.state.student3.att_8 !== undefined) {
        att8 = parseInt(this.state.student3.att_8)
        }
       else { att8 = 0; }
       if(this.state.student3 && this.state.student3.att_9 !== undefined) {
        att9 = parseInt(this.state.student3.att_9)
        }
       else { att9 = 0; }

       if(this.state.student3 && this.state.student3.att_10 !== undefined) {
        att10 = parseInt(this.state.student3.att_10)
        }
       else { att10 = 0; }



      total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10)  ;
      console.log('The Total: ' + total);

      let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10 };
      let coreval = JSON.stringify(corearray);

      cookie.setItem(name,coreval);//for cookie
      this.setState({ student3: corearray });//for state

      alert("Total Human Dev. SOcials Data has been saved... :-) ")
      }

      saveTotal4 = (e) => {
        let name = this.state.job_id + "#total#domain";

        let att1, att2 , att3, att4, att5, att6, att7 = 0;
        let total = 0;

        if(this.state.student4 && this.state.student4.att_1 !== undefined ) {
             att1 = parseInt(this.state.student4.att_1)
        }
           else { att1 = 0; }
        if(this.state.student4 && this.state.student4.att_2 !== undefined) {
             att2 = parseInt(this.state.student4.att_2)
        }
            else { att2 = 0; }
        if(this.state.student4 && this.state.student4.att_3 !== undefined) {
             att3 = parseInt(this.state.student4.att_3)
            }
            else { att3 = 0; }
        if(this.state.student4 && this.state.student4.att_4 !== undefined) {
              att4 = parseInt(this.state.student4.att_4)
            }
            else { att4 = 0; }
        if(this.state.student4 && this.state.student4.att_5 !== undefined) {
              att5 = parseInt(this.state.student4.att_5)
              }
            else { att5 = 0; }
        if(this.state.student4 && this.state.student4.att_6 !== undefined) {
              att6 = parseInt(this.state.student4.att_6)
              }
            else { att6 = 0; }
        if(this.state.student4 && this.state.student4.att_7 !== undefined) {
              att7 = parseInt(this.state.student4.att_7)
              }
        else { att7 = 0; }


        total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7);
        console.log('The Total: ' + total);

        let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7 };
        let coreval = JSON.stringify(corearray);

        cookie.setItem(name,coreval);//for cookie
        this.setState({ student4: corearray });//for state

        alert("Total Human Dev. Domain Data has been saved... :-) ")
        }
//Total Human Dev

//Sustainability
handleInputChangeSus1 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     sustain1: {
        ...this.state.sustain1,
        [name]: value
     }
 });
 console.log(this.state.sustain1)
 }

 handleInputChangeSus2 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sustain2: {
        ...this.state.sustain2,
        [name]: value
     }
 });
 console.log(this.state.sustain2)
 }

 handleInputChangeSus3 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sustain3: {
        ...this.state.sustain3,
        [name]: value
     }
 });
 console.log(this.state.sustain3)
 }

 handleInputChangeSus4 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sustain4: {
        ...this.state.sustain4,
        [name]: value
     }
 });
 console.log(this.state.sustain4)
 }

 handleInputChangeSus5 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sustain5: {
        ...this.state.sustain5,
        [name]: value
     }
 });
 console.log(this.state.sustain5)
 }


 handleInputChangeSus6 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sustain6: {
        ...this.state.sustain6,
        [name]: value
     }
 });
 console.log(this.state.sustain6)
 }

 handleSus1(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Sustain 1 jus ran");
  this.setState({ modalsus1: 'is-active' });
}

handleSus2(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Sustain 2 jus ran");
  this.setState({ modalsus2: 'is-active' });
}

handleSus3(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Sustain 3 jus ran");
  this.setState({ modalsus3: 'is-active' });
}

handleSus4(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Sustain 4 jus ran");
  this.setState({ modalsus4: 'is-active' });
}

handleSus5(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Sustain 5 jus ran");
  this.setState({ modalsus5: 'is-active' });
}

handleSus6(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Sustain 6 jus ran");
  this.setState({ modalsus6: 'is-active' });
}

saveSustain1 = (e) => {
  let name = this.state.job_id + "#sustain#academic";

  let att1, att2 , att3, att4, att5, att6, att7 , att8, att9, att10 = 0;
  let total = 0;

  if(this.state.sustain1 && this.state.sustain1.att_1 !== undefined ) {
       att1 = parseInt(this.state.sustain1.att_1)
  }
     else { att1 = 0; }
  if(this.state.sustain1 && this.state.sustain1.att_2 !== undefined) {
       att2 = parseInt(this.state.sustain1.att_2)
  }
      else { att2 = 0; }
  if(this.state.sustain1 && this.state.sustain1.att_3 !== undefined) {
       att3 = parseInt(this.state.sustain1.att_3)
      }
      else { att3 = 0; }
  if(this.state.sustain1 && this.state.sustain1.att_4 !== undefined) {
        att4 = parseInt(this.state.sustain1.att_4)
      }
      else { att4 = 0; }
  if(this.state.sustain1 && this.state.sustain1.att_5 !== undefined) {
        att5 = parseInt(this.state.sustain1.att_5)
        }
      else { att5 = 0; }
  if(this.state.sustain1 && this.state.sustain1.att_6 !== undefined) {
        att6 = parseInt(this.state.sustain1.att_6)
        }
      else { att6 = 0; }
  if(this.state.sustain1 && this.state.sustain1.att_7 !== undefined) {
        att7 = parseInt(this.state.sustain1.att_7)
        }
  else { att7 = 0; }
  if(this.state.sustain1 && this.state.sustain1.att_8 !== undefined) {
    att8 = parseInt(this.state.sustain1.att_8)
    }
   else { att8 = 0; }
   if(this.state.sustain1 && this.state.sustain1.att_9 !== undefined) {
    att9 = parseInt(this.state.sustain1.att_9)
    }
   else { att9 = 0; }

   if(this.state.sustain1 && this.state.sustain1.att_10 !== undefined) {
    att10 = parseInt(this.state.sustain1.att_10)
    }
   else { att10 = 0; }



  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10)  ;
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10 };
  let coreval = JSON.stringify(corearray);

  cookie.setItem(name,coreval);//for cookie
  this.setState({ sustain1: corearray });//for state

  alert("Sustainabilty Academic Data has been saved... :-) ")
  }


saveSustain2 = (e) => {
  let name = this.state.job_id + "#sustain#nonacademic";

  let att1, att2 , att3, att4, att5, att6, att7 , att8, att9, att10 = 0;
  let total = 0;

  if(this.state.sustain2 && this.state.sustain2.att_1 !== undefined ) {
       att1 = parseInt(this.state.sustain2.att_1)
  }
     else { att1 = 0; }
  if(this.state.sustain2 && this.state.sustain2.att_2 !== undefined) {
       att2 = parseInt(this.state.sustain2.att_2)
  }
      else { att2 = 0; }
  if(this.state.sustain2 && this.state.sustain2.att_3 !== undefined) {
       att3 = parseInt(this.state.sustain2.att_3)
      }
      else { att3 = 0; }
  if(this.state.sustain2 && this.state.sustain2.att_4 !== undefined) {
        att4 = parseInt(this.state.sustain2.att_4)
      }
      else { att4 = 0; }
  if(this.state.sustain2 && this.state.sustain2.att_5 !== undefined) {
        att5 = parseInt(this.state.sustain2.att_5)
        }
      else { att5 = 0; }
  if(this.state.sustain2 && this.state.sustain2.att_6 !== undefined) {
        att6 = parseInt(this.state.sustain2.att_6)
        }
      else { att6 = 0; }
  if(this.state.sustain2 && this.state.sustain2.att_7 !== undefined) {
        att7 = parseInt(this.state.sustain2.att_7)
        }
  else { att7 = 0; }
  if(this.state.sustain2 && this.state.sustain2.att_8 !== undefined) {
    att8 = parseInt(this.state.sustain2.att_8)
    }
   else { att8 = 0; }
   if(this.state.sustain2 && this.state.sustain2.att_9 !== undefined) {
    att9 = parseInt(this.state.sustain2.att_9)
    }
   else { att9 = 0; }

   if(this.state.sustain2 && this.state.sustain2.att_10 !== undefined) {
    att10 = parseInt(this.state.sustain2.att_10)
    }
   else { att10 = 0; }



  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10)  ;
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10 };
  let coreval = JSON.stringify(corearray);

  cookie.setItem(name,coreval);//for cookie
  this.setState({ sustain2: corearray });//for state

  alert("Sustainabilty Non-Academic Data has been saved... :-) ")
  }

  saveSustain3 = (e) => {
    let name = this.state.job_id + "#sustain#policy";

    let att1, att2 , att3, att4, att5, att6, att7 , att8, att9, att10 , att11, att12, att13 , att14, att15, att16 , att17 , att18 , att19 , att20, att21, att22, att23  = 0;
    let total = 0;

    if(this.state.sustain3 && this.state.sustain3.att_1 !== undefined ) {
         att1 = parseInt(this.state.sustain3.att_1)
    }
       else { att1 = 0; }
    if(this.state.sustain3 && this.state.sustain3.att_2 !== undefined) {
         att2 = parseInt(this.state.sustain3.att_2)
    }
        else { att2 = 0; }
    if(this.state.sustain3 && this.state.sustain3.att_3 !== undefined) {
         att3 = parseInt(this.state.sustain3.att_3)
        }
        else { att3 = 0; }
    if(this.state.sustain3 && this.state.sustain3.att_4 !== undefined) {
          att4 = parseInt(this.state.sustain3.att_4)
        }
        else { att4 = 0; }
    if(this.state.sustain3 && this.state.sustain3.att_5 !== undefined) {
          att5 = parseInt(this.state.sustain3.att_5)
          }
        else { att5 = 0; }
    if(this.state.sustain3 && this.state.sustain3.att_6 !== undefined) {
          att6 = parseInt(this.state.sustain3.att_6)
          }
        else { att6 = 0; }
    if(this.state.sustain3 && this.state.sustain3.att_7 !== undefined) {
          att7 = parseInt(this.state.sustain3.att_7)
          }
    else { att7 = 0; }
    if(this.state.sustain3 && this.state.sustain3.att_8 !== undefined) {
      att8 = parseInt(this.state.sustain3.att_8)
      }
     else { att8 = 0; }
     if(this.state.sustain3 && this.state.sustain3.att_9 !== undefined) {
      att9 = parseInt(this.state.sustain3.att_9)
      }
     else { att9 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_10 !== undefined) {
      att10 = parseInt(this.state.sustain3.att_10)
      }
     else { att10 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_11 !== undefined) {
      att11 = parseInt(this.state.sustain3.att_11)
      }
     else { att11 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_12 !== undefined) {
      att12 = parseInt(this.state.sustain3.att_12)
      }
     else { att12 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_13 !== undefined) {
      att13 = parseInt(this.state.sustain3.att_13)
      }
     else { att13 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_14 !== undefined) {
      att14 = parseInt(this.state.sustain3.att_14)
      }
     else { att14 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_15 !== undefined) {
      att15 = parseInt(this.state.sustain3.att_15)
      }
     else { att15 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_16 !== undefined) {
      att16 = parseInt(this.state.sustain3.att_16)
      }
     else { att16 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_17 !== undefined) {
      att17 = parseInt(this.state.sustain3.att_17)
      }
     else { att17 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_18 !== undefined) {
      att18 = parseInt(this.state.sustain3.att_18)
      }
     else { att18 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_19 !== undefined) {
      att19 = parseInt(this.state.sustain3.att_19)
      }
     else { att19 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_20 !== undefined) {
      att20 = parseInt(this.state.sustain3.att_20)
      }
     else { att20 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_21 !== undefined) {
      att21 = parseInt(this.state.sustain3.att_21)
      }
     else { att21 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_22 !== undefined) {
      att22 = parseInt(this.state.sustain3.att_22)
      }
     else { att22 = 0; }

     if(this.state.sustain3 && this.state.sustain3.att_23 !== undefined) {
      att23 = parseInt(this.state.sustain3.att_23)
      }
     else { att23 = 0; }

    total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10) + parseInt(att11) + parseInt(att12) + parseInt(att13) + parseInt(att14) + parseInt(att15) + parseInt(att16) + parseInt(att17) + parseInt(att18) + parseInt(att19) + parseInt(att20) + parseInt(att21) + parseInt(att22) + parseInt(att23) ;
    console.log('The Total: ' + total);

    let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10, att_11: att11 , att_12: att12 , att_13: att13 , att_14: att14 , att_15: att15, att_16: att16, att_17: att17, att_18: att18, att_19: att19, att_20: att20, att_21: att21, att_22: att22, att_23: att23 };
    let coreval = JSON.stringify(corearray);

    cookie.setItem(name,coreval);//for cookie
    this.setState({ sustain3: corearray });//for state

    alert("Sustain policy Data has been saved... :-) ")
    }


saveSustain4 = (e) => {
  let name = this.state.job_id + "#sustain#records";

  let att1, att2 , att3, att4, att5 = 0;
  let total = 0;

  if(this.state.sustain4 && this.state.sustain4.att_1 !== undefined ) {
       att1 = parseInt(this.state.sustain4.att_1)
  }
     else { att1 = 0; }
  if(this.state.sustain4 && this.state.sustain4.att_2 !== undefined) {
       att2 = parseInt(this.state.sustain4.att_2)
  }
      else { att2 = 0; }
  if(this.state.sustain4 && this.state.sustain4.att_3 !== undefined) {
       att3 = parseInt(this.state.sustain4.att_3)
      }
      else { att3 = 0; }
  if(this.state.sustain4 && this.state.sustain4.att_4 !== undefined) {
        att4 = parseInt(this.state.sustain4.att_4)
      }
      else { att4 = 0; }
  if(this.state.sustain4 && this.state.sustain4.att_5 !== undefined) {
        att5 = parseInt(this.state.sustain4.att_5)
        }
      else { att5 = 0; }

  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5);
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5 };
  let coreval = JSON.stringify(corearray);

  cookie.setItem(name,coreval);//for cookie
  this.setState({ sustain4: corearray });//for state

  alert("Sustainabilty Records Data has been saved... :-) ")
  }

  saveSustain5 = (e) => {
    let name = this.state.job_id + "#sustain#technology";

    let att1, att2 , att3, att4, att5, att6 = 0;
    let total = 0;

    if(this.state.sustain5 && this.state.sustain5.att_1 !== undefined ) {
         att1 = parseInt(this.state.sustain5.att_1)
    }
       else { att1 = 0; }
    if(this.state.sustain5 && this.state.sustain5.att_2 !== undefined) {
         att2 = parseInt(this.state.sustain5.att_2)
    }
        else { att2 = 0; }
    if(this.state.sustain5 && this.state.sustain5.att_3 !== undefined) {
         att3 = parseInt(this.state.sustain5.att_3)
        }
        else { att3 = 0; }
    if(this.state.sustain5 && this.state.sustain5.att_4 !== undefined) {
          att4 = parseInt(this.state.sustain5.att_4)
        }
        else { att4 = 0; }
    if(this.state.sustain5 && this.state.sustain5.att_5 !== undefined) {
          att5 = parseInt(this.state.sustain5.att_5)
          }
        else { att5 = 0; }
    if(this.state.sustain5 && this.state.sustain5.att_6 !== undefined) {
          att6 = parseInt(this.state.sustain5.att_6)
          }
    else { att6 = 0; }

    total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6)
    console.log('The Total: ' + total);

    let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6 };
    let coreval = JSON.stringify(corearray);

    cookie.setItem(name,coreval);//for cookie
    this.setState({ sustain5: corearray });//for state

    alert("Sustainabilty Technology Data has been saved... :-) ")
    }

    saveSustain6 = (e) => {
      let name = this.state.job_id + "#sustain#governance";

      let att1, att2 , att3, att4, att5 = 0;
      let total = 0;

      if(this.state.sustain6 && this.state.sustain6.att_1 !== undefined ) {
           att1 = parseInt(this.state.sustain6.att_1)
      }
         else { att1 = 0; }
      if(this.state.sustain6 && this.state.sustain6.att_2 !== undefined) {
           att2 = parseInt(this.state.sustain6.att_2)
      }
          else { att2 = 0; }
      if(this.state.sustain6 && this.state.sustain6.att_3 !== undefined) {
           att3 = parseInt(this.state.sustain6.att_3)
          }
          else { att3 = 0; }
      if(this.state.sustain6 && this.state.sustain6.att_4 !== undefined) {
            att4 = parseInt(this.state.sustain6.att_4)
          }
          else { att4 = 0; }
      if(this.state.sustain6 && this.state.sustain6.att_5 !== undefined) {
            att5 = parseInt(this.state.sustain6.att_5)
            }
          else { att5 = 0; }


      total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5);
      console.log('The Total: ' + total);

      let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5 };
      let coreval = JSON.stringify(corearray);

      cookie.setItem(name,coreval);//for cookie
      this.setState({ sustain6: corearray });//for state

      alert("Sustainabilty Governance Data has been saved... :-) ")
      }


//Sustainability.........


render() {
  const {
   modalcore, modalcoree, modalcoreee, modalinst, modallearn1, modallearn2, modallearn3, modallearn4 ,
   modaltotal1, modaltotal2, modaltotal3, modaltotal4,
   modalsus1, modalsus2, modalsus3, modalsus4, modalsus5, modalsus6
  } = this.state;

//Load all jobs for the logged user....
let user_logged = JSON.parse(cookie.getItem('users'));
let name = user_logged.id + "#jobs";
let joblist = JSON.parse(cookie.getItem(name));

//load all scores based on JOB_ID---Core Processes Attendance
//Core Processes--------------------------------
let totalcoreatt = 0 //attendance in Core processesf
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#core#coreattendance";
  let core_att = JSON.parse(cookie.getItem(name));


  for (var key in core_att) {
    totalcoreatt += core_att[key];
  }
}

let totalcorelsn = 0 //lessonnote in Core processes
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#core#corelessonnote";
  let core_att2 = JSON.parse(cookie.getItem(name));


  for (var key in core_att2) {
    totalcorelsn += core_att2[key];
  }
} //#core#coremne

let totalcoremne = 0 //mne in Core processes
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#core#coremne";
  let core_att3 = JSON.parse(cookie.getItem(name));


  for (var key in core_att3) {
    totalcoremne += core_att3[key];
  }
}

let totalcore = 0
totalcore = totalcoreatt + totalcorelsn + totalcoremne;
//end Core Processes--------------------------------

//Instructor Resourse...................
let totalinstr = 0 //instructor resource
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#instructor";
  let instr = JSON.parse(cookie.getItem(name));

  for (var key in instr) {
    totalinstr += instr[key];
  }
}

//end Instructor Resourse...................

//Learn environment-----------------
let totallearn1 = 0 //
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#learn#classroom";
  let learn1 = JSON.parse(cookie.getItem(name));


  for (var key in learn1) {
    totallearn1 += learn1[key];
  }
}

let totallearn2 = 0 //lessonnote in Core processes
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#learn#laboratory";
  let learn2 = JSON.parse(cookie.getItem(name));
  for (var key in learn2) {
    totallearn2 += learn2[key];
  }
}

let totallearn3 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#learn#teachingaids";
  let learn3 = JSON.parse(cookie.getItem(name));
  for (var key in learn3) {
    totallearn3 += learn3[key];
  }
}

let totallearn4 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#learn#outdoor";
  let learn4 = JSON.parse(cookie.getItem(name));
  for (var key in learn4) {
    totallearn4 += learn4[key];
  }
}

let totallearnx = 0
totallearnx = totallearn1 + totallearn2 + totallearn3 + totallearn4;
//end learn environment----------------------------------

//total dev env
let totaltotal1 = 0 //
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#total#games";
  let total1 = JSON.parse(cookie.getItem(name));

  for (var key in total1) {
    totaltotal1 += total1[key];
  }
}

let totaltotal2 = 0 //
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#total#others";
  let total2 = JSON.parse(cookie.getItem(name));
  for (var key in total2) {
    totaltotal2 += total2[key];
  }
}

let totaltotal3 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#total#socials";
  let total3 = JSON.parse(cookie.getItem(name));
  for (var key in total3) {
    totaltotal3 += total3[key];
  }
}

let totaltotal4 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#total#domain";
  let total4 = JSON.parse(cookie.getItem(name));
  for (var key in total4) {
    totaltotal4 += total4[key];
  }
}

let totalapex = 0
totalapex = totaltotal1 + totaltotal2 + totaltotal3 + totaltotal4;
//end total dev env

//Sustainability
let totalsus1 = 0 //
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#sustain#academic";
  let total1 = JSON.parse(cookie.getItem(name));

  for (var key in total1) {
    totalsus1 += total1[key];
  }
}

let totalsus2 = 0 //
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#sustain#nonacademic";
  let total2 = JSON.parse(cookie.getItem(name));
  for (var key in total2) {
    totalsus2 += total2[key];
  }
}

let totalsus3 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#sustain#policy";
  let total3 = JSON.parse(cookie.getItem(name));
  for (var key in total3) {
    totalsus3 += total3[key];
  }
}

let totalsus4 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#sustain#records";
  let total4 = JSON.parse(cookie.getItem(name));
  for (var key in total4) {
    totalsus4 += total4[key];
  }
}

let totalsus5 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#sustain#technology";
  let total5 = JSON.parse(cookie.getItem(name));
  for (var key in total5) {
    totalsus5 += total5[key];
  }
}

let totalsus6 = 0
if (this.state.job_id !== ''){
  let name = this.state.job_id + "#sustain#governance";
  let total6 = JSON.parse(cookie.getItem(name));
  for (var key in total6) {
    totalsus6 += total6[key];
  }
}

let sustainapex = 0
sustainapex = totalsus1 + totalsus2 + totalsus3 + totalsus4 + totalsus5 + totalsus6;

//end Sustainability

  return (
  <Protected>
    <UserLayout>

     { this.state.showalert ? <AlertModal handleClose = {this.handleClose} />  : null }
    <div className="level">
    <div className="level-item has-text-centered">
      <div className="field">
          <label className="label">Choose Job</label>
          <div className="control">
            <div className="select is-large">
              <select onChange={e => this.handleSelect(e)}>
              <option value= "#">Choose...</option>
              { joblist.map((link) =>
              <option value={link.J_ID}> {link.J_NAME} </option>
              )
              }
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="level" >
      <div className="column">
			<Col md={4}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Core Processes</h4>
          <p className="score">{totalcore}</p>
          <button className="button is-small is-warning"  onClick={e => this.handleCore(e)} > Edit Attendance >> {totalcoreatt} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleCore2(e)} > Edit Lessonnote  >> {totalcorelsn} score </button>  &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleCore3(e)} > Edit M&E  >> {totalcoremne} score </button>
        </div>
      </Col>

      <Col sm={4}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Instructor Resource</h4>
          <p className="score">{totalinstr}</p>
          &nbsp;&nbsp;&nbsp; <button className="button is-small is-warning"  onClick={e => this.handleInst(e)} > Edit Instructor Resource >> {totalinstr} score </button>
        </div>
      </Col>

			<Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Learning Environment</h4>
          <p className="score">{totallearnx}</p>
          <button className="button is-small is-warning"  onClick={e => this.handleLearn1(e)} > Edit Classroom >> {totallearn1} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleLearn2(e)} > Edit Laboratory  >> {totallearn2} score </button>  &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleLearn3(e)} > Edit Teaching Aids  >> {totallearn3} score </button>  &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-danger"  onClick={e => this.handleLearn4(e)} > Edit Outdoor  >> {totallearn4} score </button>  &nbsp;&nbsp;&nbsp;

        </div>
      </Col>

			<Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Student Development</h4>
          <p className="score">{totalapex}</p>
          <button className="button is-small is-warning"  onClick={e => this.handleTotal1(e)} > Edit Games & Sports >> {totaltotal1} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleTotal2(e)} > Edit Other Competitions >> {totaltotal2} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleTotal3(e)} > Edit Socials >> {totaltotal3} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-danger"  onClick={e => this.handleTotal4(e)} > Edit Domain relationships >> {totaltotal4} score </button> &nbsp;&nbsp;&nbsp;

        </div>
      </Col>

      <Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Sustainability</h4>
          <p className="score"></p>
          <button className="button is-small is-warning"  onClick={e => this.handleSus1(e)} > Edit Capacity Dev. (Academic) >> {totalsus1} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleSus2(e)} > Edit Capacity Dev. (Non-Academic) >> {totalsus2} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleSus3(e)} > Edit Policy >> {totalsus3}  score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-danger"  onClick={e => this.handleSus4(e)} > Edit Records >> {totalsus4} score </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleSus5(e)} > Edit Technology >> {totalsus5} score </button> &nbsp;&nbsp;&nbsp; <br/>
          <button className="button is-small is-warning"  onClick={e => this.handleSus6(e)} > Edit Governance >> {totalsus6}  score </button> &nbsp;&nbsp;&nbsp;

        </div>
      </Col>

			<Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Performance</h4>
          <p className="score">38</p>
        </div>
      </Col>

      <Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>SSHE</h4>
          <p className="score">108</p>
        </div>
      </Col>

        </div>
      </div>

     <CoreAttModal active = {modalcore} handleClose={this.handleClose} handleInputChange={this.handleInputChangeCore.bind(this)} saveform={this.saveCoreAttendance.bind(this)} coreprocess1={this.state.coreprocess1} />
     <CoreLsnModal active = {modalcoree} handleClose={this.handleClose} handleInputChange={this.handleInputChangeCore2.bind(this)} saveform={this.saveCoreLessonnote.bind(this)} coreprocess2={this.state.coreprocess2} />
     <CoreMneModal active = {modalcoreee} handleClose={this.handleClose} handleInputChange={this.handleInputChangeCore3.bind(this)} saveform={this.saveCoreMne.bind(this)} coreprocess3={this.state.coreprocess3} />

     <InstrResourceModal active = {modalinst} handleClose={this.handleClose} handleInputChange={this.handleInputChangeInstr.bind(this)} saveform={this.saveInstResr.bind(this)} instructor={this.state.instructor} />

     <LearnClassroomModal active = {modallearn1} handleClose={this.handleClose} handleInputChange={this.handleInputChangeLearn1.bind(this)} saveform={this.saveLearn1.bind(this)} learnclassroom={this.state.learn1} />
     <LearnLaboratoryModal active = {modallearn2} handleClose={this.handleClose} handleInputChange={this.handleInputChangeLearn2.bind(this)} saveform={this.saveLearn2.bind(this)} learnlaboratory={this.state.learn2} />
     <LearnTeachingModal active = {modallearn3} handleClose={this.handleClose} handleInputChange={this.handleInputChangeLearn3.bind(this)} saveform={this.saveLearn3.bind(this)} learnteaching={this.state.learn3} />
     <LearnOutdoorModal active = {modallearn4} handleClose={this.handleClose} handleInputChange={this.handleInputChangeLearn4.bind(this)} saveform={this.saveLearn4.bind(this)} learnoutdoor={this.state.learn4} />

     <TotalGamesModal active = {modaltotal1} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal1.bind(this)} saveform={this.saveTotal1.bind(this)} totalgames={this.state.sustain3} />
     <TotalOtherModal active = {modaltotal2} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal2.bind(this)} saveform={this.saveTotal2.bind(this)} totalother={this.state.student2} />
     <TotalSocialModal active = {modaltotal3} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal3.bind(this)} saveform={this.saveTotal3.bind(this)} totalsocials={this.state.student3} />
     <TotalDomainModal active = {modaltotal4} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal4.bind(this)} saveform={this.saveTotal4.bind(this)} totaldomain={this.state.student4} />


     <SusAcademicModal active = {modalsus1} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus1.bind(this)} saveform={this.saveSustain1.bind(this)} sustain={this.state.sustain1} />
     <SusNonAcademicModal active = {modalsus2} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus2.bind(this)} saveform={this.saveSustain2.bind(this)} sustain={this.state.sustain2} />
     <SusPolicyModal active = {modalsus3} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus3.bind(this)} saveform={this.saveSustain3.bind(this)} sustain={this.state.sustain3} />
     <SusRecordModal active = {modalsus4} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus4.bind(this)} saveform={this.saveSustain4.bind(this)} sustain={this.state.sustain4} />
     <SusTechModal active = {modalsus5} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus5.bind(this)} saveform={this.saveSustain5.bind(this)} sustain={this.state.sustain5} />
     <SusGovernModal active = {modalsus6} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus6.bind(this)} saveform={this.saveSustain6.bind(this)} sustain={this.state.sustain6} />

    </UserLayout>
  </Protected>


  );
}

}

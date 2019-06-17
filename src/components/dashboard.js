import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
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
import LearnLibraryModal from './modal/learnlibrary'
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
import AcaExternalModal from './modal/acaexternal'
import AcaInternalModal from './modal/acainternal'
import SsheSafetylModal from './modal/sshesafety'
import SsheEnvironlModal from './modal/ssheenviron'
import SsheHealthlModal from './modal/sshehealth'
import SsheSecuritylModal from './modal/sshesecurity'
import AlertModal from './alert'
import Cookies from 'js-cookie';
import Authenticator from './fake-authenticator';
import {Col} from 'react-bootstrap';
import cookie from '../libs/cookie';
import Loader from 'react-loader-advanced';


export default class Dashboard extends React.PureComponent {
onLoginRedirectUrl = '/login';



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
      learn5: { }, //learn library
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
      academic1: { },
      academic2: { },
      sshe1: { },
      sshe2: { },
      sshe3: { },
      sshe4: { },

      loaded: false,

      job_id:'',
      modalcore:'',
      modalcoree:'',
      modalcoreee:'',
      modalinst:'',
      modallearn1:'',
      modallearn2:'',
      modallearn3:'',
      modallearn4:'',
      modallearn5:'',
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
      modalaca1:'',
      modalaca2:'',
      modalsshe1:'',
      modalsshe2:'',
      modalsshe3:'',
      modalsshe4:'',
      atttotal1: 0,
      showalert: false,
      showothers: false,
      loggedIn: false,
      loading: false,

      instjoblist: [],
      instjoblistvalues: {},
      insttotalcoreatt: 0,
      insttotalcorelsn:0,
      insttotalcoremne:0,
      insttotalinstr: 0,
      insttotallearn1:0,
      insttotallearn2:0,
      insttotallearn3:0,
      insttotallearn4:0,
      insttotallearn5:0,
      insttotaltotal1:0,
      insttotaltotal2:0,
      insttotaltotal3:0,
      insttotaltotal4:0,
      insttotalsus1: 0,
      insttotalsus2: 0,
      insttotalsus3: 0,
      insttotalsus4: 0,
      insttotalsus5: 0,
      insttotalsus6: 0,
      insttotalaca1: 0,
      insttotalaca2: 0

    };

}

componentDidMount() {
  const isLoggedIn = Authenticator.isLoggedIn();
  console.log('Second this called');

  //Load all jobs for the logged user....
 if (isLoggedIn) {
 //let user_logged = JSON.parse(cookie.getItem('users'));
 //console.log("User logged: " + Cookies.get('users') );
 //let name = user_logged.id + "#jobs";
 //let joblist = JSON.parse(cookie.getItem(name));

 //this.setState({ instjoblist: joblist });

 //load all scores based on JOB_ID---Core Processes Attendance
 //Core Processes--------------------------------
 let totalcoreatt = 0
  //attendance in Core processesf
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#core#coreattendance";
   let core_att = JSON.parse(cookie.getItem(name));
   for (var key in core_att) {
     totalcoreatt += core_att[key];
   }
 }
this.setState({ insttotalcoreatt: totalcoreatt });

let totalcorelsn = 0
//lessonnote in Core processes
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#core#corelessonnote";
   let core_att2 = JSON.parse(cookie.getItem(name));

   for (var key in core_att2) {
     totalcorelsn += core_att2[key];
   }
 } //#core#coremne

 this.setState({ insttotalcorelsn: totalcorelsn });

 let totalcoremne = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#core#coremne";

   let core_att3 = JSON.parse(cookie.getItem(name));

   for (var key in core_att3) {
     totalcoremne += core_att3[key];
   }
 }
 this.setState({ insttotalcoremne: totalcoremne });

 let totalcore = 0
 totalcore = totalcoreatt + totalcorelsn + totalcoremne;
 //end Core Processes--------------------------------

 //Instructor Resourse...................
 let totalinstr = 0
//instructor resource
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#instructor";

   let instr = JSON.parse(cookie.getItem(name));

   for (var key in instr) {
     totalinstr += instr[key];
   }
 }

 this.setState({ insttotalinstr: totalinstr });

 //end Instructor Resourse...................

 //Learn environment-----------------
let totallearn1 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#learn#classroom";

   let learn1 = JSON.parse(cookie.getItem(name));

   for (var key in learn1) {
     totallearn1 += learn1[key];
   }
 }

 this.setState({ insttotallearn1: totallearn1 });

 let totallearn2 = 0
 //lessonnote in Core processes
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#learn#laboratory";

   let learn2 = JSON.parse(cookie.getItem(name));
   for (var key in learn2) {
     totallearn2 += learn2[key];
   }
 }

 this.setState({ insttotallearn2: totallearn2 });

 let totallearn3 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#learn#teachingaids";

   let learn3 = JSON.parse(cookie.getItem(name));
   for (var key in learn3) {
     totallearn3 += learn3[key];
   }
 }

 this.setState({ insttotallearn3: totallearn3 });

 let totallearn4 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#learn#outdoor";

   let learn4 = JSON.parse(cookie.getItem(name));
   for (var key in learn4) {
     totallearn4 += learn4[key];
   }
 }

 this.setState({ insttotallearn4: totallearn4 });

 let totallearn5 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#learn#library";

   let learn5 = JSON.parse(cookie.getItem(name));
   for (var key in learn5) {
     totallearn5 += learn5[key];
   }
 }

 this.setState({ insttotallearn4: totallearn5 });

 let totallearnx = 0
 totallearnx = totallearn1 + totallearn2 + totallearn3 + totallearn4  + totallearn5;
 //end learn environment----------------------------------

 //total dev env
 let totaltotal1 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#total#games";

   let total1 = JSON.parse(cookie.getItem(name));

   for (var key in total1) {
     totaltotal1 += total1[key];
   }
 }

 this.setState({ insttotaltotal1: totaltotal1 });

 let totaltotal2 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#total#others";

   let total2 = JSON.parse(cookie.getItem(name));
   for (var key in total2) {
     totaltotal2 += total2[key];
   }
 }

 this.setState({ insttotaltotal2: totaltotal2 });

 let totaltotal3 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#total#socials";

   let total3 = JSON.parse(cookie.getItem(name));
   for (var key in total3) {
     totaltotal3 += total3[key];
   }
 }

 this.setState({ insttotaltotal3: totaltotal3 });

 let totaltotal4 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#total#domain";

   let total4 = JSON.parse(cookie.getItem(name));
   for (var key in total4) {
     totaltotal4 += total4[key];
   }
 }

 this.setState({ insttotaltotal4: totaltotal4 });

 let totalapex = 0
 totalapex = totaltotal1 + totaltotal2 + totaltotal3 + totaltotal4;
 //end total dev env

 let totalsus1 = 0
 //Sustainability
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#sustain#academic";

   let total1 = JSON.parse(cookie.getItem(name));

   for (var key in total1) {
     totalsus1 += total1[key];
   }
 }

 this.setState({ insttotalsus1: totalsus1 });

 let totalsus2 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#sustain#nonacademic";

   let total2 = JSON.parse(cookie.getItem(name));
   for (var key in total2) {
     totalsus2 += total2[key];
   }
 }

 this.setState({ insttotalsus2: totalsus2 });

 let totalsus3 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#sustain#policy";

   let total3 = JSON.parse(cookie.getItem(name));
   for (var key in total3) {
     totalsus3 += total3[key];
   }
 }

 let totalsus4 = 0
 this.setState({ insttotalsus3: totalsus3 });


 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#sustain#records";

   let total4 = JSON.parse(cookie.getItem(name));
   for (var key in total4) {
     totalsus4 += total4[key];
   }
 }

 let totalsus5 = 0
 this.setState({ insttotalsus4: totalsus4 });

 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#sustain#technology";

   let total5 = JSON.parse(cookie.getItem(name));
   for (var key in total5) {
     totalsus5 += total5[key];
   }
 }

  this.setState({ insttotalsus5: totalsus5 });

  let totalsus6 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#sustain#governance";

   let total6 = JSON.parse(cookie.getItem(name));
   for (var key in total6) {
     totalsus6 += total6[key];
   }
 }

 this.setState({ insttotalsus6: totalsus6 });

 let sustainapex = 0
 sustainapex = totalsus1 + totalsus2 + totalsus3 + totalsus4 + totalsus5 + totalsus6;

 //end Sustainability

 //Academic Performance

 let totalaca1 = 0
 //Sustainability
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#academic#int";

   let total1 = JSON.parse(cookie.getItem(name));

   for (var key in total1) {
    totalaca1 += total1[key];
   }
 }

 this.setState({ insttotalaca1: totalaca1 });

 let totalaca2 = 0
 if (this.state.job_id !== ''){
   let name = this.state.job_id + "#academic#ext";

   let total2 = JSON.parse(cookie.getItem(name));
   for (var key in total2) {
    totalaca2 += total2[key];
   }
 }
 this.setState({ insttotalaca2: totalaca2 });
}
}

componentWillMount(){
  console.log('First this called');
  const isLoggedIn = Authenticator.isLoggedIn();
  //Load all jobs for the logged user....
 if (isLoggedIn) {
 let user_logged = JSON.parse(cookie.getItem('users'));
 console.log("User logged: " + Cookies.get('users') );
 let name = user_logged.id + "#jobs";
 let joblist = JSON.parse(cookie.getItem(name));
 this.setState({ instjoblist: joblist });
 }
}

refreshPage(e) {
window.location.reload();
}

handleUploadtoServer(e) {

  let job_id = this.state.job_id;
  let schid = this.state.instjoblistvalues[0].SCHOOL_ID
  let schname = this.state.instjoblistvalues[0].SCH_NAME
  let first = job_id + "#core#coreattendance";
  let coreprocess1 = JSON.parse( cookie.getItem(first) );

  let first2 = job_id + "#core#corelessonnote";
  let coreprocess2 = JSON.parse(cookie.getItem(first2));

  let first3 = job_id + "#core#coremne";
  let coreprocess3 = JSON.parse(cookie.getItem(first3));

  let second = job_id + "#instructor";
  let instructor = JSON.parse(cookie.getItem(second));

  //learning environment
  let third = job_id + "#learn#classroom";
  let learn = JSON.parse(cookie.getItem(third));

  let third2 = job_id + "#learn#laboratory";
  let learn2 = JSON.parse(cookie.getItem(third2));

  let third3 = job_id + "#learn#teachingaid";
  let learn3 = JSON.parse(cookie.getItem(third3));

  let third4 = job_id + "#learn#outdoor";
  let learn4 = JSON.parse(cookie.getItem(third4));

  let third5 = job_id + "#learn#library";
  let learn5 = JSON.parse(cookie.getItem(third5));

   //student dev
   let forth = job_id + "#total#games";
   let student = JSON.parse(cookie.getItem(forth));

   let forth2 = job_id + "#total#others";
   let student2 = JSON.parse(cookie.getItem(forth2));

   let forth3 = job_id + "#total#socials";
   let student3 = JSON.parse(cookie.getItem(forth3));

   let forth4 = job_id + "#total#domain";
   let student4 = JSON.parse(cookie.getItem(forth4));

   //sustainabilty
   let fifth = job_id + "#sustain#academic";
   let sustain = JSON.parse(cookie.getItem(fifth));

   let fifth2 = job_id + "#sustain#nonacademic";
   let sustain2 = JSON.parse(cookie.getItem(fifth2));

   let fifth3 = job_id + "#sustain#policy";
   let sustain3 = JSON.parse(cookie.getItem(fifth3));

   let fifth4 = job_id + "#sustain#records";
   let sustain4 = JSON.parse(cookie.getItem(fifth4));

   let fifth5 = job_id + "#sustain#technology";
   let sustain5 = JSON.parse(cookie.getItem(fifth5));

   let fifth6 = job_id + "#sustain#governance";
   let sustain6 = JSON.parse(cookie.getItem(fifth6));

   //academic
   let sixth = job_id + "#academic#int";
   let academic = JSON.parse(cookie.getItem(sixth));

   let sixth2 = job_id + "#academic#ext";
   let academic2 = JSON.parse(cookie.getItem(sixth2));

   //sshe
   let seventh = job_id + "#sshe#safety";
   let sshe = JSON.parse(cookie.getItem(seventh));

   let seventh2 = job_id + "#sshe#environment";
   let sshe2 = JSON.parse(cookie.getItem(seventh2));

   let seventh3 = job_id + "#sshe#health";
   let sshe3 = JSON.parse(cookie.getItem(seventh3));

   let seventh4 = job_id + "#sshe#security";
   let sshe4 = JSON.parse(cookie.getItem(seventh4));

   let finalobj = {c1:coreprocess1,c2:coreprocess2,c3:coreprocess3,i1:instructor,l1:learn, l2:learn2, l3: learn3, l4: learn4, l5: learn5, t1: student,t2: student2,t3: student3,t4: student4, s1:sustain,s2:sustain2,s3:sustain3,s4:sustain4,s5:sustain5,s6:sustain6, a1:academic, a2:academic2, sh1:sshe, sh2: sshe2, sh3: sshe3 , sh4: sshe4, jobid: job_id, schid: schid , schname: schname }

    this.setState({ loading: true });
/**
 * //trigger_ratings_
    axios.interceptors.request.use(config => {
      window.console.log("Config is now: " + config);

      config.paramsSerializer = params => {
        // Qs is already included in the Axios package
        return Qs.stringify(params, {
          arrayFormat: "brackets",
          encode: false
        });
      };

      return config;
    });
**/
    axios.post('https://other.standbasis.com/upload.php', {
      finalobj
    })
    .then((response) => {
       if (response.data.error) {
          this.setState({ loading: false });
          console.log(response)
          alert("Error in Upload..Ensure that there is Internet Connectivity.")

          }
        else {
          //

          this.setState({ loading: false });
          console.log(response.data)
          alert("Success!!..All Data Uploaded successfully")
          Authenticator.logout()
          window.location.reload()
        }
    })
    .catch(function (error) {
      alert(error);
      console.log(error);
      this.setState({ loading: false });
    });

}

//Onchange Job Combo box

handleSelect(e) {
  if (e && e.preventDefault) e.preventDefault();

  const job_id = e.target.value;
  console.log("The Job ID: "+ job_id)
  if (job_id !== "#" ){
  //let resultObject = search(job_id, this.state.instjoblist);

  let result = this.state.instjoblist.filter( o => o.J_ID === job_id);

  this.setState({ instjoblistvalues: result });

  this.setState({ job_id: job_id });//current job ID
  this.setState({ showothers: true });
  //core processes
  let first = job_id + "#core#coreattendance";
  let coreprocess1 = JSON.parse( cookie.getItem(first) );
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
  this.setState({ learn1: learn });

  let third2 = job_id + "#learn#laboratory";
  let learn2 = JSON.parse(cookie.getItem(third2));
  this.setState({ learn2: learn2 });

  let third3 = job_id + "#learn#teachingaid";
  let learn3 = JSON.parse(cookie.getItem(third3));
  this.setState({ learn3: learn3 });

  let third4 = job_id + "#learn#outdoor";
  let learn4 = JSON.parse(cookie.getItem(third4));
  this.setState({ learn4: learn4 });

  let third5 = job_id + "#learn#library";
  let learn5 = JSON.parse(cookie.getItem(third5));
  this.setState({ learn4: learn5 });

   //student dev
   let forth = job_id + "#total#games";
   let student = JSON.parse(cookie.getItem(forth));
   this.setState({ student1: student });

   let forth2 = job_id + "#total#others";
   let student2 = JSON.parse(cookie.getItem(forth2));
   this.setState({ student2: student2 });

   let forth3 = job_id + "#total#socials";
   let student3 = JSON.parse(cookie.getItem(forth3));
   this.setState({ student3: student3 });

   let forth4 = job_id + "#total#domain";
   let student4 = JSON.parse(cookie.getItem(forth4));
   this.setState({ student4: student4 });

   //sustainabilty
   let fifth = job_id + "#sustain#academic";
   let sustain = JSON.parse(cookie.getItem(fifth));
   this.setState({ sustain1: sustain });

   let fifth2 = job_id + "#sustain#nonacademic";
   let sustain2 = JSON.parse(cookie.getItem(fifth2));
   this.setState({ sustain2: sustain2 });

   let fifth3 = job_id + "#sustain#policy";
   let sustain3 = JSON.parse(cookie.getItem(fifth3));
   this.setState({ sustain3: sustain3 });

   let fifth4 = job_id + "#sustain#records";
   let sustain4 = JSON.parse(cookie.getItem(fifth4));
   this.setState({ sustain4: sustain4 });

   let fifth5 = job_id + "#sustain#technology";
   let sustain5 = JSON.parse(cookie.getItem(fifth5));
   this.setState({ sustain5: sustain5 });

   let fifth6 = job_id + "#sustain#governance";
   let sustain6 = JSON.parse(cookie.getItem(fifth6));
   this.setState({ sustain6: sustain6 });

   //academic
   let sixth = job_id + "#academic#int";
   let academic = JSON.parse(cookie.getItem(sixth));
   this.setState({ academic1: academic });

   let sixth2 = job_id + "#academic#ext";
   let academic2 = JSON.parse(cookie.getItem(sixth2));
   this.setState({ academic2: academic2 });

   //sshe
   let seventh = job_id + "#sshe#safety";
   let sshe = JSON.parse(cookie.getItem(seventh));
   this.setState({ sshe1: sshe });

   let seventh2 = job_id + "#sshe#environment";
   let sshe2 = JSON.parse(cookie.getItem(seventh2));
   this.setState({ sshe2: sshe2 });


   let seventh3 = job_id + "#sshe#health";
   let sshe3 = JSON.parse(cookie.getItem(seventh3));
   this.setState({ sshe3: sshe3 });

   let seventh4 = job_id + "#sshe#security";
   let sshe4 = JSON.parse(cookie.getItem(seventh4));
   this.setState({ sshe4: sshe4 });
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
  this.setState({ modalcore: '', modalcoree: '',  modalcoreee: '', showalert: false,
      modalinst: '',
      modallearn1: '',
      modallearn2: '',
      modallearn3: '',
      modallearn4: '',
      modallearn5: '',
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
      modalaca1:'',
      modalaca2:'',
      modalsshe1:'',
      modalsshe2:'',
      modalsshe3:'',
      modalsshe4:''
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
var d = new Date(2020,12,31)
cookie.setItem(name,coreval,d)//for cookie
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
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)
  //cookie.setItem(name,coreval,Infinity)//for cookie
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
    var d = new Date(2020,12,31)
    cookie.setItem(name,coreval,d)//for cookie
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
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
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

 handleInputChangeLearn5 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    learn5: {
        ...this.state.learn5,
        [name]: value
     }
 });
    console.log(this.state.learn5)
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

handleLearn5(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Learn 5 jus ran");
  this.setState({ modallearn5: 'is-active' });
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
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
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
    var d = new Date(2020,12,31)
    cookie.setItem(name,coreval,d)//for cookie
    this.setState({ learn2: corearray });//for state

    alert("Learn outdoor Data has been saved... :-) ")
    }

    saveLearn3 = (e) => {
      let name = this.state.job_id + "#learn#teachingaid";

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
      var d = new Date(2020,12,31)
      cookie.setItem(name,coreval,d)//for cookie
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
        var d = new Date(2020,12,31)
        cookie.setItem(name,coreval,d)//for cookie
        this.setState({ learn4: corearray });//for state

        alert("Learn Outdoor Data has been saved... :-) ")
      }

      saveLearn5 = (e) => {
        let name = this.state.job_id + "#learn#library";

        let att1, att2 , att3, att4, att5 = 0;
        let total = 0;

        if(this.state.learn5 && this.state.learn5.att_1 !== undefined ) {
             att1 = parseInt(this.state.learn5.att_1)
        }
           else { att1 = 0; }
        if(this.state.learn5 && this.state.learn5.att_2 !== undefined) {
             att2 = parseInt(this.state.learn5.att_2)
        }
            else { att2 = 0; }
        if(this.state.learn5 && this.state.learn5.att_3 !== undefined) {
             att3 = parseInt(this.state.learn5.att_3)
            }
            else { att3 = 0; }
        if(this.state.learn5 && this.state.learn5.att_4 !== undefined) {
              att4 = parseInt(this.state.learn5.att_4)
            }
            else { att4 = 0; }
        if(this.state.learn5 && this.state.learn5.att_5 !== undefined) {
              att5 = parseInt(this.state.learn5.att_5)
              }
            else { att5 = 0; }

        total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) ;
        console.log('The Total of Learn Library: ' + total);

        let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5 };
        let coreval = JSON.stringify(corearray);
        var d = new Date(2020,12,31) //Expiry date of cookie
        cookie.setItem(name,coreval,d)//for cookie
        this.setState({ learn5: corearray });//for state

        alert("Learn Library Data has been saved... :-) ")
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
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
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
    var d = new Date(2020,12,31)
    cookie.setItem(name,coreval,d)//for cookie
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
      var d = new Date(2020,12,31)
      cookie.setItem(name,coreval,d)//for cookie
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
        var d = new Date(2020,12,31)
        cookie.setItem(name,coreval,d)//for cookie
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
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
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
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
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
    var d = new Date(2020,12,31)
    cookie.setItem(name,coreval,d)//for cookie
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
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
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
    var d = new Date(2020,12,31)
    cookie.setItem(name,coreval,d)//for cookie
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
      var d = new Date(2020,12,31)
      cookie.setItem(name,coreval,d)//for cookie
      this.setState({ sustain6: corearray });//for state

      alert("Sustainabilty Governance Data has been saved... :-) ")
      }


//Sustainability.........

//Academic
handleAca1(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Academic 1 jus ran");
  this.setState({ modalaca1: 'is-active' });
}

handleAca2(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal Academic 2 jus ran");
  this.setState({ modalaca2: 'is-active' });
}

handleInputChangeAca1 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     academic1: {
        ...this.state.academic1,
        [name]: value
     }
 });
 console.log(this.state.academic1)
 }

 handleInputChangeAca2 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     academic2: {
        ...this.state.academic2,
        [name]: value
     }
 });
 console.log(this.state.academic2)
 }


saveAcademic = (e) => {
  let name = this.state.job_id + "#academic#int";

  let att1, att2 , att3, att4, att5, att6 = 0;
  let total = 0;

  if(this.state.academic1 && this.state.academic1.att_1 !== undefined ) {
       att1 = parseInt(this.state.academic1.att_1)
  }
     else { att1 = 0; }
  if(this.state.academic1 && this.state.academic1.att_2 !== undefined) {
       att2 = parseInt(this.state.academic1.att_2)
  }
      else { att2 = 0; }
  if(this.state.academic1 && this.state.academic1.att_3 !== undefined) {
       att3 = parseInt(this.state.academic1.att_3)
      }
      else { att3 = 0; }
  if(this.state.academic1 && this.state.academic1.att_4 !== undefined) {
        att4 = parseInt(this.state.academic1.att_4)
      }
      else { att4 = 0; }
  if(this.state.academic1 && this.state.academic1.att_5 !== undefined) {
        att5 = parseInt(this.state.academic1.att_5)
        }
      else { att5 = 0; }

  if(this.state.academic1 && this.state.academic1.att_6 !== undefined) {
        att6 = parseInt(this.state.academic1.att_6)
        }
      else { att6 = 0; }


  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6);
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5 ,  att_6: att6 };
  let coreval = JSON.stringify(corearray);
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
  this.setState({ academic1: corearray });//for state

  alert("Academic Internal Data has been saved... :-) ")
  }

  saveAcademic2 = (e) => {
    let name = this.state.job_id + "#academic#ext";

    let att1, att2 , att3, att4 = 0;
    let total = 0;

    if(this.state.academic2 && this.state.academic2.att_1 !== undefined ) {
         att1 = parseInt(this.state.academic2.att_1)
    }
       else { att1 = 0; }
    if(this.state.academic2 && this.state.academic2.att_2 !== undefined) {
         att2 = parseInt(this.state.academic2.att_2)
    }
        else { att2 = 0; }
    if(this.state.academic2 && this.state.academic2.att_3 !== undefined) {
         att3 = parseInt(this.state.academic2.att_3)
        }
        else { att3 = 0; }
    if(this.state.academic2 && this.state.academic2.att_4 !== undefined) {
          att4 = parseInt(this.state.academic2.att_4)
        }
        else { att4 = 0; }

    total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) ;
    console.log('The Total: ' + total);

    let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4 };
    let coreval = JSON.stringify(corearray);
    var d = new Date(2020,12,31)
    cookie.setItem(name,coreval,d)//for cookie
    this.setState({ academic2: corearray });//for state

    alert("Academic External Data has been saved... :-) ")
    }
//End Academic

//SSHE
handleSshe1(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal SShe 1 jus ran");
  this.setState({ modalsshe1: 'is-active' });
}

handleSshe2(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal SShe 2 jus ran");
  this.setState({ modalsshe2: 'is-active' });
}

handleSshe3(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal SShe 3 jus ran");
  this.setState({ modalsshe3: 'is-active' });
}

handleSshe4(e) {
  if (e && e.preventDefault) e.preventDefault();
  console.log("Modal SShe 4 jus ran");
  this.setState({ modalsshe4: 'is-active' });
}

handleInputChangeSshe1 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
     sshe1: {
        ...this.state.sshe1,
        [name]: value
     }
 });
 console.log(this.state.sshe1)
 }

 handleInputChangeSshe2 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sshe2: {
        ...this.state.sshe2,
        [name]: value
     }
 });
 console.log(this.state.sshe2)
 }

 handleInputChangeSshe3 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sshe3: {
        ...this.state.sshe3,
        [name]: value
     }
 });
 console.log(this.state.sshe3)
 }

 handleInputChangeSshe4 = (event) => {
  const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   this.setState({
    sshe4: {
        ...this.state.sshe4,
        [name]: value
     }
 });
 console.log(this.state.sshe4)
 }

 saveSshe = (e) => {
  let name = this.state.job_id + "#sshe#safety";

  let att1, att2 , att3, att4, att5, att6, att7, att8, att9, att10 = 0;
  let total = 0;

  if(this.state.sshe1 && this.state.sshe1.att_1 !== undefined ) {
       att1 = parseInt(this.state.sshe1.att_1)
  }
     else { att1 = 0; }
  if(this.state.sshe1 && this.state.sshe1.att_2 !== undefined) {
       att2 = parseInt(this.state.sshe1.att_2)
  }
      else { att2 = 0; }
  if(this.state.sshe1 && this.state.sshe1.att_3 !== undefined) {
       att3 = parseInt(this.state.sshe1.att_3)
      }
      else { att3 = 0; }
  if(this.state.sshe1 && this.state.sshe1.att_4 !== undefined) {
        att4 = parseInt(this.state.sshe1.att_4)
      }
      else { att4 = 0; }
  if(this.state.sshe1 && this.state.sshe1.att_5 !== undefined) {
        att5 = parseInt(this.state.sshe1.att_5)
        }
      else { att5 = 0; }

  if(this.state.sshe1 && this.state.sshe1.att_6 !== undefined) {
        att6 = parseInt(this.state.sshe1.att_6)
        }
      else { att6 = 0; }

  if(this.state.sshe1 && this.state.sshe1.att_7 !== undefined) {
        att7 = parseInt(this.state.sshe1.att_7)
        }
  else { att7 = 0; }

  if(this.state.sshe1 && this.state.sshe1.att_8 !== undefined) {
    att8 = parseInt(this.state.sshe1.att_8)
    }
else { att8 = 0; }

if(this.state.sshe1 && this.state.sshe1.att_9 !== undefined) {
  att9 = parseInt(this.state.sshe1.att_9)
  }
else { att9 = 0; }

if(this.state.sshe1 && this.state.sshe1.att_10 !== undefined) {
  att10 = parseInt(this.state.sshe1.att_10)
  }
else { att10 = 0; }


  total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + + parseInt(att8) + parseInt(att9) + parseInt(att10);
  console.log('The Total: ' + total);

  let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5 ,  att_6: att6 , att_7: att7, att_8: att8, att_9: att9, att_10: att10 };
  let coreval = JSON.stringify(corearray);
  var d = new Date(2020,12,31)
  cookie.setItem(name,coreval,d)//for cookie
  this.setState({ sshe1: corearray });//for state

  alert("Safety SSHE Data has been saved... :-) ")
  }

  saveSshe2 = (e) => {
    let name = this.state.job_id + "#sshe#environment";

    let att1, att2 , att3 = 0;
    let total = 0;

    if(this.state.sshe2 && this.state.sshe2.att_1 !== undefined ) {
         att1 = parseInt(this.state.sshe2.att_1)
    }
       else { att1 = 0; }
    if(this.state.sshe2 && this.state.sshe2.att_2 !== undefined) {
         att2 = parseInt(this.state.sshe2.att_2)
    }
        else { att2 = 0; }
    if(this.state.sshe2 && this.state.sshe2.att_3 !== undefined) {
         att3 = parseInt(this.state.sshe2.att_3)
        }
    else { att3 = 0; }



    total = parseInt(att1) + parseInt(att2) + parseInt(att3);
    console.log('The Total: ' + total);

    let corearray = { att_1: att1, att_2: att2, att_3: att3 };
    let coreval = JSON.stringify(corearray);
    var d = new Date(2020,12,31)
    cookie.setItem(name,coreval,d)//for cookie
    this.setState({ sshe2: corearray });//for state

    alert("Safety Environment Data has been saved... :-) ")
    }

    saveSshe3 = (e) => {
      let name = this.state.job_id + "#sshe#health";

      let att1, att2 , att3, att4, att5, att6, att7, att8, att9, att10 , att11, att12, att13, att14, att15 = 0;
  let total = 0;

  if(this.state.sshe3 && this.state.sshe3.att_1 !== undefined ) {
       att1 = parseInt(this.state.sshe3.att_1)
  }
     else { att1 = 0; }

  if(this.state.sshe3 && this.state.sshe3.att_2 !== undefined) {
       att2 = parseInt(this.state.sshe3.att_2)
  }
      else { att2 = 0; }
  if(this.state.sshe3 && this.state.sshe3.att_3 !== undefined) {
       att3 = parseInt(this.state.sshe3.att_3)
      }
      else { att3 = 0; }
  if(this.state.sshe3 && this.state.sshe3.att_4 !== undefined) {
        att4 = parseInt(this.state.sshe3.att_4)
      }
      else { att4 = 0; }
  if(this.state.sshe3 && this.state.sshe3.att_5 !== undefined) {
        att5 = parseInt(this.state.sshe3.att_5)
        }
      else { att5 = 0; }

  if(this.state.sshe3 && this.state.sshe3.att_6 !== undefined) {
        att6 = parseInt(this.state.sshe3.att_6)
        }
      else { att6 = 0; }

  if(this.state.sshe3 && this.state.sshe3.att_7 !== undefined) {
        att7 = parseInt(this.state.sshe3.att_7)
        }
  else { att7 = 0; }

  if(this.state.sshe3 && this.state.sshe3.att_8 !== undefined) {
    att8 = parseInt(this.state.sshe3.att_8)
    }
else { att8 = 0; }

if(this.state.sshe3 && this.state.sshe3.att_9 !== undefined) {
  att9 = parseInt(this.state.sshe3.att_9)
  }
else { att9 = 0; }

if(this.state.sshe3 && this.state.sshe3.att_10 !== undefined) {
  att10 = parseInt(this.state.sshe3.att_10)
  }
else { att10 = 0; }

if(this.state.sshe3 && this.state.sshe3.att_11 !== undefined) {
  att11 = parseInt(this.state.sshe3.att_11)
  }
else { att11 = 0; }

if(this.state.sshe3 && this.state.sshe3.att_12 !== undefined) {
  att12 = parseInt(this.state.sshe3.att_12)
  }
else { att12 = 0; }

if(this.state.sshe3 && this.state.sshe3.att_13 !== undefined) {
  att13 = parseInt(this.state.sshe3.att_13)
  }
else { att13 = 0; }

if(this.state.sshe3 && this.state.sshe3.att_14 !== undefined) {
  att14 = parseInt(this.state.sshe3.att_14)
  }
else { att14 = 0; }

if(this.state.sshe3 && this.state.sshe3.att_15 !== undefined) {
  att15 = parseInt(this.state.sshe3.att_15)
  }
else { att15 = 0; }

      total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10) + parseInt(att11) + parseInt(att12) + parseInt(att13) + parseInt(att14) + parseInt(att15);
      console.log('The Total: ' + total);

      let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10,  att_11: att11,  att_12: att12,  att_13: att13,  att_14: att14,  att_15: att15 };
      let coreval = JSON.stringify(corearray);
      var d = new Date(2020,12,31)
      cookie.setItem(name,coreval,d)//for cookie
      this.setState({ sshe3: corearray });//for state

      alert("Safety Health Data has been saved... :-) ")
      }

      saveSshe4 = (e) => {
        let name = this.state.job_id + "#sshe#security";

        let att1, att2 , att3, att4, att5, att6, att7, att8, att9, att10 , att11, att12, att13, att14, att15 = 0;
    let total = 0;

    if(this.state.sshe4 && this.state.sshe4.att_1 !== undefined ) {
         att1 = parseInt(this.state.sshe4.att_1)
    }
       else { att1 = 0; }

    if(this.state.sshe4 && this.state.sshe4.att_2 !== undefined) {
         att2 = parseInt(this.state.sshe4.att_2)
    }
        else { att2 = 0; }
    if(this.state.sshe4 && this.state.sshe4.att_3 !== undefined) {
         att3 = parseInt(this.state.sshe4.att_3)
        }
        else { att3 = 0; }
    if(this.state.sshe4 && this.state.sshe4.att_4 !== undefined) {
          att4 = parseInt(this.state.sshe4.att_4)
        }
        else { att4 = 0; }
    if(this.state.sshe4 && this.state.sshe4.att_5 !== undefined) {
          att5 = parseInt(this.state.sshe4.att_5)
          }
        else { att5 = 0; }

    if(this.state.sshe4 && this.state.sshe4.att_6 !== undefined) {
          att6 = parseInt(this.state.sshe4.att_6)
          }
        else { att6 = 0; }

    if(this.state.sshe4 && this.state.sshe4.att_7 !== undefined) {
          att7 = parseInt(this.state.sshe4.att_7)
          }
    else { att7 = 0; }

    if(this.state.sshe4 && this.state.sshe4.att_8 !== undefined) {
      att8 = parseInt(this.state.sshe4.att_8)
      }
  else { att8 = 0; }

  if(this.state.sshe4 && this.state.sshe4.att_9 !== undefined) {
    att9 = parseInt(this.state.sshe4.att_9)
    }
  else { att9 = 0; }

  if(this.state.sshe4 && this.state.sshe4.att_10 !== undefined) {
    att10 = parseInt(this.state.sshe4.att_10)
    }
  else { att10 = 0; }

  if(this.state.sshe4 && this.state.sshe4.att_11 !== undefined) {
    att11 = parseInt(this.state.sshe4.att_11)
    }
  else { att11 = 0; }

  if(this.state.sshe4 && this.state.sshe4.att_12 !== undefined) {
    att12 = parseInt(this.state.sshe4.att_12)
    }
  else { att12 = 0; }

  if(this.state.sshe4 && this.state.sshe4.att_13 !== undefined) {
    att13 = parseInt(this.state.sshe4.att_13)
    }
  else { att13 = 0; }

  if(this.state.sshe4 && this.state.sshe4.att_14 !== undefined) {
    att14 = parseInt(this.state.sshe4.att_14)
    }
  else { att14 = 0; }

  if(this.state.sshe4 && this.state.sshe4.att_15 !== undefined) {
    att15 = parseInt(this.state.sshe4.att_15)
    }
  else { att15 = 0; }


        total = parseInt(att1) + parseInt(att2) + parseInt(att3) + parseInt(att4) + parseInt(att5) + parseInt(att6) + parseInt(att7) + parseInt(att8) + parseInt(att9) + parseInt(att10) + parseInt(att11) + parseInt(att12) + parseInt(att13) + parseInt(att14) + parseInt(att15);
        console.log('The Total: ' + total);

        let corearray = { att_1: att1, att_2: att2, att_3: att3, att_4: att4, att_5: att5, att_6: att6,  att_7: att7,  att_8: att8,  att_9: att9,  att_10: att10,  att_11: att11,  att_12: att12,  att_13: att13,  att_14: att14,  att_15: att15 };
        let coreval = JSON.stringify(corearray);
        var d = new Date(2020,12,31)
        cookie.setItem(name,coreval,d)//for cookie
        this.setState({ sshe4: corearray });//for state

        alert("Safety Security Data has been saved... :-) ")
        }
//end SSHE


render() {
  const {
   modalcore, modalcoree, modalcoreee, modalinst, modallearn1, modallearn2, modallearn3, modallearn4 , modallearn5,
   modaltotal1, modaltotal2, modaltotal3, modaltotal4,
   modalsus1, modalsus2, modalsus3, modalsus4, modalsus5, modalsus6, modalaca1, modalaca2, modalsshe1,  modalsshe2,  modalsshe3 ,  modalsshe4 ,
   loggedIn, loading,
   instjoblist, insttotalcoreatt, insttotalcorelsn, insttotalcoremne ,
   insttotalinstr,insttotallearn1,insttotallearn2,insttotallearn3,insttotallearn4,
   insttotaltotal1,insttotaltotal2,insttotaltotal3,insttotaltotal4,
   insttotalsus1,insttotalsus2,insttotalsus3,insttotalsus4,insttotalsus5,insttotalsus6,
   insttotalaca1, insttotalaca2,
   instjoblistvalues
  } = this.state;

  return (
  <Protected>
    <UserLayout>
      <Loader show={loading} message={'Please wait...'}>


    <div className="level">

    <div className={this.state.showothers ? 'level-right' : 'hidden'}>
    <div className="level-item has-text-centered">
        <div className="field">

         <p className="control">
          <a className="button is-link" onClick={(e) => { if (window.confirm('Are you sure you wish to Upload data to Server? \r It cannot be undone once it is done. ')) this.handleUploadtoServer(e) } } >
            Upload to Server
          </a>
       </p>

        </div>
    </div>
    </div>

    <div className="level-left">
    <div className="level-item has-text-centered">
        <div className="field">

          <label className="label">Choose Job</label>
          <div className="control">
            <div className="select is-large">
              <select onChange={e => this.handleSelect(e)}>
              <option value= "#">Choose...</option>

              { instjoblist && instjoblist.map( (link,i) =>
              <option key={i} value={link.J_ID}> {link.J_NAME} </option>
              )
              }

              </select>
            </div>
          </div>

          <p className={!this.state.showothers ? 'control' : 'hidden'} style={ { marginTop: '10px'  } } >
            <a className="button is-danger" onClick={e => this.refreshPage(e)}>
            Refresh page
            </a>
          </p>


        </div>
    </div>
    </div>

    <div className={this.state.showothers ? 'level-right' : 'hidden'}>
    <div className=" level-item ">
        <article className="message is-danger">
            <div className="message-header">
              <p>Information about JOB</p>

            </div>
            <div className="message-body">
            <p> <b>School: </b> {instjoblistvalues.length > 0 && instjoblistvalues[0].SCH_NAME}  </p>
            <p> <b>Surveyor Name: </b> {instjoblistvalues.length > 0 && instjoblistvalues[0].J_CONTACTNAME}  </p>
            <p> <b>Job Count: </b> {instjoblistvalues.length > 0 && instjoblistvalues[0].JOB_COUNT}  </p>
            </div>
        </article>
    </div>
    </div>
    </div>

    <div className="level" >
      <div className="column">
			<Col md={4}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Core Processes</h4>
          <p className="score"></p>
          <button className="button is-small is-warning"  onClick={e => this.handleCore(e)} > Edit Attendance  </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleCore2(e)} > Edit Lessonnote   </button>  &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleCore3(e)} > Edit M&E  </button>
        </div>
      </Col>

      <Col sm={4}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Instructor Resource</h4>
          <p className="score"></p>
          &nbsp;&nbsp;&nbsp; <button className="button is-small is-warning"  onClick={e => this.handleInst(e)} > Edit Instructor Resource  </button>
        </div>
      </Col>

			<Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Learning Environment</h4>
          <p className="score"></p>
          <button className="button is-small is-warning"  onClick={e => this.handleLearn1(e)} > Edit Classroom  </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleLearn2(e)} > Edit Laboratory  </button>  &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleLearn3(e)} > Edit Teaching Aids  </button>  &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-danger"  onClick={e => this.handleLearn4(e)} > Edit Outdoor  </button>  &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleLearn5(e)} > Edit Library  </button>  &nbsp;&nbsp;&nbsp;

        </div>
      </Col>

			<Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Student Development</h4>
          <p className="score"></p>
          <button className="button is-small is-warning"  onClick={e => this.handleTotal1(e)} > Edit Games & Sports </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleTotal2(e)} > Edit Other Competitions  </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleTotal3(e)} > Edit Socials  </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-danger"  onClick={e => this.handleTotal4(e)} > Edit Domain relationships </button> &nbsp;&nbsp;&nbsp;

        </div>
      </Col>

      <Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Sustainability</h4>
          <p className="score"></p>
          <button className="button is-small is-warning"  onClick={e => this.handleSus1(e)} > Edit Capacity Dev. (Academic)  </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleSus2(e)} > Edit Capacity Dev. (Non-Academic) </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleSus3(e)} > Edit Policy </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-danger"  onClick={e => this.handleSus4(e)} > Edit Records </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleSus5(e)} > Edit Technology </button> &nbsp;&nbsp;&nbsp; <br/>
          <button className="button is-small is-warning"  onClick={e => this.handleSus6(e)} > Edit Governance </button> &nbsp;&nbsp;&nbsp;

        </div>
      </Col>



      <Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>SSHE</h4>
          <p className="score"></p>
          <button className="button is-small is-warning"  onClick={e => this.handleSshe1(e)} > Edit Safety</button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleSshe2(e)} > Edit Environmental </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-success"  onClick={e => this.handleSshe3(e)} > Edit  Health </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-danger"  onClick={e => this.handleSshe4(e)} > Edit Security </button> &nbsp;&nbsp;&nbsp;

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
     <LearnLibraryModal active = {modallearn5} handleClose={this.handleClose} handleInputChange={this.handleInputChangeLearn5.bind(this)} saveform={this.saveLearn5.bind(this)} learnlibrary={this.state.learn5} />


     <TotalGamesModal active = {modaltotal1} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal1.bind(this)} saveform={this.saveTotal1.bind(this)} totalgames={this.state.student1} />
     <TotalOtherModal active = {modaltotal2} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal2.bind(this)} saveform={this.saveTotal2.bind(this)} totalother={this.state.student2} />
     <TotalSocialModal active = {modaltotal3} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal3.bind(this)} saveform={this.saveTotal3.bind(this)} totalsocials={this.state.student3} />
     <TotalDomainModal active = {modaltotal4} handleClose={this.handleClose} handleInputChange={this.handleInputChangeTotal4.bind(this)} saveform={this.saveTotal4.bind(this)} totaldomain={this.state.student4} />


     <SusAcademicModal active = {modalsus1} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus1.bind(this)} saveform={this.saveSustain1.bind(this)} sustain={this.state.sustain1} />
     <SusNonAcademicModal active = {modalsus2} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus2.bind(this)} saveform={this.saveSustain2.bind(this)} sustain={this.state.sustain2} />
     <SusPolicyModal active = {modalsus3} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus3.bind(this)} saveform={this.saveSustain3.bind(this)} sustain={this.state.sustain3} />
     <SusRecordModal active = {modalsus4} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus4.bind(this)} saveform={this.saveSustain4.bind(this)} sustain={this.state.sustain4} />
     <SusTechModal active = {modalsus5} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus5.bind(this)} saveform={this.saveSustain5.bind(this)} sustain={this.state.sustain5} />
     <SusGovernModal active = {modalsus6} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSus6.bind(this)} saveform={this.saveSustain6.bind(this)} sustain={this.state.sustain6} />


     <SsheSafetylModal active = {modalsshe1} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSshe1.bind(this)} saveform={this.saveSshe.bind(this)} safety={this.state.sshe1} />
     <SsheEnvironlModal active = {modalsshe2} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSshe2.bind(this)} saveform={this.saveSshe2.bind(this)} safety={this.state.sshe2} />
     <SsheHealthlModal active = {modalsshe3} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSshe3.bind(this)} saveform={this.saveSshe3.bind(this)} safety={this.state.sshe3} />
     <SsheSecuritylModal active = {modalsshe4} handleClose={this.handleClose} handleInputChange={this.handleInputChangeSshe4.bind(this)} saveform={this.saveSshe4.bind(this)} safety={this.state.sshe4} />

        </Loader>
    </UserLayout>
  </Protected>


  );
}
/**
      <Col sm={2}>
        <div className={this.state.showothers ? 'scorebox card' : 'hidden'}>
          <h4>Performance</h4>
          <p className="score"></p>
          <button className="button is-small is-warning"  onClick={e => this.handleAca1(e)} > Edit Internal Academic Performance </button> &nbsp;&nbsp;&nbsp;
          <button className="button is-small is-info"  onClick={e => this.handleAca2(e)} > Edit External Academic Performance </button> &nbsp;&nbsp;&nbsp;
        </div>
      </Col>
     <AcaInternalModal active = {modalaca1} handleClose={this.handleClose} handleInputChange={this.handleInputChangeAca1.bind(this)} saveform={this.saveAcademic.bind(this)} academic={this.state.academic1} />
     <AcaExternalModal active = {modalaca2} handleClose={this.handleClose} handleInputChange={this.handleInputChangeAca2.bind(this)} saveform={this.saveAcademic2.bind(this)} academic={this.state.academic2} />
 **/

}

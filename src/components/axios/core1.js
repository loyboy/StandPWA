import React from 'react';
import axios from 'axios'

export default class Core1Axios extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    axios.get('https://other.standbasis.com/upload.php', {
      params: {
        d1: this.props.d1,
        d2: this.props.d2,
        d3: this.props.d3,
        d4: this.props.d4,
        d5: this.props.d5,
        d6: this.props.d6,
        d7: this.props.d7,
        d8: this.props.d8,
        d9: this.props.d9,
        jobid: this.props.jobid
      },
      timeout: 5000
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
          alert("Success!!..All Data Uploaded successfully for Core Processes Attendance")

        }
    })
    .catch(function (error) {
      alert(error);
      console.log(error);
      this.setState({ loading: false });
    });
  }

}

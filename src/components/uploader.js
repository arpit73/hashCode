import React from 'react';
import axios from 'axios';

class Upload extends React.Component {
    state = { selectedFile: null };

    fileChangedHandler = event => {
        this.setState({ selectedFile: null });
    };

    uploadHandler = () => {
        const formData = new FormData();
        formData.append('myFile', this.state.selectedFile);
        axios.post('http://localhost:5000/', formData);
        console.log(this.state.selectedFile);
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.fileChangedHandler}
                    required
                />
                <a href="http://localhost:5000/pdf">
                    <button onClick={this.uploadHandler}>Upload!</button>
                </a>
            </div>
        );
    }
}

export default Upload;

// https://www.youtube.com/watch?v=97cXRWNMA3g

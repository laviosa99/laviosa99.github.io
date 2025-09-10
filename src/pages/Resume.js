import '../App.css';
import React from 'react'; 

function Resume() {
    return (
        <div className="MainContent">
            <h1>Resume</h1>
            <p>
                You can view and download my resume <a href="Lavanya_Bharani_MLE_DS.pdf" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            <embed src="Lavanya_Bharani_MLE_DS.pdf" type="application/pdf" width="90%" height="820px" />
        </div>
    );
}

export default Resume;
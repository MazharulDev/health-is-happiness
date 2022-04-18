import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container w-75 mt-5'>
            <h2 className='text-center mb-4'>Question and Answer</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Ans: Authentication and Authorization is totally Difference.
                        Authentication verifies who the user is but Authorization determines what resources a user can access.
                        Then Authentication is visible and changeable by the user as opposed to Authorization is not visible to or changeable by the user.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                    Ans: I'm using firebase beacuse Userbase can be collected and stored with Firebase. Later that user can be easily identified again. <br /> <br />

There are other ways besides password-based authentication as Multi-factor authentication,Biometric Authentication
, Certificate-based authentication,Cookie-Based authentication,Token-Based authentication etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                    Ans: There are many services which Firebase provides, Most useful of them are:
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                    etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;
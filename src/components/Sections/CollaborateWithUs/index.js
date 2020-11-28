import React from 'react';
import TextInput from '../../common/Input/TextInput';
import SelectInput from '../../common/Input/SelectInput';
import { Col, Row } from '../../grid';
import styles from './styles.module.css';
import bgImg from '../../../assets/detail02.png';
import Button from '../../common/Button';

const experienceOptions = [1, 2, 3, 4, 5].map(data => ({ value: data, label: `${data} years` }));

const sourceOptions = [
    { value: 'internet', label: 'Internet' },
    { value: 'friend', label: 'From a friend' },
    { value: 'travel_guide', label: 'Travel guide' },
];

const CollaborateWithUs = () => (
    <div id="contact-us" className="container-fluid pb-5" style={{ backgroundColor: '#ffdac9' }} >
        <Row className="pt-5">
            <Col size={['md-6', 'sm-12']}>
                <div className="text-left ml-5 pl-5" style={{ maxWidth: 250 }}>
                    <h4 className={`ml-5 ${styles.header} font-weight-bold mb-0`}> COLLABORATE</h4>
                    <h1 className={`ml-5 ${styles.header} font-weight-bold`}>WITH US</h1>
                    <hr className={styles.hr} />
                </div>
                <div className="mt-5 text-left ml-5 pl-5">
                    <p className="pl-5" style={{ maxWidth: 400 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <p className="pl-5" style={{ maxWidth: 400 }}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
            </Col>
            <Col size={['md-6', 'sm-12']}>
                <Row>
                    <Col size={['md-6', 'sm-12']}>
                        <img src={bgImg} alt="bg-img" className="float-right" />
                    </Col>
                    <Col size={['md-6', 'sm-12']}>
                    </Col>
                    <Col size={['md-6', 'sm-12']}>
                        <TextInput label="NAME" />
                    </Col>
                    <Col size={['md-6', 'sm-12']}>
                        <TextInput label="SURNAME" />
                    </Col>
                    <Col size={['md-6', 'sm-12']}>
                        <TextInput label="PHONE" />
                    </Col>
                    <Col size={['md-6', 'sm-12']}>
                        <TextInput label="EMAIL ADDRESS" />
                    </Col>
                    <Col size={['md-6', 'sm-12']}>
                        <SelectInput label="EXPERIENCE" options={experienceOptions} />
                    </Col>
                    <Col size={['md-6', 'sm-12']}>
                        <SelectInput label="WHERE DID YOU HEAR ABOUT US?" options={sourceOptions} />
                    </Col>
                    <Col className="pt-2 pr-5">
                        <Button label="SEND" type="dark" className="float-right" />
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
);

export default CollaborateWithUs;
const { Row, Col } = require("../grid");

const Footer = () => (
    <div style={{ backgroundColor: '#2d2c2b', color: '#ffdac9' }}>
        <Row className="p-5">
            <Col size={['sm-12', 'md-8']}>
                <Row>
                    <Col size={['sm-12', 'md-2']}>

                    </Col>
                    <Col size={['sm-12', 'md-2']}>
                        Section 1
                        <div style={{ fontSize: 12, fontWeight: 'normal', padding: 10 }}>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                        </div>

                    </Col>
                    <Col size={['sm-12', 'md-2']}>
                        Section 2
                        <div style={{ fontSize: 12, fontWeight: 'normal', padding: 10 }}>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                        </div>

                    </Col>
                    <Col size={['sm-12', 'md-2']}>
                        Section 3
                        <div style={{ fontSize: 12, fontWeight: 'normal', padding: 10 }}>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                        </div>
                    </Col>
                    <Col size={['sm-12', 'md-2']}>
                        Section 4
                        <div style={{ fontSize: 12, fontWeight: 'normal', padding: 10 }}>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                        </div>
                    </Col>
                    <Col size={['sm-12', 'md-2']}>
                        Section 5
                        <div style={{ fontSize: 12, fontWeight: 'normal', padding: 10 }}>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                            <p>Subsection</p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col size={['sm-12', 'md-4']} className="text-center">
                <div className="text-left ml-5 pl-5">
                    <h4> THIS IS THE</h4>
                    <h1>LOGO</h1>
                </div>

            </Col>
        </Row>
    </div>
);

export default Footer;
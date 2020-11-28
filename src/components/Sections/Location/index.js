import React from 'react';

const Location = () => (
    <div id="location" className="container-fluid">
        {/* To use snazzy maps, it needs Goodle maps JS API.
         Which in turn needs a billable google account with API key 
         Hence using plain google maps iframe */}
        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423056379!2d-0.12174238479990254!3d51.50330061882472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1606425956949!5m2!1sen!2sus"
            height="500" frameBorder="0" style={{ border: 0, width: '100%' }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
);

export default Location;
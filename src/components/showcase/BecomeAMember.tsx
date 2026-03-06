import React, { useState } from 'react';
import { membershipInfo } from '../../data';

const BecomeAMember: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [motivation, setMotivation] = useState('');

    const handleSubmit = () => {
        const subject = encodeURIComponent('Membership Application - ' + name);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMotivation:\n${motivation}`
        );
        window.location.href = `mailto:${membershipInfo.contactEmail}?subject=${subject}&body=${body}`;
    };

    const isValid = name.length > 0 && email.length > 0 && motivation.length > 0;

    return (
        <div className="site-page-content">
            <h1>{membershipInfo.title}</h1>
            <br />
            <div className="text-block">
                <p>{membershipInfo.description}</p>
            </div>
            <br />
            <h3>Benefits</h3>
            <br />
            <ul style={styles.list}>
                {membershipInfo.benefits.map((b, i) => (
                    <li key={i} style={styles.listItem}>{b}</li>
                ))}
            </ul>
            <br />
            <h3>Requirements</h3>
            <br />
            <ul style={styles.list}>
                {membershipInfo.requirements.map((r, i) => (
                    <li key={i} style={styles.listItem}>{r}</li>
                ))}
            </ul>
            <br />
            <h3>Apply Now</h3>
            <br />
            <div style={styles.form}>
                <label><p><b>Your Name:</b></p></label>
                <input
                    style={styles.formItem}
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label><p><b>Email:</b></p></label>
                <input
                    style={styles.formItem}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label><p><b>Why do you want to join?</b></p></label>
                <textarea
                    style={styles.formItem}
                    placeholder="Tell us about your motivation..."
                    value={motivation}
                    onChange={e => setMotivation(e.target.value)}
                />
                <button
                    className="site-button"
                    style={styles.button}
                    disabled={!isValid}
                    onMouseDown={handleSubmit}
                >
                    Send Application
                </button>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    list: {
        flexDirection: 'column',
        paddingLeft: 24,
    },
    listItem: {
        marginBottom: 8,
    },
    form: {
        flexDirection: 'column',
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
    },
    button: {
        minWidth: 184,
        height: 32,
        alignSelf: 'flex-start',
    },
};

export default BecomeAMember;

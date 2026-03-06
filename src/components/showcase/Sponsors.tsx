import React, { useState, useEffect, useRef } from 'react';
import { sponsors } from '../../data';
import check24Logo from '../../assets/pictures/check24.png';

const logoMap: Record<string, string> = {
    check24: check24Logo,
};

const VISIBLE = 4;
const SLIDE_WIDTH = 220;
const AUTO_INTERVAL = 3000;

const Sponsors: React.FC = () => {
    // Duplicate list for seamless infinite scroll
    const items = [...sponsors, ...sponsors, ...sponsors];
    const startOffset = sponsors.length;

    const [index, setIndex] = useState(startOffset);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sponsors.length <= 1) return;
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setIndex((prev) => prev + 1);
        }, AUTO_INTERVAL);
        return () => clearInterval(timer);
    }, []);

    // When transition ends, silently reset position if we've gone past bounds
    const handleTransitionEnd = () => {
        if (index >= startOffset + sponsors.length) {
            setIsTransitioning(false);
            setIndex(index - sponsors.length);
        } else if (index < startOffset) {
            setIsTransitioning(false);
            setIndex(index + sponsors.length);
        }
    };

    const translateX = -(index * SLIDE_WIDTH);

    return (
        <div className="site-page-content">
            <h1>Sponsors</h1>
            <h3>Our Supporters</h3>
            <br />
            <div className="text-block">
                <p>
                    We are grateful for the support of our sponsors who make our work possible.
                    Interested in sponsoring? Reach out to us!
                </p>
            </div>
            <br />
            <div style={styles.carouselWrapper}>
                <div style={styles.carouselViewport}>
                    <div
                        ref={trackRef}
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            ...styles.track,
                            transform: `translateX(${translateX}px)`,
                            transition: isTransitioning
                                ? 'transform 0.6s ease-in-out'
                                : 'none',
                        }}
                    >
                        {items.map((sponsor, i) => (
                            <a
                                key={`${sponsor.id}-${i}`}
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                                style={styles.sponsorLink}
                            >
                                <div style={styles.sponsorCard}>
                                    {sponsor.logo && logoMap[sponsor.logo] ? (
                                        <img
                                            src={logoMap[sponsor.logo]}
                                            alt={sponsor.name}
                                            style={styles.logoImage}
                                        />
                                    ) : (
                                        <p style={styles.sponsorName}>{sponsor.name}</p>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    carouselWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    carouselViewport: {
        width: VISIBLE * SLIDE_WIDTH,
        overflow: 'hidden',
    },
    track: {
        display: 'flex',
        flexDirection: 'row',
    },
    sponsorLink: {
        textDecoration: 'none',
        color: 'inherit',
        flexShrink: 0,
        width: SLIDE_WIDTH,
        justifyContent: 'center',
    },
    sponsorCard: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        height: 100,
        width: '100%',
    },
    logoImage: {
        maxWidth: 180,
        maxHeight: 80,
        objectFit: 'contain',
    },
    sponsorName: {
        fontSize: 20,
        fontFamily: 'MSSerif',
        textAlign: 'center',
    },
};

export default Sponsors;

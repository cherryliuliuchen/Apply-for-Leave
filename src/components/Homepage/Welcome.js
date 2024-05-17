import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-page container mt-5">
            <div className="text-wrap">
                <p className="text-muted">På EasyLeave förstår vi hur viktigt det är att balansera arbete och privatliv. Det är därför vi har utformat detta användarvänliga system för ledighetsansökningar för att göra ledighetsbegäran så smidig och enkel som möjligt. Oavsett om du planerar en semester, hanterar hälsoproblem eller behöver ta hand om akuta familjeärenden, är EasyLeave här för att hjälpa dig att hantera dina ledighetsförfrågningar med lätthet.</p>
            </div>
        </div>
    );
};

export default Welcome;

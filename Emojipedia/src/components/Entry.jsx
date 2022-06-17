import React from 'react';

function Entry(emoji) {
    return (
        
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label={emoji.name}>
                        {emoji.emoji}
                    </span>
                    <span>{emoji.name}</span>
                </dt>
                <dd>
                    {emoji.meaning}
                </dd>
            </div>
        
    );
}

export default Entry;
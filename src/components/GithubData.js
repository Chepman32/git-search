import React from "react";
const GithubData = props => (
    <div>
                {props.repositories &&
                <div className="githubDataWrapper">
                    {props.repositories.map(r => <p>{r.name}</p>)}
                </div>
                }
                <p className="error">{props.error}</p>
            </div>
)
export default GithubData;
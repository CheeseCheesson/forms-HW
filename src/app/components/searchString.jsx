/* eslint-disable */
import React from "react";
import _ from "lodash";


const SearchString = ({onChangeString, value}) => {

    return (
        <>
            <div className="input-group mb-3">
                <input
                    id="letter"
                    onChange={onChangeString}
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={value}
                />
            </div>
        </>
    );
};

export default SearchString;

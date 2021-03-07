import React from 'react'
import Box from './Box'
import {counter} from './../index'
import './Main.css'

const Main = () => {

        return (
            <div className="m-2">
                <div className="container-fluid text-white py-3">
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="d-inline-block me-3 my-1">
                            <Box icon={<i className="far fa-clock"></i>}/>
                        </div>
                        <div className="d-inline-block me-3 my-1">
                            <Box seconds={Math.floor(counter/100000) % 10} />
                        </div>
                        <div className="d-inline-block me-3 my-1">
                            <Box seconds={Math.floor(counter/10000) % 10} />
                        </div>
                        <div className="d-inline-block me-3 my-1">
                            <Box seconds={Math.floor(counter/1000) % 10} />
                        </div>
                        <div className="d-inline-block me-3 my-1">
                            <Box seconds={Math.floor(counter/100) % 10} />
                        </div>
                        <div className="d-inline-block me-3 my-1">
                            <Box seconds={Math.floor(counter/10) % 10} />
                        </div>
                        <div className="d-inline-block my-1">
                            <Box seconds={counter % 10} />
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Main

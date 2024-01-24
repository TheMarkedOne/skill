import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import temo from "./../../assets/images/temuriwiklauri.svg"
import eliso from "./../../assets/images/eliso.svg"
import arrow from "./../../assets/images/arrow.svg"

function Header() {
    return (
        <Pane display="flex" background="#29B66A" height="120px" width="100vw">
            <Pane width="100vw" >
                <Pane display="flex" flexDirection="row" justifyContent="space-around" width="100%" >

                    <Pane>
                        <Pane display="flex" flexDirection="row">
                            <Pane>
                                <img src={temo} alt="temo" />
                            </Pane>
                            <Pane display="flex" flexDirection="column" justifyContent="flex-end">
                                <Pane display="flex" flexDirection="row">
                                    <Pane color="#F7931E" fontSize="34px" fontWeight="700">G</Pane>
                                    <Pane color="#FFF" fontSize="34px" fontWeight="700">el</Pane>
                                    <Pane color="#F7931E" fontSize="34px" fontWeight="700">G</Pane>
                                    <Pane color="#FFF" fontSize="34px" fontWeight="700">uru</Pane>
                                </Pane>
                            </Pane>
                        </Pane>
                    </Pane>

                    <Pane display="flex" flexDirection="column" justifyContent="flex-end">
                        <Pane display="flex" flexDirection="row" gap={majorScale(3)} >
                            <Pane color="#fff" fontSize="16px">Income & Expenses</Pane>
                            <Pane color="#fff" fontSize="16px">Goals</Pane>
                        </Pane>
                    </Pane>

                    <Pane display="flex" flexDirection="column" justifyContent="flex-end" >
                        <Pane display="flex" flexDirection="row" gap={majorScale(2)}>
                            <Pane display="flex" flexDirection='column' justifyContent="center" color="#fff" fontSize="16px" fontWeight="700" >Hello, Julie</Pane>
                            {/* make down arrow for profile pic to the right bottom corner */}
                            <Pane position="relative" width="40px" height="40px">
                                <img src={eliso} alt="eliso" />
                                <Pane display='flex' position="absolute" bottom="0" right="0" width="14px" height="14px" background='#fff' borderRadius="50%">
                                    <img src={arrow}></img>
                                </Pane>
                            </Pane>
                        </Pane>
                        <Pane display="flex" flexDirection="row" justifyContent="flex-end" color="#fff" fontSize="10px" fontWeight="400">View Profile</Pane>
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Header
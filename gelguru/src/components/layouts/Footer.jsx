import { Pane, majorScale } from 'evergreen-ui'
import React from 'react'
import temo from "./../../assets/images/temuriwiklauri.svg"

function Footer() {
  return (
    <Pane display="flex" background="#29B66A" height="200px" width="100vw">

        <Pane>
            <Pane display="flex" flexDirection="column" position="relative"  height="100%" justifyContent="space-around">
                <Pane width="100vw" display="flex" marginTop={majorScale(3)} flexDirection="row" justifyContent="center">
                    <Pane width="50%" display="flex" flexDirection="row" justifyContent="space-evenly" >
                        <Pane color="#fff" fontSize="14px">How It Works</Pane>
                        <Pane color="#fff" fontSize="14px">Safety & Confidentiality</Pane>
                        <Pane color="#fff" fontSize="14px">Contact</Pane>
                    </Pane>
                </Pane>

                <Pane display="flex" height="100%" marginBottom={majorScale(3)} alignItems="end" justifyContent="center" color="#fff">© SkillTeam. All Rights Reserved.</Pane>

                <Pane position="absolute">
                    <Pane marginLeft={majorScale(10)}>
                      <Pane  display="flex" flexDirection="column">
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
                </Pane>
            </Pane>
        </Pane>

    </Pane> 
  )
}

export default Footer
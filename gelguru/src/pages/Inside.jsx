import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './../components/layouts/Footer.jsx'
import Header from './../components/layouts/Header.jsx'
import { Button, Pane, TextInput, majorScale } from 'evergreen-ui'
import card from './../assets/images/credit_card.svg'
import addCircle from './../assets/images/add_circle.svg'
import bedroomParent from './../assets/images/bedroom_parent.svg'
import shoppingCart from './../assets/images/shopping_cart.svg'
import vector1 from './../assets/images/Vector (1).svg'
import vector2 from './../assets/images/Vector (2).svg'
import vector3 from './../assets/images/Vector (3).svg'
import vector from './../assets/images/Vector.svg'
import steppers from './../assets/images/steppers.svg'
import restart from './../assets/images/restart_alt.svg'
import localHospital from './../assets/images/local_hospital.svg'
import emoji from './../assets/images/emoji_objects.svg'
import { AgChartsReact } from 'ag-charts-react';


function Inside() {


  const ChartExample = () => {
    const options = {
      data: [
        { asset: '', amount: 1000 },
        { asset: '', amount: 500 },
        { asset: '', amount: 200 },
        { asset: '', amount: 100 },
        { asset: '', amount: 50 },
      ],
      series: [
        {
          type: 'pie',
          calloutLabelKey: 'asset',
          angleKey: 'amount',
          innerRadiusRatio: 0.5,
          title: {
            text: 'Current Year',
            showInLegend: true,
            enabled: false,
          },
          label: {
            enabled: false,
          },
          stroke: {
            width: 0,
          },
          fills: ['#29B66A', '#D45050', '#E4AA67', '#6848BE', '#C1BCFF'],
          tooltip: {
            enabled: false,
          },
        },
      ],
      width: 300,
      height: 300,
    };

    return <AgChartsReact options={options} />;
  }



  return (
    <Pane display="flex" flexDirection="column" justifyContent="space-between" height="100vh">

      <Header />

      <Pane padding={majorScale(3)} height="100vh" overflowY="scroll" >
          <Pane display="flex" flexDirection="column">
              {/* section 1 */}
                <Pane marginX={majorScale(5)} marginY="55px">
                    <Pane display="flex" flexDirection="row" height="48px" justifyContent="space-between">

                        <Pane display='flex' flexDirection="row"  alignItems="center" justifyContent="space-around" width="209px">
                            <Pane display="flex" alignItems="center" borderRadius="4px" justifyContent="center" width="48px" height="100%" border="1px solid #BEBEBE">&lt;</Pane>
                            <Pane paddingY="13px" borderBottom="1px solid #F7931E">Categories</Pane>
                        </Pane>

                        <Pane display="flex" gap={majorScale(2)} flexDirection="row" textAlign="center" alignItems='center'>
                            <Pane>
                              Balance:
                            </Pane>

                            <Pane color="#29B66A" fontSize="30px" fontWeight="700">
                              + GEL 500
                            </Pane>
                        </Pane>

                        <Pane display='flex' flexDirection="row"  alignItems="center" justifyContent="space-around" width="209px">
                            <Pane paddingY="13px">Compare</Pane>
                            <Pane color="#fff" background='#29B66A' display="flex" alignItems="center" borderRadius="4px" justifyContent="center" width="48px" height="100%" border="1px solid #BEBEBE">&gt;</Pane>
                        </Pane>
                    </Pane>
                </Pane>

              {/* section 2 */}
                <Pane  height="23px" display="flex" flexDirection="row" justifyContent="space-around">
                    <Pane>Income</Pane>

                    <Pane display="flex" flexDirection="row" gap={majorScale(1)}>
                        <Pane>Enter data for</Pane>
                        <Pane color="#fff" borderRadius="4px" background='#1400FF73' paddingX={majorScale(1)}>Today</Pane>
                    </Pane>

                    <Pane display="flex" flexDirection="row" gap={majorScale(3)}>
                        <Pane>View previous data</Pane>
                        <Pane color="#939393">This Week</Pane>
                        <Pane color="#939393">This Month</Pane>
                        <Pane color="#939393">This Year</Pane>
                    </Pane>

                    <Pane>Expenses</Pane>
                </Pane>

              {/* section 3 */}
                <Pane paddingTop={majorScale(6)} display="flex"justifyContent="space-around" >
                  
                    <Pane display="flex" flexDirection="row"  gap={majorScale(5)} justifyContent="space-around">
                        {/* first chart */}
                        <Pane>
                          <ChartExample />
                        </Pane>

                        {/* inputs */}
                        <Pane  width="292px" height="30px">
                            <Pane display="flex" flexDirection="column" gap={majorScale(2)}>

                                  <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                      <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                        
                                          <Pane width="30px" height="30px" background='#29B66A' display="flex" borderRadius="50%">
                                              <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                  <img src={card}></img>
                                              </Pane>
                                          </Pane>

                                          <Pane textAlign="center" alignItems="center" height="100%">Salary</Pane>

                                      </Pane>
                                      <Pane display="flex" flexDirection="row">
                                          <Pane>
                                              <TextInput placeholder='GEL' width="75px" />
                                          </Pane>
                                      </Pane>
                                  </Pane>

                                  <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                      <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                        
                                          <Pane width="30px" height="30px" background='#D45050' display="flex" borderRadius="50%">
                                              <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                  <img src={vector}></img>
                                              </Pane>
                                          </Pane>

                                          <Pane textAlign="center" alignItems="center" height="100%">Income from business</Pane>

                                      </Pane>
                                      <Pane display="flex" flexDirection="row">
                                          <Pane>
                                              <TextInput placeholder='GEL' width="75px" />
                                          </Pane>
                                      </Pane>
                                  </Pane>

                                  <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                      <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                        
                                          <Pane width="30px" height="30px" background='#C1BCFF' display="flex" borderRadius="50%">
                                              <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                  <img src={bedroomParent}></img>
                                              </Pane>
                                          </Pane>

                                          <Pane textAlign="center" alignItems="center" height="100%">Rent income</Pane>

                                      </Pane>
                                      <Pane display="flex" flexDirection="row">
                                          <Pane>
                                              <TextInput placeholder='GEL' width="75px" />
                                          </Pane>
                                      </Pane>
                                  </Pane>

                                  <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                      <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                        
                                          <Pane width="30px" height="30px" background='#6848BE' display="flex" borderRadius="50%">
                                              <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                  <img src={vector1}></img>
                                              </Pane>
                                          </Pane>

                                          <Pane textAlign="center" alignItems="center" height="100%">Remittances</Pane>

                                      </Pane>
                                      <Pane display="flex" flexDirection="row">
                                          <Pane>
                                              <TextInput placeholder='GEL' width="75px" />
                                          </Pane>
                                      </Pane>
                                  </Pane>
                                  
                                  <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                      <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                        
                                          <Pane width="30px" height="30px" background='#B3B3B3' display="flex" borderRadius="50%">
                                              <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                  <img src={steppers}></img>
                                              </Pane>
                                          </Pane>

                                          <Pane textAlign="center" alignItems="center" height="100%">Other</Pane>

                                      </Pane>
                                      <Pane display="flex" flexDirection="row">
                                          <Pane>
                                              <TextInput placeholder='GEL' width="75px" />
                                          </Pane>
                                      </Pane>
                                  </Pane>

                            </Pane>
                        </Pane>

                        {/* second chart */}

                        <Pane>
                            <ChartExample />
                        </Pane>
                        
                        {/* inputs */}
                        <Pane  width="292px" height="30px">
                            <Pane display="flex" flexDirection="column" gap={majorScale(2)}>
                              <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                          
                                            <Pane width="30px" height="30px" background='#E4AA67' display="flex" borderRadius="50%">
                                                <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                    <img src={emoji}></img>
                                                </Pane>
                                            </Pane>

                                            <Pane textAlign="center" alignItems="center" height="100%">Utilities</Pane>

                                        </Pane>
                                        <Pane display="flex" flexDirection="row">
                                            <Pane>
                                                <TextInput placeholder='GEL' width="75px" />
                                            </Pane>
                                        </Pane>
                                    </Pane>

                                    <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                          
                                            <Pane width="30px" height="30px" background='#5B52B7' display="flex" borderRadius="50%">
                                                <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                    <img src={shoppingCart}></img>
                                                </Pane>
                                            </Pane>

                                            <Pane textAlign="center" alignItems="center" height="100%">Groceries/shopping</Pane>

                                        </Pane>
                                        <Pane display="flex" flexDirection="row">
                                            <Pane>
                                                <TextInput placeholder='GEL' width="75px" />
                                            </Pane>
                                        </Pane>
                                    </Pane>

                                    <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                          
                                            <Pane width="30px" height="30px" background='#8B83EB' display="flex" borderRadius="50%">
                                                <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                    <img src={vector2}></img>
                                                </Pane>
                                            </Pane>

                                            <Pane textAlign="center" alignItems="center" height="100%">Transportation</Pane>

                                        </Pane>
                                        <Pane display="flex" flexDirection="row">
                                            <Pane>
                                                <TextInput placeholder='GEL' width="75px" />
                                            </Pane>
                                        </Pane>
                                    </Pane>

                                    <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                          
                                            <Pane width="30px" height="30px" background='#D45050' display="flex" borderRadius="50%">
                                                <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                    <img src={vector3}></img>
                                                </Pane>
                                            </Pane>

                                            <Pane textAlign="center" alignItems="center" height="100%">Cafe,restaurant</Pane>

                                        </Pane>
                                        <Pane display="flex" flexDirection="row">
                                            <Pane>
                                                <TextInput placeholder='GEL' width="75px" />
                                            </Pane>
                                        </Pane>
                                    </Pane>
                                    
                                    <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                          
                                            <Pane width="30px" height="30px" background='#29B66A' display="flex" borderRadius="50%">
                                                <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                    <img src={localHospital}></img>
                                                </Pane>
                                            </Pane>

                                            <Pane textAlign="center" alignItems="center" height="100%">Health</Pane>

                                        </Pane>
                                        <Pane display="flex" flexDirection="row">
                                            <Pane>
                                                <TextInput placeholder='GEL' width="75px" />
                                            </Pane>
                                        </Pane>
                                    </Pane>

                                    <Pane display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                        <Pane display="flex" gap={majorScale(1)} flexDirection="row" >
                                          
                                            <Pane width="30px" height="30px" background='#B3B3B3' display="flex" borderRadius="50%">
                                                <Pane height="100%" width="100%" color="#fff" display="flex" justifyContent="center" alignItems="center">
                                                    <img src={steppers}></img>
                                                </Pane>
                                            </Pane>

                                            <Pane textAlign="center" alignItems="center" height="100%">Other</Pane>

                                        </Pane>
                                        <Pane display="flex" flexDirection="row">
                                            <Pane>
                                                <TextInput placeholder='GEL' width="75px" />
                                            </Pane>
                                        </Pane>
                                    </Pane>

                              </Pane>
                        </Pane>
                        {/* end of inputs */}

                    </Pane>

                </Pane>
              {/* end of section 3 */}

              {/* section 4 */}

                <Pane paddingTop={majorScale(5)}>

                    <Pane display='flex' justifyContent="center" flexDirection="row" height="40px" position="relative">
                        <Pane display="flex" >
                            <Button width="100px" background="#fff" border="1px solid #757575" borderRadius="4px" iconBefore="chevron-left">Save</Button>
                        </Pane>
                        <Pane gap={majorScale(1)} alignItems="center" display='flex' flexDirection="row" position="absolute" right="0" top="50%" transform="translate(-50%, -50%)">
                            <Pane color='#000' fontSize="12px">Made a mistake? Click here to edit data. </Pane>
                            <Pane>
                                <Button background="#ED1C24"><img src={restart}></img></Button>
                            </Pane>
                        </Pane>
                    </Pane>

                </Pane>

              {/* end of section 4 */}

              {/* section 5 */}

                <Pane marginX={majorScale(5)} paddingTop={majorScale(5)}>
                  
                    <Pane display="flex" flexDirection="column" gap={majorScale(5)}>
                          <Pane display="flex" flexDirection="row" justifyContent="space-between">
                                <Pane color="#121212" fontSize="20px" fontWeight="700">Financial goals</Pane>
                                <Pane display="flex" flexDirection="row" gap={majorScale(2)}>
                                    <Pane color="#2FAF3C" fontSize="18px" fontWeight="400">Add goal</Pane>
                                    <Pane>
                                        <img src={addCircle}></img>
                                    </Pane>
                                </Pane>
                          </Pane>

                          <Pane borderRadius="4px" border="1px solid #757575" display="flex" flexDirection="row" height="150px">
                              <Pane width="33%" borderRight="1px solid">
                                  <Pane width="100%" height="100%" padding={majorScale(3)} >
                                      <Pane textAlign="center" display="flex" flexDirection="column" height="100%" width="100%" border="1px dashed #757575" borderRadius="4px" >
                                          <Pane color="#757575" marginY={majorScale(2)}>
                                              Write a brief description of your financial goal
                                          </Pane>
                                      </Pane>
                                  </Pane>
                              </Pane>
                              <Pane padding={majorScale(3)} display="flex" flexDirection="column" width="66%" justifyContent="space-around">
                                  <Pane color="#757575" display="flex" flexDirection="row" justifyContent="space-between">
                                      <Pane>Write the name of goal</Pane>
                                      <Pane>Indicate total amount needed </Pane>
                                      <Pane>Indicate deadline</Pane>
                                  </Pane>
                                  <Pane display="flex" flexDirection="column" gap={majorScale(1)}>
                                      <Pane>
                                          <Pane fontWeight="100" textAlign="center" color="#fff" width="27px" height="22px" borderRadius="4px" background='#AFAFAF'>%</Pane>
                                      </Pane>
                                      <Pane display="flex" flexDirection="row">
                                        <Pane borderRadius="6px" width="50px" borderBottom='2px solid #929292'></Pane>
                                        <Pane borderRadius="6px" width="100%" borderBottom='2px solid #D9D9D9'></Pane>
                                      </Pane>
                                  </Pane>
                                  <Pane color="#757575" display="flex" flexDirection="row" justifyContent="space-between">
                                      <Pane>Indicate amount saved</Pane>
                                      <Pane>Indicate remaining amount</Pane>
                                  </Pane>
                              </Pane>
                          </Pane>
                    </Pane>
                
                </Pane>
              {/* end of section 5 */}

              {/* section 6 */}
                <Pane color="#757575" paddingBottom={majorScale(5)} marginX={majorScale(5)} paddingTop={majorScale(5)} display="flex" flexDirection="row" >
                    <Pane marginLeft={majorScale(3)}>
                      Click into the fields and type
                    </Pane>
                </Pane>

          </Pane>
      </Pane>

      <Footer />

    </Pane>
  )
}

export default Inside
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "./userSettings.css"

function UserSettings() {

    return (
        <div className='containerSettings'>

            <div>
                <div>
                    <FontAwesomeIcon icon={faTruckFast} size="3x" className='svgSettings' />
                </div>
                <h4>Orders</h4>
                <p>Track, return or re-purchase items</p>
            </div>

            <div>
                <div>
                    <FontAwesomeIcon icon={faGear} size="3x" className='svgSettings' />
                </div>
                <h4>Access and Security settings</h4>
                <p>Change login, name and mobile number</p>
            </div>

            <div>
                <div>
                    <FontAwesomeIcon icon={faStar} size="3x"
                        className='svgSettings'
                    />
                </div>
                <h4>Premium</h4>
                <p>View benefits and payment settings</p>
            </div>


            <div>
                <div>
                    <FontAwesomeIcon icon={faHouseUser} size="3x"
                        className='svgSettings'
                    />
                </div>
                <h4>Addresses</h4>
                <p>Change addresses and delivery preferences for orders and gifts</p>
            </div>

            <div>
                <div>
                    <FontAwesomeIcon icon={faCreditCard} size="3x"
                        className='svgSettings'
                    />
                </div>
                <h4>My payments</h4>
                <p>View all transactions, manage settings and payment methods</p>
            </div>

            <div>
                <div>
                    <FontAwesomeIcon icon={faHeadphones} size="3x"
                    className='svgSettings'
                    
                    />
                </div>
                <h4>Contact us</h4>
                <p>Contact our customer service via Phone, Chat or Email</p>
            </div>

        </div>


    )
}

export default UserSettings
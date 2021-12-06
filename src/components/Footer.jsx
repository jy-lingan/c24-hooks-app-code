import React from 'react'
import { DiGithub } from 'react-icons/di'
import { GrInstagram, GrTwitter, GrFacebook } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className="font-small pt-4 mt-4">
            <div fluid className="text-center text-md-left">
                <div md="6">
                    <ul>
                        <a
                            href="https://github.com/"
                            target="_blank"
                        >
                            <DiGithub size={35} style={{ color: "black" }} /></a>
                        <span>&nbsp;</span>


                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                        >
                            <GrInstagram size={25} style={{ color: "#E1306C" }} /></a>
                        <span>&nbsp;</span>


                        <a
                            href="https://twitter.com/"
                            target="_blank"
                        >
                            <GrTwitter size={25} style={{ color: "#00acee" }} /></a>
                        <span>&nbsp;</span>


                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                        >
                            <GrFacebook size={25} style={{ color: "blue" }} /></a>
                        <span>&nbsp;</span>
                    </ul>
                    <div className="footer-copyright text-center py-3">
                        <div fluid>
                            &copy; Copyright: <a href="#"> JimDev 2022 </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import langLink from "./langLink"
import Img1 from '../images/编组 74复制 3@2x.png'
import Img2 from '../images/形状 2@2x.png'


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerNav">
          <div className="logo" onClick={() => { this.props.history.push('/app/home')}}><img src={Img1} /></div>
          <div className="nav">
            <div>
              <Link>vision</Link>
              <Link>association</Link>
              <Link to="/app/partners">partners</Link>
            </div>
            <div>
              <a href="https://testnet.violas.io/app/Violas" target="_blank">blockchain explorer</a>
              <Link>media</Link>
              <Link>developers</Link>
            </div>
            <div>
              <Link>white paper</Link>
            </div>
          </div>
        </div>
        <div className="email">
          <p>Copyright©2019Violas</p>
          {/* <p>{intl.get('footer.Connect Us')}</p> */}
          <p><img src={Img2} />violas.team@violas.io</p>
          <p>
          <span>日本语</span>
          <span>日本语</span>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer

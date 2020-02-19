import React,{Component} from 'react';
import Footer from '../components/footer';
import BScroll from 'better-scroll';
import axios from 'axios';
import './style/whitePaper.scss';

class WhitePaper extends Component{
  constructor(props){
     super(props)
     this.state = {
      localCity: {},
      historyCity: [],
      hotCity: [],
      cityList: [],
      listHeight: [],
      scrollY: 0,
      leftBscroll:null,
      rightBscroll:null,
      headList:['1 Sharing','2 Concerns','3 Introducing','4 Blockchain','5 Wallet','6 currencies',
        '7 Association','8 Involved','9 Conclusion']
     }
  }
  componentDidMount(){
      if (!this.state.rightBscroll) {
        this.setState({
          leftBscroll:new BScroll('.wrapHead', {
                    click: true, // 配置允许点击事件
                    scrollY: true, // 可以开启纵向滚动
                    probeType: 3, // 开启滚动监听
                    bounce: false // 关闭弹性效果
                  }),
          rightBscroll:new BScroll('.local', {
            click: true, // 配置允许点击事件
            scrollY: true, // 可以开启纵向滚动
            probeType: 3, // 开启滚动监听
            bounce: false // 关闭弹性效果
          })
        })
        // console.log('qqq')
        window.addEventListener("scroll", () => {
          this.setState({
            scrollY:window.scrollY
          }) 
        });
        // this.refs.body.on('scroll',(e) => {
        //   this.state.scrollY = Math.abs(Math.round(pos.y))
        // })
      } else {
        // this.state.rightBscroll.refresh() // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
      }
  }
  // Letter () {
  //   let arr = [];
  //   for (let key in this.state.cityList) {
  //     arr.push(key)
  //   }
  //   return arr
  // }

  // getCity () {
  //   // var that = this
  //   axios.get('/api/whitePaper.json').then( (res) => {
  //     this.setState({
  //         localCity:res.data.data.locationCity,
  //         historyCity:res.data.data.historyCity,
  //         hotCity:res.data.data.hotCity,
  //         cityList:res.data.data.cityList
  //     })
  //       this.initScroll()
  //       this.calculateHeight()
  //     // this.$set(() => {

  //     // })
  //   })
    
  // }
  // initScroll () {
  //   // this.$nextTick(() => {
 
  //   // })
  // }

  // calculateHeight = () => {
  //   let flagList = this.refs.body.querySelectorAll('.flag')
  //   let height = 0
  //   this.state.listHeight.push(height)
  //   for (let i = 0; i < flagList.length; i++) {
  //     let item = flagList[i]
  //     height += item.clientHeight
  //     this.state.listHeight.push(height)
  //   }
  //   this.setState({
  //     listHeight:this.state.listHeight
  //   })
  //   // this.currentIndex(this.state.listHeight)
  // }
  // currentIndex () {
    
  //   if(this.state.listHeight){
  //     for (let i = 0; i < this.state.listHeight.length; i++) {
  //       let height1 = this.state.listHeight[i]
        
  //       let height2 = this.state.listHeight[i + 1]
  //       if (!height2 || (this.state.scrollY >= height1 && this.state.scrollY < height2)) {
  //         console.log(i)
  //         return i
  //       }
  //     }
  //     return 0
  //   }
    
  // }
  headScroll = (e) => {
    console.log('111')
    console.log(document.documentElement.scrollTop)
    // this.refs.bodyBox.scrollTop;
  }
  selectMenu = (index) => {
    let flagList = this.refs.body.querySelectorAll('.introduction')
    console.log(flagList)
    let el = flagList[index]
    console.log(el)
    this.state.leftBscroll.scrollTo(el, 300)
  }
  addClass(){
    let pos;
    if(this.state.scrollY > 780){
      pos = 'pos wrapHead'
    }else if(this.state.scrollY > 10478){
      pos = 'post wrapHead'
    }else{
      pos = 'wrapHead'
    }
    return pos;
    
  }
   render(){
    return (
      // <div></div>
        <div className="whitePaper">
          <header className="header">
          <div className="head">
            <div className="logo">
              <a href="index.html"><img src="/img/编组 252@2x.png" /></a>
            </div>
            <ul className="navList">
              <li>Vision</li>
              <li>Association</li>
              <li>Partners</li>
              <li>Blockchain Explorer</li>
              <li>Media</li>
              <li>Developers</li>
            </ul>
            <div className="descr">
              <span id="whitePaper" onClick={()=>{
                this.props.history.push('/whiteParper-en')
              }}>White Paper</span>
              <a>日本語</a>
              <a>한국어</a>
            </div>
            </div>
        </header>
        <section>
          <div className="headTalk">
            <div className="bg1"><img src="/img/矩形 3@2x.png"/></div>
            <div className="content">
               <h3>Violas White Paper</h3>
               <p>Violas' mission is to build a global financial ecosystem that allows governments and organizations to create their own stablecoins backed by their local fiat currency. This ecosystem will exist on top of Libra technology, allowing it to reach billions of people for use in daily transactions as well as supporting exchange among all digital currencies.
Our goal is to enable a world where there is not merely one global digital currency, but one where each fiat currency can have its own digital version pegged to it at a 1:1 ratio. We believe that the future will be a world of digitized fiat currencies and that blockchain technology and Libra’s codebase are the most efficient enablers to solve the many financial inadequacies the world faces in regards to payments and banking.</p>
<span>滚动阅读</span>
            </div>
            <div className="bg2"><img src="/img/矩形复制 44@2x.png"/></div>
          </div> 
          <div className="wrapper">
             <div className={this.addClass()}>
             {/* className={this.state.scrollY > 780 ? 'pos wrapHead' : 'wrapHead'} */}
                <ul class="toHeadings">
                  {
                    this.state.headList.map((item,ind)=>{
                      return <li key={ind} onClick={()=>this.selectMenu(ind)}>{item}</li>
                    })
                  }
                </ul>
             </div>   
          <div className={this.state.scrollY > 780 ? 'poss local' : 'local'} ref='body' onScroll={()=>this.handScroll()}>
                <div>           
                  <div className="introduction introduction1">
                      <h4>Part 1</h4>
                      <div class="state">
                        <h2>1.Sharing the Original Vision of Libra</h2>
                        <h3> 1.1 The Burden of the Current Banking System</h3>
                        <p>
                          The cost of opening and maintaining a bank account has rapidly increased due to expanding
                          regulations and declining bank profit margins, in large part due to the rise in mobile
                          applications that enable alternative payments systems to traditional banking. Consequently, the
                          banking industry has aggressively shifted their cost of doing business to their customers as
                          illustrated in the Libra White Paper.
                        </p>
                        <h3>1.2 "Unbanked" People</h3>
                        <p>
                          At the same time, there are still billions of people in developing countries that do not have
                          access to their local banking system despite having access to mobile phones. This situation is
                          similar to the landline phone system that was the standard before the invention of mobile
                          phones. In these developing countries, many people skipped the landline phone system and went
                          directly to mobile phones. This bypassing of legacy technology is set to happen again. This
                          time, people in developing nations will skip the traditional banking system in favor of a
                          blockchain based payment system using the mobile internet.
                        </p>
                        <h3>1.3 The Blockchain and Digital Currency Solution</h3>
                        <p> As the mobile phone system becomes more widespread than the local banking system, mobile
                          applications built on top of blockchain based payment systems will provide better and more
                          efficient banking services than the traditional banking system. Mobile phone applications are
                          already used for payments of everyday services such as transportation/ride-sharing, grocery
                          delivery, micro loans, etc. In line with the convenience and efficiency of mobile payments,
                          blockchain technology provides the necessary safety, security, transparency and real-time
                          transaction speed to support and improve these everyday transactions.</p>
                      </div>
                    </div>
                  <div className="introduction introduction2">
                      <h4>Part 2</h4>
                      <div class="intro">
                        <h2>2. The Concerns and Challenges of Libra</h2>
                        <p>
                          Libra is an important project with wide-ranging global potential. As a single global currency
                          and financial, it is no doubt attracting criticism, concern, and challenge. This reaction is to
                          be expected as the project aims to create a new global currency and financial infrastructure
                          meant to disrupt the existing financial establishment.
                        </p>
                      </div>
                      <div class="state">
                        <h3> 2.1 The Concerns of Libra</h3>
                        <p>The primary concern regarding the Libra project is the involvement of Facebook- the largest
                          social media company in the world. Facebook’s reputation as a trusted entity has shifted over
                          the years. Only recently, Facebook incurred a $5 billion fine for abusing their user data.
                          Another concern regarding Libra is its backing by the US Dollar. This could enable the USD’s
                          dominance to extend even further than the current system, especially when considering that the
                          US government uses dollar-based banking systems to enforce US government sanctions against other
                          countries. Of course, on the other side, the US government may be concerned that Libra will
                          weaken the current dominance of the US dollar. This determination of Libra’s effect on the US
                          dollar remains unknown for now. </p>
                        <h3> 2.2 The Challenges to Libra</h3>
                        <p>As a single global currency and financial infrastructure, gaining approval from each local
                          regulator, and satisfying local government regulations and laws, will be required. This may be a
                          difficult and time consuming process. Libra will be backed through a basket of selected fiat
                          currencies or securities. The currencies will be selected based on their stability. The
                          countries whose local fiat currency are not included in the basket therefore cannot use Libra.
                          This is seemingly antithetical to Libra's mission statement which aims to target developing
                          countries; however, the currency in developing countries tends to be the most unstable. There is
                          no easy solution to this contradiction. Another issue that will need resolution is how Libra
                          will peg its price with the basket of selected fiat currencies as the weight of each currency
                          can change daily.</p>
                      </div>
                    </div>
                  
                  <div className="introduction introduction3">
                        <h4>Part 3</h4>
                        <div class="intro">
                          <h2>3. Introducing Violas</h2>
                          <p>The idea for Violas originated from two influences. First, our vision expressed in, “BitTribe:
                            A Peer-to-Peer Monetary System” (http://bittribe.io/) that was released to celebrate the tenth
                            anniversary of the Bitcoin white paper, “Bitcoin: A Peer-to-Peer Electronic Cash System”.
                            Secondly, Violas was influenced by the original vision of Libra, however, we address our
                            concerns and the challenges of Libra above with a totally different approach. Violas is NOT a
                            global currency nor does it issue any currency by itself. Violas is an ecosystem to issue local
                            digital currencies and local financial applications to adapt blockchain technology thereby
                            serving billions of people in their everyday transactions, no matter where they live. To put it
                            simply, Violas is an ecosystem to issue a stablecoin to serve a specific demographic by pegging
                            it 1:1 to that fiat currency. This is THE most important difference between Violas and Libra.
                          </p>
                        </div>
                        <div class="state">
                          <h3>3.1 The Origin of Violas Name</h3>
                          <p>From Wikipedia page for “viola” https://en.wikipedia.org/wiki/Viola, “The viola often plays the
                            "inner voices" in string quartets and symphonic writing, and it is more likely than the first
                            violin to play accompaniment parts.” These “inner voices” and “accompaniment parts” are the
                            primary reason we chose Violas as the name for our vision of Libra. Furthermore, the plural noun
                            emphasizes the diversity of local fiat currencies that Violas supports and the local regulations
                            and laws to which Violas adapts. We are not aiming to create one coin to be used everywhere, but
                            many coins to be used in their respective jurisdictions. This collective of coins are the “inner
                            voices” of a new digitized financial system. </p>
                          <h3>3.2 The Violas Vision</h3>
                          <p>The Violas vision is best illustrated by examining its contrasting approach to Libra and its
                            ability to address Libra’s above concerns and challenges:</p>
                          <p>1.Violas is not a single global currency. Instead, Violas offers communities the opportunity to
                            issue their own local cryptocurrency and back it with their local fiat currency at a 1:1 ratio.
                            This could result in having multiple offerings of the same local cryptocurrency from multiple
                            local communities for different local applications. Each offering may have its own rules and
                            purposes but use the same local digital currency with different applications. For example, each
                            commercial bank may issue its own financial application but still use the same local fiat
                            currency.</p>
                          <p>2.Violas offers 1:1 pegging of a local digital currency with the local fiat currency. This 1:1
                            pegging with the local fiat currency only requires permission from its local regulator. This
                            will significantly simplify the application process for the required licenses and reduce the
                            related application cost to the lowest level. Any local digital currency can be issued
                            regardless of their pegged fiat currency’s stability and exchangeability on the open market. Its
                            primary use is for a person’s everyday financial transactions. Of course, when someone wants to
                            exchange their local digital currency with another local digital currency pegged with another
                            local fiat currency, that person has to do it on the open market of exchange provided by the
                            Violas Association or others.</p>
                          <p>3.Violas lets the open market determine the exchange rate between two different local digital
                            currencies. Violas Association will provide an on-chain exchange of different local digital
                            currencies that provides authenticity, liquidity, transparency, real-time transaction, security,
                            low fees, etc.</p>
                          <p>4.Each Validator Node in the Violas Association functions with its own bylaws like an
                            individual state in the United States of America. All local digital currency issuers must submit
                            an application to the “state” which may approve or reject their application according to their
                            state’s bylaws. The Violas Association is a federation of all states.</p>
                          <p>5.Calibra Wallet is designed to integrate Facebook applications such as Messenger, Instagram,
                            and WhatsApp. Violas Wallet is designed to be integrated with any third party’s app. The
                            official Violas Wallet can be provided as OEM for third parties.</p>
                        </div>
                  </div>
                  <div className="introduction introduction4">
                    <h4>Part 4</h4>
                    <div class="intro">
                      <h2>4.The Violas Blockchain</h2>
                      <p>
                        The Violas Association is an ensemble of Bitcoin enthusiasts and followers of Satoshi Nakamoto’s
                        vision as outlined in the Bitcoin white paper. Violas’ mission is to bring Bitcoin into the
                        electronic cash system.
                      </p>
                    </div>
                    <div class="state">
                      <h3>4.1 Bitcoin</h3>
                      <p>The Violas blockchain will inherit the Bitcoin consensus built over the last eleven years by
                        using bitcoin (BTC) as its native coin and create Proof-of-Proof of Violas Database and
                        Proof-of-Reserve of Violas Reserve on the Bitcoin blockchain. Therefore, Violas is a natural
                        extension of Bitcoin. Currently, Proof-of-Proof has reached over 25% of total transactions on
                        the Bitcoin blockchain. Bitcoin is becoming the foundation for many other blockchain systems.
                        Similar to Bitcoin and Libra, Violas will use its native coin to manage the usage of its
                        computer capacity, i.e. its gas fee. This system is designed to have a very low fee under normal
                        conditions but will increase the fee when the system is experiencing high usage to reduce the
                        demand on the system. This is similar to Ethereum and Libra but at the lowest cost possible.</p>
                      <h3>4.2 Move Contract</h3>
                      <p>Because Bitcoin lacks a smart contract capability, Violas will use Move to build Local
                        Cryptocurrency Contracts deployable on the Violas blockchain. Compared to EVM and WASM, Move
                        provides the highest safety available for issuing Local Cryptocurrency Contracts from the Violas
                        blockchain. Violas is not for any general purpose smart contract but is primarily for issuing
                        local cryptocurrency contracts, i.e. stablecoin contracts that are pegged to a local fiat
                        currency at a 1:1 ratio and backed with the equal amount of local fiat currency from Violas
                        blockchain.</p>
                      <h3>4.3 BFT Consensus</h3>
                      <p>Violas will start with permissioned validator nodes and the LibraBFT consensus protocol. As the
                        Violas blockchain evolves, Violas may modify LibraBFT consensus protocol for the future needs of
                        the Violas blockchain. In the future, Violas will develop its own ViolasBFT consensus protocol.
                      </p>
                      <h3>4.4 Violas Data Structure</h3>
                      <p>Violas will start with the Libra Data Structure and its codebase written in Rust. In the
                        near-term, Violas blockchain will add necessary extra features on top of Libra Data Structure
                        while maintaining full compatibility with the latest release version of Libra. In the long-term,
                        Violas Data Structure will branch out of Libra Data Structure and its codebase, in particular,
                        in the area of Sharding based on the “State” and Layer 2 direct payment channel. This will bring
                        the TPS of the Violas blockchain to one million while keeping the transaction time at 1 second.
                      </p>
                    </div>

              </div>
                  <div className="introduction introduction5">
                        <h4>Part 5</h4>
                        <div class="intro">
                          <h2>5. The Violas Wallet, SDK and API</h2>
                          <p>Since Violas does not have native apps except for the official Violas Wallet, it will focus on
                            the development of the Violas SDK for third party apps and providing API’s for the third party
                            developers.</p>
                        </div>
                        <div class="state">
                          <h3>5.1 Violas Wallet</h3>
                          <p>Violas Wallet will start with the basic Calibra Wallet elements in the codebase. Since Calibra
                            is designed for integration with Facebook’s apps such as Messenger, Instagram, and WhatsApp, it
                            is inevitable that the Violas Wallet has started developing its own version of Violas Wallet
                            from the beginning. The Violas Association will partner with other open source communities to
                            continuously develop Violas Wallet. </p>
                          <h3>5.2 Violas Wallet SDK for Third Party Apps</h3>
                          <p>Since Violas Wallet is designed to be integrated within third party apps, it is more important
                            to design Violas Wallet as an SDK to be portable to Android, iOS, Web, Windows, Mac and Linux
                            systems. Violas Wallet will start development with a strategy partner’s app to test out the
                        integration with a third party app. Of course, all third party apps are welcome to join the
                        integration test with the Violas Wallet SDK. The Violas Wallet SDK will provide two interfaces
                        for third party apps to interact with its Local Currency Contract. One is a native interface
                        that will process data and directly call its Move Contract to execute user transactions. Another
                        is a light-weight interface to transfer user data to a more centralized service provider that
                        will process the user transaction.</p>
                      <h3>5.3 Violas Wallet Development API for Third Party Developers</h3>
                      <p>Violas Wallet will start with joint-development for its design and make it as easy as possible
                        for other open source communities to join the development process. Consequently, each module in
                        the Violas Wallet will be as isolated as possible and communicate only through published API.
                        Violas Association will adapt a code submission system similar to bitcoin_core and establish
                        three levels of testing environments: local test chain, integration test of master branch and
                        latest release version.</p>
                    </div>
                </div>
                  <div className="introduction introduction6">
                    <h4>Part 6</h4>
                    <div class="intro">
                      <h2>6. Bitcoin, local digital currencies and Reserves</h2>
                      <p>Violas will issue its native coin, vtoken, fully backed by bitcoin (BTC) through its 1:1
                        mapping vbtc on the Violas blockchain and exchangeable from Violas Association. This mapping is
                        necessary because end-users will only need deal with vtoken as a stablecoin. The primary purpose
                        of vtoken is to function as a gas fee to run Move Contracts and their transactions, yet at a
                        very low fee designed to encourage the spread of Move Contracts and the usage of local digital
                        currency transactions. For every single vtoken issued from Violas, one bitcoin (BTC) will be
                        locked into the Violas Reserve either through the Violas Investment Token from investors of a
                        given Validator Node (the stakeholders of a given node) or through the purchase from the
                        on-chain open exchange. Users of Violas can use their bitcoin (BTC) to purchase vtoken from
                        Violas’ on-chain open exchange. All investments and purchases of vtoken can be found in the
                        Bitcoin transactions. Bitcoin serves as the official auditor of vtoken issued on Violas
                        blockchain. The Proof-of-Reserve of local digital currency contracts will be provided by
                        well-known local licensed agencies. Their standard and regular audit reports will be recorded on
                        the Bitcoin blockchain with their digital signatures. It is important to note that Violas only
                        supports local digital currency contracts backed with equal amounts of local fiat currency.
                        Furthermore, all transaction data on Violas will be digitally signed by over two third majority
                        of Validator Nodes and its hash value will be stored on the Bitcoin blockchain everyday, i.e.
                        Proof-of-Proof.</p>
                    </div>
                    <div class="state">
                    </div>
                  </div>
                  <div className="introduction introduction7">
                        <h4>Part 7</h4>
                        <div class="intro">
                          <h2>7. The Violas Association</h2>
                          <p>
                            The Violas Association will begin with 3-4 Initial Founding Members and expand to 27 Founding
                            Members before the official launch and reach 100 founding members within a year. Each founding
                            member will own and operate an independent Validator Node through an investment of 100 bitcoin
                            (BTC) into the Violas Reserve. All financial return from the Violas Blockchain will be evenly
                            distributed among the members. New member applications will be reviewed and approved by the
                            majority of Violas Association members. All by-laws of Violas Association will need approval
                            from its majority of members. The Violas Association will initially use DECENTRALIZED CYBERSPACE
                            FOUNDATION LIMITED registered in Singapore and will register its official name as Violas
                            Association in Switzerland before expanding to 27 Founding Members. The Violas Association will
                            manage the Violas Reserve, outline the technical roadmap and development goals while the “state”
                            will authorize issuers of local digital currency, etc. The standard and regular audits of Violas
                            Association from a well-known licensed agent will be stored on the Bitcoin blockchain and
                            digitally signed by both agent and Association as Proof-of-Proof.
                          </p>
                    </div>
                  </div>
                  <div className="introduction introduction8">
                        <h4>Part 8</h4>
                        <div class="intro">
                          <h2>8. Get Involved</h2>
                          <p>
                            Since Violas blockchain and Violas Wallet are designed to be jointly developed with other open
                            source communities, Violas Association welcomes all open source developers and contributors to
                            join the development of Violas blockchain and Violas Wallet. The Association may financially
                            reward open source developers and contributors for their contributions. The Violas blockchain
                            and Violas Wallet will be open sourced under the Apache 2.0 Open Source License.
                          </p>
                          <p>The Association also encourages all organizations to apply to become a Founding Member.
                            Organizations may issue their own local digital currency on Violas.</p>
                    </div>
                  </div>
                  <div className="introduction introduction9">
                        <h4>Part 9</h4>
                        <div class="intro">
                          <h2>9. Conclusion</h2>
                          <p>This is the goal of Violas: to create a global ecosystem of stablecoins that enable local fiat
                            currency and local financial applications to adapt Libra’s blockchain technology in an effort to
                            serve billions of people in everyday transactions. All local digital currency issued from Violas
                            are backed by an equal amount of its corresponding local fiat currency. Consequently, a local
                            digital currency can be used equally to its local fiat currency without any additional
                            reference. This is fiat currency in the form of cryptocurrency with the modern advancements of
                            safety, security, transparency, real-time transaction speed, audited reserve, and low cost of
                            use built in. </p>
                          <p>Violas also encourages competition among local digital currencies. We believe more advanced
                            local digital currencies will emerge from competition through the process of natural selection
                            in accordance with Friedrich A. Hayek’s competing currency theory.</p>
                        </div>
                  </div>
                  </div>
                </div>
          </div>
        </section>
          <Footer></Footer>
        </div>
    );
  }
  
}

export default WhitePaper;

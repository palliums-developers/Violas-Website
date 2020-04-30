import React, { Component } from "react"
import "../style/IEEE_presentation.css"

class IEEE_presentation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            password: '',
            userData: '',
            err: ''
        }
    }
    componentWillMount() {
    }
    handleChange(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleClick() {
        let data = JSON.stringify({
            password: this.state.password,
        })

        let url = 'http://localhost:9002/getAllUserData'
        // fetch()
        //     .then(res => res.json())
        //     // .then(res => console.log(res.length))
        //     .then(res => this.setState({ userData: JSON.stringify(res) }))
        //     .catch(err => this.setState({ err: err }))
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(res => res.json())
            .then((res => this.setState({ userData: JSON.stringify(res) })))
            .catch(err => this.setState({ err: err }))
        document.getElementById('passwd').value = "";
    }
    render() {
        return (
            <div style={{ backgroundColor: " #F9F9F9 " }}>
                <p>Enter PassWord to check list</p>
                <input type="text" onChange={this.handleChange.bind(this)} defaultValue={this.state.password} id='passwd' />
                <button onClick={this.handleClick.bind(this)}>submit</button>
                {/* <p>{this.state.userData}</p> */}
                {
                    this.state.userData === '' ?
                        <></> :
                        <div className="checklist">
                            {JSON.parse(this.state.userData).map(item =>
                                <div className="checklist1">
                                    <p className="uid">{item.user_id}</p>
                                    <p>{item.last_name}</p>
                                    <p>{item.first_name}</p>
                                    <p>{item.company_name}</p>
                                    <p>{item.contact}</p>
                                    <p>{item.job_title}</p>
                                    <p>{item.business_sector}</p>
                                </div>)}
                        </div>
                }
            </div>
        )
    }
}
export default IEEE_presentation
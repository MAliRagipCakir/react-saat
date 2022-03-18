import React from 'react';
import './Saat.css';

class Saat extends React.Component {
    constructor(props) {
        // console.log("constructor..");
        super(props);
        this.state = { zaman: new Date() };
        // this.saatiGuncelle = this.saatiGuncelle.bind(this);      Yöntem 1
    }
    render() {
        // console.log("render..");
        return <div className="Saat">
            {this.state.zaman.toLocaleTimeString()}
        </div>
    }

    saatiGuncelle(){
        this.setState({ zaman: new Date() });
    }

    componentDidMount(){
        // console.log("componentDidMount..");
        // this.timerId = setInterval(this.saatiGuncelle, 1000);    Yöntem 1 (burdaki this metot içinde çağrıldığı için class'ı göstermez bunu constructor'da bağladık)
        this.timerId = setInterval(() => this.saatiGuncelle(), 1000);
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount..");
        clearInterval(this.timerId);
    }
}

export default Saat;
// "rfce" kısayolu ile function component oluşturur
import React, { useEffect, useState } from 'react';
import './Clock.css';

function Clock() {
    const [zaman, setZaman] = useState(new Date())

    //öyle bir hook'a ihtiyacımız var ki sadece bileşen ilk kez yaşamına başladıktan sonra bir defaya mahsus timer başlatalım  => useEffect  bu classdaki componentDidMount + componentUpdated + componentWillDismount 3'ününde işini karşılar
    //https://reactjs.org/docs/hooks-effect.html

    const guncelle = function () {
        console.log("güncelleniyor");
        setZaman(new Date());
    }


    useEffect(() => {
      console.log("burası sadece ilk render sonrası çalışır")
      const timerId = setInterval(guncelle, 1000);

      return (() => clearInterval(timerId));// useEffect'in kullanıldığı componentWillUnmount olurken çalışması istenen kısım return ile yazılır
    }, []);// componentDidMount 1 kere çalışsın istersek buraya boş dizi verilir []
    

    return (
        <div className="Clock">
            {zaman.toLocaleTimeString()}
        </div>
    );
}

export default Clock;
import React from 'react'

import '../styles/OrderPizza.css'
import Logo from '../../src/assets/logo.svg'

import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    const siparisVer = () => {
        history.push('/success');
    };

  return (
    <div className='order'>
        <header>
            <img className='logo' src={ Logo } alt="logo" />

            <nav>
                <ul className='nav'>
                    <li><a href="#">Anasayfa</a></li>
                    <li><a href="#">Seçenekler</a></li>
                    <li className='active'><a href="#">Sipariş Oluştur</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <br />
            <strong style={ { fontFamily:'Barlow' } }>Position Absolute Acı Pizza</strong>

            <div style={ { display:'flex',flexDirection:'row',alignItems:'center' } }>
                <div style={ { flex:10 } }>
                    <h2 style={ { fontFamily:'Barlow' } }>85.50 ₺</h2>
                </div>

                <div style={ { flex : 1 } }>4.9</div>
                <div style={ { flex : 1 } }>(200)</div>
            </div>

            <p style={ { fontFamily:'Barlow-Light',marginTop:0 } }>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

            <div style={ { display:'flex',flexDirection:'row' } }>
                <div style={ { flex:1 } }>
                    <h5 style={ { fontFamily:'Barlow' } }>Boyut Seç <span style={ { color:'#CE2829' } }>*</span></h5>
                    <label htmlFor="small"><input id="small" name="boyut" type="radio"/> Küçük</label>
                    <br />
                    <label htmlFor="medium"><input id="medium" name="boyut" type="radio"/> Orta</label>
                    <br />
                    <label htmlFor="large"><input id="large" name="boyut" type="radio"/> Büyük</label>
                </div>

                <div style={ { flex:1 } }>
                    <h5 style={ { fontFamily:'Barlow' } }>Hamur Seç <span style={ { color:'#CE2829' } }>*</span></h5>
                    <select>
                        <option disabled>Hamur Kalınlığı</option>
                        <option>İnce hamur</option>
                        <option>Klasik hamur</option>
                        <option>Kalın kenarlı hamur</option>
                    </select>
                </div>
            </div>


            <br /><br />
            <strong style={ { fontFamily:'Barlow' } }>Ek Malzemeler</strong>
            <p style={ { fontFamily:'Barlow-Light' } }>En fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div style={ { display:'flex',flexDirection:'row' } }>
                <div style={ { flex:1 } }>
                    
                    <label htmlFor="pepperoni">
                        <input type="checkbox" id="pepperoni" />
                        Pepperoni
                    </label>
                    <br /><br />

                    <label htmlFor="sosis">
                        <input type="checkbox" id="sosis" />
                        Sosis
                    </label>
                    <br /><br />

                    <label htmlFor="kj">
                        <input type="checkbox" id="kj" />
                        Kanada Jambonu
                    </label>
                    <br /><br />

                    <label htmlFor="ti">
                        <input type="checkbox" id="ti" />
                        Tavuk Izgara
                    </label>
                    <br /><br />

                    <label htmlFor="sogan">
                        <input type="checkbox" id="sogan" />
                        Soğan
                    </label>
                    <br /><br />
                </div>
                <div style={ { flex:1 } }>

                    <label htmlFor="domates">
                        <input type="checkbox" id="domates" />
                        Domates
                    </label>
                    <br /><br />

                    <label htmlFor="misir">
                        <input type="checkbox" id="misir" />
                        Mısır
                    </label>
                    <br /><br />

                    <label htmlFor="sucuk">
                        <input type="checkbox" id="sucuk" />
                        Sucuk
                    </label>
                    <br /><br />

                    <label htmlFor="jelapeno">
                        <input type="checkbox" id="jelapeno" />
                        Jelapeno
                    </label>
                    <br /><br />

                    <label htmlFor="sarimsak">
                        <input type="checkbox" id="sarimsak" />
                        Sarımsak
                    </label>
                    <br /><br />

                </div>
                <div style={ { flex:1 } }>
                    <label htmlFor="biber">
                        <input type="checkbox" id="biber" />
                        Biber
                    </label>
                    <br /><br />

                    <label htmlFor="sucuk2">
                        <input type="checkbox" id="sucuk2" />
                        Sucuk
                    </label>
                    <br /><br />

                    <label htmlFor="ananas">
                        <input type="checkbox" id="ananas" />
                        Ananas
                    </label>
                    <br /><br />

                    <label htmlFor="kabak">
                        <input type="checkbox" id="kabak" />
                        Kabak
                    </label>
                    <br /><br />
                </div>
            </div>

            <hr />
            
            <br />

            <strong style={ { fontFamily:'Barlow' } }>Sipariş Notu</strong>
            <br />
            <input style={ { boxSizing: 'border-box',padding: 20,paddingLeft:10,width:'100%',height:35, marginTop:6,borderRadius:6,borderColor:'#e2e2e2',borderStyle:'solid' } } type="text" placeholder='Siparişine eklemek istediğin bir not var mı?' />

            
            <br /><br /><br />

            <div style={ { display:'flex' } }>
                <div style={ { flex:1 } }>
                    <button className="btn-numeric btn-yellow" style={ { width:30,height:30,fontSize:20 } }>-</button>
                    <input type="text" style={ { width:30,fontSize:20, textAlign:'center',borderStyle:'none' } } value={1} />
                    <button className="btn-numeric btn-yellow" style={ { width:30,height:30,fontSize:20 } }>+</button>
                </div>

                <div style={ { flex : 1,borderStyle:'solid',borderWidth:1,borderColor:'#c6c6c6',padding:0,marginLeft:25 } }>
                    
                    <div style={ { padding:18 } }>
                        <strong style={ { fontFamily:'Barlow' } }>Sipariş Toplamı</strong>

                        <div style={ { display:'flex' } }>
                            <p style={ { flex : 1,fontFamily:'Barlow',color:'#5F5F5F',fontWeight:'bold',fontSize:13 } }>Seçimler</p>
                            <p style={ { marginBottom:0,fontFamily:'Barlow',color:'#5F5F5F',fontWeight:'bold',fontSize:13 } }>25.00₺</p>
                        </div>

                        <div style={ { display:'flex' } }>
                            <p style={ { marginTop:0,flex : 1,fontFamily:'Barlow',color:'#CE2829',fontWeight:'bold',fontSize:13 } }>Toplam</p>
                            <p style={ { marginTop:0,fontFamily:'Barlow',color:'#CE2829',fontWeight:'bold',fontSize:13 } }>110.50₺</p>
                        </div>

                    </div>
                    
                    <button onClick={ siparisVer } className="btn btn-yellow" style={ { borderRadius:0,width:'100%' } }>
                        Sipariş Ver
                    </button>
                </div>
            </div>
        </main>
    </div>
  )
}

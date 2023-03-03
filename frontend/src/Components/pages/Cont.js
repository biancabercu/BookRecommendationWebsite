import * as React from 'react';
import Footer from '../Footer';
import '../styles/Cont.css';
import Main from '../Main';
import { Button } from '../Button';
import { useTranslation } from "react-i18next";
import profil from '../Images/user_img.png'; 
import user1_img from '../Images/user1.jpg'; 
import user2_img from '../Images/user2.jpg'; 
import user3_img from '../Images/user3.png'; 
import bestseller from '../Images/best.png';
import top3 from'../Images/TOP.jpg';
import todo from'../Images/todo.jpg';
import pile from '../Images/pile3.png';
function Cont() {
    const { t } = useTranslation();

    return(
        <>
       
        <div className="event ">
        {localStorage.getItem('user_curent_name') == "user1" && 
                       <img  className="img1 mtop40" src={user1_img} alt="bookfest" />
                       
                   }
                     {localStorage.getItem('user_curent_name') == "user2" && 
                      <img  className="img1 mtop40" src={user2_img} alt="bookfest" />
                       
                   }
                     {localStorage.getItem('user_curent_name') == "user3" && 
                      <img  className="img1 mtop40" src={user3_img} alt="bookfest" />
                       
                   }

            
            <h1>{localStorage.getItem("user_curent_name")}</h1>
        </div>
        <div className="break_line mbot40"></div>
        {/* <div className="buton-event mtop40">
            <Button buttonStyle="btn--outline_red" url="/outdoor"> {t("vezi_evenimentul")}</Button>
        </div> */}
        <div className="top_box">
            <h1>BOOKS READ</h1>
            <img  className="img3 mtop40 mbot40" src={top3} alt="TOP" /><br></br>
           
            <div className="buton-event"> <Button buttonStyle="btn--outline_red" url="/profil"> {t("top_alegeri")}</Button></div>
            {localStorage.getItem('user_curent_name') == "user1" && 
                        <div>Recomandate pentru tine, {localStorage.getItem("user_curent_name")}
                        <strong>Cartile tale favorite au fost:</strong>
                         <ul className='mtop10 mbottom20'>
                            <li>"The Wedding", 5</li>
                            <li>"The Notebook", 5</li>
                            <li>"Nights in Rodanthe", 9</li>
                            <li>The Return of the King (The Lord of the Rings, Part 3), 2</li>
                            <li>"The Gift", 2</li>
                          </ul>
                          <strong>Sigur, iti vor placea: </strong>
                          <ul className='mtop10'>
                            <li>Nights in Rodanthe</li>
                            <li>The Guardian </li>
                            <li>Message in a Bottle  </li>
                            <li>The Rescue  </li>
                            <li>A Walk to Remember </li>
                            <li>Four Blind Mice </li>
                            <li>Sea Glass: A Novel  </li>
                            <li>Last Man Standing  </li>
                            
                          </ul>
                         </div>
                       
                   }
                     {localStorage.getItem('user_curent_name') == "user2" && 
                        <div>Recomandate pentru tine, {localStorage.getItem("user_curent_name")} 
                        <br>
                        </br><strong>Cartile tale favorite au fost:</strong>:
                         <ul className='mtop10 mbottom20'>
                            <li>A Walk to Remember, 10</li>
                            <li>The Notebook, 10</li>
                            <li>Bridget Jones's Diary, 9</li>
                            <li>The Return of the King (The Lord of the Rings, Part 3), 2</li>
                            <li>Lord of the Flies, 2</li>
                          </ul>
                          <strong className='mtop20'>Sigur, iti vor placea: </strong>
                          <ul className='mtop10'>
                            <li>The Rescue</li>
                            <li>Nights in Rodanthe </li>
                            <li>Message in a Bottle  </li>
                            <li>Bridget Jones: The Edge of Reason </li>
                            <li>The Guardian </li>
                            <li>The Wedding </li>
                            <li>The Gift    </li>
                            <li>Suzanne's Diary for Nicholas   </li>
                            
                          </ul></div>
                       
                   }
                     {localStorage.getItem('user_curent_name') == "user3" && 
                        <div><strong>Recomandate pentru tine, {localStorage.getItem("user_curent_name")}</strong> <br>
                        </br><strong>Cartile tale favorite au fost:</strong>
                         <ul className='mtop10 mbottom20'>
                            <li>The Lake House, 5</li>
                            <li>The Five People You Meet in Heaven, 5</li>
                            <li>Heart of the Sea (Irish Trilogy), 9</li>
                            <li>A Bend in the Road, 2</li>
                            <li>Last Man Standing, 2</li>
                          </ul>
                          <strong className='mtop20'>Sigur, iti vor placea: </strong>
                          <ul className='mtop10'>
                            <li>Tears of the Moon (Irish Trilogy)</li>
                            <li>Jewels of the Sun (Irish Trilogy) </li>
                            <li>Dance upon the Air (Three Sisters Island Trilogy)  </li>
                            <li>Heaven and Earth (Three Sisters Island Trilogy)  </li>
                            <li>Carolina Moon  </li>
                            <li>The Villa  </li>
                            <li>Three Fates    </li>
                            <li>Face the Fire (Three Sisters Island Trilogy)  </li>
                            
                          </ul>
                         </div>
                       
                   }

        </div>
        <div className="break_line mbot40"></div>
        <div className="bestseller_box">
            <h1>CURRENTLY READING</h1>
            <img  className="img2 mtop40 mbot40" src={pile} alt="bestseller" /><br></br>
           
            <div className="buton-event"> <Button buttonStyle="btn--outline_red" url="/bestsellers"> {t("descopera_bestseller")}</Button></div>
        </div>
        <div className="break_line mbot40"></div>
        <div className="bestseller_box">
            <h1>TO READ LIST</h1>
            <img  className="img2 mtop40 mbot40" src={todo} alt="bestseller" /><br></br>
           
            <div className="buton-event"> <Button buttonStyle="btn--outline_red" url="/bestsellers"> {t("descopera_bestseller")}</Button></div>
        </div>
        <Footer />

        </>
    )
}

export default Cont;
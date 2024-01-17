import { Button,Container,Col,Row } from 'react-bootstrap';
import { useState } from "react";

function Tic_tac_toe() {

    const [cnt,setcnt] = useState(0)
    const [btn1,setbtn1] = useState('');
    const [btn2,setbtn2] = useState('');
    const [btn3,setbtn3] = useState('');
    const [btn4,setbtn4] = useState('');
    const [btn5,setbtn5] = useState('');
    const [btn6,setbtn6] = useState('');
    const [btn7,setbtn7] = useState('');
    const [btn8,setbtn8] = useState('');
    const [btn9,setbtn9] = useState('');

    const btnone = () => {
        if (btn1=='') {
            if (cnt % 2 == 0) {
                setbtn1('X')
            } else {
                setbtn1('0')
            }
            setcnt(cnt + 1)
        }
    }
    const btntwo = () => {
        if (btn2=='') {
            if (cnt % 2 == 0) {
                setbtn2('X')
            } else {
                setbtn2('0')
            }
            setcnt(cnt + 1)
        }
    }
    const btnthree = () => {
        if (btn3=='') {
            if (cnt % 2 == 0) {
                setbtn3('X')
            } else {
                setbtn3('0')
            }
            setcnt(cnt + 1)
        }
    }
    
    const btnfour = () => {
        if (btn4=='') {
            if (cnt % 2 == 0) {
                setbtn4('X')
            } else {
                setbtn4('0')
            }
            setcnt(cnt + 1)
        }
    }
    
    const btnfive = () => {
        if (btn5=='') {
            if (cnt % 2 == 0) {
                setbtn5('X')
            } else {
                setbtn5('0')
            }
            setcnt(cnt + 1)
        }
    }
    
    const btnsix = () => {
        if (btn6=='') {
            if (cnt % 2 == 0) {
                setbtn6('X')
            } else {
                setbtn6('0')
            }
            setcnt(cnt + 1)
        }
    }
    
    const btnseven = () => {
        if (btn7=='') {
            if (cnt % 2 == 0) {
                setbtn7('X')
            } else {
                setbtn7('0')
            }
            setcnt(cnt + 1)
        }
    }
    
    const btneight = () => {
        if (btn8=='') {
            if (cnt % 2 == 0) {
                setbtn8('X')
            } else {
                setbtn8('0')
            }
            setcnt(cnt + 1)
        }
    }
    
    const btnnine = () => {
        if (btn9=='') {
            if (cnt % 2 == 0) {
                setbtn9('X')
            } else {
                setbtn9('0')
            }
            setcnt(cnt + 1)
        }
    }

    const reset = () => {
        setbtn1("")
        setbtn2("")
        setbtn3("")
        setbtn4("")
        setbtn5("")
        setbtn6("")
        setbtn7("")
        setbtn8("")
        setbtn9("")
        setcnt(0)
    }


    if (btn1 == "X" && btn2 == "X" && btn3 == "X" || btn3 == "X" && btn5 == "X" && btn7 == "X" || btn7 == "X" && btn8 == "X" && btn9 == "X" || btn3 == "X" && btn6 == "X" && btn9 == "X" || btn2 == "X" &&  btn5 == "X" && btn8 == "X" || btn4 == "X" && btn5 == "X" & btn6 == "X" || btn1 == "X" && btn4 == "X" && btn7 == "X" || btn1 == "X" && btn5 == "X" && btn9 == "X") {
        alert("x is Winner");
    }
    else if (btn1 == "0" && btn2 == "0" && btn3 == "0" || btn3 == "0" && btn5 == "0" && btn7 == "0" || btn7 == "0" && btn8 == "0" && btn9 == "0" || btn3 == "0" && btn6 == "0" && btn9 == "0" || btn2 == "0" &&  btn5 == "0" && btn8 == "0" || btn4 == "0" && btn5 == "0" & btn6 == "0" || btn1 == "0" && btn4 == "0" && btn7 == "0" || btn1 == "0" && btn5 == "0" && btn9 == "0") {
        alert("0 is Winner");
    }
    else if (cnt == 9){
        alert("game is over");
    }
    else{}





    return(
        <>
      <Container>
            <div className='row justify-content-center mt-5'>
                <div className='col-lg-6 fs-2 fw-bold'>Tic Tac Toe</div>
            </div>

           <div className='row mt-5'>
                <div className='col'>
                    <div className='row justify-content-center mb-2'>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btnone()}>{btn1}</Button>
                        </div>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btntwo()}>{btn2}</Button>
                        </div>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btnthree()}>{btn3}</Button>
                        </div>
                    </div>

                    <div className='row justify-content-center mb-2'>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btnfour()}>{btn4}</Button>
                        </div>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btnfive()}>{btn5}</Button>
                        </div>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btnsix()}>{btn6}</Button>
                        </div>
                    </div>

                    <div className='row justify-content-center mb-2'>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btnseven()}>{btn7}</Button>
                        </div>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btneight()}>{btn8}</Button>
                        </div>
                        <div className='col-auto'>
                           <Button className='button btn-light shadow border fs-2' onClick={() => btnnine()}>{btn9}</Button>
                        </div>
                    </div>
                </div>
           </div>

           <div className='row justify-content-center mt-5'>
                <div className='col-auto'>
                    <Button className='btn btn-primary fs-5' onClick={() => reset()}>Restart</Button>
                </div>
            </div>

      </Container>

        </>
    )
    
}
export default Tic_tac_toe
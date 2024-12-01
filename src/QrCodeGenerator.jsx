import {QRCodeSVG} from 'qrcode.react';
import {useState} from "react";
import './qrCodeGenerator.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    console.log(value)

    const onClickHandler = () => {
        setResult(value);
        setValue('');
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }



    return (
        <div className={'container'}>

            <input
                className={'input'}
                type={'text'}
                placeholder={'Enter QR Code'}
                value={value}
                onChange={onChangeHandler}
            />
            <button
                className={'button'}
                type={"button"}
                onClick={onClickHandler}
            >Generate QR</button>

            {result !== '' && (
            <div className={'qrWrapper'}>
                <QRCodeSVG value={result} size={200}/>
            </div>

        )}
        </div>

    )
}
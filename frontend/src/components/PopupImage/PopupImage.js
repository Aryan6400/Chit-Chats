import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { changePopupImage, togglePopup } from '../../Features/popupImageSlice';
import "./PopupImage.css";
import { useState } from 'react';

const ImagePopup = () => {
    const dispatch = useDispatch();
    const [picture, setPicture] = useState();
    const [picUrl, setPicUrl] = useState();
    const [isLoading, setLoading] = useState(false);

    const { popup, popupImage } = useSelector((state) => state.popup);
    const closeModal = () => {
        dispatch(togglePopup());
        dispatch(changePopupImage(""));
    };

    const changeProfile = async (e) => {
    //     if (!picture) {
    //         return;
    //     }
    //     setLoading(true);
    //     const data = new FormData();
    //     data.append("file", picture);
    //     data.append("upload_preset", "Coride Chat");
    //     data.append("cloud_name", "dfj3rhjvl");
    //     fetch("https://api.cloudinary.com/v1_1/dfj3rhjvl/image/upload", {
    //         method: "POST",
    //         body: data,
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPicUrl(data.url.toString());
    //             setLoading(false);
    //         }).catch(error => {
    //             console.log(error);
    //             setLoading(false);
    //         })
    //     const userInfo = JSON.parse(localStorage.getItem("user"));
    //     const picData = {
    //         picture: picUrl
    //     }
    //     try {
    //         const response = await fetch("http://localhost:8080/profile", {
    //             method: "PATCH",
    //             cache: "no-cache",
    //             credentials: "same-origin",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${userInfo.token}`
    //             },
    //             redirect: "follow",
    //             referrerPolicy: "no-referrer",
    //             body: JSON.stringify(picData),
    //         });
    //         const result = await response.json();
    //         // 
    //     } catch (error) {
    //         console.log(error);
    //     }
    }

    return (
        <div>
            <Modal
                isOpen={popup}
                onRequestClose={closeModal}
                style={{
                    content: {
                        width: '60%',
                        height: '70%',
                        margin: 'auto',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                }}
            >
                <img className='modal-image' src={popupImage} alt='Profile Picture' />
                <div className='change-profile-pic-div'>
                    <input type='file' accept='image/*' onChange={e => setPicture(e.target.files[0])} />
                    <button onClick={changeProfile}>
                        Submit
                    </button>
                </div>
            </Modal>
        </div>
    );
};
export default ImagePopup;
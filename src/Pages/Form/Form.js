import React, { useState } from 'react';
import '../Form/Form.css';
import defaultImg from '../../image/defaultImg.PNG';

const Form = () => {

    const [selectedImage, setSelectedImage] = useState([]);
    const [inputList, setInputList] = useState([]);

    const Input = () => {
        return (<form className="row gx-5 gy-5">

            <div className="col-md-6">
                <input type="text" className="form-control border border-primary rounded-pill" id="name" placeholder='Name of organization' />
            </div>

            <div className="col-md-6">
                <select className="form-select border border-primary rounded-pill" aria-label="Default select example">
                    <option defaultValue="Type of industry">Type of industry</option>
                    <option value="1">Banking</option>
                    <option value="2">IT</option>
                    <option value="3">Apparel Manufacturing</option>
                    <option value="4">Other</option>
                </select>
            </div>

            <div className="col-md-6">
                <input type="text" className="form-control border border-primary rounded-pill" id="position" placeholder='Position' />
            </div>

            <div className="col-md-6">
                <select className="form-select border border-primary rounded-pill" aria-label="Default select example">
                    <option defaultValue="Employment type">Employment type</option>
                    <option value="1">Permanent</option>
                    <option value="2">Contractual</option>
                    <option value="3">Other</option>
                </select>
            </div>

            <div className="col-md-6" style={{ marginTop: '1.7rem' }}>
                <div className="row gx-5">

                    <div className="col">
                        <label htmlFor="from" className="form-label ms-3">From</label>
                        <input type="date" className="form-control border border-primary rounded-pill" aria-label="From" />
                    </div>

                    <div className="col">
                        <label htmlFor="to" className="form-label ms-3">To</label>
                        <input type="date" className="form-control border border-primary rounded-pill" aria-label="To" />
                    </div>

                </div>
            </div>

            <div className="d-flex justify-content-between w-100 mb-5 col-auto">

                <div className="form-check">
                    <input className="form-check-input border border-primary" type="checkbox" id="autoSizingCheck" />
                    <label className="form-check-label" htmlFor="autoSizingCheck">
                        I'm currently employed here
                    </label>
                </div>
            </div>
        </form>);
    };

    const onAddBtnClick = event => {
        event.preventDefault();
        setInputList(inputList.concat(<Input key={inputList.length} />));
    };

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imageArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setSelectedImage(imageArray);
    };

    return (
        <div className='container'>

            <h1 className='fw-bold mt-2 mb-4'>Work Experience</h1>

            <form className="row gx-5 gy-5">

                <div className="col-md-6">
                    <input type="text" className="form-control border border-primary rounded-pill" id="name" placeholder='Name of organization' />
                </div>

                <div className="col-md-6">
                    <select className="form-select border border-primary rounded-pill" aria-label="Default select example">
                        <option defaultValue="Type of industry">Type of industry</option>
                        <option value="1">Banking</option>
                        <option value="2">IT</option>
                        <option value="3">Apparel Manufacturing</option>
                        <option value="4">Other</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <input type="text" className="form-control border border-primary rounded-pill" id="position" placeholder='Position' />
                </div>

                <div className="col-md-6">
                    <select className="form-select border border-primary rounded-pill" aria-label="Default select example">
                        <option defaultValue="Employment type">Employment type</option>
                        <option value="1">Permanent</option>
                        <option value="2">Contractual</option>
                        <option value="3">Other</option>
                    </select>
                </div>

                <div className="col-md-6" style={{ marginTop: '1.7rem' }}>
                    <div className="row gx-5">

                        <div className="col">
                            <label htmlFor="from" className="form-label ms-3">From</label>
                            <input type="date" className="form-control border border-primary rounded-pill" aria-label="From" />
                        </div>

                        <div className="col">
                            <label htmlFor="to" className="form-label ms-3">To</label>
                            <input type="date" className="form-control border border-primary rounded-pill" aria-label="To" />
                        </div>

                    </div>
                </div>

                <div className="d-flex justify-content-between w-100 col-auto">

                    <div className="form-check">
                        <input className="form-check-input border border-primary" type="checkbox" id="autoSizingCheck" />
                        <label className="form-check-label" htmlFor="autoSizingCheck">
                            I'm currently employed here
                        </label>
                    </div>

                    <div>
                        {inputList}
                    </div>

                    <div className="col-auto">
                        <button type="submit" onClick={onAddBtnClick} className="btn btn-primary px-5 rounded-3"><i className="fa-solid fa-plus me-2"></i>Add</button>
                    </div>

                </div>
            </form>

            <h1 className='fw-bold mt-5 mb-5'>Upload Photo</h1>

            <div className='d-flex align-items-center mt-4'>

                <div className='ms-lg-5'>
                    {selectedImage &&
                        selectedImage.map((image, index) => {
                            return (
                                <div key={index}>
                                    <img src={image} alt="" id='imgPreview' />
                                </div>
                            );
                        })}

                    :

                    <div>
                        <img src={defaultImg} alt="" id="imgFile" />
                    </div>

                </div>

                <div className='ms-3'>
                    <label htmlFor="filePicker" className='btn-fileget'>
                        Upload my photo
                    </label>
                    <input id="filePicker" type={"file"} name="image" onChange={onSelectFile} style={{ visibility: "hidden" }}>
                    </input>
                </div>

            </div>
        </div>
    );
};

export default Form;